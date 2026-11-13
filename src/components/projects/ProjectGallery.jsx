import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function ProjectGallery({ screenshots, title }) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  // Sluit de lightbox met Escape
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => e.key === "Escape" && setOpenIndex(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  if (!screenshots?.length) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold text-(--text) mb-6">{t("projects.gallery")}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {screenshots.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpenIndex(i)}
            className="aspect-[3/2] overflow-hidden rounded-lg border border-(--bordercolor) hover:border-(--accent) transition-colors cursor-zoom-in"
          >
            <img src={src} alt={`${title} screenshot ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div onClick={() => setOpenIndex(null)} className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out">
          <img src={screenshots[openIndex]} alt={`${title} screenshot ${openIndex + 1}`} className="max-h-full max-w-full rounded-lg" />
        </div>
      )}
    </section>
  );
}
