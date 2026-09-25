import { Link } from '@tanstack/react-router'
import { ArrowRight, CalendarCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from './components/reveal'
import { PricingSection } from './components/pricing-section'

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <header className='mx-auto w-full max-w-3xl px-6 pt-24 pb-20 text-center sm:pt-32'>
      <Reveal>
        <span className='inline-block rounded-full border border-primary/60 px-4 py-1.5 text-[13px] font-semibold tracking-[0.06em] text-primary uppercase'>
          Field &amp; Farm Operations
        </span>
        <h1 className='mt-6 font-serif text-5xl leading-[1.12] font-normal tracking-tight text-balance sm:text-6xl lg:text-7xl'>
          Every field, every visit, one board.
        </h1>
        <p className='mx-auto mt-5 max-w-xl text-lg text-muted-foreground'>
          AVIA FARM is the quiet operating system for farm work — growers
          request a visit in under a minute, and the whole crew works from one
          live queue and season calendar.
        </p>
        <div className='mt-9 flex flex-wrap items-center justify-center gap-5'>
          <Button size='lg' className='h-12 rounded-full px-8 text-base' asChild>
            <Link to='/book'>
              <CalendarCheck />
              Request a field visit
            </Link>
          </Button>
          <a
            href='#how'
            className='text-[15px] font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline'
          >
            See how it works
          </a>
        </div>
        <p className='mt-6 text-sm text-muted-foreground/80'>
          No sign-up needed to request a visit — just pick a farm and a time.
        </p>
      </Reveal>
    </header>
  )
}

/* -------------------------------------------------------------------------- */
/*  Feature strip — numbered hairline grid                                     */
/* -------------------------------------------------------------------------- */

const stripItems = [
  {
    num: '01 — FIELD REQUESTS',
    title: 'Under a minute, no account',
    text: 'Growers pick the farm, the agronomist and the day from any device. The request lands as pending — no forms in triplicate, no waiting for a call back.',
  },
  {
    num: '02 — LIVE WORK QUEUE',
    title: 'Everyone sees the same board',
    text: 'Position, status and wait time update the moment anything changes — for the grower at home and the crew in the yard, at once.',
  },
  {
    num: '03 — SEASON CALENDAR',
    title: 'The whole season, planned',
    text: 'Visits across every block and crew on one shared calendar, so the week is arranged once instead of improvised daily.',
  },
]

