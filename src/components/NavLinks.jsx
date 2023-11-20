import "styles/NavLinks.scss";
import { Link } from "react-scroll";
import { HEADER_HEIGHT, NAV_ITEMS } from "lib/consts";

function NavLinks() {
  return (
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
  );
}

export default NavLinks;
