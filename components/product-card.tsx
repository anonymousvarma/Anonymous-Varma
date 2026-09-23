import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/40"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={`${product.crop} variety ${product.variety}`}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-card/90 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
          {product.crop}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
          {product.variety}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.tagline}
        </p>
        <span className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-primary">
          View details
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
