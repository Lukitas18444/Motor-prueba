import React, { useState } from 'react';
import productosData from '../data/productos.json'; 
import './stylePages/sachs.css';

const SachsBanner = () => (
  <div className="sachs-banner">
    <div className="sachs-banner-content">
      <img src="https://shop.arnold-classic.com/media/image/a3/92/ff/logo-sach.png" alt="Sachs Logo" className="sachs-logo-banner" />
      <h2>ZF Sachs: Ingeniería de Precisión</h2>
      <p>Calidad de equipo original para amortiguación y embragues.</p>
    </div>
  </div>
);

const Sachs = () => {
  const [busqueda, setBusqueda] = useState('');

  const productosSachs = productosData.filter((p) => 
    p.marca === "Sachs" && 
    p.codigo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="productos-page">
      <SachsBanner /> 
      
      <h1>Repuestos SACHS</h1>
      
      <input 
        type="text" 
        placeholder="Buscar código en Sachs..." 
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="search-input"
      />

      <div className="grid-productos">
        {productosSachs.length > 0 ? (
          productosSachs.map((p) => (
            <div key={p.id} className="card-producto">
              <h3>{p.codigo}</h3>
              <p>{p.nombre}</p>
              <small>{p.marca}</small>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No encontramos el código "{busqueda}" en productos Sachs.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sachs;