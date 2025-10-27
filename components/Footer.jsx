import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useTranslations } from "@/context/LocaleContext";

const year = new Date().getFullYear();

export default function Footer() {
  const { content } = useTranslations();

  const links = [
    {
      href: "https://github.com/silamakanK",
      label: content.contact.socials.github,
      icon: FiGithub,
    },
    {
      href: "https://linkedin.com/in/silamakan-kamissoko",
      label: content.contact.socials.linkedin,
      icon: FiLinkedin,
    },
    {
      href: "mailto:silamakankamissoko@gmail.com",
      label: content.contact.socials.email,
      icon: FiMail,
    },
  ];

  return (
    <footer
      className="border-t"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {year} Silamakan KAMISSOKO. {content.footer.message}
        </p>
        <div className="flex items-center gap-4">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border px-3 py-2 transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--panel-muted)" }}
            >
              <Icon size={16} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
