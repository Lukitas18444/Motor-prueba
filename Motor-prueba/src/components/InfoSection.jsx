import React from 'react';
import { FaUserTie, FaTruck, FaShieldAlt } from 'react-icons/fa'; 
import '../style/infoSection.css'

const InfoSection = () => {
  return (
    <section className="info-wrapper">
      {/* Parte Superior: Features */}
      <div className="features-container">
        <div className="feature-card">
          <div className='icon-wrapper'>
            <FaUserTie className="icon" />
          </div>
          <h3>Asesoría Técnica</h3>
          <p>Personal altamente capacitado para ayudarte a identificar la pieza exacta que tu motor requiere.</p>
        </div>
        <div className="feature-card">
        <div className='icon-wrapper'>
          <FaTruck className="icon" />
        </div>
          <h3>Distribución Nacional</h3>
          <p>Red logística optimizada para garantizar la entrega de repuestos en el menor tiempo posible.</p>
        </div>
        <div className="feature-card">
        <div className='icon-wrapper'>
          <FaShieldAlt className="icon" />
        </div>
          <h3>Garantía de Fábrica</h3>
          <p>Todos nuestros productos cuentan con respaldo directo de los fabricantes, garantizando autenticidad.</p>
        </div>
      </div>

    </section>
  );
};

export default InfoSection;