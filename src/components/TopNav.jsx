import "styles/TopNav.scss";
import { Link } from "react-scroll";
import Logo from "assets/griffinLogo.svg";
import { NAV_ITEMS, SECTION_IDS } from "lib/consts";

const HEADER_HEIGHT = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue(
    "--top-nav-height"
  ),
  10
);

function TopNav() {
  return (
    <header className="top-nav">
      <Link
        className="home-nav"
        to={SECTION_IDS.ABOUT_ME}
        smooth={true}
        offset={-HEADER_HEIGHT}
        duration={500}
      >
        <img src={Logo} alt="Logo" />
        <span>
          <b>Griffin</b>&nbsp;McCormick
        </span>
      </Link>
      <nav className="nav-links">
        {NAV_ITEMS.map((navItem, index) => (
          <Link
            key={index}
            to={navItem.scrollId}
            smooth={true}
            offset={-HEADER_HEIGHT}
            duration={500}
          >
            {navItem.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default TopNav;
