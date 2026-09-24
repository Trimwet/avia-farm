/**
 * One-time storage migration for the MediQ → AVIA FARM rename.
 *
 * Every persisted value used to live under a `mediq_*` / `mediq-*` key. The
 * namespace is now `avia_*` / `avia-*`. Readers go through these helpers so a
 * returning user keeps their session, booked-visit history, facility profile
 * and Google Calendar tokens instead of being silently reset to empty state.
 *
 * The fallback is read-only: the first read copies the legacy value forward,
 * so the migration completes itself the next time anything is written.
 */

const CURRENT_PREFIX = 'avia'
const LEGACY_PREFIX = 'mediq'

/**
 * The MediQ-era name of an AVIA FARM key, or null when the key was never
 * brand-namespaced (`avia_user` → `mediq_user`, `avia-accent` → `mediq-accent`).
 */
export function legacyKeyName(key: string): string | null {
  return key.startsWith(CURRENT_PREFIX)
    ? key.replace(CURRENT_PREFIX, LEGACY_PREFIX)
    : null
}

/**
 * `localStorage.getItem` with a one-time read-through from the MediQ-era key.
 * Falls back gracefully when storage is unavailable (SSR, private mode, quota).
 */
export function getItemMigrated(key: string): string | null {
  if (typeof localStorage === 'undefined') return null
  try {
    const current = localStorage.getItem(key)
    if (current !== null) return current
    const legacy = legacyKeyName(key)
    if (!legacy) return null
    const inherited = localStorage.getItem(legacy)
    if (inherited === null) return null
    try {
      localStorage.setItem(key, inherited)
    } catch {
      // Quota / private mode — still return the value we read.
    }
    return inherited
  } catch {
    return null
  }
}

/** Removes both the current and the MediQ-era key (used on sign-out / reset). */
export function removeItemMigrated(key: string): void {
  if (typeof localStorage === 'undefined') return
  try {
    localStorage.removeItem(key)
    const legacy = legacyKeyName(key)
    if (legacy) localStorage.removeItem(legacy)
  } catch {
    // ignore storage errors
  }
}
