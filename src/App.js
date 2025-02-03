import './App.css';
import Hero from './components/Hero';
import Aboutus from './components/Aboutus';
import Techstack from './components/Techstack';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Work from './components/Work';
import Testimonial from './components/Testimonial';
import Subscribe from './components/Subscribe';
import Education from './components/Education';
import More from './components/More';
import Navbar from './components/Navbar';
import Slike from './components/Slike';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <Slike />
      {/* <Techstack />  */}
      <Projects />
      <Skills />
      <Work />
      <More />
      <Aboutus />
      <Subscribe />
    </>
  );
}

export default App;
