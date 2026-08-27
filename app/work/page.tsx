import type { Metadata } from "next";
import { getAllDesignProjects } from "@/lib/projects";
import { codeProjects } from "@/lib/code-projects";
import WorkContent from "@/components/work/WorkContent";

export const metadata: Metadata = {
  title: "Work — Product Design & Code Projects",
  description:
    "Selected work across enterprise SaaS, fintech platforms, compliance systems, and code projects.",
};

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string | string[] }>;
}) {
  const designProjects = await getAllDesignProjects();
  const requestedTab = (await searchParams).tab;
  const initialTab = requestedTab === "code" ? "code" : "design";
  const featuredOrder = ["revenue-management-platform", "spend-tool"];
  const orderedDesignProjects = [...designProjects].sort((a, b) => {
    const aIndex = featuredOrder.indexOf(a.slug);
    const bIndex = featuredOrder.indexOf(b.slug);

    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  return (
    <WorkContent
      designProjects={orderedDesignProjects}
      codeProjects={codeProjects}
      initialTab={initialTab}
    />
  );
}
