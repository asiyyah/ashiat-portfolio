import {
  getAllDesignSlugs,
  getDesignProject,
  getCodeProject,
} from "@/lib/projects";
import Image from "next/image";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { Heading, Body, Subheading } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/motion/ScrollReveal";
import BackLink from "@/components/ui/BackLink";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
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

const RICH_LAYOUT_SLUGS = ["revenue-management-platform", "spend-tool", "hirewise"];

function backDestination(from: string | undefined): string {
  if (from === "home") return "/";
  return "/work";
}

export default async function CaseStudyPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { from } = await searchParams;
  const backTo = backDestination(from);

  const designProject = await getDesignProject(slug);
  const codeProject = await getCodeProject(slug);

  if (!designProject && !codeProject) {
    return (
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <Heading as="h1">Project not found</Heading>
          <BackLink to={backTo} className="mt-6 inline-block text-accent hover:underline">
            &larr; Back to Work
          </BackLink>
        </div>
      </Section>
    );
  }

  if (codeProject && !designProject) {
    return (
      <CodeProjectLayout
        project={codeProject}
        backTo={backTo}
      />
    );
  }

  const project = designProject!;

  const MdxContent = (await import(`@/content/design/${slug}/index.mdx`))
    .default;

  const useRichLayout = RICH_LAYOUT_SLUGS.includes(slug);

  if (useRichLayout) {
    return (
      <RichCaseStudyLayout
        project={project}
        MdxContent={MdxContent}
        backTo={backTo}
      />
    );
  }

  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <BackLink to={backTo}>&larr; Back to Work</BackLink>

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

        <div className="case-study-content mt-16">
          <MdxContent />
        </div>
      </div>
    </Section>
  );
}

function RichCaseStudyLayout({
  project,
  MdxContent,
  backTo,
}: {
  project: NonNullable<Awaited<ReturnType<typeof getDesignProject>>>;
  MdxContent: React.ComponentType;
  backTo: string;
}) {
  return (
    <article>
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <BackLink to={backTo}>&larr; Back to Work</BackLink>
        </ScrollReveal>

        <ScrollReveal>
          <header className="mt-8 mb-12">
            <p className="caption mb-4">{project.year}</p>
            <Heading as="h1">{project.title}</Heading>
            <div className="hero-tags mt-4">
              <span className="text-xs px-3 py-1 rounded-full bg-foreground text-background font-medium">
                Case Study
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-surface text-muted border border-border">
                {project.industry}
              </span>
              {(project.tags ?? ["Enterprise Design", "UI/UX Design"]).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-surface text-muted border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mb-12">
            <div className="rounded-lg bg-surface p-4 md:p-6">
              <div className="rounded-md overflow-hidden bg-background border border-border">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} dashboard overview`}
                  width={project.coverWidth ?? 1200}
                  height={project.coverHeight ?? 750}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <dl className="meta-table mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <dt>Timeline</dt>
              <dd>{project.duration}</dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <dt>Team</dt>
              <dd>{project.team ?? "Sole Designer + 8 Engineers + CTO + Domain Experts"}</dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <dt>Platforms</dt>
              <dd>{project.platforms ?? "Web Application (Desktop-first)"}</dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <dt>Tools</dt>
              <dd>{project.tools ?? "Figma, Notion, Linear, GitHub"}</dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <dt>Impact</dt>
              <dd>
                {project.impact}
              </dd>
            </div>
          </dl>
        </ScrollReveal>
      </div>

      <div className="case-study-content max-w-3xl mx-auto px-6">
        <MdxContent />
      </div>

    </article>
  );
}

function CodeProjectLayout({
  project,
  backTo,
}: {
  project: NonNullable<Awaited<ReturnType<typeof getCodeProject>>>;
  backTo: string;
}) {
  return (
    <Section>
      <article className="max-w-3xl mx-auto">
        <BackLink to={backTo}>&larr; Back to Work</BackLink>

        <header className="mt-8 mb-16">
          <p className="caption mb-4">Code Project</p>
          <Heading as="h1">{project.title}</Heading>
          <Body className="mt-4 text-lg text-muted max-w-xl">
            {project.summary}
          </Body>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack?.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-surface text-muted border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-6 text-muted leading-relaxed">
          {project.technicalHighlights && project.technicalHighlights.length > 0 && (
            <section>
              <Subheading className="mb-4">Technical Highlights</Subheading>
              <ul className="list-disc pl-6 space-y-2">
                {project.technicalHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {project.repository && (
            <Button href={project.repository} variant="secondary">
              View Repository
            </Button>
          )}
          {project.liveDemo && (
            <Button href={project.liveDemo} variant="primary">
              View Live Demo
            </Button>
          )}
        </div>
      </article>
    </Section>
  );
}
