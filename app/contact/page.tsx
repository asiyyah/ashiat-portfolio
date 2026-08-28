import type { Metadata } from "next";
import Link from "next/link";
import { Heading, Body } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact — Get in Touch",
  description:
    "Have a project or question? Get in touch to discuss how I can help with your product design needs.",
};

const links = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

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
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg text-accent hover:underline"
              {...(link.label !== "Email"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <Button href="#" variant="secondary">
            Download Resume
          </Button>
        </div>
      </ScrollReveal>
    </Section>
  );
}
