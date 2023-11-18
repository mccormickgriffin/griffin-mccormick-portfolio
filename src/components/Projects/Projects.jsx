import "styles/Projects.scss";
import { SECTION_IDS } from "lib/consts";
import ProjectTrack from "./ProjectTrack";
import ProjectCards from "./ProjectCrards";

function Projects() {
  return (
    <section id={SECTION_IDS.PROJECTS}>
      <h1>Projects</h1>
      <div className="project-section-content">
        {/* <div className="fade-to-background"> */}
          <ProjectTrack>
            <ProjectCards />
          </ProjectTrack>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Projects;
