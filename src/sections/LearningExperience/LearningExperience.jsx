import { MessageSquare, ClipboardCheck, BookOpen, Mic, Award, TrendingUp } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './LearningExperience.css';

const LearningExperience = () => {
  const steps = [
    {
      icon: <MessageSquare size={24} />,
      title: 'Consultation',
      description: 'Discuss your goals, target scores, and ideal timeline with our advisors.'
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: 'Placement Assessment',
      description: 'Take a comprehensive test to determine your current language level.'
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Active Learning',
      description: 'Engage in dynamic classes focusing on speaking, listening, reading, and writing.'
    },
    {
      icon: <Mic size={24} />,
      title: 'Mock Practice',
      description: 'Experience simulated exam conditions to build confidence and stamina.'
    },
    {
      icon: <Award size={24} />,
      title: 'Certification',
      description: 'Take your official exam and achieve your target score.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Success',
      description: 'Use your results for immigration, study abroad, or career advancement.'
    }
  ];

  return (
    <section className="learning-experience section-padding">
      <div className="container">
        <SectionHeader 
          title="The Student Journey" 
          subtitle="How It Works" 
          alignment="center"
        />

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="timeline-steps">
            {steps.map((step, index) => (
              <div key={index} className="timeline-step animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="step-marker">
                  <div className="step-icon">{step.icon}</div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningExperience;
