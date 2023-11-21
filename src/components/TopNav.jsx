import "styles/TopNav.scss";
import { Link } from "react-scroll";
import Logo from "assets/griffinLogo.svg";
import { BREAKS, HEADER_HEIGHT, SECTION_IDS } from "lib/consts";
import NavLinks from "./NavLinks";
import ResponsiveComponent from "./ResponsiveComponent";
import HamburgerButton from "./HamburgerButton";

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
      <ResponsiveComponent
        MobileComponent={HamburgerButton}
        DesktopComponent={NavLinks}
        breakpoint={BREAKS.DESKTOP}
      />
    </header>
  );
}

export default TopNav;
