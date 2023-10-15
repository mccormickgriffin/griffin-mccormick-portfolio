import "styles/MainPageContent.scss";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import MiniProjects from "./MiniProjects";
import FullProjects from "./FullProjects";
import Contact from "./Contact";

function MainPageContent() {
  return (
    <div className="main-page-content">
      <AboutMe />
      <Experience />
      <MiniProjects />
      <FullProjects />
      <Contact />
    </div>
  );
}

export default MainPageContent;
