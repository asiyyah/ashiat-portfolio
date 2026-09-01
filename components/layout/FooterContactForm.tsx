'use client'

import type { FormEvent } from 'react'
import { CONTACT_EMAIL } from '@/lib/site-links'
import styles from './Footer.module.css'

export default function FooterContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(
      [`Hi Ashiat,`, '', message, '', `From: ${name}`, `Email: ${email}`].join('\n'),
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <div className={styles.formCard}>
      <h3 className={styles.formTitle}>Have a project in mind?</h3>
      <p className={styles.formIntro}>Share a few details and I&apos;ll respond with a clear next step.</p>
      <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Your name
        <input
          className={styles.field}
          type="text"
          name="name"
          placeholder="How should I address you?"
          autoComplete="name"
          required
        />
      </label>

      <label className={styles.label}>
        Email address
        <input
          className={styles.field}
          type="email"
          name="email"
          placeholder="you@company.com"
          autoComplete="email"
          required
        />
      </label>

      <label className={styles.label}>
        What are you working on?
        <textarea
          className={`${styles.field} ${styles.message}`}
          name="message"
          placeholder="A little context about the product, problem, or opportunity…"
          required
        />
      </label>

      <button type="submit" className={styles.submit}>
        <span>Send message</span><span aria-hidden="true">↗</span>
      </button>
      <p className={styles.formNote}>Submitting opens your email app, so you remain in control of what is sent.</p>
      </form>
    </div>
  )
}
