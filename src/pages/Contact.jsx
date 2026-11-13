import { useState } from "react";
import { siteConfig } from "../siteConfig";
import { useLanguage } from "../context/LanguageContext";

const icons = {
  github: (
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  ),
  itch: (
    <path d="M3.13 1.34C2.08 1.96.02 4.33 0 4.95v1.03c0 1.3 1.22 2.45 2.33 2.45 1.33 0 2.44-1.1 2.44-2.41 0 1.31 1.07 2.41 2.4 2.41 1.33 0 2.36-1.1 2.36-2.41 0 1.31 1.14 2.41 2.47 2.41h.02c1.33 0 2.47-1.1 2.47-2.41 0 1.31 1.03 2.41 2.36 2.41 1.33 0 2.4-1.1 2.4-2.41 0 1.31 1.11 2.41 2.44 2.41C22.78 8.43 24 7.28 24 5.98V4.95c-.02-.62-2.08-2.99-3.13-3.61-3.26-.11-5.52-.13-8.87-.13-3.35 0-7.92.05-8.87.13Zm6.36 6.47a2.75 2.75 0 0 1-4.74 0 2.75 2.75 0 0 1-2.42 1.42c-.26 0-.53-.07-.75-.15-.31 3.25-.11 7.5.03 9.24.19 3.13 3.52 3.38 6.08 3.47 2.32.06 4.75.07 4.31.07 2.18 0 4.75-.03 7.09-.12 2.56-.09 5.89-.34 6.08-3.47.14-1.74.34-5.99.03-9.24-.22.08-.49.15-.75.15a2.75 2.75 0 0 1-2.42-1.42 2.75 2.75 0 0 1-4.74 0 2.75 2.75 0 0 1-2.37 1.42h-.01a2.75 2.75 0 0 1-2.37-1.42Zm-1.6 3.06c1.07 0 2.02 0 3.2 1.29a33 33 0 0 1 1.83-.11c.6 0 1.23.04 1.83.11 1.18-1.29 2.13-1.29 3.2-1.29.5 0 2.52 0 3.93 3.96l1.52 5.43c1.12 4.04-.36 4.14-2.2 4.14-2.74-.1-4.26-2.09-4.26-4.09-1.52.25-3.29.37-5.06 0 0 2-1.52 3.99-4.26 4.09-1.84 0-3.32-.1-2.2-4.14l1.52-5.43c1.41-3.96 3.43-3.96 3.93-3.96ZM12 13.98s-2.87 2.64-3.39 3.57l1.88-.07v1.64c0 .08.75.05 1.51.01.76.04 1.51.07 1.51-.01v-1.64l1.88.07c-.52-.93-3.39-3.57-3.39-3.57Z" />
  ),
};

const platforms = [
  { key: "github", label: "GitHub" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "itch", label: "itch.io" },
];

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const socials = platforms.filter(p => siteConfig.socials[p.key]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.socials.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Klembord niet beschikbaar; de mailto-knop werkt nog steeds
    }
  };

  return (
    <main className="container mx-auto px-4 pt-28 pb-12">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-(--text) mb-4">{t("contact.title")}</h1>
        <p className="text-lg text-(--muted) leading-relaxed mb-12">
          {t("contact.subtitle")}
        </p>

        {/* Contact Card */}
        <div className="bg-(--surface) rounded-lg border border-(--bordercolor) p-8 hover:border-(--accent) hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-(--accent) rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <span className="text-xl">✉️</span>
            </div>
            <h2 className="text-2xl font-bold text-(--text)">{t("contact.card.title")}</h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="inline-block bg-(--accent) text-(--accent-text) px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-lg hover:brightness-110 break-all"
            >
              {siteConfig.socials.email}
            </a>
            <button
              onClick={copyEmail}
              className="px-4 py-3 rounded-lg font-semibold border border-(--bordercolor) text-(--text) hover:border-(--accent) hover:text-(--accent)"
            >
              {copied ? t("contact.copied") : t("contact.copy")}
            </button>
          </div>

          <p className="text-(--muted) mt-4 hover:text-(--text) transition-colors">
            {t("contact.card.hint")}
          </p>
        </div>

        {/* Socials */}
        {socials.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-(--text) mb-6">{t("contact.socials")}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {socials.map(({ key, label }) => (
                <a
                  key={key}
                  href={siteConfig.socials[key]}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 bg-(--surface) rounded-lg border border-(--bordercolor) p-5 hover:border-(--accent) hover:-translate-y-1 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 fill-(--accent)" aria-hidden="true">
                    {icons[key]}
                  </svg>
                  <div className="min-w-0">
                    <p className="font-semibold text-(--text)">{label}</p>
                    <p className="text-sm text-(--muted) truncate">
                      {siteConfig.socials[key].replace(/^https?:\/\/(www\.)?/, "")}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
