// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// const Dice = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     let scene, camera, renderer, dice;

//     const sides = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

//     const init = () => {
//       scene = new THREE.Scene();
//       camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
//       camera.position.z = 5;

//       const canvas = mountRef.current;
//       renderer = new THREE.WebGLRenderer({ canvas });
//       renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

//       const controls = new OrbitControls(camera, renderer.domElement);

//       const geometry = new THREE.BoxGeometry(1, 1, 1);
//       const materials = sides.map((text) => {
//         const canvas = document.createElement('canvas');
//         const context = canvas.getContext('2d');
//         canvas.width = 256;
//         canvas.height = 256;
//         context.fillStyle = 'blue';
//         context.fillRect(0, 0, canvas.width, canvas.height);
//         context.font = '20px Arial';
//         context.fillStyle = 'black';
//         context.fillText(text, 80, 120);

//         const texture = new THREE.CanvasTexture(canvas);
//         return new THREE.MeshBasicMaterial({ map: texture });
//       });

//       dice = new THREE.Mesh(geometry, materials);
//       scene.add(dice);

//       const animate = () => {
//         requestAnimationFrame(animate);

//         dice.rotation.x += 0.01;
//         dice.rotation.y += 0.01;

//         renderer.render(scene, camera);
//       };

//       animate();

//       const handleRoll = () => {
//         const randomIndex = Math.floor(Math.random() * sides.length);
//         dice.material = materials[randomIndex];
//       };

//       canvas.addEventListener('click', handleRoll);

//       return () => {
//         canvas.removeEventListener('click', handleRoll);
//       };
//     };

//     init();
//   }, []);

//   return <canvas ref={mountRef} />;
// };

// export default Dice;

import React, { useState } from "react";
import "styles/Dice.scss"; // add your own CSS file for styling

const sides = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

const Dice = () => {
  const [result, setResult] = useState('');
  const [rolling, setRolling] = useState(false);
  const [side, setSide] = useState(0);

  const rollDice = () => {
    if (!rolling) {
      setRolling(true);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * sides.length);
        setResult(sides[randomIndex]);
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
