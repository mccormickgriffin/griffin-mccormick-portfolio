import "styles/ExperienceCardPreview.scss";

function ExperienceCardPreview(props) {
  return (
    <>
      <span className="company">{props.company}</span>
      <span>{props.location}</span>
      <div className="position-title">{props.title}</div>
      <div>
        {props.startDate} - {props.endDate}
      </div>
      <div className="technologies">
        {props.technologies.map((tech, index) => {
          return (
            <div className="technology" key={index}>
              {tech}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ExperienceCardPreview;
