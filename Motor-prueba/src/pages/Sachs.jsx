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
  const [visibleCount, setVisibleCount] = useState(6);
  const [busqueda, setBusqueda] = useState('');

  const productosSachs = productosData.filter((p) => 
    p.marca === "Sachs" && p.codigoOriginal.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.codigo.toLowerCase().includes(busqueda.toLowerCase()) 
  );

  return (
    <div className="productos-page">
      <SachsBanner /> 
      
      <h1>Repuestos SACHS</h1>
      
      <input 
      placeholder='Ingrese el código que esta buscando por favor'
  type="text" 
  value={busqueda} 
  onChange={(e) => {
    setBusqueda(e.target.value);
    setVisibleCount(6);
  }} 
/>

      <div className="grid-productos">
        {productosSachs.length > 0 ? (
          productosSachs.slice(0,visibleCount).map(((p) => (
            <div key={p.id} className="card-producto">
              <img className="card-image"src={p.imagenUrl} alt={p.nombre} />
              <h3>{p.codigo}</h3>
              <p>{p.nombre}</p>
              <p> {p.codigoOriginal} </p>
              <p> {p.posicion} </p>
              <p> {p.descripcion} </p>
              <small>{p.marca}</small>
            </div>
          ))
        )) : (
          <div className="no-results">
            <p>No encontramos el código "{busqueda}" en productos Sachs.</p>
          </div>
        )}
    </div>
        <div className="container-boton-ver-mas" style={{ textAlign: 'center', marginTop: '20px' }}>
    {visibleCount < productosSachs.length && (
      <button onClick={() => setVisibleCount(visibleCount + 6)}>
        Ver más productos
      </button>
    )}
  </div>
    </div>
  );
};

export default Sachs;