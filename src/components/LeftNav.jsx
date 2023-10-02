import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "styles/LeftNav.scss";
import { PATHS } from "lib/paths";

function MainNavItem({ label, clickHandler }) {
  return (
    <div>
      <button onClick={clickHandler}>{label}</button>
    </div>
  );
}

function LeftNav() {
  const [selectedNav, setSelectedNav] = useState(PATHS.ABOUT_ME);
  const navigate = useNavigate();

  const navItems = [
    { label: "About Me", path: PATHS.ABOUT_ME, children: [] },
    { label: "Experience", path: PATHS.EXPERIENCE, children: [] },
    { label: "Mini Projects", path: PATHS.MINI_PROJECTS, children: [] },
    { label: "Full Projects", path: PATHS.FULL_PROJECTS, children: [] },
    { label: "Contact", path: PATHS.CONTACT, children: [] },
  ];

  function handleNavClick(path) {
    setSelectedNav(path);
    navigate(path);
  }

  return (
    <div className="left-nav">
      {navItems.map((navItem) => {
        return (
          <MainNavItem
            clickHandler={() => handleNavClick(navItem.path)}
            key={navItem.path}
            label={navItem.label}
          />
        );
      })}
    </div>
  );
}

export default LeftNav;
