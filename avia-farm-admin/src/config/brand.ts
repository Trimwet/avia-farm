/**
 * Single source of truth for AVIA FARM identity.
 *
 * Anything a user can read the product name from should pull it from here
 * rather than hard-coding a string, so a future rename (or a white-label
 * build) touches one file.
 */

export const BRAND = {
  /** Full product name — titles, sidebar, marketing copy. */
  name: 'AVIA FARM',
  /** Short form for tight spaces. */
  short: 'AVIA',
  /** One-line description of what the product is. */
  tagline: 'Field & Farm Operations',
  /** Second line of the sidebar lockup / app switcher. */
  plan: 'Field Operations',
  /** Placeholder domain used by demo accounts and public contact details. */
  domain: 'aviafarm.ng',
  /** Public website shown in the marketing footer. */
  website: 'https://aviafarm.ng',
  /** Public contact addresses shown in the marketing footer / contact page. */
  supportEmail: 'hello@aviafarm.ng',
  infoEmail: 'info@aviafarm.ng',
} as const
