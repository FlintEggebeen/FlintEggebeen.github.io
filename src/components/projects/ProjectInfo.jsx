import { useLanguage } from "../../context/LanguageContext";

export default function ProjectInfo({ project }) {
  const { t } = useLanguage();
  const links = [
    { label: "GitHub", url: project.git },
    { label: "itch.io", url: project.itch },
  ].filter(link => link.url);

  return (
    <section className="grid gap-10 md:grid-cols-[1fr_16rem]">
      {/* Beschrijving + video */}
      <div>
        <h2 className="text-2xl font-bold text-(--text) mb-4">{t("projects.about")}</h2>
        <div className="space-y-4">
          {project.description.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-lg text-(--muted) leading-relaxed">{paragraph}</p>
          ))}
        </div>

        {project.youtube && (
          <div className="mt-8 aspect-video rounded-lg overflow-hidden border border-(--bordercolor)">
            <iframe
              src={project.youtube}
              title={project.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>

      {/* Zijbalk met details */}
      <aside className="h-fit bg-(--surface) border border-(--bordercolor) rounded-lg p-6 space-y-5">
        <div>
          <h3 className="text-sm uppercase tracking-wider text-(--muted) mb-1">{t("projects.role")}</h3>
          <p className="text-(--text) font-semibold">{project.projectRole}</p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-wider text-(--muted) mb-1">{t("projects.timeline")}</h3>
          <p className="text-(--text) font-semibold">{project.timeline}</p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-wider text-(--muted) mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>
        </div>
        {links.length > 0 && (
          <div className="flex flex-col gap-2 pt-2">
            {links.map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-center px-4 py-2 rounded-lg font-semibold bg-(--accent) text-(--accent-text)"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </aside>
    </section>
  );
}
