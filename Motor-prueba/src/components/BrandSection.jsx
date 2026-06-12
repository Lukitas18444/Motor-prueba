import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import '../style/brandSection.css';


const brands = [
  { id: 1, name: 'ZF Sachs', desc: 'Calidad de equipo original Los productos SACHS se fabrican con materiales de alta calidad y reflejan el estado actual de la técnica. Son sinónimo de alto rendimiento y fiabilidad. Por esta razón, numerosos fabricantes de automóviles bien conocidos equipan sus vehículos con productos SACHS: cada año, más de 10 millones de vehículos nuevos equipados con amortiguadores SACHS salen de la cadena de producción.Además, SACHS ofrece embragues de alta calidad para fabricantes de equipo original y el mercado de repuestos.', logo: 'https://shop.arnold-classic.com/media/image/a3/92/ff/logo-sach.png', fondo:"https://partworks.de/media/image/manufacturer/181/lg/marken-zf-sachs.jpg" },
  { id: 2, name: 'Mahle', desc: 'Innovación', logo: 'https://www.mahle-aftermarket.com/media/system_files/img/mahle-logo2019.png',fondo:"https://play-lh.googleusercontent.com/qsx-XOhTunVOhiwlpWh4PttwCtPqxPZ80TP4dQClWe3G4QPhEv2Cjk20rgFYB7zbVz9M" },
  { id: 3, name: 'Euroricambi', desc: 'Resistencia', logo: 'https://www.euroricambigroup.com/themes/custom/euroricambi/logo.svg', fondo:"https://exhibitorsearch.messefrankfurt.com/images/original/document_downloads/10000055202501/AEXV8A00AZSI/1693390841806_2027965283.jpg" },
  { id: 4, name: 'Fram', desc: 'Potencia', logo: 'https://catalogofram.com.ar/newpage/img/fram_logo_retangulo_branco_icn.png',fondeo:"https://pldistribucion.com.ar/web/wp-content/uploads/FRAM.jpg" },
  { id: 5, name: 'Mercedes', desc: 'Calidad', logo: '⭐' },
  { id: 6, name: 'Man', desc: 'Eficiencia', logo: '🏗️' },
  { id: 7, name: 'Renault', desc: 'Versatilidad', logo: '🚐' },
  { id: 8, name: 'Daf', desc: 'Tecnología', logo: '⚙️' },
  { id: 9, name: 'Mack', desc: 'Fuerza', logo: '🦅' },
  { id: 10, name: 'Hino', desc: 'Confianza', logo: '🏁' },
];

const BrandSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const angle = 360 / brands.length;

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

  return (
    <section className="brand-section overley" id="BrandSection">
      <div className='container-detalles-pagina'>
        <p>Distribuidora oficial de las siguientes marcas: </p>
        <p>Ir a productos</p>
      </div>
      <div className='container-brand'>
        <div className="carousel-area">
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

      <div className="info-area" 
        
      >
        <div className="info-square">
          <div className="logo-container" style={{ backgroundImage: `url(${brands[activeIndex].fondo})` }}></div>
          <h2 key={brands[activeIndex].id } className='title-underline is-active'>{brands[activeIndex].name}</h2>
          <p>{brands[activeIndex].desc}</p>
          <NavLink to="/sachs" className="boton-estilo">
          <button> 
              Ir a la pagina
           </button>
          </NavLink>
        </div>
      </div> 
      </div>
      
    </section>
  );
};

export default BrandSection;