import { Link } from '@tanstack/react-router'
import { Globe, MessageCircle, Mail } from 'lucide-react'
import { Logo } from '@/assets/logo'
import { BRAND } from '@/config/brand'

const quickLinks = [
  { to: '/doctors', label: 'Our Agronomists' },
  { to: '/about', label: 'About Us' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
  { to: '/book', label: 'Field Visit Request' },
]

const growerLinks = [
  { to: '/book', label: 'Request a field visit' },
  { to: '/sign-up', label: 'Create an account' },
  { to: '/sign-in', label: 'Sign in' },
]

const socials = [
  { icon: Globe, label: 'Website', href: BRAND.website },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/2348000000000' },
]

export function Footer() {
  return (
    <footer className='border-t border-border bg-card py-12'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='grid gap-10 sm:grid-cols-2 md:grid-cols-4'>
          {/* Brand */}
          <div className='space-y-4'>
            <Link to='/' aria-label={`${BRAND.name} home`}>
              <Logo className='h-8' />
            </Link>
            <p className='text-sm leading-relaxed text-muted-foreground'>
              Field visit requests, a season calendar and one live work queue
              for the whole farm.
            </p>
            <div className='flex gap-3'>
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={label}
                  className='flex size-8 items-center justify-center rounded-full bg-muted/60 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary'
                >
                  <Icon className='size-4' />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-manrope text-sm font-semibold tracking-tight'>
              Quick Links
            </h4>
            <ul className='mt-3 flex flex-col gap-2 text-sm text-muted-foreground'>
              {quickLinks.map((link) => (
                <li key={link.to + link.label}>
                  <Link to={link.to} className='transition-colors hover:text-foreground'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For growers */}
          <div>
            <h4 className='font-manrope text-sm font-semibold tracking-tight'>
              For Growers
            </h4>
            <ul className='mt-3 flex flex-col gap-2 text-sm text-muted-foreground'>
              {growerLinks.map((link) => (
                <li key={link.to + link.label}>
                  <Link to={link.to} className='transition-colors hover:text-foreground'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='font-manrope text-sm font-semibold tracking-tight'>
              Contact Us
            </h4>
            <ul className='mt-3 flex flex-col gap-3 text-sm text-muted-foreground'>
              <li className='flex items-center gap-2'>
                <Mail className='size-4 shrink-0 text-primary' />
                <span>{BRAND.supportEmail}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground'>
          &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
