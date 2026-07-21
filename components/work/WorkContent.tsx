"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import type { DesignProject, CodeProject } from "@/types/project";

interface WorkContentProps {
  designProjects: DesignProject[];
  codeProjects: CodeProject[];
}

const tabs = [
  { key: "product-design", label: "Product Design" },
  { key: "code-projects", label: "Code Projects" },
];

export default function WorkContent({
  designProjects,
  codeProjects,
}: WorkContentProps) {
  const [activeTab, setActiveTab] = useState("product-design");

  return (
    <>
      <div className="mt-12" role="tablist" aria-label="Work categories">
        <div className="tab-container">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12" role="tabpanel">
        {activeTab === "product-design" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                image={project.coverImage}
                tags={[project.industry, project.role]}
                impact={project.impact}
                href={`/work/${project.slug}`}
              />
            ))}
          </div>
        )}

        {activeTab === "code-projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {codeProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                image={project.coverImage}
                tags={project.stack || []}
                tools={project.stack?.join(" / ")}
                href={`/work/${project.slug}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
