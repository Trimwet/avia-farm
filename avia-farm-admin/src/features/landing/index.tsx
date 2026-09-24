import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  Activity,
  ArrowRight,
  BellRing,
  CalendarCheck,
  Check,
  Droplets,
  LineChart,
  ListOrdered,
  Lock,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Sprout,
  Sun,
  Tractor,
  User,
  UserCheck,
  Warehouse,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PricingSection } from './components/pricing-section'

/* -------------------------------------------------------------------------- */
/*  Decorative floating icon helper                                            */
/* -------------------------------------------------------------------------- */

function FloatIcon({
  icon: Icon,
  className,
}: {
  icon: typeof Sprout
  className?: string
}) {
  return (
    <Icon
      aria-hidden='true'
      className={cn(
        'animate-icon-pulse pointer-events-none absolute',
        className
      )}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*  Hero + Stats strip                                                         */
/* -------------------------------------------------------------------------- */

const heroStats = [
  { value: '1 board', label: 'Season calendar + work queue' },
  { value: '< 1 min', label: 'To request a field visit' },
  { value: 'Live', label: 'Field and crew status' },
  { value: 'Alerts', label: 'In-app notifications' },
]

/**
 * Hero backdrop: field rows converging on the horizon, drawn in SVG over a
 * warm gradient. Keeping it as CSS/SVG art means the landing page ships no
 * hero photo and stays inside the brand palette in both themes.
 */
function HeroBackdrop() {
  const ROWS = 21

  return (
    <>
      <div
        aria-hidden
        className='absolute inset-0 -z-10 bg-[linear-gradient(165deg,#3f5136_0%,#5f7a4e_38%,#9a6b54_72%,#d97757_100%)]'
      />
      <svg
        aria-hidden
        className='absolute inset-0 -z-10 h-full w-full opacity-25'
        viewBox='0 0 1200 620'
        preserveAspectRatio='xMidYMid slice'
      >
        {Array.from({ length: ROWS }).map((_, index) => (
          <line
            key={index}
            x1={600}
            y1={200}
            x2={-600 + index * 120}
            y2={620}
            stroke='#FAF9F5'
            strokeWidth={2}
          />
        ))}
        <line
          x1={0}
          y1={200}
          x2={1200}
          y2={200}
          stroke='#FAF9F5'
          strokeWidth={3}
        />
      </svg>
      <div
        aria-hidden
        className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(20,20,19,0.55)_0%,rgba(20,20,19,0.35)_45%,rgba(20,20,19,0.68)_100%)]'
      />
    </>
  )
}

