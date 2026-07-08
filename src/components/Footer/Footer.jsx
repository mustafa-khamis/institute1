import { BookOpen, MapPin, Phone, Mail } from 'lucide-react';
import Button from '../Button/Button';
import './Footer.css';

// Custom SVG Icons for Brands (Lucide removed them)
const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <BookOpen className="logo-icon-footer" size={28} />
              <div className="logo-text">
                <span className="logo-talk-footer">TALK</span>
                <span className="logo-point-footer">POINT</span>
              </div>
            </div>
            <p className="footer-description">
              Prepare for international exams, study abroad, immigration, and global career opportunities with expert language training in Kigali.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="Facebook"><FacebookIcon size={20} /></a>
              <a href="#" className="social-link" aria-label="Twitter"><TwitterIcon size={20} /></a>
              <a href="#" className="social-link" aria-label="Instagram"><InstagramIcon size={20} /></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#why-us">Why TALKPOINT</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-links">
            <h4 className="footer-heading">Programs</h4>
            <ul>
              <li><a href="#programs">IELTS Preparation</a></li>
              <li><a href="#programs">TCF Canada</a></li>
              <li><a href="#programs">TEF Canada</a></li>
              <li><a href="#programs">TCF Québec</a></li>
              <li><a href="#programs">DELF</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>KG 220, Gasabo, Remera, Gishushu<br />Kigali, Rwanda</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:+250794415450">+250 794 415 450</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:talkpointlanguagecenter@gmail.com">talkpointlanguagecenter@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TALKPOINT Language Center Rwanda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
