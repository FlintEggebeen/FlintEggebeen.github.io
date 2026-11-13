import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectMechanics from "../components/projects/ProjectMechanics";
import ProjectPrevNext from "../components/projects/ProjectPrevNext";
import { useLanguage } from "../context/LanguageContext";
import projectData from "../data/projectdata.json";

export default function ProjectPage() {
    const { projectId } = useParams();
    const { t } = useLanguage();
    const projects = projectData.projects;
    const index = projects.findIndex(p => p.id === projectId);
    const project = projects[index];

    // HashRouter scrollt niet vanzelf naar boven bij wisselen van project
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    if (!project) {
        return <div className="container mx-auto px-4 pt-28 pb-12 text-center">{t("projects.notfound")}</div>;
    }

    const prev = projects[(index - 1 + projects.length) % projects.length];
    const next = projects[(index + 1) % projects.length];

    return (
        <div className="pt-[72px]">
            <ProjectHeader project={project} />

            <div className="container mx-auto px-4 pt-8 pb-16 space-y-16">
                <Link to="/projects" className="inline-block text-(--muted) hover:text-(--accent) transition-colors">
                    ← {t("projects.back")}
                </Link>
                <ProjectInfo project={project} />
                <ProjectGallery screenshots={project.screenshots} title={project.title} />
                <ProjectMechanics mechanics={project.mechanics} />
                <ProjectPrevNext prev={prev} next={next} />
            </div>
        </div>
    );
}
