import "../styles/TopNav.scss";

function TopNav() {
  return (
    <nav>
      <div className="left-side">
        <div>logo</div>
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
