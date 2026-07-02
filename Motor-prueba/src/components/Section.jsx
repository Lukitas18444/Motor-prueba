import { useState } from 'react';
import imagenCamiones from '../assets/camiones.png'
import '../style/section.css'

import mbLogo from '../assets/mb-logo.png'
import fordLogo from '../assets/ford-logo.png'
import ivecoLogo from '../assets/iveco-logo.png'
import scaniaLogo from '../assets/scania-logo.png'
import volvoLogo from '../assets/volvo-logo.png'
import vwLogo from '../assets/vw-logo.png'

const repuestos = ['Filtros', 'Amortiguadores', 'Frenos', 'Engranajes', 'Radiador', 'Válvulas'];

const Section = () => {

  const [blueOnTop, setBlueOnTop] = useState(false);
  const [activeCard, setActiveCard] = useState('white'); // 'white' o 'blue'

  const toggleCards = () => {
    setActiveCard(prev => (prev === 'white' ? 'blue' : 'white'));
  };

  return (
    <section className="container-section">

      <h4 className='first-title'>
        <span>
          Para cada vehículo
        </span>
      </h4>
      <div className='card-wrapper'>
      </div>

      <div
        className="cuadrado-base"
        onClick={() => setBlueOnTop(true)}
        style={{ zIndex: blueOnTop ? 10 : 1, transform: blueOnTop ? 'scale(1.05)' : 'scale(1)' }}
      >
        <div className="content-text">
          <h3>Calidad en Repuestos</h3>
        </div>

        <img src={imagenCamiones} alt="camiones" className='imagenCamiones' />
        <div className="container-descripcion">
          <h2>
            <span>Productos adecuados</span>
          </h2>
          <p>Contamos con autopartes originales y de primeras marcas, aquellas que nuestros clientes solicitan para obtener un gran rendimiento.</p>
        </div>

        <div className="container-carousel-repuestos">
          <div className="carousel-track">
            {[...repuestos, ...repuestos].map((item, i) => (
              <span key={i} className="carousel-item">{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="cuadrado-flotante"
        onClick={() => setBlueOnTop(false)}
        style={{ zIndex: blueOnTop ? 1 : 2, transform: blueOnTop ? 'scale(1)' : 'scale(1.05)' }}
      >
        <div className="content-text">
          <h3>Coberturas</h3>
        </div>
        <div className='container-logos'>
          <div className='logo-item'><img src={ivecoLogo} alt="iveco-logo" /></div>
          <div className='logo-item'><img src={volvoLogo} alt="volvo-logo" /> </div>
          <div className='logo-item'><img src={mbLogo} alt="mercedes-benz-logo" /></div>
          <div className='logo-item'><img src={scaniaLogo} alt="scania-logo" /></div>
          <div className='logo-item'><img src={vwLogo} alt="volkswagen-logo" /> </div>
          <div className='logo-item'><img src={fordLogo} alt="ford-logo" /></div>
        </div>
        <div className="container-descripcion">
          <h2>
            <span>Atención personalizada</span>
          </h2>
          <p>Cada llamada, cada pedido, son situaciones únicas. Por ese motivo nos abocamos a brindar soluciones exactas y satisfactorias para los clientes.</p>
        </div>

        <div className="container-descripcion-dos">
          <h2>
            <span>Distribución Oficial</span>
          </h2>
          <p>Estamos autorizados por cada marca para distribuir sus autopartes. Poseemos la distribución oficial de primeras marcas.</p>
        </div>
      </div>

      <div className="arrow-controls">
        <button onClick={() => setBlueOnTop(!blueOnTop)} className="arrow-btn">◀</button>
        <button onClick={() => setBlueOnTop(!blueOnTop)} className="arrow-btn">▶</button>
      </div>
    </section>
  );
}

export default Section