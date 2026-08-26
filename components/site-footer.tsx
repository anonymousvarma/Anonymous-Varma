import Link from 'next/link'
import { Mail, MapPin, Phone, Sprout } from 'lucide-react'
import { categories } from '@/lib/products'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Sprout className="size-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-extrabold tracking-tight">
                Cygnus Seeds
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Cygnus Seeds breeds and supplies high-yielding hybrid vegetable,
              melon and field crop seeds, tested across Indian agro-climatic
              zones before they reach a farmer&apos;s field.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Crop Range
              </h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link
                      href={`/products?category=${category.slug}`}
                      className="transition-colors hover:text-primary"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Company
              </h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="transition-colors hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="transition-colors hover:text-primary">
                    R&amp;D &amp; Quality
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="transition-colors hover:text-primary">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Reach Us
              </h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span>
                    Cygnus Seeds Pvt. Ltd.
                    <br />
                    Hyderabad, Telangana, India
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+919999999999"
                    className="flex items-center gap-2 transition-colors hover:text-primary"
                  >
                    <Phone className="size-4 shrink-0" aria-hidden="true" />
                    +91 99999 99999
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@cygnusseeds.com"
                    className="flex items-center gap-2 transition-colors hover:text-primary"
                  >
                    <Mail className="size-4 shrink-0" aria-hidden="true" />
                    info@cygnusseeds.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Cygnus Seeds Pvt. Ltd. All rights
            reserved.
          </p>
          <p>
            Yield and performance figures are indicative and vary with local
            conditions.
          </p>
        </div>
      </div>
    </footer>
  )
}
