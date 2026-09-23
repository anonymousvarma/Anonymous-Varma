import Image from 'next/image'
import type { Metadata } from 'next'
import { Leaf } from 'lucide-react'

// TEMPORARY CYGNUS SEEDS UNDER CONSTRUCTION PAGE
// Restore the original homepage from /preview when the website is ready.

export const metadata: Metadata = {
  title: 'Cygnus Seeds | Coming Soon',
  description:
    'Cygnus Seeds — our new website is currently under construction. A new digital experience showcasing our seed varieties, research and agricultural solutions is coming soon.',
  robots: { index: false, follow: false },
}

export default function UnderConstructionPage() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-1px)] items-center overflow-hidden bg-[#f7f6ef]">
      <Image
        src="/images/hero-field.png"
        alt="Lush green agricultural field"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[#102f21]/75" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#102f21]/95 via-[#102f21]/75 to-[#102f21]/35" aria-hidden="true" />

      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-16 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          <Image
            src="/images/cygnus-logo.jpeg"
            alt="Cygnus Seeds"
            width={212}
            height={86}
            priority
            className="h-auto w-44 rounded-sm bg-white object-contain sm:w-52"
          />
        </div>

        <div className="max-w-2xl py-20 sm:py-28 lg:py-32">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b65a]">
            <Leaf className="size-4" aria-hidden="true" />
            Cygnus Seeds
          </p>
          <h1 className="mt-6 max-w-xl font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
            Something New Is Growing.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Our new website is currently under construction.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            We&apos;re working on a new digital experience to showcase our seed varieties, research, and solutions for modern agriculture.
          </p>
          <div className="mt-9 inline-flex items-center gap-3 border border-[#d7b65a]/70 px-5 py-3 text-xs font-semibold tracking-[0.2em] text-[#f2d77f]">
            <span className="size-2 rounded-full bg-[#d7b65a]" aria-hidden="true" />
            COMING SOON
          </div>
          <p className="mt-7 text-sm italic text-white/65">Growing better. Growing together.</p>
        </div>

        <div className="border-t border-white/20 pt-5 text-xs tracking-wide text-white/60">
          © {new Date().getFullYear()} Cygnus Seeds
        </div>
      </div>
    </section>
  )
}
