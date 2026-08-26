import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Compass, Eye, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Cygnus Seeds is an Indian seed company breeding and supplying hybrid vegetable, melon and field crop seeds, backed by field trials and lot-wise quality testing.',
}

const pillars = [
  {
    icon: Target,
    title: 'Our mission',
    body: 'To put dependable, well-adapted hybrid seed within reach of every farmer we serve, and to stand behind its performance with advice through the season.',
  },
  {
    icon: Eye,
    title: 'Our vision',
    body: 'To be the seed company Indian growers name first when they talk about consistency — in germination, in uniformity and in yield.',
  },
  {
    icon: Compass,
    title: 'How we work',
    body: 'Select for the traits farmers actually ask for, prove them across locations, test every lot, and keep our field team present after the sale.',
  },
]

const values = [
  {
    title: 'Honest claims',
    body: 'We publish trial-based figures and say plainly that results vary with soil, season and management. No inflated numbers on a pack.',
  },
  {
    title: 'Farmer first',
    body: 'A variety only enters the catalogue if it solves a real problem in the field — a disease, a market preference, a harvest window.',
  },
  {
    title: 'Consistency',
    body: 'Parent lines are maintained under isolation every season so the hybrid a farmer buys this year behaves like the one they bought last year.',
  },
  {
    title: 'Partnership',
    body: 'Our dealers and production growers are long-term partners. Their feedback shapes what we breed and how much we produce.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            About us
          </span>
          <h1 className="mt-3 max-w-3xl font-heading text-3xl font-extrabold tracking-tight text-balance md:text-5xl">
            A seed company built around the farmer&apos;s season
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Cygnus Seeds breeds, produces and supplies hybrid vegetable, melon
            and field crop seeds for growers across India.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Who we are
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-balance md:text-3xl">
              Grounded in agronomy, not just distribution
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Cygnus Seeds was formed by a group of agriculture professionals
                who had spent years working with growers and could see the same
                gap repeating itself: farmers were being sold seed with little
                information and even less follow-up.
              </p>
              <p>
                We chose to build the company the other way round. Breeding and
                selection came first, then multi-location trials, then in-house
                processing and testing — and only after that, a catalogue. Today
                our range spans vegetables, melons and field crops, each variety
                carrying the agronomic detail a farmer or dealer needs to make a
                decision.
              </p>
              <p>
                Cygnus Seeds works in close association with allied seed
                businesses, sharing breeding material, trial networks and
                production expertise so that growers get access to a wider,
                better-tested portfolio than any one company could build alone.
              </p>
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-lg">
            <Image
              src="/images/about-team.png"
              alt="Agronomy team inspecting a crop in the field"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col gap-4 rounded-lg border border-border bg-card p-7"
              >
                <span className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <pillar.icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="font-heading text-lg font-bold tracking-tight">
                  {pillar.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="md:max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            What we stand for
          </span>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-balance md:text-3xl">
            The commitments behind the pack
          </h2>
        </div>
        <dl className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="border-t border-border pt-6"
            >
              <dt className="font-heading text-base font-bold tracking-tight text-foreground">
                {value.title}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.body}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-balance md:text-3xl">
              Want to know more about our varieties?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85 md:text-base">
              Browse the full catalogue, or write to us for variety
              recommendations suited to your district and season.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              View products
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
