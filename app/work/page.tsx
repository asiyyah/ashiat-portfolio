import type { Metadata } from "next";
import { getAllDesignProjects, getAllCodeProjects } from "@/lib/projects";
import WorkContent from "@/components/work/WorkContent";
import { Heading, Body } from "@/components/ui/Typography";
import Section from "@/components/ui/Section";
export const metadata: Metadata = {
  title: "Work — Product Design & Code Projects",
  description:
    "A curated selection of product design and development projects spanning enterprise SaaS, fintech, and compliance.",
};

export default async function WorkPage() {
  const [designProjects, codeProjects] = await Promise.all([
    getAllDesignProjects(),
    getAllCodeProjects(),
  ]);
  return (
    <Section>
      <div className="max-w-7xl mx-auto">
        <Heading as="h1" className="text-5xl md:text-6xl">
          Work
        </Heading>
        <Body className="mt-4 max-w-xl" as="p">
          A curated selection of product design and development projects.
        </Body>

        <WorkContent
          designProjects={designProjects}
          codeProjects={codeProjects}
        />
      </div>
    </Section>
  );
}
