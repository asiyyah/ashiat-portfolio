import type { DesignProject } from "@/types/project";

type UIProjectSeed = Pick<
  DesignProject,
  "title" | "slug" | "coverImage" | "aspectRatio"
>;

const uiProjectSeeds: UIProjectSeed[] = [
  { title: "Marketing CRM Dashboard", slug: "marketing-crm-dashboard", coverImage: "/images/ui-designs/Marketing crm X post.png", aspectRatio: "wide" },
  { title: "Budget App", slug: "budget-app", coverImage: "/images/ui-designs/Budget App Presentation.png", aspectRatio: "portrait" },
  { title: "Seedly Investment Dashboard", slug: "seedly-investment-dashboard", coverImage: "/images/ui-designs/Seedly Presentation 4.png", aspectRatio: "square" },
  { title: "Budget Details", slug: "budget-details", coverImage: "/images/ui-designs/Budget Details Presentation.png", aspectRatio: "portrait" },
  { title: "Budget Transactions", slug: "budget-transactions", coverImage: "/images/ui-designs/Budget TransactionPresentation.png", aspectRatio: "portrait" },
  { title: "ClariFi Sales Dashboard", slug: "clarifi-sales-dashboard", coverImage: "/images/ui-designs/Sales crm X post 3.png", aspectRatio: "wide" },
  { title: "ClariFi Leads Management", slug: "clarifi-leads-management", coverImage: "/images/ui-designs/Sales crm X post 2.png", aspectRatio: "wide" },
  { title: "Expense Tracker", slug: "expense-tracker", coverImage: "/images/ui-designs/tracker - V1.png", aspectRatio: "portrait" },
  { title: "MindEase", slug: "mindease", coverImage: "/images/ui-designs/MindEase Presentation 3.png", aspectRatio: "portrait" },
  { title: "Seedly Onboarding", slug: "seedly-onboarding", coverImage: "/images/ui-designs/Seedly onboarding.png", aspectRatio: "square" },
  { title: "SnapStyle", slug: "snapstyle", coverImage: "/images/ui-designs/SnapStyle Presentation 2.png", aspectRatio: "square" },
];

export const uiProjects: DesignProject[] = uiProjectSeeds.map((project) => ({
  ...project,
  industry: "Interface Design",
  role: "UI Designer",
  duration: "Independent exploration",
  year: 2025,
  summary: "A polished interface exploration focused on visual hierarchy, clarity, and interaction design.",
  challenge: "Explore a focused interface concept through high-fidelity visual design.",
  approach: "Developed the visual system, layout, hierarchy, and key interface states.",
  solution: "A refined interface concept presented as a standalone UI design exploration.",
  impact: "High-fidelity UI exploration",
  coverImage: project.coverImage,
  gallery: [],
  projectType: "ui-design",
  featured: true,
}));
