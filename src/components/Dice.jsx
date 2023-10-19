import { useState } from "react";
import "styles/Dice.scss";

const sides = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

const Dice = () => {
  const [rolling, setRolling] = useState(false);
  const [side, setSide] = useState(0);

  const rollDice = () => {
    if (!rolling) {
      setRolling(true);
      setSide((side + 1) % sides.length)
      setTimeout(() => {
        setRolling(false);
      }, 2000);
    }
  };

  const diceClassname = `dice-${side}`;
  return (
    <div className="dice-container" onClick={rollDice}>
      <div className={`dice ${diceClassname} ${rolling ? 'rolling' : ''}`}>
        <div className="side front">{sides[0]}</div>
        <div className="side back">{sides[1]}</div>
        <div className="side right">{sides[2]}</div>
        <div className="side left">{sides[3]}</div>
        <div className="side top">{sides[4]}</div>
        <div className="side bottom">{sides[5]}</div>
      </div>
    </div>
  );
};

export default Dice;
