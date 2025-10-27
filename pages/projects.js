import Head from "next/head";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useTranslations } from "@/context/LocaleContext";

export default function Projects() {
  const { content } = useTranslations();

  return (
    <>
      <Head>
        <title>{`${content.projectsPage.title} · Silamakan KAMISSOKO`}</title>
      </Head>
      <section className="space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold text-[var(--foreground)]">
            {content.projectsPage.title}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
            {content.projectsPage.description}
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
