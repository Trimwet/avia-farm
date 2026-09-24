import { createFileRoute } from '@tanstack/react-router'
import { Shield, Target, Eye, Award, Users, Sprout } from 'lucide-react'
import { BRAND } from '@/config/brand'

export const Route = createFileRoute('/_public/about')({
  component: AboutPage,
})

/** Field rows in perspective — used in place of a stock photograph. */
function FieldArt() {
  return (
    <div className='relative aspect-4/3 overflow-hidden rounded-2xl border border-border shadow-2xl'>
      <div
        aria-hidden
        className='absolute inset-0 bg-[linear-gradient(160deg,#3f5136_0%,#5f7a4e_40%,#9a6b54_75%,#d97757_100%)]'
      />
      <svg
        aria-hidden
        className='absolute inset-0 h-full w-full opacity-30'
        viewBox='0 0 800 600'
        preserveAspectRatio='xMidYMid slice'
      >
        {Array.from({ length: 15 }).map((_, index) => (
          <line
            key={index}
            x1={400}
            y1={190}
            x2={-400 + index * 120}
            y2={600}
            stroke='#FAF9F5'
            strokeWidth={2}
          />
        ))}
        <line
          x1={0}
          y1={190}
          x2={800}
          y2={190}
          stroke='#FAF9F5'
          strokeWidth={3}
        />
      </svg>
      <div className='absolute inset-x-0 bottom-0 flex items-center gap-3 bg-[rgba(20,20,19,0.55)] px-6 py-4 backdrop-blur-sm'>
        <Sprout aria-hidden className='size-5 text-[#FAF9F5]' />
        <p className='text-sm font-medium text-[#FAF9F5]'>
          Built with growers, crews and agronomists
        </p>
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <div className='pb-24'>
      {/* Hero */}
      <section className='bg-muted/40 py-24'>
        <div className='mx-auto max-w-6xl px-4 sm:px-6'>
          <div className='max-w-3xl'>
            <p className='mb-2 text-xs font-semibold tracking-widest text-primary uppercase'>
              About {BRAND.name}
            </p>
            <h1 className='mb-4 font-manrope text-4xl leading-tight font-bold tracking-tight sm:text-5xl'>
              Built for the people who{' '}
              <span className='text-primary'>work the land</span>
            </h1>
            <p className='text-lg leading-relaxed text-muted-foreground sm:text-xl'>
              {BRAND.name} is {BRAND.tagline.toLowerCase()} software: growers
              request a visit, the farm approves it, and everyone works from one
              live board — no phone tag, no paper diary, no guessing who is
              coming out.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className='mx-auto max-w-6xl px-4 py-24 sm:px-6'>
        <div className='grid grid-cols-1 items-center gap-16 lg:grid-cols-2'>
          <div>
            <h2 className='mb-8 font-manrope text-3xl font-semibold tracking-tight sm:text-4xl'>
              From one block to a whole season
            </h2>
            <div className='space-y-6 text-lg leading-relaxed text-muted-foreground'>
              <p>
                We started with a simple observation: the hardest part of a farm
                visit is rarely the visit itself — it is the arranging. A request
                scribbled on a pad, a missed call, a crew arriving to a gate
                nobody opened.
              </p>
              <p>
                {BRAND.name} puts the request, the approval, the season calendar
                and the work queue in one place, so a grower always knows what is
                happening and the crew always knows what is next.
              </p>
              <div className='grid grid-cols-2 gap-4 pt-6'>
                <div className='rounded-2xl border border-border bg-card p-5 shadow-sm'>
                  <div className='flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                    <Users className='size-5' />
                  </div>
                  <div className='mt-3 text-2xl font-bold text-foreground'>
                    One board
                  </div>
                  <div className='text-xs font-semibold tracking-wider text-muted-foreground uppercase'>
                    For growers, crew and agronomists
                  </div>
                </div>
                <div className='rounded-2xl border border-border bg-card p-5 shadow-sm'>
                  <div className='flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                    <Sprout className='size-5' />
                  </div>
                  <div className='mt-3 text-2xl font-bold text-foreground'>
                    Under a minute
                  </div>
                  <div className='text-xs font-semibold tracking-wider text-muted-foreground uppercase'>
                    To request a field visit
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <FieldArt />
            <div className='absolute -bottom-8 -left-8 hidden rounded-2xl border border-border bg-card p-6 shadow-lg md:block'>
              <div className='mb-1 text-4xl font-bold text-primary'>Free</div>
              <div className='text-xs font-semibold tracking-wider text-muted-foreground uppercase'>
                Single-farm plan
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className='bg-muted/40 py-20'>
        <div className='mx-auto max-w-6xl px-4 sm:px-6'>
          <p className='mb-2 text-center text-xs font-semibold tracking-widest text-primary uppercase'>
            Why {BRAND.name}
          </p>
          <h2 className='mb-4 text-center font-manrope text-2xl font-semibold tracking-tight sm:text-3xl'>
            What we optimise for
          </h2>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
            {[
              {
                icon: Shield,
                title: 'Consistency',
                desc: 'Every block and every visit handled the same documented way.',
              },
              {
                icon: Target,
                title: 'Precision',
                desc: 'Right block, right agronomist, right day — recorded once.',
              },
              {
                icon: Eye,
                title: 'Transparency',
                desc: 'Growers and crew watch exactly the same live queue.',
              },
              {
                icon: Award,
                title: 'Standards',
                desc: 'Records that stand up to audits and buyer checks.',
              },
              {
                icon: Users,
                title: 'Crew first',
                desc: 'Built with field crews and agronomists, not around them.',
              },
              {
                icon: Sprout,
                title: 'Stewardship',
                desc: 'Fewer wasted trips means fewer wasted inputs.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className='rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/30'
              >
                <div className='mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                  <Icon className='size-5' />
                </div>
                <h3 className='font-manrope font-semibold tracking-tight'>
                  {title}
                </h3>
                <p className='mt-1.5 text-sm text-muted-foreground'>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
