import PropTypes from "prop-types";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiHtml5,
  SiTypescript,
  SiNodedotjs,
  SiSpring,
  SiRubyonrails,
  SiSymfony,
  SiPhp,
  SiFlutter,
  SiKotlin,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGithubactions,
  SiKubernetes,
  SiTerraform,
  SiGit,
  SiGithub,
  SiGitlab,
  SiVisualstudiocode,
  SiLinux,
  SiAndroidstudio,
} from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { skills } from "@/data/skills";
import { useTranslations } from "@/context/LocaleContext";

const iconMap = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  Angular: SiAngular,
  TailwindCSS: SiTailwindcss,
  "HTML/CSS/JS": SiHtml5,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  "Java (Spring Boot)": SiSpring,
  "Ruby on Rails": SiRubyonrails,
  Symfony: SiSymfony,
  PHP: SiPhp,
  Flutter: SiFlutter,
  Kotlin: SiKotlin,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  "CI/CD": SiGithubactions,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  "VS Code": SiVisualstudiocode,
  Linux: SiLinux,
  "Android Studio": SiAndroidstudio,
};

function SkillBadge({ name }) {
  const Icon = iconMap[name] ?? FiSettings;
  return (
    <div
      className="group flex items-center gap-3 rounded-2xl border px-4 py-3 transition hover:border-[var(--accent)] hover:bg-[var(--accent)]/10"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--panel-muted)" }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[var(--accent)] group-hover:bg-white/15 group-hover:text-[var(--foreground)]">
        <Icon size={20} />
      </div>
      <span className="text-sm font-medium text-[var(--foreground)]">{name}</span>
    </div>
  );
}

SkillBadge.propTypes = { name: PropTypes.string.isRequired };

export default function SkillsGrid() {
  const { content } = useTranslations();

  return (
    <section className="space-y-8">
      <header>
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">
          {content.home.skills.title}
        </h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          {content.home.skills.description}
        </p>
      </header>
      <div className="grid gap-6">
        {skills.map(({ id, items }) => (
          <div
            key={id}
            className="rounded-3xl border p-6"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--panel)" }}
          >
            <h3 className="text-base font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
              {content.skills.categories[id]}
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((name) => (
                <SkillBadge key={name} name={name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
