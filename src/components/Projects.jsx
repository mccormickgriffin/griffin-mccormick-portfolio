import "styles/Projects.scss";
import { SECTION_IDS } from "lib/consts";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Axol Music",
    description: "App to automate playlist customization",
    technologies: [
      "Angular",
      "Express.js",
      "Postgres",
      "Spotify API",
      "Docker",
      "AWS",
    ],
  },
  {
    name: "Anniversaries",
    description:
      "Helping AA sponsors keep track of sobriety coins and duration",
    technologies: ["Flutter", "Express.js", "Postgres", "Docker", "Firebase"],
  },
];

function Projects() {
  return (
    <section id={SECTION_IDS.PROJECTS}>
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
