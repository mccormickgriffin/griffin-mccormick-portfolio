import { useState } from "react";
import "styles/ExperienceAccordion.scss";
import ExperienceCard from "./ExperienceCard";
import ExperienceCardPreview from "./ExperienceCardPreview";
import ExperienceCardDetails from "./ExperienceCardDetails";
import { JOBS } from "lib/consts";

function ExperienceAccordian() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div id="experience-accordian">
      {JOBS.map((job, index) => {
        return (
          <ExperienceCard
            clickHandler={() => handleItemClick(index)}
            key={index}
            expanded={activeIndex === index}
            preview={<ExperienceCardPreview {...job} />}
            expandedContent={<ExperienceCardDetails {...job} />}
          />
        );
      })}
    </div>
  );
}

export default ExperienceAccordian;
