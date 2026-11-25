import { Suspense } from "react";
import FooterContactSection from "./FooterContactSection";
import { SOCIAL_LINKS } from "@/lib/site-links";
import styles from "./Footer.module.css";

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
          </div>
          <div className={styles.legal}>
            <nav className={styles.socialRow} aria-label="Social links">
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
            </nav>
            <span>&copy; {new Date().getFullYear()} Ashiat Abdulkadir. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
