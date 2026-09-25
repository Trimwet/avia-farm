import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Sonder-style reveal-on-scroll: fades content up as it enters the viewport.
 * Respects prefers-reduced-motion by rendering fully visible immediately.
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const el = ref.current
    if (!el || shown) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [shown])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-500 ease-out motion-reduce:transition-none',
        shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
