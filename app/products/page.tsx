import type { Metadata } from 'next'
import Link from 'next/link'
import { ProductCard } from '@/components/product-card'
import {
  categories,
  products,
  type CategorySlug,
  getCategory,
} from '@/lib/products'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse the Cygnus Seeds catalogue of hybrid vegetable, melon and field crop varieties with detailed agronomic information.',
}

type Props = {
  searchParams: Promise<{ category?: string }>
}

export default async function ProductsPage({ searchParams }: Props) {
  const { category } = await searchParams
  const active = categories.find((item) => item.slug === category)?.slug as
    | CategorySlug
    | undefined

  const visible = active
    ? products.filter((product) => product.category === active)
    : products

  const activeCategory = active ? getCategory(active) : undefined

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Product catalogue
          </span>
          <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-balance md:text-5xl">
            {activeCategory ? activeCategory.name : 'Our seed varieties'}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {activeCategory
              ? activeCategory.blurb
              : 'Each variety below carries the agronomic detail you need before recommending or sowing it — maturity, fruit characteristics, seed rate and packing.'}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <nav
          aria-label="Filter by crop group"
          className="flex flex-wrap items-center gap-2"
        >
          <Link
            href="/products"
            aria-current={!active ? 'page' : undefined}
            className={cn(
              'rounded-md border px-4 py-2 text-sm font-medium transition-colors',
              !active
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground',
            )}
          >
            All crops
          </Link>
          {categories.map((item) => (
            <Link
              key={item.slug}
              href={`/products?category=${item.slug}`}
              aria-current={active === item.slug ? 'page' : undefined}
              className={cn(
                'rounded-md border px-4 py-2 text-sm font-medium transition-colors',
                active === item.slug
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground',
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing {visible.length} {visible.length === 1 ? 'variety' : 'varieties'}
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}
