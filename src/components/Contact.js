import './Contact.css';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <h2>Contact</h2>
      <div className="contact-links">
        <a href="https://github.com/kjung4706" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaGithub/>
          <span>GitHub</span>
        </a>
        <a href="mailto:kjung4706@gmail.com" className="contact-icon">
          <FaEnvelope/>
          <span>Email</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
