'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/research', label: 'R&D & Quality' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-2 text-xs">
          <p className="tracking-wide">
            Quality hybrid seeds for the Indian farming community
          </p>
          <div className="flex items-center gap-6">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              +91 99999 99999
            </a>
            <a
              href="mailto:info@cygnusseeds.com"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              info@cygnusseeds.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative block h-9 w-36 sm:h-11 sm:w-44">
              <Image
                src="/images/cygnus-logo.jpeg"
                alt="Cygnus Seeds"
                fill
                priority
                sizes="176px"
                className="object-cover"
              />
            </span>
            <span className="hidden border-l border-border pl-3 text-[11px] uppercase leading-tight tracking-[0.16em] text-muted-foreground xl:block">
              Growing
              <br />
              with farmers
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive(item.href)
                    ? 'bg-secondary text-secondary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Become a Dealer
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex size-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {open && (
          <nav
            aria-label="Mobile"
            className="border-t border-border bg-card px-6 py-3 lg:hidden"
          >
            <ul className="flex flex-col">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block border-b border-border py-3 text-sm font-medium',
                      isActive(item.href)
                        ? 'text-primary'
                        : 'text-muted-foreground',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Become a Dealer
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