function FeatureStrip() {
  return (
    <section className='border-y border-border'>
      <div className='mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0'>
        {stripItems.map((item) => (
          <Reveal key={item.num} className='px-8 py-10'>
            <div className='text-[13px] font-semibold tracking-[0.09em] text-primary'>
              {item.num}
            </div>
            <h3 className='mt-3 font-serif text-2xl font-normal tracking-tight'>
              {item.title}
            </h3>
            <p className='mt-2.5 text-[15px] leading-relaxed text-muted-foreground'>
              {item.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Editorial dark — the one rule                                              */
/* -------------------------------------------------------------------------- */

function Editorial() {
  return (
    <section className='bg-foreground py-24 text-background'>
      <div className='mx-auto max-w-3xl px-6 text-center'>
        <Reveal>
          <div className='text-sm tracking-[0.09em] text-primary uppercase'>
            The one rule
          </div>
          <blockquote className='mt-7 font-serif text-3xl leading-[1.3] font-normal text-balance sm:text-4xl'>
            &ldquo;Nothing reaches the work queue before the farm approves
            it.&rdquo;
          </blockquote>
          <p className='mx-auto mt-6 max-w-xl text-[17px] text-background/70'>
            Self-service requests arrive as pending. A person — not an
            algorithm — assigns the agronomist and confirms the day. Growers
            trust the board because everything on it is real work, scheduled by
            real people.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Steps — Roman numerals, hairline rows                                      */
/* -------------------------------------------------------------------------- */

const steps = [
  {
    numeral: 'I',
    title: 'Request',
    text: 'A grower sends a field visit request in under a minute, from any device. No blank forms, no account wall, no waiting for a call back.',
  },
  {
    numeral: 'II',
    title: 'Approve',
    text: 'The farm reviews the request and assigns an agronomist and a day. Only confirmed visits ever reach the queue.',
  },
  {
    numeral: 'III',
    title: 'Work the field',
    text: 'The crew works the live board — check-in, call next, complete — and the grower is notified as the visit moves. No chasing, no radio calls.',
  },
]

function Steps() {
  return (
    <section id='how' className='mx-auto w-full max-w-4xl px-6 py-24'>
      <Reveal>
        <h2 className='text-center font-serif text-3xl font-normal tracking-tight sm:text-4xl'>
          From request to field, in three steps
        </h2>
      </Reveal>
      <div className='mt-14 border-b border-border'>
        {steps.map((step) => (
          <Reveal key={step.numeral}>
            <div className='grid grid-cols-[70px_1fr] items-baseline gap-5 border-t border-border py-9 sm:grid-cols-[90px_1fr] sm:gap-7'>
              <div className='font-serif text-4xl text-primary'>
                {step.numeral}
              </div>
              <div>
                <h3 className='font-serif text-2xl font-normal tracking-tight'>
                  {step.title}
                </h3>
                <p className='mt-2 max-w-xl text-[15px] leading-relaxed text-muted-foreground'>
                  {step.text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Audiences — 2×2 hairline grid                                              */
/* -------------------------------------------------------------------------- */

const audiences = [
  {
    num: '01',
    eyebrow: 'For growers',
    title: 'Request without the phone tag',
    text: 'Pick a farm, an agronomist and a time in under a minute — then follow the request from pending to booked, live.',
    cta: 'Request a field visit',
    to: '/book',
  },
  {
    num: '02',
    eyebrow: 'For farm crew',
    title: 'The whole farm on one screen',
    text: 'Approve requests, check people in and call the next job from a live board every crew shares.',
    cta: 'Sign in to the dashboard',
    to: '/sign-in',
  },
  {
    num: '03',
    eyebrow: 'For farms',
    title: 'One rhythm, every block',
    text: 'Onboard a crew in minutes, name every shed, block and store once, and give each block the same dependable service.',
    cta: 'Set up your farm',
    to: '/create-clinic',
  },
  {
    num: '04',
    eyebrow: 'For managers',
    title: 'Decide with real data',
    text: 'Visit history, wait times and crew activity across the farm — plan the season on evidence, not memory.',
    cta: 'Open the dashboard',
    to: '/sign-in',
  },
]

function Audiences() {
  return (
    <section className='bg-muted/40 py-24'>
      <div className='mx-auto max-w-5xl px-6'>
        <Reveal className='mx-auto max-w-2xl text-center'>
          <h2 className='font-serif text-3xl font-normal tracking-tight sm:text-4xl'>
            One platform, everyone on the farm
          </h2>
          <p className='mt-3 text-muted-foreground sm:text-lg'>
            One system for growers, crew, agronomists and managers — the same
            truth on every screen.
          </p>
        </Reveal>
        <div className='mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2'>
          {audiences.map((audience) => (
            <Reveal key={audience.num} className='bg-background p-8'>
              <div className='flex items-baseline justify-between gap-4'>
                <span className='text-[13px] font-semibold tracking-[0.09em] text-primary uppercase'>
                  {audience.eyebrow}
                </span>
                <span className='font-serif text-xl text-muted-foreground/50'>
                  {audience.num}
                </span>
              </div>
              <h3 className='mt-3 font-serif text-2xl font-normal tracking-tight'>
                {audience.title}
              </h3>
              <p className='mt-2 text-[15px] leading-relaxed text-muted-foreground'>
                {audience.text}
              </p>
              <Link
                to={audience.to}
                className='mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium underline-offset-4 transition-colors hover:text-primary hover:underline'
              >
                {audience.cta}
                <ArrowRight className='size-4' />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Testimonial                                                                */
/* -------------------------------------------------------------------------- */

function Testimonial() {
  return (
    <section className='mx-auto w-full max-w-3xl px-6 py-24 text-center'>
      <Reveal>
        <blockquote className='font-serif text-2xl leading-[1.35] font-normal text-balance sm:text-3xl'>
          &ldquo;We used to lose requests in WhatsApp. Now every visit is on the
          board before the crew boots the truck — and growers can see it
          too.&rdquo;
        </blockquote>
        <cite className='mt-5 block text-[15px] text-muted-foreground not-italic'>
          — Farm manager, Nasarawa State
        </cite>
      </Reveal>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Final CTA                                                                  */
/* -------------------------------------------------------------------------- */

function FinalCta() {
  return (
    <section className='border-t border-border py-24 text-center'>
      <div className='mx-auto max-w-2xl px-6'>
        <Reveal>
          <h2 className='font-serif text-4xl leading-[1.15] font-normal tracking-tight text-balance sm:text-5xl'>
            The next visit starts with one request.
          </h2>
          <div className='mt-9 flex flex-wrap items-center justify-center gap-5'>
            <Button size='lg' className='h-12 rounded-full px-8 text-base' asChild>
              <Link to='/book'>
                <CalendarCheck />
                Request a field visit
              </Link>
            </Button>
            <Link
              to='/sign-up'
              className='text-[15px] font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline'
            >
              Create an account
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export function Landing() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <Editorial />
      <Steps />
      <Audiences />
      <PricingSection />
      <Testimonial />
      <FinalCta />
    </>
  )
}
