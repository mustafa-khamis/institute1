import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import WhyTalkpoint from './sections/WhyTalkpoint/WhyTalkpoint';
import Programs from './sections/Programs/Programs';
import LearningExperience from './sections/LearningExperience/LearningExperience';
import WhyLearn from './sections/WhyLearn/WhyLearn';
import Gallery from './sections/Gallery/Gallery';
import Testimonials from './sections/Testimonials/Testimonials';
import FAQ from './sections/FAQ/FAQ';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <WhyTalkpoint />
        <LearningExperience />
        <WhyLearn />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
