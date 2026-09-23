'use client'

import { useState } from 'react'
import { Check, Send } from 'lucide-react'
import { categories } from '@/lib/products'

const enquiryTypes = [
  'Variety information',
  'Dealer / distributor enquiry',
  'Field demonstration request',
  'Other',
]

const fieldClass =
  'w-full rounded-md border border-input bg-card px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30'

const labelClass = 'text-sm font-medium text-foreground'

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-lg border border-primary/30 bg-secondary/50 p-8"
      >
        <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-5" aria-hidden="true" />
        </span>
        <h2 className="font-heading text-xl font-bold tracking-tight">
          Thank you for reaching out
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We have received your enquiry. A member of our territory team will
          contact you shortly. For anything urgent, please call us on{' '}
          <a href="tel:+919999999999" className="font-medium text-primary">
            +91 99999 99999
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm font-semibold text-primary underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-5 rounded-lg border border-border bg-card p-7"
    >
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="phone" className={labelClass}>
            Mobile number <span className="text-destructive">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="10-digit mobile number"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="location" className={labelClass}>
            District / State
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="e.g. Nashik, Maharashtra"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="enquiryType" className={labelClass}>
            Enquiry type
          </label>
          <select id="enquiryType" name="enquiryType" className={fieldClass}>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="crop" className={labelClass}>
            Crop group of interest
          </label>
          <select id="crop" name="crop" className={fieldClass}>
            <option value="">Select a crop group</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us which varieties you are interested in, your acreage, or how we can help."
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 self-start rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Submit enquiry
        <Send className="size-4" aria-hidden="true" />
      </button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        We use your details only to respond to this enquiry.
      </p>
    </form>
  )
}
