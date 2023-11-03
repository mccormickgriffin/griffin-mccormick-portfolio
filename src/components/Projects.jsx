import "styles/Projects.scss";
import { SECTION_IDS } from "lib/consts";
import ProjectCard from "./ProjectCard";
import ProjectTrack from "./ProjectTrack";

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
      "Mobile app helping AA sponsors keep track of sobriety coins and duration",
    technologies: ["Flutter", "Express.js", "Postgres", "Docker", "Firebase"],
  },
  {
    name: "Mail Sending Server",
    description:
      "Stand alone server to help send emails with feedback messages from many applications",
    technologies: ["Express.js", "AWS", "Microservice", "NodeMailer"],
  },
];

function Projects() {
  return (
    <section id={SECTION_IDS.PROJECTS}>
      <h1>Projects</h1>
      <ProjectTrack>
        <div className="fade-to-background">
          <div className="projects-container">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </ProjectTrack>
    </section>
  );
}

export default Projects;
