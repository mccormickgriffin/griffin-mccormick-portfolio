import { useState, useEffect } from "react";
import "styles/Dice.scss";

const sides = [
  "Developer",
  "Dreamer",
  "Engineer",
  "Humanitarian",
  "Gamer",
  "Problem Solver",
];

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
  }, [rolling, rollDice]);

  const diceClassname = `dice-${side}`;
  return (
    <div className="dice-container">
      <div className={`dice ${diceClassname} ${rolling ? "rolling" : ""}`}>
        <div className="side front">
          <img src="images/developer.jpg" alt="" />
          <p>{sides[0]}</p>
        </div>
        <div className="side back">
          <img src="images/dreamer.jpg" alt="" />
          <p>{sides[1]}</p>
        </div>
        <div className="side right">
          <img src="images/engineer.jpg" alt="" />
          <p>{sides[2]}</p>
        </div>
        <div className="side left">
          <img src="images/humanitarian.jpg" alt="" />
          <p>{sides[3]}</p>
        </div>
        <div className="side top">
          <img src="images/gamer.jpg" alt="" />
          <p>{sides[4]}</p>
        </div>
        <div className="side bottom">
          <img src="images/problem_solver.png" alt="" />
          <p>{sides[5]}</p>
        </div>
      </div>
    </div>
  );
};

export default Dice;
