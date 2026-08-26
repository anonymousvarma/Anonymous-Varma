import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check, Package } from 'lucide-react'
import { ProductCard } from '@/components/product-card'
import { getCategory, getProduct, products } from '@/lib/products'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return { title: 'Variety not found' }

  return {
    title: `${product.variety} — ${product.crop}`,
    description: product.tagline,
    openGraph: {
      title: `${product.variety} — ${product.crop} | Cygnus Seeds`,
      description: product.tagline,
      images: [{ url: product.image }],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProduct(slug)

  if (!product) notFound()

  const category = getCategory(product.category)
  const related = products
    .filter(
      (item) =>
        item.category === product.category && item.slug !== product.slug,
    )
    .slice(0, 3)

  return (
    <>
      <div className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/products"
                  className="transition-colors hover:text-primary"
                >
                  Products
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={`/products?category=${product.category}`}
                  className="transition-colors hover:text-primary"
                >
                  {category?.name}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-foreground">{product.variety}</li>
            </ol>
          </nav>
        </div>
      </div>

      <article className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-muted">
            <Image
              src={product.image || '/placeholder.svg'}
              alt={`${product.crop} variety ${product.variety}`}
              fill
              priority
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="inline-block rounded-sm bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              {product.crop}
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
              {product.variety}
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-primary">
              {product.tagline}
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <h2 className="mt-8 font-heading text-lg font-bold tracking-tight">
              Key features
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3 rounded-md border border-border bg-card p-4">
              <Package className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Available packing
                </p>
                <p className="text-sm font-medium text-foreground">
                  {product.packing}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Enquire about this variety
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                All varieties
              </Link>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight">
            Technical specifications
          </h2>
          <div className="mt-6 overflow-hidden rounded-lg border border-border">
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">
                Agronomic specifications for {product.variety}
              </caption>
              <tbody>
                {product.specs.map((spec, index) => (
                  <tr
                    key={spec.label}
                    className={index % 2 === 0 ? 'bg-card' : 'bg-secondary/30'}
                  >
                    <th
                      scope="row"
                      className="w-1/3 border-b border-border px-5 py-4 text-left font-semibold text-foreground"
                    >
                      {spec.label}
                    </th>
                    <td className="border-b border-border px-5 py-4 text-muted-foreground">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Figures are based on multi-location trial averages. Actual
            performance depends on soil, weather, irrigation and crop management
            practices.
          </p>
        </section>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-heading text-2xl font-extrabold tracking-tight">
              More from {category?.name}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  )
}
