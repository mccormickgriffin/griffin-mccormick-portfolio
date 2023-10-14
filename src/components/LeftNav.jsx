import "styles/LeftNav.scss";
import { NAV_ITEMS } from "lib/consts";

function MainNavItem({ label, clickHandler }) {
  return (
    <div>
      <button onClick={clickHandler} type="button">{label}</button>
    </div>
  );
}

function LeftNav() {
  function handleNavClick() {
    // TO DO
    return;
  }

  return (
    <div className="left-nav">
      {NAV_ITEMS.map((navItem) => {
        return (
          <MainNavItem
            clickHandler={() => handleNavClick()}
            key={navItem.path}
            label={navItem.label}
          />
        );
      })}
    </div>
  );
}

export default LeftNav;
