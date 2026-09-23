// ORIGINAL CYGNUS SEEDS HOMEPAGE — restore app/page.tsx from this file when ready.

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  FlaskConical,
  Handshake,
  Leaf,
  ShieldCheck,
  Truck,
} from 'lucide-react'
import { ProductCard } from '@/components/product-card'
import { categories, featuredProducts } from '@/lib/products'

const strengths = [
  {
    icon: FlaskConical,
    title: 'Breeding led by field data',
    body: 'Every candidate hybrid is evaluated over multiple seasons in the agro-climatic zones where it will finally be sown.',
  },
  {
    icon: ShieldCheck,
    title: 'Tested seed lots',
    body: 'Germination, purity, moisture and vigour are checked lot by lot before a pack is released for sale.',
  },
  {
    icon: Truck,
    title: 'Dependable supply',
    body: 'Processing, grading and packing under one roof so dealers receive stock ahead of the sowing window.',
  },
  {
    icon: Handshake,
    title: 'Support on the ground',
    body: 'Field staff run demonstrations and farmer meets through the season, not only at the point of sale.',
  },
]

const stats = [
  { value: '12+', label: 'Hybrids in the catalogue' },
  { value: '3', label: 'Crop groups covered' },
  { value: '60+', label: 'Trial locations each season' },
  { value: '100%', label: 'Lots tested before dispatch' },
]

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/hero-field.png"
          alt="Green agricultural field at sunrise"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-r from-foreground/85 via-foreground/70 to-foreground/30"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground">
              <Leaf className="size-3.5" aria-hidden="true" />
              Hybrid seeds for Indian conditions
            </p>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground text-balance md:text-6xl">
              Better seed is where a better harvest begins
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              Cygnus Seeds develops high-yielding, disease-tolerant vegetable,
              melon and field crop hybrids, then proves them in farmers&apos;
              fields before they carry our name.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore our seed range
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20"
              >
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-heading text-3xl font-extrabold tracking-tight text-primary">
                {stat.value}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-3 md:max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Our crop range
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
            Three crop groups, bred for different fields
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            From high-value vegetables grown on small holdings to field crops
            across large rainfed tracts, our portfolio is built around what
            Indian growers actually plant.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary/40"
            >
              <h3 className="font-heading text-xl font-bold tracking-tight">
                {category.name}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {category.blurb}
              </p>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                Browse varieties
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="md:max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Featured varieties
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
                Varieties farmers come back for
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              View all products
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-4/3 overflow-hidden rounded-lg">
            <Image
              src="/images/rnd-lab.png"
              alt="Seed technologist examining samples in a laboratory"
              fill
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Why Cygnus
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
              Quality decided long before the pack is sealed
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A seed carries a whole season of a farmer&apos;s investment. That
              is why our work runs from parent line maintenance through
              multi-location trials to lot-wise testing at dispatch.
            </p>
            <ul className="mt-8 flex flex-col gap-6">
              {strengths.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-balance md:text-3xl">
              Interested in stocking Cygnus Seeds?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85 md:text-base">
              We are expanding our dealer and distributor network. Share your
              details and our territory team will get in touch with you.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Become a dealer
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
