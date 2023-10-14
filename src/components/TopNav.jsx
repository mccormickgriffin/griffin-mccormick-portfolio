import "styles/TopNav.scss";
import Logo from "assets/griffinLogo.svg";
import { NAV_ITEMS } from "lib/consts";

function TopNav() {
  return (
    <nav className="top-nav">
      <div className="left-side">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="right-side">
        {NAV_ITEMS.map((navItem) => (
          <button type="button">{navItem.label}</button>
        ))}
      </div>
    </nav>
  );
}

export default TopNav;
