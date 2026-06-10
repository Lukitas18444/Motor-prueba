// src/pages/Home.jsx
import Hero from '../components/Hero.jsx'
import Section from '../components/Section.jsx'
import ButtonWhatsapp from '../components/ui/ButtonWhatsapp.jsx'
import BrandSection from '../components/BrandSection.jsx'

const Home = () => {
  return (
    <>
      <Hero />
      <BrandSection />
      <Section />
      <ButtonWhatsapp />
    </>
  );
};

export default Home;