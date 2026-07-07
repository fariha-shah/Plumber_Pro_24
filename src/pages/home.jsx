// Home Page - combines all sections
// Author: Wajeeha Habib |& Fareeha TechNexus Internship

import Hero from '../components/Hero';
import HireUs from '../components/HireUs';
import Services from '../components/services';
import About from '../components/about';
import Projects from '../components/Projects';
import Cta from '../components/cta';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HireUs />
      <Services />
      <About />
      <Projects />
      <Cta />
    </div>
  );
}
