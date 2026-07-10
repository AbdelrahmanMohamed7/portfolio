import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study-page";
import { featuredProjects, getFeaturedProject } from "@/data/projects";

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getFeaturedProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: project.name,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = featuredProjects.findIndex(
    (project) => project.slug === slug,
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = featuredProjects[projectIndex];
  const previousProject =
    featuredProjects[
      (projectIndex - 1 + featuredProjects.length) % featuredProjects.length
    ];
  const nextProject =
    featuredProjects[(projectIndex + 1) % featuredProjects.length];

  return (
    <CaseStudyPage
      nextProject={nextProject}
      previousProject={previousProject}
      project={project}
    />
  );
}
