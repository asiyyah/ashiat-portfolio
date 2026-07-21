import { getAllDesignSlugs, getDesignProject } from "@/lib/projects";
import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { Heading, Body, Subheading } from "@/components/ui/Typography";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllDesignSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getDesignProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Work`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = await getDesignProject(slug);

  if (!project) {
    return (
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <Heading as="h1">Project not found</Heading>
          <Link
            href="/work"
            className="mt-6 inline-block text-accent hover:underline"
          >
            &larr; Back to Work
          </Link>
        </div>
      </Section>
    );
  }

  const MdxContent = (await import(`@/content/design/${slug}/index.mdx`))
    .default;

  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <Link
          href="/work"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          &larr; Back to Work
        </Link>

        <header className="mt-8 mb-16">
          <p className="caption mb-4">
            {project.industry} &middot; {project.role}
          </p>
          <Heading as="h1">{project.title}</Heading>
          <Body className="mt-4 text-lg text-muted max-w-xl">
            {project.summary}
          </Body>
          <div className="mt-6 flex gap-6 text-sm text-muted">
            <span>Duration: {project.duration}</span>
            <span>Year: {project.year}</span>
          </div>
        </header>

        <div className="space-y-6 text-muted leading-relaxed">
          <section>
            <Subheading className="mb-4">Challenge</Subheading>
            <p>{project.challenge}</p>
          </section>

          <section>
            <Subheading className="mb-4">Approach</Subheading>
            <p>{project.approach}</p>
          </section>

          <section>
            <Subheading className="mb-4">Solution</Subheading>
            <p>{project.solution}</p>
          </section>

          <section>
            <Subheading className="mb-4">Impact</Subheading>
            <p>{project.impact}</p>
          </section>

          {project.reflection && (
            <section>
              <Subheading className="mb-4">Reflection</Subheading>
              <p>{project.reflection}</p>
            </section>
          )}
        </div>

        <div className="mt-16">
          <MdxContent />
        </div>
      </div>
    </Section>
  );
}
