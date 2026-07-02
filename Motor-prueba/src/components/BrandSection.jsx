import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import '../style/brandSection.css';

import brands from '../data/brands'

const BrandSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const angle = 360 / brands.length;

  const sectionRef = useRef(null);
  const brandContainerRef = useRef(null);
  const carouselAreaRef = useRef(null);
  const infoAreaRef = useRef(null);
  const rafRef = useRef(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % brands.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + brands.length) % brands.length);
  };

  useEffect(() => {
    brands.forEach((brand) => {
      const img = new Image();
      img.src = brand.fondo;
    });
  }, []);

  useEffect(() => {
    const MAX_GAP = 60;  
    const MAX_SHIFT = 500;  

    const updateLayout = () => {
      rafRef.current = null;
      const section = sectionRef.current;
      const container = brandContainerRef.current;
      const carousel = carouselAreaRef.current;
      const info = infoAreaRef.current;
      if (!section || !container || !carousel || !info) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const start = vh;
      const end = vh * 0.3;

      let progress = (start - rect.top) / (start - end);
      progress = Math.min(Math.max(progress, 0), 1);

      const gap = MAX_GAP * (1 - progress);
      const shift = MAX_SHIFT * (1 - progress);

      container.style.gap = `${gap}px`;
      carousel.style.transform = `translateX(${shift}px)`;
      info.style.transform = `translateX(${-shift}px)`;
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(updateLayout);
    };

    updateLayout();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const createSlug = (name) => name.toLowerCase().replace(' ', '-');

  return (
    <section className="brand-section overley" id="BrandSection" ref={sectionRef}>
      <div className='container-detalles-pagina'>
        <p>Distribuidora oficial de las siguientes marcas: </p>
        <p>Ir a productos</p>
      </div>
      <div className='container-brand' ref={brandContainerRef}>
        <div className="carousel-area" ref={carouselAreaRef}>
          <button className="nav-btn prev" onClick={handlePrev}><ChevronLeft /></button>
          <div
            className="carousel-wrapper"
            style={{
              transform: `rotateY(${-activeIndex * angle}deg)`,
              transition: 'transform 0.6s ease-in-out'
            }}
          >
            {brands.map((brand, i) => (
              <div
                key={brand.id}
                className={`brand-card ${i === activeIndex ? 'active' : ''}`}
                style={{
                  transform: `rotateY(${i * angle}deg) translateZ(350px)`
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="brand-logo-img"
                />
                <h3>{brand.name}</h3>
              </div>
            ))}
          </div>

          <button className="nav-btn next" onClick={handleNext}><ChevronRight /></button>
        </div>

        <div className="info-area" ref={infoAreaRef}>
          <div className="info-square">
            <div className="logo-container" style={{ backgroundImage: `url(${brands[activeIndex].fondo})` }}></div>
            <h2 key={brands[activeIndex].id} className='title-underline is-active'>{brands[activeIndex].name}</h2>
            <p>{brands[activeIndex].desc}</p>
            <NavLink
              to={`/marcas/${createSlug(brands[activeIndex].name)}`}
              className="boton-estilo"
            >
              <button>Ir a la página</button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;