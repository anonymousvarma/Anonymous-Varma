import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Beaker, Microscope, Sprout, Warehouse } from 'lucide-react'

export const metadata: Metadata = {
  title: 'R&D & Quality',
  description:
    'How Cygnus Seeds breeds, trials and tests every hybrid — from germplasm and parent line maintenance to lot-wise germination and purity testing.',
}

const stages = [
  {
    icon: Microscope,
    step: 'Stage 01',
    title: 'Germplasm and parent lines',
    body: 'We maintain a working collection of vegetable, melon and field crop germplasm. Parent lines are purified and maintained under isolation each season so that hybrid uniformity does not drift over time.',
  },
  {
    icon: Beaker,
    step: 'Stage 02',
    title: 'Crossing and early screening',
    body: 'New crosses are screened for yield potential, fruit or grain quality and reaction to the diseases that matter most in each crop — virus complexes in vegetables, blights in maize, mildew in bajra.',
  },
  {
    icon: Sprout,
    step: 'Stage 03',
    title: 'Multi-location field trials',
    body: 'Shortlisted hybrids move into trials across more than 60 locations spanning different soils, seasons and management levels. A hybrid must perform consistently, not just once, to be released.',
  },
  {
    icon: Warehouse,
    step: 'Stage 04',
    title: 'Production, processing and testing',
    body: 'Production is contracted with trained growers under supervision. Seed is graded, treated and packed in-house, and every lot is tested for germination, physical purity, moisture and vigour before release.',
  },
]

const checks = [
  {
    label: 'Germination',
    detail: 'Tested per lot against the prescribed minimum standard for the crop.',
  },
  {
    label: 'Genetic purity',
    detail: 'Grow-out tests confirm hybridity and trueness to type before dispatch.',
  },
  {
    label: 'Physical purity',
    detail: 'Grading and gravity separation remove inert matter, off-size and immature seed.',
  },
  {
    label: 'Moisture content',
    detail: 'Controlled drying and monitored storage protect vigour through the season.',
  },
  {
    label: 'Seed health',
    detail: 'Treatment and health checks reduce the risk of seed-borne carryover.',
  },
  {
    label: 'Traceability',
    detail: 'Lot numbers link every pack back to its production plot and test record.',
  },
]

export default function ResearchPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Research &amp; quality
          </span>
          <h1 className="mt-3 max-w-3xl font-heading text-3xl font-extrabold tracking-tight text-balance md:text-5xl">
            A hybrid earns its name in the field, not in the catalogue
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Our breeding and quality programme exists for one reason: so that
            the pack a farmer opens performs the way we said it would.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-heading text-2xl font-extrabold tracking-tight md:text-3xl">
          From germplasm to the farmer&apos;s field
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                  <stage.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {stage.step}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold tracking-tight">
                {stage.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {stage.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Testing protocol
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-balance md:text-3xl">
              What we check on every lot
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              No lot leaves our facility on assumption. Each one is sampled and
              tested, and the results are held against the lot number printed on
              the pack.
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {checks.map((check) => (
                <div key={check.label}>
                  <dt className="font-heading text-sm font-bold tracking-tight text-foreground">
                    {check.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {check.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-lg">
            <Image
              src="/images/rnd-lab.png"
              alt="Technician testing seed samples in a quality control laboratory"
              fill
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-4/3 overflow-hidden rounded-lg">
            <Image
              src="/images/farmers-meet.png"
              alt="Agronomist explaining crop performance to farmers during a field demonstration"
              fill
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Extension work
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-balance md:text-3xl">
              Demonstration plots and farmer meets
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Good seed still needs good practice around it. Our field team runs
              demonstration plots alongside farmers&apos; own varieties, holds
              field days at peak crop stage, and advises on spacing, nutrition
              and pest management specific to the variety.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              What we learn at those meets feeds straight back into the breeding
              programme — the traits farmers ask for are the traits we select
              for next.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request a field demonstration
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
