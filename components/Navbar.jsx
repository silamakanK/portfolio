import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiGlobe,
} from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";
import { useTranslations } from "@/context/LocaleContext";

function NavItem({ href, label, isActive, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative text-sm font-medium tracking-wide transition-colors ${
        isActive
          ? "text-[var(--foreground)]"
          : "text-[var(--muted)] hover:text-[var(--foreground)]"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute inset-x-0 -bottom-2 h-0.5 rounded-full bg-[var(--accent)]" />
      )}
    </Link>
  );
}

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { locale, toggleLocale, content } = useTranslations();

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  const navLinks = [
    { label: content.nav.links.home, href: "/" },
    { label: content.nav.links.about, href: "/about" },
    { label: content.nav.links.projects, href: "/projects" },
    { label: content.nav.links.contact, href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/silamakanK",
      label: content.contact.socials.github,
    },
    {
      icon: FiLinkedin,
      href: "https://linkedin.com/in/silamakan-kamissoko",
      label: content.contact.socials.linkedin,
    },
    {
      icon: FiMail,
      href: "mailto:silamakankamissoko@gmail.com",
      label: content.contact.socials.email,
    },
  ];

  const themeLabel = isDark
    ? content.toggles.theme.light
    : content.toggles.theme.dark;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.4em] text-[var(--foreground)]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] text-base font-bold text-white">
            SK
          </span>
          {content.nav.brand}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              {...link}
              isActive={router.pathname === link.href}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--panel-muted)" }}
            >
              <Icon size={18} />
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="flex h-10 w-10 items-center justify-center rounded-full border text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--panel-muted)" }}
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={content.toggles.locale.label}
            title={content.toggles.locale.label}
            className="flex h-10 min-w-[2.5rem] items-center justify-center gap-2 rounded-full border px-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--panel-muted)" }}
          >
            <FiGlobe size={16} />
            {locale === "fr" ? "EN" : "FR"}
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border text-[var(--foreground)] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? content.nav.menu.close : content.nav.menu.open}
          style={{ borderColor: "var(--border)" }}
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div
          className="border-t px-4 py-4 md:hidden"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                {...link}
                isActive={router.pathname === link.href}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--panel-muted)" }}
              >
                <Icon size={18} />
              </a>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeLabel}
              title={themeLabel}
              className="flex h-10 w-10 items-center justify-center rounded-full border text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--panel-muted)" }}
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => {
                toggleLocale();
                setIsOpen(false);
              }}
              aria-label={content.toggles.locale.label}
              title={content.toggles.locale.label}
              className="flex h-10 min-w-[2.5rem] items-center justify-center gap-2 rounded-full border px-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--panel-muted)" }}
            >
              <FiGlobe size={16} />
              {locale === "fr" ? "EN" : "FR"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
