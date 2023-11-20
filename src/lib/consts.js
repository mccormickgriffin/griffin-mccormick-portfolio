export const SECTION_IDS = {
  ABOUT_ME: "about-me",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  CONTACT: "contact",
};

export const NAV_ITEMS = [
  { label: "About Me", scrollId: SECTION_IDS.ABOUT_ME },
  { label: "Experience", scrollId: SECTION_IDS.EXPERIENCE },
  { label: "Projects", scrollId: SECTION_IDS.PROJECTS },
  { label: "Contact", scrollId: SECTION_IDS.CONTACT },
];

export const PROJECTS = [
  {
    name: "This Portfolio",
    description: "What you are looking at right now - a place to show off some of my skills practice new techniques",
    technologies: [
      "React",
      "HTML",
      "SCSS",
      "AWS",
    ],
  },
  {
    name: "Axol Music",
    description: "App to automate playlist customization",
    technologies: [
      "Angular",
      "Express.js",
      "Postgres",
      "Spotify API",
      "Docker",
      "AWS",
    ],
  },
  {
    name: "Anniversaries",
    description:
      "Mobile app helping AA sponsors keep track of sobriety coins and duration",
    technologies: ["Flutter", "Express.js", "Postgres", "Docker", "Firebase"],
  },
  {
    name: "AiRT COLLECTION",
    description:
      "Gallery of AI created art organized by category and source",
    technologies: ["Next.js", "Tailwind", "Typescript", "AWS"],
  },
  {
    name: "Mail Sending Server",
    description:
      "Stand alone server to help send emails with feedback messages from many applications",
    technologies: ["Express.js", "AWS", "Microservice", "NodeMailer"],
  },
];

// export const jobs = [
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
export const JOBS = [
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

export const HEADER_HEIGHT = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue(
    "--top-nav-height"
  ),
  10
);
