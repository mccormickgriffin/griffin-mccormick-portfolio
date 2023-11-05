import "styles/Contact.scss";
import { SECTION_IDS } from "lib/consts";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id={SECTION_IDS.CONTACT}>
      <h1>Contact</h1>
      <div className="contact-section-content">
        <div className="contact-prompt">
          <p>Want to make something <b>amazing</b>?</p>
          <p>Let's solve a problem, build an app, <b>change the world</b>.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
