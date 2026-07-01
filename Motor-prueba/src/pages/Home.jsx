// src/pages/Home.jsx
import Hero from '../components/Hero.jsx'
import Section from '../components/Section.jsx'
import ButtonWhatsapp from '../components/ui/ButtonWhatsapp.jsx'
import BrandSection from '../components/BrandSection.jsx'

import InfoSection from '../components/InfoSection.jsx';
import InfoFrom from '../components/InfoFrom.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <BrandSection />
      <Section />
      <ButtonWhatsapp />
      <InfoSection/>
      <InfoFrom/>
    </>
  );
};

export default Home;