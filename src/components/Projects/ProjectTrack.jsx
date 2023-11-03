import React, { useState, useRef } from 'react';
import "styles/ProjectTrack.scss";

function ProjectTrack(props) {
    const [mouseDownAt, setMouseDownAt] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const trackRef = useRef(null);
  
    const handleMouseDown = e => {
      setMouseDownAt(e.clientX);
    };
  
    const handleMouseUp = () => {
      setMouseDownAt(0);
      setPrevPercentage(percentage);
    };
  
    const handleMouseMove = e => {
      if (mouseDownAt === 0 || !trackRef.current) return;
  
      const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth / 2;
  
      const newPercentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(prevPercentage) + newPercentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
      setPercentage(nextPercentage);
  
      const track = trackRef.current;
      track.style.transform = `translate(${nextPercentage}%)`;
  
      const images = track.getElementsByClassName('image');
      for (const image of images) {
        image.style.objectPosition = `${100 + nextPercentage}% center`;
      }
    };
  
    return (
      <div
        id="image-track"
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onTouchStart={e => handleMouseDown(e.touches[0])}
        onMouseUp={handleMouseUp}
        onTouchEnd={e => handleMouseUp(e.touches[0])}
        onMouseMove={handleMouseMove}
        onTouchMove={e => handleMouseMove(e.touches[0])}
      >
        {props.children}
      </div>
    );
}

export default ProjectTrack;
