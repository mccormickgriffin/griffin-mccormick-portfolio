import "styles/Contact.scss";
import { SECTION_IDS } from "lib/consts";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id={SECTION_IDS.CONTACT}>
      <h1>Contact</h1>
      <div className="contact-section-content">
        <div>
          <p>Want to make something amazing?</p>
          <p>Let's solve a problem, build an app, change the world.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
