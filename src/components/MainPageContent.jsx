import "styles/MainPageContent.scss";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function MainPageContent() {
  return (
    <div className="main-page-content">
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default MainPageContent;
