import { GraduationCap, Briefcase, Globe2, PlaneTakeoff } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './WhyLearn.css';

const WhyLearn = () => {
  const benefits = [
    {
      icon: <GraduationCap size={40} />,
      title: 'Higher Education',
      description: 'Access top universities worldwide by meeting their language proficiency requirements.'
    },
    {
      icon: <PlaneTakeoff size={40} />,
      title: 'Global Immigration',
      description: 'Fulfill language criteria for Express Entry and other international immigration programs.'
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Career Growth',
      description: 'Open doors to multinational companies and international job markets.'
    },
    {
      icon: <Globe2 size={40} />,
      title: 'Global Communication',
      description: 'Connect with people across cultures and travel with absolute confidence.'
    }
  ];

  return (
    <section className="why-learn section-padding">
      <div className="container">
        <SectionHeader 
          title="Why Learn Languages?" 
          subtitle="Open New Doors" 
          alignment="center"
        />

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="benefit-icon-wrapper">
                {benefit.icon}
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLearn;
