import "../styles/TopNav.scss";
import Logo from "assets/griffinLogo.svg";

function TopNav() {
  return (
    <nav>
      <div className="left-side">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="right-side">
        <li>Projects</li>
        <li>Experience</li>
        <li>Face</li>
      </ul>
    </nav>
  );
}

export default TopNav;
