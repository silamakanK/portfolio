import Head from "next/head";
import Link from "next/link";
import { useTranslations } from "@/context/LocaleContext";

export default function About() {
  const { content } = useTranslations();
  const about = content.about;

  return (
    <>
      <Head>
        <title>{`${about.title} · Silamakan KAMISSOKO`}</title>
      </Head>
      <div className="space-y-16">
        <section className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold text-[var(--foreground)]">{about.title}</h1>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-[var(--muted)]">
                {paragraph}
              </p>
            ))}
          </div>
          <aside
            className="rounded-3xl border p-6 text-sm text-[var(--muted)]"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--panel)" }}
          >
            <h2 className="text-base font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]">
              {about.contactCard.title}
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <span className="font-medium text-[var(--foreground)]">{about.contactCard.emailLabel}</span>
                <br />
                <a
                  href="mailto:silamakankamissoko@gmail.com"
                  className="hover:text-[var(--foreground)]"
                >
                  silamakankamissoko@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">{about.contactCard.phoneLabel}</span>
                <br />
                <a href="tel:+33758042129" className="hover:text-[var(--foreground)]">
                  +33 7 58 40 21 29
                </a>
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">{about.contactCard.locationLabel}</span>
                <br />
                Stains · Île-de-France
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">{about.contactCard.availabilityLabel}</span>
                <br />
                {about.contactCard.availabilityValue}
              </li>
            </ul>
          </aside>
        </section>

        <section className="space-y-8">
          <header>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              {about.education.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {about.education.description}
            </p>
          </header>
          <div className="space-y-6">
            {about.education.items.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border p-6"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--panel)" }}
              >
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
                      {item.school} · {item.period}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  {item.bullets.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">{about.values.title}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {about.values.items.map(({ title, description }) => (
              <div
                key={title}
                className="rounded-3xl border p-6"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--panel)" }}
              >
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{title}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="rounded-3xl border p-8 text-center"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--panel)" }}
        >
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">{about.cv.title}</h2>
          <p className="mt-3 text-sm text-[var(--muted)]">{about.cv.description}</p>
          <Link
            href="/cv.pdf"
            target="_blank"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-[var(--accent)]/30"
          >
            {about.cv.cta}
          </Link>
          <p className="mt-3 text-xs text-[var(--muted)]">{about.cv.note}</p>
        </section>
      </div>
    </>
  );
}
