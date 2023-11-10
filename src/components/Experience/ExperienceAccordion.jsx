import "styles/ExperienceAccordian.scss";
import { useState } from "react";
import ExperienceCard from "./ExperienceCard";

// const jobs = [
//   {
//     company: "Give and Take Inc.",
//     location: "Ann Arbor, MI",
//     startDate: "February 2020",
//     endDate: "Present",
//     technologies: [
//       "React",
//       "Ruby on Rails",
//       "Redux",
//       "Postgres",
//       "Docker",
//       "AWS",
//     ],
//     positions: [
//       {
//         title: "Lead Software Engineer",
//         startDate: "Jan 2022",
//         endDate: "Present",
//         bullets: [
//           "Configured and managed AWS infrastructure, including Elastic Beanstalk for product deployments, SNS for mobile notifications, and S3 for scalable image and attachment storage, assuring the smooth operation of the application ",
//           "Orchestrated end-to-end mobile app development, incorporating tools like TestFlight to facilitate comprehensive testing before releasing to both the App Store and Google Play Store",
//           "Reduced page load times by over 40% by making strategic optimizations while removing tech debt, simultaneously simplifying the integration of new code and allowing for more rapid feature development ",
//           "Served as the Technical Lead, responsible for making critical technical decisions, overseeing project architecture, and successfully integrating new team members",
//         ],
//       },
//       {
//         title: "Software Engineer",
//         startDate: "Feb 2020",
//         endDate: "Jan 2022",
//         bullets: [
//           "Built frontend and backend functionality for the application using the React, Redux, and Ruby on Rails frameworks to provide 150+ customers and 100,000+ users with a consistently improving experience",
//           "Designed and architected application changes involving migrations on PostgreSQL databases and expanding the existing RESTful API, resulting in seamless schema transitions and a more robust API infrastructure",
//           "Championed frontend development, leveraging React and Redux to create intuitive user interfaces and increase engagement Implemented responsive design principles, ensuring optimal performance across various devices and screen sizes",
//         ],
//       },
//     ],
//   },
//   {
//     company: "Menlo Innovations",
//     location: "Ann Arbor, MI",
//     startDate: "June 2018",
//     endDate: "September 2019",
//     technologies: ["Angular", ".Net", "Flask", "Express", "MongoDB"],
//     positions: [
//       {
//         title: "Software Developer",
//         bullets: [
//           "Developed software for multiple clients in a variety of domains using different technology stacks, gaining familiarity with several languages like C#, Python, and JavaScript",
//           "Led “Show and Tell” meetings with project stakeholders to keep them up to date with the team’s progress",
//           "Advocated in both long- and short-term resource and project planning to ensure teams were properly allocated for projects to meet goals set by the clients",
//           "Programmed using test driven development principles in a variety of frameworks including Angular, Flask, and .Net to assure code quality and maintainability",
//           "Used pair programming with other developers to both learn and teach programming paradigms and best practices",
//         ],
//       },
//     ],
//   },
// ];
const jobs = [
  {
    company: "Give and Take Inc.",
    location: "Ann Arbor, MI",
    title: "Lead Software Engineer",
    startDate: "Jan. 2022",
    endDate: "Present",
    technologies: [
      "React",
      "Ruby on Rails",
      "Redux",
      "Postgres",
      "Docker",
      "AWS",
    ],
  },

  {
    company: "Give and Take Inc.",
    location: "Ann Arbor, MI",
    title: "Software Engineer",
    startDate: "Feb. 2020",
    endDate: "Jan. 2022",
    technologies: [
      "React",
      "Ruby on Rails",
      "Redux",
      "Postgres",
      "Docker",
      "AWS",
    ],
  },
  {
    company: "Menlo Innovations",
    location: "Ann Arbor, MI",
    title: "Software Developer",
    startDate: "Jun. 2018",
    endDate: "Sept. 2019",
    technologies: ["Angular", ".Net", "Flask", "Express", "MongoDB"],
  },
];

function ExperienceAccordian() {
  return (
    <div id="experience-accordian">
      {jobs.map((job, jobIndex) => {
        return (
          <ExperienceCard key={jobIndex}>
            <span className="company">{job.company}</span>
            <span>{job.location}</span>
            <div className="position-title">{job.title}</div>
            <div className="position-timespan-container">
              {job.startDate} - {job.endDate}
            </div>
            <div className="technologies">
              {job.technologies.map((tech, techIndex) => {
                return (
                  <div className="technology" key={techIndex}>
                    {tech}
                  </div>
                );
              })}
            </div>
          </ExperienceCard>
        );
      })}
    </div>
  );
}

export default ExperienceAccordian;
