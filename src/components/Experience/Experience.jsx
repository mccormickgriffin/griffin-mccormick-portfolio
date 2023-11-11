import "styles/Experience.scss";
import { SECTION_IDS } from "lib/consts";
import ExperienceAccordian from "./ExperienceAccordion";

function Experience() {
  return (
    <section id={SECTION_IDS.EXPERIENCE}>
      <h1>Experience</h1>
      <ExperienceAccordian />
      <div>
        See my full resume&nbsp;
        <a
          href={process.env.PUBLIC_URL + "/assets/resume.pdf"}
          download="resume.pdf"
        >
          here
        </a>
      </div>
    </section>
  );
}

export default Experience;
