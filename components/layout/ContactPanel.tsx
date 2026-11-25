import CopyEmailButton from "./CopyEmailButton";
import EmailIllustration from "./EmailIllustration";
import { CONTACT_EMAIL } from "@/lib/site-links";
import styles from "./Footer.module.css";

export default function ContactPanel() {
  return (
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
        <CopyEmailButton email={CONTACT_EMAIL} />
      </div>
      <div className={styles.illustration} aria-hidden="true">
        <EmailIllustration />
      </div>
    </section>
  );
}
