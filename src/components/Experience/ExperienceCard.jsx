import "styles/ExperienceCard.scss";

function ExperienceCard(props) {
  function handleMouseMove(e) {
    const cards = document.getElementsByClassName("experience-card");
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  }

  return (
    <div onMouseMove={handleMouseMove} className="experience-card">
      <div className="experience-card-border"></div>
      <div className="experience-card-content">{props.children}</div>
    </div>
  );
}

export default ExperienceCard;
