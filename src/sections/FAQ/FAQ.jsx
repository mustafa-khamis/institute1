import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'How do I register for a program?',
      answer: 'You can register by visiting our center in Kigali, calling our support line, or filling out the contact form on this website. Our team will guide you through the placement process.'
    },
    {
      question: 'Do you prepare students for IELTS?',
      answer: 'Yes, we offer comprehensive IELTS preparation courses designed to help you achieve your target band score. We cover all four sections: Reading, Writing, Listening, and Speaking.'
    },
    {
      question: 'What is TCF Canada?',
      answer: 'TCF Canada is a French language proficiency test approved by IRCC (Immigration, Refugees and Citizenship Canada) for economic immigration programs or for obtaining Canadian citizenship.'
    },
    {
      question: 'Do you offer DELF preparation?',
      answer: 'Absolutely. We prepare students for all levels of the DELF and DALF exams. These are official diplomas awarded by the French Ministry of Education.'
    },
    {
      question: 'How long are the courses?',
      answer: 'Course duration varies depending on your current level and target score. Most of our intensive preparation programs run for 4 to 8 weeks. We will provide a tailored timeline after your placement test.'
    },
    {
      question: 'Are classes online or in person?',
      answer: 'We currently offer premium in-person classes at our modern facility in Kigali to ensure the highest quality of interactive learning and speaking practice.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section-padding">
      <div className="container">
        <SectionHeader 
          title="Frequently Asked Questions" 
          subtitle="Have Questions?" 
          alignment="center"
        />

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item animate-fade-in ${activeIndex === index ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <ChevronDown className="faq-icon" size={20} />
              </button>
              <div 
                className="faq-answer-wrapper"
                style={{ 
                  maxHeight: activeIndex === index ? '200px' : '0',
                  opacity: activeIndex === index ? 1 : 0
                }}
              >
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
