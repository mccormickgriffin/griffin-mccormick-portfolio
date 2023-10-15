import "styles/MiniProjects.scss";
import { SECTION_IDS } from "lib/consts";
import Orbits from "./ArtWidgets/Orbits";

function MiniProjects() {
  return (
    <section id={SECTION_IDS.MINI_PROJECTS}>
        <Orbits />
    </section>
  );
}

export default MiniProjects;
