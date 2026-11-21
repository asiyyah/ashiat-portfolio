import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { getAllPortfolioProjects } from "@/lib/projects";
import type { CodeProject, DesignProject, ProjectType } from "@/types/project";
import WorkContent from "@/components/work/WorkContent";
import { DESIGN_CARD_ORDER } from "@/components/work/project-layout";

export const metadata: Metadata = pageMetadata({
  title: "Work — Product Design & Code Projects",
  description:
    "Selected work across enterprise SaaS, fintech platforms, compliance systems, and code projects.",
  path: "/work",
});

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string | string[] }>;
}) {
  const projects = await getAllPortfolioProjects();
  const requestedTab = (await searchParams).tab;
  const initialTab: ProjectType = requestedTab === "code" || requestedTab === "ui-design"
    ? requestedTab
    : "product-design";
  const featuredOrder = DESIGN_CARD_ORDER;
  const orderedDesignProjects = projects
    .filter((project): project is DesignProject => project.projectType === "product-design")
    .sort((a, b) => {
    const aIndex = featuredOrder.indexOf(a.slug);
    const bIndex = featuredOrder.indexOf(b.slug);

    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
    });
  const uiProjects = projects.filter(
    (project): project is DesignProject => project.projectType === "ui-design"
  );
  const codeProjects = projects.filter(
    (project): project is CodeProject => project.projectType === "code"
  );

  return (
    <WorkContent
      designProjects={orderedDesignProjects}
      uiProjects={uiProjects}
      codeProjects={codeProjects}
      initialTab={initialTab}
    />
  );
}
