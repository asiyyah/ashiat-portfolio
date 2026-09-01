import type { Metadata } from "next";
import { Heading, Body } from "@/components/ui/Typography";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { CONTACT_EMAIL, RESUME_URL, SOCIAL_LINKS } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "Contact — Get in Touch",
  description:
    "Have a project or question? Get in touch to discuss how I can help with your product design needs.",
};

export default function ContactPage() {
  return (
    <Section>
      <ScrollReveal className="max-w-2xl mx-auto text-center">
        <Heading as="h1" className="text-5xl md:text-6xl">
          Get in Touch
        </Heading>
        <Body className="mt-6 text-lg" as="p">
          Have a project, question, or just want to say hello? I&apos;d love to
          hear from you.
        </Body>

        <div className="mt-12 flex flex-col items-center gap-6">
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg text-accent hover:underline">
            {CONTACT_EMAIL}
          </a>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-16">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Download Resume
          </a>
        </div>
      </ScrollReveal>
    </Section>
  );
}
