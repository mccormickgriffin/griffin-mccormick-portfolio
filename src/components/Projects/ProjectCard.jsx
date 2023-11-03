import "styles/ProjectCard.scss";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-name">{props.name}</div>
      <div className="project-description">{props.description}</div>
      <div className="technologies">
        {props.technologies.map((tech, index) => (
          <div className="technology" key={index}>
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
