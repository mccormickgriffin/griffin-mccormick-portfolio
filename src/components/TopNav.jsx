import "styles/TopNav.scss";
import Logo from "assets/griffinLogo.svg";

function TopNav() {
  return (
    <nav>
      <div className="left-side">
        <img src={Logo} alt="Logo" />
      </div>
    </nav>
  );
}

export default TopNav;
