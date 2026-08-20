import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiServer, FiGitBranch, FiShield } from "react-icons/fi";
import { useTranslations } from "@/context/LocaleContext";

const highlightIcons = [FiServer, FiGitBranch, FiShield];

export default function HeroSection() {
  const { content } = useTranslations();
  const { hero } = content;

  return (
    <section className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
      <div className="space-y-8">
        <span
          className="animate-fade-up-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider text-[var(--muted)]"
          style={{ backgroundColor: "var(--panel-muted)" }}
        >
          {hero.badge}
        </span>
        <div className="animate-fade-up-2">
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl">
            {hero.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            {hero.description}
          </p>
        </div>

        <div className="animate-fade-up-3 grid gap-3 sm:grid-cols-2">
          {hero.highlights.map((item, i) => {
            const Icon = highlightIcons[i];
            return (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border p-4 text-sm text-[var(--muted)]"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--panel)" }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/15 text-[var(--accent)]">
                  <Icon size={16} />
                </span>
                {item}
              </div>
            );
          })}
        </div>

        <div className="animate-fade-up-4 flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-[var(--accent)]/40"
          >
            {hero.ctaProjects}
            <FiArrowRight size={18} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
            style={{ borderColor: "var(--border)" }}
          >
            {hero.ctaContact}
            <FiArrowRight size={18} />
          </Link>
        </div>

        <div className="animate-fade-up-5 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
          <span
            className="rounded-full border px-3 py-1"
            style={{ borderColor: "var(--border)" }}
          >
            {hero.locationTag}
          </span>
          <span
            className="rounded-full border px-3 py-1"
            style={{ borderColor: "var(--border)" }}
          >
            {hero.rhythmTag}
          </span>
          <span
            className="rounded-full border px-3 py-1"
            style={{ borderColor: "var(--border)" }}
          >
            {hero.availabilityTag}
          </span>
        </div>
      </div>

      <div className="animate-fade-up relative mx-auto h-72 w-72 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[var(--accent)]/30 via-transparent to-purple-900/40 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.2),transparent_60%),radial-gradient(circle_at_80%_0%,rgba(244,114,182,0.25),transparent_55%)]" />
        <Image
          src="/images/profile.jpg"
          alt="Silamakan KAMISSOKO"
          fill
          sizes="288px"
          className="object-cover object-top"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <p className="text-sm font-semibold text-white">{hero.portraitRole}</p>
          <p className="text-xs text-[var(--muted)]">{hero.portraitDegree}</p>
        </div>
      </div>
    </section>
  );
}
