import Link from "next/link";
import FooterContactForm from "./FooterContactForm";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site-links";
import styles from "./Footer.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Playground", href: "/playground" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.shell}>
        <section className={styles.contact} aria-labelledby="contact-heading">
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.statusDot} aria-hidden="true" />
              Available for select projects
            </div>
            <h2 id="contact-heading" className={styles.title}>
              Let&apos;s make it <em>clear.</em>
            </h2>
            <p className={styles.intro}>
              Bring me the complicated part. Tell me what you&apos;re building, where it feels stuck, and what a useful outcome looks like.
            </p>
            <a className={styles.emailLink} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
          <FooterContactForm />
        </section>

        <div className={styles.bottom}>
          <div className={styles.bottomInner}>
            <Link href="/" className={styles.wordmark} aria-label="Ashiat — home">Ashiat.</Link>
            <div className={styles.linkGroups}>
              <nav className={styles.linkGroup} aria-label="Footer navigation">
                <span className={styles.linkLabel}>Explore</span>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                    className={styles.link}
              >
                {item.label}
              </Link>
            ))}
              </nav>
              <div className={styles.linkGroup}>
                <span className={styles.linkLabel}>Elsewhere</span>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                    className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
              </div>
            </div>
          </div>
          <div className={styles.legal}>
            <span>Product designer shaping useful, thoughtful digital products.</span>
            <span>&copy; {new Date().getFullYear()} Ashiat Abdulkadir. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
