import "styles/AboutMe.scss";
import { SECTION_IDS } from "lib/consts";
import Dice from "./Dice";

function AboutMe() {
  return (
    <section id={SECTION_IDS.ABOUT_ME}>
      <div className="about-me-left">
        <Dice />
      </div>
      <div className="about-me-right">
        <div>
          <h1>Hi! My name is Griffin and I am a full stack web developer.</h1>
          <p>
            I love all things technology from developing web and mobile
            application to playing video games. I have always been passionate
            about both learning and teaching software development techniques and
            principles.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
