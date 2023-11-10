import "styles/MainPage.scss";
import AboutMe from "./AboutMe";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Contact from "./Contact";

function MainPage() {
  return (
    <main className="main-page">
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default MainPage;
