import "styles/ProjectCards.scss";
import { PROJECTS } from "lib/consts";
import ProjectCard from "./ProjectCard";

function ProjectCards() {
  return (
    <div className="projects-container">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
}

export default ProjectCards;