function Hero() {
  return (
    <section className='relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden'>
      <HeroBackdrop />
      <div className='mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 pt-24 pb-12 text-center sm:px-6 sm:pt-32'>
        <h1 className='max-w-2xl font-manrope text-4xl leading-tight font-bold tracking-tight text-[#FAF9F5] sm:text-5xl'>
          Every field, every visit, one board
        </h1>
        <p className='mt-4 max-w-2xl text-base text-[#EDE9E0] sm:text-lg'>
          Growers request a field visit in under a minute. Crews and
          agronomists work from the same live queue, season calendar and alert
          feed — so nobody walks a field twice.
        </p>
        <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
          <Button size='lg' asChild>
            <Link to='/book'>
              <CalendarCheck />
              Request a field visit
            </Link>
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white'
            asChild
          >
            <Link to='/sign-up'>Create an account</Link>
          </Button>
        </div>
        <p className='mt-6 text-sm text-[#D9D4C7]'>
          No sign-up needed to request a visit — just pick a farm and a time.
        </p>
      </div>

      {/* Stats strip */}
      <div className='border-t border-border bg-card'>
        <div className='mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border md:grid-cols-4'>
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className='flex flex-col items-center gap-1 px-4 py-8 text-center'
            >
              <span className='font-manrope text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
                {stat.value}
              </span>
              <span className='text-xs font-semibold tracking-wider text-muted-foreground uppercase sm:text-sm'>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Shared components                                                          */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className='mx-auto max-w-2xl text-center'>
      <h2 className='font-manrope text-2xl font-bold tracking-tight sm:text-3xl'>
        {title}
      </h2>
      <p className='mt-2 text-sm text-muted-foreground sm:text-base'>
        {description}
      </p>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Who it is for — interactive role explorer                                  */
/* -------------------------------------------------------------------------- */

type Role = {
  id: string
  icon: typeof User
  eyebrow: string
  tagline: string
  headline: string
  description: string
  points: { title: string; text: string }[]
  cta: { label: string; to: '/book' | '/sign-in' | '/sign-up' | '/create-clinic' }
}

const roles: Role[] = [
  {
    id: 'growers',
    icon: User,
    eyebrow: 'For growers',
    tagline: 'Request a visit from any device',
    headline: 'No more phone tag with the farm office',
    description:
      'Request a field visit in under a minute, pick the farm and the day, and follow the request from pending to booked — no account required.',
    points: [
      {
        title: 'Request in under a minute',
        text: 'Choose a farm, an agronomist and a time without creating an account.',
      },
      {
        title: 'Follow it live',
        text: 'See each request move from pending to booked to out in the field.',
      },
      {
        title: 'Know when the crew comes',
        text: 'Get notified the moment a visit is confirmed — no chasing.',
      },
    ],
    cta: { label: 'Request a field visit', to: '/book' },
  },
  {
    id: 'crew',
    icon: MessageSquare,
    eyebrow: 'For farm crew',
    tagline: 'Run the day from one board',
    headline: 'The whole farm on one screen',
    description:
      'Approve visit requests, call the next job and move work through the queue from a single live board.',
    points: [
      {
        title: 'Approve requests in one click',
        text: 'Accept or decline a field visit and it lands in the queue immediately.',
      },
      {
        title: 'Live work queue',
        text: 'See who is waiting, who is in the field and how long they have waited.',
      },
      {
        title: 'Season calendar',
        text: 'Plan the week on one calendar shared by growers and crew.',
      },
    ],
    cta: { label: 'Sign in to the dashboard', to: '/sign-in' },
  },
  {
    id: 'farms',
    icon: LineChart,
    eyebrow: 'For farms',
    tagline: 'Standardise across blocks and crews',
    headline: 'One rhythm, every block',
    description:
      'Onboard a crew in minutes, name every shed, block and store once, and give every block the same dependable service.',
    points: [
      {
        title: 'Fast onboarding',
        text: 'Add crew, agronomists, equipment and stores in minutes.',
      },
      {
        title: 'Service metrics',
        text: 'Track visits completed and wait times across the farm.',
      },
      {
        title: 'Consistent records',
        text: 'The same clean record for every block and every visit.',
      },
    ],
    cta: { label: 'Set up your farm', to: '/create-clinic' },
  },
  {
    id: 'managers',
    icon: Activity,
    eyebrow: 'For farm managers',
    tagline: 'Decide with real data',
    headline: 'Full visibility, sound decisions',
    description:
      'Watch field visits, queue flow and crew activity in real time, control what each role sees, and plan the season from one dashboard.',
    points: [
      {
        title: 'Real-time view',
        text: 'Monitor field visits, queue flow and agronomist activity live.',
      },
      {
        title: 'Role-based access',
        text: 'Admins, crew and agronomists see exactly what their role needs.',
      },
      {
        title: 'Plan the season',
        text: 'Use visit history and wait times to plan the weeks ahead.',
      },
    ],
    cta: { label: 'Open the admin dashboard', to: '/sign-in' },
  },
]

function UnifiedPlatform() {
  const [activeId, setActiveId] = useState(roles[0].id)

  // Auto-rotate through the roles; a manual click resets the timer.
  useEffect(() => {
    const currentIndex = roles.findIndex((role) => role.id === activeId)
    const nextId = roles[(currentIndex + 1) % roles.length].id
    const timer = setTimeout(() => setActiveId(nextId), 4000)
    return () => clearTimeout(timer)
  }, [activeId])

  return (
    <section id='platform' className='bg-muted/40 py-16 sm:py-20'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <Tabs
          value={activeId}
          onValueChange={setActiveId}
          orientation='vertical'
          className='grid gap-10 lg:grid-cols-5 lg:items-start lg:gap-16'
        >
          {/* Left rail: heading + role switcher */}
          <div className='lg:col-span-2'>
            <p className='text-xs font-semibold tracking-widest text-primary uppercase'>
              One platform
            </p>
            <h2 className='mt-2 font-manrope text-2xl font-bold tracking-tight sm:text-3xl'>
              A unified platform
            </h2>
            <p className='mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base'>
              One system for everyone on the farm — growers, crew, agronomists
              and managers.
            </p>
            <TabsList className='mt-8 h-auto w-full flex-col items-stretch gap-1.5 rounded-xl bg-transparent p-0'>
              {roles.map((role) => (
                <TabsTrigger
                  key={role.id}
                  value={role.id}
                  className='h-auto flex-none justify-start gap-3 rounded-lg px-3 py-2.5 text-left data-[state=active]:bg-card data-[state=active]:shadow-sm'
                >
                  <span className='flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary'>
                    <role.icon className='size-4' />
                  </span>
                  <span className='flex min-w-0 flex-col'>
                    <span className='text-sm font-semibold'>
                      {role.eyebrow}
                    </span>
                    <span className='truncate text-xs text-muted-foreground'>
                      {role.tagline}
                    </span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Right: detail panel */}
          <div className='lg:col-span-3'>
            {roles.map((role) => (
              <TabsContent key={role.id} value={role.id} className='group mt-0'>
                <div className='relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm group-data-[state=active]:animate-in group-data-[state=active]:duration-500 group-data-[state=active]:fade-in group-data-[state=active]:slide-in-from-right-4 sm:p-9'>
                  <div
                    aria-hidden
                    className='pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,color-mix(in_oklab,var(--primary)_10%,transparent)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_60%)] [background-size:20px_20px]'
                  />
                  <div className='relative'>
                    <div className='flex items-center gap-3'>
                      <span className='flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary'>
                        <role.icon className='size-5' />
                      </span>
                      <div>
                        <p className='text-xs font-semibold tracking-wider text-muted-foreground uppercase'>
                          {role.eyebrow}
                        </p>
                        <p className='text-sm font-medium'>{role.tagline}</p>
                      </div>
                    </div>
                    <h3 className='mt-6 font-manrope text-xl font-bold tracking-tight sm:text-2xl'>
                      {role.headline}
                    </h3>
                    <p className='mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base'>
                      {role.description}
                    </p>
                    <ul className='mt-7 space-y-4'>
                      {role.points.map((point) => (
                        <li
                          key={point.title}
                          className='flex items-start gap-3'
                        >
                          <span className='mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary'>
                            <Check className='size-3' />
                          </span>
                          <div>
                            <p className='text-sm font-semibold'>
                              {point.title}
                            </p>
                            <p className='text-sm text-muted-foreground'>
                              {point.text}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <Button className='mt-8' asChild>
                      <Link to={role.cta.to}>
                        {role.cta.label}
                        <ArrowRight />
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  How it works — 3 steps                                                     */
/* -------------------------------------------------------------------------- */

function Step({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof User
  title: string
  description: string
}) {
  return (
    <div className='flex flex-col items-center text-center'>
      <span className='flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20'>
        <Icon className='size-6' />
      </span>
      <h3 className='mt-5 font-manrope text-lg font-semibold tracking-tight'>
        {title}
      </h3>
      <p className='mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground'>
        {description}
      </p>
    </div>
  )
}

function HowItWorks() {
  return (
    <section id='how' className='relative overflow-hidden py-16 sm:py-20'>
      {/* Light rhombus backdrop with forward line angles */}
      <svg
        aria-hidden='true'
        viewBox='0 0 800 800'
        className='pointer-events-none absolute top-1/2 left-1/2 w-[min(720px,92vw)] -translate-x-1/2 -translate-y-1/2 text-primary'
        fill='none'
      >
        {/* outer rhombus — acute angles pointing left/right (forward) */}
        <polygon
          points='70,400 400,70 730,400 400,730'
          stroke='currentColor'
          strokeOpacity='0.08'
          strokeWidth='1.5'
        />
        {/* inner rhombus */}
        <polygon
          points='175,400 400,175 625,400 400,625'
          stroke='currentColor'
          strokeOpacity='0.08'
          strokeWidth='1.5'
        />
        {/* forward-pointing angle lines (chevrons) */}
        <polyline
          points='285,355 325,400 285,445'
          stroke='currentColor'
          strokeOpacity='0.1'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <polyline
          points='365,355 405,400 365,445'
          stroke='currentColor'
          strokeOpacity='0.1'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <polyline
          points='445,355 485,400 445,445'
          stroke='currentColor'
          strokeOpacity='0.1'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <FloatIcon
        icon={Droplets}
        className='bottom-[15%] left-[4%] size-8 -rotate-12 opacity-40'
      />
      <FloatIcon
        icon={Sprout}
        className='top-[12%] right-[5%] size-7 rotate-[30deg] opacity-40'
      />
      <div className='relative mx-auto max-w-6xl px-4 sm:px-6'>
        <SectionHeading
          title='How it works'
          description='From request to field visit — three steps, no uncertainty.'
        />
        <div className='mt-12 grid gap-10 md:grid-cols-3'>
          <Step
            icon={CalendarCheck}
            title='Step 1: Request a visit'
            description='Send a field visit request in under a minute, from any device, with no account needed.'
          />
          <Step
            icon={ShieldCheck}
            title='Step 2: Farm approves'
            description='The farm reviews the request, assigns an agronomist and confirms a day — only confirmed visits reach the queue.'
          />
          <Step
            icon={BellRing}
            title='Step 3: Out in the field'
            description='Crew work the live board and the grower is notified as the visit moves along — no chasing.'
          />
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Built for the field — real product surfaces                                */
/* -------------------------------------------------------------------------- */

const farmFeatures = [
  {
    icon: ListOrdered,
    title: 'Live work queue',
    text: 'Growers and crew watch the same real-time queue — position, status and estimated wait time, updated the moment anything changes.',
  },
  {
    icon: UserCheck,
    title: 'Crew check-in',
    text: 'Arrivals and walk-ins are checked in from one board. The queue updates instantly for everyone — no radio calls across the yard.',
  },
  {
    icon: ShieldCheck,
    title: 'Requests with approval',
    text: 'Self-service requests arrive as pending. The farm approves, assigns an agronomist, and only confirmed visits reach the queue.',
  },
  {
    icon: Lock,
    title: 'Role-based access',
    text: 'Admins, crew and agronomists each get a workspace scoped to their role — everyone sees exactly what they need, nothing more.',
  },
]

function FarmFloor() {
  return (
    <section
      id='farm-floor'
      className='relative overflow-hidden py-16 sm:py-20'
    >
      {/* Faceted crystal / geometric lattice backdrop — 26+ elements */}
      <svg
        aria-hidden='true'
        className='pointer-events-none absolute -top-16 -left-24 w-[min(900px,95vw)] text-primary'
        viewBox='0 0 800 800'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {/* ── Core diamonds (3 nested, rotated) ── */}
        <polygon
          points='400,80 620,400 400,720 180,400'
          stroke='currentColor'
          strokeWidth='1.2'
          strokeOpacity='0.10'
        />
        <polygon
          points='400,120 580,400 400,680 220,400'
          stroke='currentColor'
          strokeWidth='0.8'
          strokeOpacity='0.06'
          transform='rotate(22.5 400 400)'
        />
        <polygon
          points='400,140 560,400 400,660 240,400'
          stroke='currentColor'
          strokeWidth='1'
          strokeOpacity='0.08'
          transform='rotate(45 400 400)'
        />

        {/* ── Hexagons (outer + inner rotated) ── */}
        <polygon
          points='400,100 600,210 600,590 400,700 200,590 200,210'
          stroke='currentColor'
          strokeWidth='0.8'
          strokeOpacity='0.07'
        />
        <polygon
          points='400,200 520,260 520,540 400,600 280,540 280,260'
          stroke='currentColor'
          strokeWidth='0.7'
          strokeOpacity='0.05'
          transform='rotate(30 400 400)'
        />

        {/* ── 12 radiating spokes from core ── */}
        <line
          x1='480'
          y1='400'
          x2='750'
          y2='400'
          stroke='currentColor'
          strokeWidth='0.5'
          strokeOpacity='0.06'
        />
        <line
          x1='469'
          y1='335'
          x2='712'
          y2='257'
          stroke='currentColor'
          strokeWidth='0.5'
          strokeOpacity='0.06'
        />
        <line
          x1='440'
          y1='280'
          x2='650'
          y2='130'
          stroke='currentColor'
          strokeWidth='0.5'
          strokeOpacity='0.06'
        />
        <line
          x1='400'
          y1='320'
          x2='400'
          y2='50'
          stroke='currentColor'
          strokeWidth='0.5'
          strokeOpacity='0.06'
        />
        <line
          x1='360'
          y1='280'
          x2='150'
          y2='130'
          stroke='currentColor'
          strokeWidth='0.5'
          strokeOpacity='0.06'
        />
        <line
          x1='331'
          y1='335'
          x2='88'
          y2='257'
          stroke='currentColor'
          strokeWidth='0.5'
          strokeOpacity='0.06'
        />
        <line
          x1='320'
          y1='400'
          x2='50'
          y2='400'
          stroke='currentColor'
          strokeWidth='0.5'
          strokeOpacity='0.06'
        />
        <line
          x1='331'
          y1='465'
          x2='88'
          y2='543'
          stroke='currentColor'
          strokeWidth='0.5'
          strokeOpacity='0.05'
        />
        <line
          x1='360'
          y1='520'
          x2='150'
          y2='670'
          stroke='currentColor'
          strokeWidth='0.5'
          strokeOpacity='0.05'
        />
        <line
          x1='400'
          y1='480'
          x2='400'
          y2='750'
          stroke='currentColor'
          strokeWidth='0.5'
          strokeOpacity='0.05'
        />
        <line
          x1='440'
          y1='520'
          x2='650'
          y2='670'
          stroke='currentColor'
          strokeWidth='0.5'
          strokeOpacity='0.05'
        />
        <line
          x1='469'
          y1='465'
          x2='712'
          y2='543'
          stroke='currentColor'
          strokeWidth='0.5'
          strokeOpacity='0.05'
        />

        {/* ── Triangle pair (star-of-david overlap) ── */}
        <polygon
          points='400,160 520,480 280,480'
          stroke='currentColor'
          strokeWidth='0.7'
          strokeOpacity='0.06'
        />
        <polygon
          points='400,640 520,320 280,320'
          stroke='currentColor'
          strokeWidth='0.7'
          strokeOpacity='0.05'
        />

        {/* ── Octagon (rotated 15°) ── */}
        <polygon
          points='400,140 510,190 560,300 560,500 510,610 400,660 290,610 240,500 240,300 290,190'
          stroke='currentColor'
          strokeWidth='0.6'
          strokeOpacity='0.05'
          transform='rotate(15 400 400)'
        />

        {/* ── 4 satellite accent diamonds ── */}
        <polygon
          points='260,260 310,310 260,360 210,310'
          stroke='currentColor'
          strokeWidth='0.8'
          strokeOpacity='0.10'
        />
        <polygon
          points='540,440 590,490 540,540 490,490'
          stroke='currentColor'
          strokeWidth='0.8'
          strokeOpacity='0.10'
        />
        <polygon
          points='540,260 575,295 540,330 505,295'
          stroke='currentColor'
          strokeWidth='0.6'
          strokeOpacity='0.07'
        />
        <polygon
          points='260,440 295,475 260,510 225,475'
          stroke='currentColor'
          strokeWidth='0.6'
          strokeOpacity='0.07'
        />

        {/* ── Angular X cross (whisper lines) ── */}
        <line
          x1='200'
          y1='200'
          x2='600'
          y2='600'
          stroke='currentColor'
          strokeWidth='0.5'
          strokeOpacity='0.04'
        />
        <line
          x1='600'
          y1='200'
          x2='200'
          y2='600'
          stroke='currentColor'
          strokeWidth='0.5'
          strokeOpacity='0.04'
        />

        {/* ── Centre micro-diamond fill (barely there) ── */}
        <polygon
          points='400,370 430,400 400,430 370,400'
          stroke='currentColor'
          strokeWidth='0.6'
          strokeOpacity='0.08'
          fill='currentColor'
          fillOpacity='0.03'
        />
      </svg>

      <FloatIcon
        icon={Tractor}
        className='right-[6%] bottom-[18%] size-9 rotate-[15deg] opacity-40'
      />
      <FloatIcon
        icon={Warehouse}
        className='top-[10%] right-[10%] size-7 -rotate-[20deg] opacity-40'
      />

      <div className='relative mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <div>
            <p className='text-xs font-semibold tracking-widest text-primary uppercase'>
              The platform
            </p>
            <h2 className='mt-2 font-manrope text-2xl font-bold tracking-tight sm:text-3xl'>
              Built for the field
            </h2>
            <p className='mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base'>
              Every feature below is live in AVIA FARM — designed around how
              farms actually run, from the first request to the walk through the
              block.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <Button size='lg' asChild>
                <Link to='/book'>
                  <CalendarCheck />
                  See it in action
                </Link>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <Link to='/doctors'>Meet our agronomists</Link>
              </Button>
            </div>
          </div>
          <ul className='space-y-4'>
            {farmFeatures.map((feature) => (
              <li
                key={feature.title}
                className='flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40'
              >
                <span className='flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                  <feature.icon className='size-5' />
                </span>
                <div>
                  <h3 className='font-manrope text-base font-semibold tracking-tight'>
                    {feature.title}
                  </h3>
                  <p className='mt-1 text-sm leading-relaxed text-muted-foreground'>
                    {feature.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  CTA banner                                                                 */
/* -------------------------------------------------------------------------- */

function CTA() {
  return (
    <section className='relative bg-muted/40 py-20 sm:py-24'>
      <FloatIcon
        icon={Sun}
        className='top-8 left-[6%] size-8 rotate-45 opacity-30'
      />
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12'>
          <div
            aria-hidden
            className='pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,color-mix(in_oklab,white_25%,transparent)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)] [background-size:22px_22px]'
          />
          <div className='relative'>
            <h2 className='font-manrope text-2xl font-bold tracking-tight sm:text-3xl'>
              Ready to see AVIA FARM in action?
            </h2>
            <p className='mx-auto mt-3 max-w-xl text-sm text-primary-foreground/85 sm:text-base'>
              Send a test field visit request and follow it through the real
              workflow — approval, check-in and the live queue. No account
              required.
            </p>
            <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
              <Button
                size='lg'
                variant='secondary'
                className='bg-background text-foreground hover:bg-background/90'
                asChild
              >
                <Link to='/book'>
                  <MapPin />
                  Request a field visit
                </Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground'
                asChild
              >
                <Link to='/sign-in'>Sign in</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                        */
/* -------------------------------------------------------------------------- */

export function Landing() {
  return (
    <>
      <Hero />
      <UnifiedPlatform />
      <HowItWorks />
      <FarmFloor />

      <PricingSection />
      <CTA />
    </>
  )
}
