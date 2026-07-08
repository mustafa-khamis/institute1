import { BookOpen, GraduationCap, Globe, Plane, Award, ArrowRight } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import './Programs.css';

const Programs = () => {
  const programs = [
    {
      id: 'ielts',
      title: 'IELTS Preparation',
      icon: <Globe size={32} />,
      description: 'Master the International English Language Testing System. Essential for studying abroad or global immigration.',
      audience: 'Students, Professionals, Immigrants',
      color: 'blue'
    },
    {
      id: 'tcf-canada',
      title: 'TCF Canada',
      icon: <Plane size={32} />,
      description: 'Official French language proficiency test for Canadian immigration and citizenship applications.',
      audience: 'Canadian Immigration Applicants',
      color: 'red'
    },
    {
      id: 'tef-canada',
      title: 'TEF Canada',
      icon: <Award size={32} />,
      description: 'Evaluate your French skills for economic immigration programs to Canada or citizenship.',
      audience: 'Express Entry Candidates',
      color: 'purple'
    },
    {
      id: 'delf',
      title: 'DELF / DALF',
      icon: <GraduationCap size={32} />,
      description: 'Official diplomas awarded by the French Ministry of Education to certify French language competency.',
      audience: 'Students, Academic Professionals',
      color: 'green'
    },
  ];

  return (
    <section id="programs" className="programs section-padding">
      <div className="container">
        <SectionHeader 
          title="Premium Language Programs" 
          subtitle="Our Courses" 
          alignment="center"
        />
        
        <div className="programs-grid">
          {programs.map((program, index) => (
            <Card key={program.id} className={`program-card color-${program.color} animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="program-icon-wrapper">
                {program.icon}
              </div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              
              <div className="program-footer">
                <div className="program-audience">
                  <span className="audience-label">Ideal for:</span>
                  <span className="audience-text">{program.audience}</span>
                </div>
                
                <a href="#contact" className="program-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
