import { useState } from "react";
import Head from "next/head";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSmartphone,
} from "react-icons/fi";
import { useTranslations } from "@/context/LocaleContext";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const { content } = useTranslations();
  const contact = content.contact;

  const socialItems = [
    {
      label: contact.socials.email,
      href: "mailto:silamakankamissoko@gmail.com",
      icon: FiMail,
      isExternal: false,
    },
    {
      label: contact.socials.phone,
      href: "tel:+33758042129",
      icon: FiSmartphone,
      isExternal: false,
    },
    {
      label: contact.socials.github,
      href: "https://github.com/silamakanK",
      icon: FiGithub,
      isExternal: true,
    },
    {
      label: contact.socials.linkedin,
      href: "https://linkedin.com/in/silamakan-kamissoko",
      icon: FiLinkedin,
      isExternal: true,
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Send failed");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>{`${contact.title} · Silamakan KAMISSOKO`}</title>
      </Head>
      <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold text-[var(--foreground)]">{contact.title}</h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">{contact.intro}</p>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border p-6"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--panel)" }}
          >
            <div>
              <label
                htmlFor="name"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]"
              >
                {contact.form.nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={contact.form.namePlaceholder}
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]"
              >
                {contact.form.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={contact.form.emailPlaceholder}
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]"
              >
                {contact.form.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder={contact.form.messagePlaceholder}
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-[var(--accent)]/40 disabled:cursor-not-allowed disabled:opacity-80"
            >
              {status === "sending" ? contact.form.sending : contact.form.submit}
            </button>
            {status === "sent" && (
              <p className="text-xs text-green-400">{contact.form.feedback}</p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-400">{contact.form.error}</p>
            )}
          </form>
        </div>
        <aside
          className="space-y-6 rounded-3xl border p-6"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--panel)" }}
        >
          <h2 className="text-base font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]">
            {contact.asideTitle}
          </h2>
          <p className="text-sm text-[var(--muted)]">{contact.asideDescription}</p>
          <div className="grid gap-3">
            {socialItems.map(({ label, href, icon: Icon, isExternal }) => (
              <a
                key={label}
                href={href}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--panel-muted)" }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[var(--accent)]">
                  <Icon size={18} />
                </span>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
