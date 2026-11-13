import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function ProjectPrevNext({ prev, next }) {
  const { t } = useLanguage();

  return (
    <nav className="flex flex-col sm:flex-row justify-between gap-4 border-t border-(--bordercolor) pt-8">
      <Link to={`/projects/${prev.id}`} className="text-(--muted) hover:text-(--accent) transition-colors">
        <span className="block text-sm">← {t("projects.prev")}</span>
        <span className="text-lg font-semibold">{prev.title}</span>
      </Link>
      <Link to={`/projects/${next.id}`} className="sm:text-right text-(--muted) hover:text-(--accent) transition-colors">
        <span className="block text-sm">{t("projects.next")} →</span>
        <span className="text-lg font-semibold">{next.title}</span>
      </Link>
    </nav>
  );
}
