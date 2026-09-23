import type { Metadata } from 'next'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { EnquiryForm } from '@/components/enquiry-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Cygnus Seeds for variety recommendations, dealer and distributor enquiries, or to request a field demonstration.',
}

const details = [
  {
    icon: MapPin,
    label: 'Office address',
    lines: [
      'Cygnus Seeds Pvt. Ltd.',
      'Hyderabad, Telangana',
      'India',
    ],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+91 99999 99999'],
    href: 'tel:+919999999999',
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['info@cygnusseeds.com'],
    href: 'mailto:info@cygnusseeds.com',
  },
  {
    icon: Clock,
    label: 'Working hours',
    lines: ['Monday to Saturday', '9:30 am - 6:30 pm IST'],
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Contact
          </span>
          <h1 className="mt-3 max-w-3xl font-heading text-3xl font-extrabold tracking-tight text-balance md:text-5xl">
            Let&apos;s talk about your crop and your season
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Whether you need a variety recommendation for your district, want to
            stock Cygnus Seeds, or would like a demonstration plot on your farm
            — write to us and our team will respond.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight">
              Reach us directly
            </h2>
            <ul className="mt-8 flex flex-col gap-8">
              {details.map((detail) => (
                <li key={detail.label} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                    <detail.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {detail.label}
                    </p>
                    <div className="mt-1 text-sm leading-relaxed text-foreground">
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="font-medium transition-colors hover:text-primary"
                        >
                          {detail.lines[0]}
                        </a>
                      ) : (
                        detail.lines.map((line) => <p key={line}>{line}</p>)
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-lg border border-border bg-card p-6">
              <h3 className="font-heading text-base font-bold tracking-tight">
                Dealers and distributors
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We are appointing dealers in new territories across India. Select
                &quot;Dealer / distributor enquiry&quot; in the form and include
                your district — our territory manager will call you.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight">
              Send us an enquiry
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Fields marked with an asterisk are required.
            </p>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
