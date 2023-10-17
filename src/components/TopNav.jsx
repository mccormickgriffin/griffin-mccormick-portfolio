import "styles/TopNav.scss";
import Logo from "assets/griffinLogo.svg";
import { NAV_ITEMS } from "lib/consts";

function TopNav() {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  } 

  return (
    <header className="top-nav">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="nav-links">
        {NAV_ITEMS.map((navItem) => (
          <button
            key={navItem.scrollId}
            onClick={() => scrollToSection(navItem.scrollId)}
            type="button"
          >
            {navItem.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default TopNav;
