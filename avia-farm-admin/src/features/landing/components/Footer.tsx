import { Link } from '@tanstack/react-router'
import { Logo } from '@/assets/logo'
import { BRAND } from '@/config/brand'

const exploreLinks = [
  { to: '/doctors', label: 'Our Agronomists' },
  { to: '/about', label: 'About Us' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
  { to: '/book', label: 'Field Visit Request' },
] as const

const growerLinks = [
  { to: '/book', label: 'Request a field visit' },
  { to: '/sign-up', label: 'Create an account' },
  { to: '/sign-in', label: 'Sign in' },
] as const

const contactLinks = [
  { href: `mailto:${BRAND.supportEmail}`, label: BRAND.supportEmail },
  { href: BRAND.website, label: 'Website', external: true },
  { href: 'https://wa.me/2348000000000', label: 'WhatsApp', external: true },
] as const

function FootHeading({ children }: { children: string }) {
  return (
    <h4 className='mb-4 font-manrope text-[13px] font-semibold tracking-[0.09em] uppercase text-muted-foreground'>
      {children}
    </h4>
  )
}

export function Footer() {
  return (
    <footer className='border-t border-border/70 bg-background pt-16 pb-10'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8'>
          {/* Brand */}
          <div className='max-w-[280px]'>
            <Link to='/' aria-label={`${BRAND.name} home`} className='inline-block'>
              <Logo className='h-8' />
            </Link>
            <p className='mt-3.5 text-[15px] leading-relaxed text-muted-foreground'>
              Field visit requests, a season calendar and one live work queue
              for the whole farm.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label='Explore'>
            <FootHeading>Explore</FootHeading>
            <ul>
              {exploreLinks.map((link) => (
                <li key={link.to + link.label} className='mb-2.5'>
                  <Link
                    to={link.to}
                    className='text-[15px] text-foreground/80 transition-colors hover:text-foreground hover:underline hover:underline-offset-4'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* For growers */}
          <nav aria-label='For growers'>
            <FootHeading>For Growers</FootHeading>
            <ul>
              {growerLinks.map((link) => (
                <li key={link.to + link.label} className='mb-2.5'>
                  <Link
                    to={link.to}
                    className='text-[15px] text-foreground/80 transition-colors hover:text-foreground hover:underline hover:underline-offset-4'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <FootHeading>Contact</FootHeading>
            <ul>
              {contactLinks.map((link) => (
                <li key={link.label} className='mb-2.5'>
                  <a
                    href={link.href}
                    {...('external' in link && link.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className='break-all text-[15px] text-foreground/80 transition-colors hover:text-foreground hover:underline hover:underline-offset-4'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-14 flex flex-wrap justify-between gap-2.5 border-t border-border/70 pt-6 text-[13.5px] text-muted-foreground'>
          <span>
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </span>
          <span>Grown with patience.</span>
        </div>
      </div>
    </footer>
  )
}
