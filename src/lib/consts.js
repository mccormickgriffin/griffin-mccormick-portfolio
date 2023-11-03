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
    name: "Mail Sending Server",
    description:
      "Stand alone server to help send emails with feedback messages from many applications",
    technologies: ["Express.js", "AWS", "Microservice", "NodeMailer"],
  },
];
