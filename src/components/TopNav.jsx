import "styles/TopNav.scss";
import { Link } from "react-scroll";
import Logo from "assets/griffinLogo.svg";
import { NAV_ITEMS } from "lib/consts";

const HEADER_HEIGHT = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue(
    "--top-nav-height"
  ),
  10
);

function TopNav() {

  return (
    <header className="top-nav">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
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
