import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import NumberFlow from '@number-flow/react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Reveal } from './reveal'

type Plan = {
  name: string
  description: string
  monthly: number
  yearly: number
  features: string[]
  cta: string
  to: '/create-clinic'
  search: { plan: 'free' | 'starter' | 'professional' | 'enterprise' }
  featured?: boolean
}

const plans: Plan[] = [
  {
    name: 'Free',
    description: 'Try AVIA FARM on a single farm',
    monthly: 0,
    yearly: 0,
    features: ['2 crew seats', '1 farm', '50 field visits / mo', 'Basic work queue'],
    cta: 'Start free',
    to: '/create-clinic',
    search: { plan: 'free' },
  },
  {
    name: 'Starter',
    description: 'Perfect for a single farm getting organised',
    monthly: 15000,
    yearly: 12000,
    features: [
      'Up to 5 crew seats',
      '1 farm',
      'Field visit requests & approvals',
      'Season calendar',
      'In-app notifications',
    ],
    cta: 'Choose Starter',
    to: '/create-clinic',
    search: { plan: 'starter' },
  },
  {
    name: 'Professional',
    description: 'For farms running several blocks and crews',
    monthly: 50000,
    yearly: 40000,
    features: [
      'Unlimited crew seats',
      'Up to 5 farms',
      'Full analytics dashboard',
      'Email & SMS notifications',
      'Role-based access control',
    ],
    cta: 'Start 14-day trial',
    to: '/create-clinic',
    search: { plan: 'professional' },
    featured: true,
  },
  {
    name: 'Enterprise',
    description: 'Custom deployments for large agribusinesses',
    monthly: 150000,
    yearly: 120000,
    features: [
      'Unlimited everything',
      'Multi-farm management',
      'Custom integrations & API',
      'Dedicated support & SLA',
      'On-premise deployment option',
    ],
    cta: 'Contact sales',
    to: '/create-clinic',
    search: { plan: 'enterprise' },
  },
]

export function PricingSection() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly')
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<Record<'monthly' | 'yearly', HTMLButtonElement | null>>({
    monthly: null,
    yearly: null,
  })
  const [thumb, setThumb] = useState({ x: 0, w: 0 })

  const measure = useCallback(() => {
    const btn = buttonRefs.current[billing]
    const container = containerRef.current
    if (!btn || !container) return
    const b = btn.getBoundingClientRect()
    const c = container.getBoundingClientRect()
    setThumb({ x: b.left - c.left, w: b.width })
  }, [billing])

  useLayoutEffect(measure, [measure])

  useLayoutEffect(() => {
    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [measure])

  return (
    <section id='pricing' className='bg-foreground py-24 text-background'>
      <div className='mx-auto max-w-4xl px-6'>
        <Reveal className='text-center'>
          <h2 className='font-serif text-4xl font-normal tracking-tight text-balance sm:text-5xl'>
            Plans that grow with your farm
          </h2>
          <p className='mx-auto mt-3 max-w-xl text-background/70'>
            No trials that expire. No tiers that punish you for growing.
          </p>

          {/* Segmented billing toggle with sliding thumb */}
          <div
            ref={containerRef}
            role='group'
            aria-label='Billing period'
            className='relative mt-8 inline-flex items-center rounded-full border border-background/25 p-1'
          >
            <span
              aria-hidden
              className='absolute inset-y-1 left-0 rounded-full bg-background shadow-sm transition-[transform,width] duration-300 ease-out motion-reduce:transition-none'
              style={{ transform: `translateX(${thumb.x}px)`, width: `${thumb.w}px` }}
            />
            {(['monthly', 'yearly'] as const).map((period) => (
              <button
                key={period}
                ref={(el) => {
                  buttonRefs.current[period] = el
                }}
                type='button'
                onClick={() => setBilling(period)}
                aria-pressed={billing === period}
                className={cn(
                  'relative z-10 cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300',
                  billing === period
                    ? 'text-foreground'
                    : 'text-background/60 hover:text-background',
                )}
              >
                {period === 'monthly' ? 'Monthly' : 'Yearly'}
                {period === 'yearly' && (
                  <span
                    className={cn(
                      'ms-2 text-xs font-semibold transition-colors duration-300',
                      billing === 'yearly'
                        ? 'text-primary'
                        : 'text-primary/50',
                    )}
                  >
                    Save 20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <div className='mt-12 grid gap-6 sm:grid-cols-2'>
          {plans.map((plan) => (
            <Reveal key={plan.name} className='h-full'>
              <div
                className={cn(
                  'flex h-full flex-col rounded-xl p-8',
                  plan.featured
                    ? 'bg-background text-foreground shadow-2xl'
                    : 'border border-background/20',
                )}
              >
                <div
                  className={cn(
                    'text-[13px] font-semibold tracking-[0.09em] uppercase',
                    plan.featured ? 'text-primary' : 'text-background/50',
                  )}
                >
                  {plan.name}
                </div>
                <p
                  className={cn(
                    'mt-1.5 text-sm',
                    plan.featured ? 'text-foreground/60' : 'text-background/60',
                  )}
                >
                  {plan.description}
                </p>

                <div className='mt-6 font-serif text-5xl leading-none tracking-tight'>
                  <span className='align-top text-2xl leading-[1.6]'>₦</span>
                  <NumberFlow
                    value={billing === 'monthly' ? plan.monthly : plan.yearly}
                  />
                  <span
                    className={cn(
                      'ms-2 font-sans text-base font-medium tracking-normal',
                      plan.featured
                        ? 'text-foreground/50'
                        : 'text-background/50',
                    )}
                  >
                    /mo{billing === 'yearly' && ' billed yearly'}
                  </span>
                </div>

                <ul className='mt-8 flex-1'>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        'border-t py-2.5 text-[15px]',
                        plan.featured
                          ? 'border-foreground/10 text-foreground/70'
                          : 'border-background/15 text-background/70',
                      )}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={cn(
                    'mt-8 w-full rounded-full border py-2.5',
                    plan.featured
                      ? 'border-foreground bg-foreground text-background hover:border-primary hover:bg-primary hover:text-primary-foreground'
                      : 'border-background/60 bg-transparent text-background shadow-none hover:bg-background/10 hover:text-background',
                  )}
                >
                  <Link to={plan.to} search={plan.search}>
                    {plan.cta}
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
