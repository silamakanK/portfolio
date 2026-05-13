import Head from "next/head";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useTranslations } from "@/context/LocaleContext";

export default function Home() {
  const { content, locale } = useTranslations();
  const featuredProjects = projects.slice(0, 2);

  return (
    <>
      <Head>
        <title>Silamakan KAMISSOKO — Développeur Full Stack</title>
        <meta
          name="description"
          content={
            locale === "fr"
              ? "Portfolio de Silamakan KAMISSOKO, développeur Full Stack étudiant en Mastère à l'EEMI Paris. Spécialisé en React, Next.js, Node.js, cybersécurité et DevOps."
              : "Portfolio of Silamakan KAMISSOKO, Full-Stack Developer and Master's student at EEMI Paris. Specialized in React, Next.js, Node.js, cybersecurity and DevOps."
          }
        />
      </Head>
    <div className="space-y-20">
      <HeroSection />

      <section className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <SkillsGrid />
        <div
          className="rounded-3xl border p-8"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--panel)" }}
        >
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            {content.home.experiences.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            {content.home.experiences.intro}
          </p>
          <div className="mt-6 space-y-4">
            {content.home.experiences.cards.map(
              ({ role, company, period, summary }) => (
                <div
                  key={`${role}-${company}`}
                  className="rounded-2xl border p-4"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--panel-muted)" }}
                >
                  <p className="text-sm font-semibold text-[var(--foreground)]">{role}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    {company} · {period}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{summary}</p>
                </div>
              ),
            )}
          </div>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
            style={{ borderColor: "var(--border)" }}
          >
            {content.home.experiences.cta}
          </Link>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              {content.home.projects.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {content.home.projects.description}
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
            style={{ borderColor: "var(--border)" }}
          >
            {content.home.projects.cta}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
