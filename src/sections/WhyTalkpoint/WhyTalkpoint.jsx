import { Users, MonitorPlay, Target, HeartHandshake, Calendar, Compass } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './WhyTalkpoint.css';

const WhyTalkpoint = () => {
  const features = [
    {
      icon: <Users size={32} />,
      title: 'Experienced Trainers',
      description: 'Learn from certified, native-level language experts dedicated to your success.'
    },
    {
      icon: <Target size={32} />,
      title: 'Small Interactive Classes',
      description: 'Benefit from personalized attention and maximize your speaking time.'
    },
    {
      icon: <MonitorPlay size={32} />,
      title: 'Modern Teaching Methods',
      description: 'Engage with up-to-date materials and technology-enhanced learning.'
    },
    {
      icon: <HeartHandshake size={32} />,
      title: 'Supportive Environment',
      description: 'Join a community of motivated learners in a welcoming atmosphere.'
    },
    {
      icon: <Calendar size={32} />,
      title: 'Flexible Schedule',
      description: 'Choose class times that fit your busy professional or academic life.'
    },
    {
      icon: <Compass size={32} />,
      title: 'Career Guidance',
      description: 'Receive expert advice on study abroad and immigration pathways.'
    }
  ];

  return (
    <section id="why-us" className="why-talkpoint section-padding">
      <div className="container">
        <SectionHeader 
          title="Why Choose TALKPOINT" 
          subtitle="The TALKPOINT Advantage" 
          alignment="center"
        />

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTalkpoint;
