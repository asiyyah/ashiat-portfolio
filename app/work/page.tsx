import type { Metadata } from "next";
import { getAllDesignProjects, getAllCodeProjects } from "@/lib/projects";
import WorkContent from "@/components/work/WorkContent";

export const metadata: Metadata = {
  title: "Work — Product Design & Code Projects",
  description:
    "Selected work across enterprise SaaS, fintech platforms, compliance systems, and code projects.",
};

export default async function WorkPage() {
  const [designProjects, codeProjects] = await Promise.all([
    getAllDesignProjects(),
    getAllCodeProjects(),
  ]);
  const orderedDesignProjects = [...designProjects].sort((a, b) => {
    if (a.slug === "revenue-management-platform") return -1;
    if (b.slug === "revenue-management-platform") return 1;
    return 0;
  });

  return (
    <WorkContent
      designProjects={orderedDesignProjects}
      codeProjects={codeProjects}
    />
  );
}
