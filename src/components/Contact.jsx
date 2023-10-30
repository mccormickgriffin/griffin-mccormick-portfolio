import "styles/Contact.scss";
import { SECTION_IDS } from "lib/consts";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id={SECTION_IDS.CONTACT}>
      <h1>Contact</h1>
      <ContactForm />
    </section>
  );
}

export default Contact;
