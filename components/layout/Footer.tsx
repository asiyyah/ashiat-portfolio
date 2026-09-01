import Link from "next/link";
import { Suspense } from "react";
import FooterContactSection from "./FooterContactSection";
import { SOCIAL_LINKS } from "@/lib/site-links";
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
        <Suspense fallback={null}>
          <FooterContactSection />
        </Suspense>

        <div className={styles.bottom}>
          <div className={styles.bottomInner}>
            <a href="#top" className={styles.wordmark} aria-label="Back to the top of this page">Ashiat.</a>
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
