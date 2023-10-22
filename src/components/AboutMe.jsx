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
          <h1>Hi! My name is Griffin,</h1>
          <h2>
            and I am a{" "}
            <span className="highlight">Full Stack Web Developer</span>.
          </h2>
          <p className="bio">
            I love all things technology from developing{" "}
            <span className="highlight">web</span> and{" "}
            <span className="highlight">mobile</span> applications to playing
            video games. I have always been passionate about both learning and
            teaching <span className="highlight">software development</span>{" "}
            techniques and principles.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
