import Hero from '../sections/Hero.jsx';
import About from '../sections/About.jsx';
import Services from '../sections/Services.jsx';
import Process from '../sections/Process.jsx';
import Team from '../sections/Team.jsx';
import Highlights from '../sections/Highlights.jsx';
import Pricing from '../sections/Pricing.jsx';
import Faq from '../sections/Faq.jsx';
import Resources from '../sections/Resources.jsx';
import Contact from '../sections/Contact.jsx';
import { usePageTitle } from '../lib/usePageTitle.js';

export default function Home() {
  usePageTitle();
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Team />
      <Highlights />
      <Pricing />
      <Faq />
      <Resources />
      <Contact />
    </>
  );
}
