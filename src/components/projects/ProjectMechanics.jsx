import { useLanguage } from "../../context/LanguageContext";

export default function ProjectMechanics({ mechanics }) {
  const { t } = useLanguage();

  if (!mechanics?.length) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold text-(--text) mb-6">{t("projects.mechanics")}</h2>
      <div className="space-y-12">
        {mechanics.map((mechanic) => (
          <article key={mechanic.subtitle} className="grid gap-6 lg:grid-cols-2 items-start">
            <div>
              <h3 className="text-xl font-semibold text-(--accent) mb-3">{mechanic.subtitle}</h3>
              <p className="text-(--muted) leading-relaxed mb-4">{mechanic.description}</p>
              {mechanic.image && (
                <img src={mechanic.image} alt={mechanic.subtitle} className="w-full rounded-lg border border-(--bordercolor)" />
              )}
            </div>

            {mechanic.code && (
              <pre className="overflow-x-auto bg-(--surface) border border-(--bordercolor) rounded-lg p-4 text-sm leading-relaxed text-(--text)">
                <code>{mechanic.code}</code>
              </pre>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
