import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../../components/Button/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-word">TALKPOINT</div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">
            Unlock Global <br />
            <span className="hero-title-highlight">Opportunities</span> <br />
            Through Language.
          </h1>
          
          <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Prepare for international exams, study abroad, immigration, and global career opportunities with expert language training in Kigali.
          </p>
          
          <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#contact">
              <Button variant="accent" size="lg">
                Enroll Now <ArrowRight size={20} />
              </Button>
            </a>
            <a href="#programs">
              <Button variant="outline" size="lg">
                Explore Programs
              </Button>
            </a>
          </div>
          
          <div className="hero-trust-badges animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="trust-badge">
              <CheckCircle2 size={18} className="badge-icon" />
              <span>IELTS Preparation</span>
            </div>
            <div className="trust-badge">
              <CheckCircle2 size={18} className="badge-icon" />
              <span>Canada Language Tests</span>
            </div>
            <div className="trust-badge">
              <CheckCircle2 size={18} className="badge-icon" />
              <span>Certified Training</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
              alt="Students learning in a modern environment" 
              className="hero-image"
            />
            {/* Floating Elements */}
            <div className="floating-card card-1">
              <div className="floating-card-content">
                <span className="floating-number">5+</span>
                <span className="floating-text">International<br/>Exams</span>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="floating-card-content">
                <span className="floating-number">98%</span>
                <span className="floating-text">Success<br/>Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
