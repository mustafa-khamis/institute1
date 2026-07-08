import { Star, Quote } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      program: 'IELTS Preparation',
      score: 'Band 8.0',
      text: 'TALKPOINT transformed my English skills. The small classes meant I got so much speaking practice. I achieved my target score on the first try!',
      label: 'Sample Student Testimonial'
    },
    {
      name: 'Jean-Paul N.',
      program: 'TCF Canada',
      score: 'NCLC 7',
      text: 'The instructors here are incredible. They know exactly what examiners are looking for. My Canadian immigration dream is now a reality thanks to them.',
      label: 'Sample Student Testimonial'
    },
    {
      name: 'Aline U.',
      program: 'TEF Canada',
      score: 'C1 Level',
      text: 'I loved the modern teaching methods and the supportive environment. It never felt like a chore to come to class. Highly recommend TALKPOINT.',
      label: 'Sample Student Testimonial'
    }
  ];

  return (
    <section id="testimonials" className="testimonials section-padding">
      <div className="container">
        <SectionHeader 
          title="Student Success Stories" 
          subtitle="Testimonials" 
          alignment="center"
        />

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="testimonial-header">
                <div className="quote-icon-wrapper">
                  <Quote size={24} />
                </div>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <span className="author-program">{testimonial.program} | {testimonial.score}</span>
                </div>
              </div>
              
              <div className="testimonial-label">{testimonial.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
