import "styles/Experience.scss";
import { SECTION_IDS } from "lib/consts";

function Experience() {
  return (
    <section id={SECTION_IDS.EXPERIENCE}>
      <div>
        <div>Give and Take Inc. | Ann Arbor, MI</div>
        <div>February 2020 - Present</div>
        <div>Software Engineer (Feb 2020 - Jan 2022)</div>
        <div>
          Built frontend and backend functionality for the application using the
          React, Redux, and Ruby on Rails frameworks to provide 150+ customers
          and 100,000+ users with a consistently improving experience Designed
          and architected application changes involving migrations on PostgreSQL
          databases and expanding the existing RESTful API, resulting in
          seamless schema transitions and a more robust API infrastructure
          Championed frontend development, leveraging React and Redux to create
          intuitive user interfaces and increase engagement Implemented
          responsive design principles, ensuring optimal performance across
          various devices and screen sizes
        </div>
        <div>Lead Software Engineer (Jan 2022 - Present)</div>
        <div>
          Configured and managed AWS infrastructure, including Elastic Beanstalk
          for product deployments, SNS for mobile notifications, and S3 for
          scalable image and attachment storage, assuring the smooth operation
          of the application Orchestrated end-to-end mobile app development,
          incorporating tools like TestFlight to facilitate comprehensive
          testing before releasing to both the App Store and Google Play Store
          Reduced page load times by over 40% by making strategic optimizations
          while removing tech debt, simultaneously simplifying the integration
          of new code and allowing for more rapid feature development Served as
          the Technical Lead, responsible for making critical technical
          decisions, overseeing project architecture, and successfully
          integrating new team members
        </div>
      </div>

      <div>
        <div>Menlo Innovations | Ann Arbor, MI</div>
        <div>June 2018 - September 2019</div>
        <div>Software Developer</div>
        <div>
          Developed software for multiple clients in a variety of domains using
          different technology stacks, gaining familiarity with several
          languages like C#, Python, and JavaScript Led “Show and Tell” meetings
          with project stakeholders to keep them up to date with the team’s
          progress Advocated in both long- and short-term resource and project
          planning to ensure teams were properly allocated for projects to meet
          goals set by the clients Programmed using test driven development
          principles in a variety of frameworks including Angular, Ember, and
          .Net to assure code quality and maintainability Used pair programming
          with other developers to both learn and teach programming paradigms
          and best practices
        </div>
      </div>

      <div>
        See my full resume&nbsp;
        <a
          href={process.env.PUBLIC_URL + "/assets/resume.pdf"}
          download="resume.pdf"
        >
          here
        </a>
      </div>
    </section>
  );
}

export default Experience;
