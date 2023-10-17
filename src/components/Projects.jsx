import "styles/Projects.scss";
import { SECTION_IDS } from "lib/consts";
import Orbits from "./ArtWidgets/Orbits";

function Projects() {
  return (
    <section id={SECTION_IDS.PROJECTS}>
        <Orbits />
    </section>
  );
}

export default Projects;
