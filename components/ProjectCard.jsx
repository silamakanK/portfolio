import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { useTranslations } from "@/context/LocaleContext";

const gradients = [
  "from-indigo-500/20 via-transparent to-purple-500/30",
  "from-emerald-500/20 via-transparent to-lime-400/30",
  "from-sky-500/20 via-transparent to-cyan-500/30",
  "from-rose-500/20 via-transparent to-orange-500/30",
];

export default function ProjectCard({ project, index }) {
  const { locale, content } = useTranslations();
  const { title, stack, description, github } = project;
  const gradient = gradients[index % gradients.length];
  const copy = content.projectCard;

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-2xl hover:shadow-[var(--accent)]/20"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--panel)" }}
    >
      <div
        className={`relative mb-6 h-40 overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_60%)] transition duration-500 group-hover:scale-110" />
        <div className="absolute bottom-4 left-4 text-sm font-semibold uppercase tracking-wide text-white">
          {title}
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-xl font-semibold text-[var(--foreground)]">{title}</h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          {description[locale] ?? description.fr}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--panel-muted)" }}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between pt-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            {copy.openSource}
          </span>
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--panel-muted)" }}
          >
            <FiGithub size={18} />
            {copy.code}
          </Link>
        </div>
      </div>
    </article>
  );
}
