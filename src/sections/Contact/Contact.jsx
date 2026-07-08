import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Button from '../../components/Button/Button';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Contact Us" 
          alignment="center"
        />

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info animate-fade-in">
            <h3 className="contact-heading">We'd love to hear from you</h3>
            <p className="contact-description">
              Ready to start your language journey? Contact us today to learn more about our programs or to schedule a placement test.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div className="info-content">
                  <h4>Visit Us</h4>
                  <p>KG 220, Gasabo, Remera, Gishushu<br />Kigali, Rwanda</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div className="info-content">
                  <h4>Call Us</h4>
                  <p><a href="tel:+250794415450">+250 794 415 450</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div className="info-content">
                  <h4>Email Us</h4>
                  <p><a href="mailto:talkpointlanguagecenter@gmail.com">talkpointlanguagecenter@gmail.com</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Clock size={24} />
                </div>
                <div className="info-content">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <a href="https://wa.me/250794415450" target="_blank" rel="noopener noreferrer">
                <Button variant="accent">Chat on WhatsApp</Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="form-heading">Send us a message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+250 700 000 000" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="program">Program of Interest</label>
                <select id="program" required>
                  <option value="" disabled selected>Select a program</option>
                  <option value="ielts">IELTS Preparation</option>
                  <option value="tcf">TCF Canada</option>
                  <option value="tef">TEF Canada</option>
                  <option value="delf">DELF / DALF</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows="4" placeholder="How can we help you?" required></textarea>
              </div>

              <Button type="submit" variant="primary" className="submit-btn">
                Send Message <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
