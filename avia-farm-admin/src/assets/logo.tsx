import { cn } from '@/lib/utils'
import { BRAND } from '@/config/brand'
import { useTheme } from '@/context/theme-provider'

export function Logo({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { theme } = useTheme()
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <img
      src={isDark ? '/images/avia-logo-dark.png' : '/images/avia-logo.png'}
      alt={BRAND.name}
      className={cn('h-10 w-auto object-contain', className)}
      {...props}
    />
  )
}
