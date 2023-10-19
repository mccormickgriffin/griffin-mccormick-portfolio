import { useState, useEffect } from "react";
import "styles/Dice.scss";

const sides = ["Developer", "Designer", "Dreamer", "Engineer", "Gamer", "Thinker"];

const Dice = () => {
  const [rolling, setRolling] = useState(false);
  const [side, setSide] = useState(0);

  const rollDice = () => {
    if (!rolling) {
      setRolling(true);
      setSide((prevSide) => (prevSide + 1) % sides.length);
      setTimeout(() => {
        setRolling(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rollDice();
    }, 3000);

    return () => clearInterval(interval);
  }, [rolling]);

  const diceClassname = `dice-${side}`;
  return (
    <div className="dice-container">
      <div className={`dice ${diceClassname} ${rolling ? "rolling" : ""}`}>
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
