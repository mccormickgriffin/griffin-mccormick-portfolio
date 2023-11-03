import "styles/MainPageContent.scss";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Contact from "./Contact";
import Projects from "./Projects/Projects";

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
