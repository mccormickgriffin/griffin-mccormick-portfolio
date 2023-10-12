import { Routes, Route } from "react-router-dom";

import "styles/MainPage.scss";
import { PATHS } from "lib/paths";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import MiniProjects from "./MiniProjects";
import FullProjects from "./FullProjects";
import Contact from "./Contact";

function MainPageContent() {
  return (
    <div className="main-page-content">
      <Routes>
        <Route path={PATHS.ABOUT_ME} element={<AboutMe />} />
        <Route path={PATHS.EXPERIENCE} element={<Experience />} />
        <Route path={PATHS.MINI_PROJECTS} element={<MiniProjects />} />
        <Route path={PATHS.FULL_PROJECTS} element={<FullProjects />} />
        <Route path={PATHS.CONTACT} element={<Contact />} />
      </Routes>
    </div>
  );
}

export default MainPageContent;
