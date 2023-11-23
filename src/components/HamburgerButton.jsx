import "styles/HamburgerButton.scss";
import { useState } from "react";
import NavLinks from "./NavLinks";

function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        type="button"
      >
        <span className="sr-only">Menu</span>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <div className={`menu ${isOpen ? 'open' : 'closed'}`}>
        <NavLinks />
      </div>
    </>
  );
}

export default HamburgerButton;
