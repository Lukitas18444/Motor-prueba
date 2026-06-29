import React, { useState } from 'react';
import productosData from '../data/productos.json';
import './stylePages/productos.css';
import { NavLink } from 'react-router-dom';

const Productos = () => {
  const [busqueda, setBusqueda] = useState('');
  const [visibleCount, setVisibleCount] = useState(6); 

  const numeroWhatsApp = "5491112345678";
  
  const productosFiltrados = productosData.filter((p) =>
    p.codigo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const mensaje = `Hola, estoy buscando el repuesto con código: ${busqueda}. ¿Lo tienen disponible?`;
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

  console.log("Total productos:", productosFiltrados.length);
console.log("Mostrando:", visibleCount);

  return (
    <>
      <div className='page-map'>
        <div className='page-map-item'>
          <NavLink className={"page-map-item-nav"} to="/productos">Productos - </NavLink>
          <NavLink className={"page-map-item-nav"} to="/">Volver al inicio</NavLink> 
        </div>
      </div>
      
      <section className='section-productos'>
        <div className='title-productos'>
          <h2>Catálogo de Repuestos</h2>
        </div>

        <div className="productos-page">
          <input 
            type="text" 
            placeholder="Buscar por código..." 
            value={busqueda}
            onChange={(e) => {
              setBusqueda(e.target.value);
              setVisibleCount(6); // Reseteamos a 6 cada vez que busca algo nuevo
            }}
          />

          <div className="grid-productos">
            {productosFiltrados.length > 0 ? (
              productosFiltrados.slice(0, visibleCount).map((p) => (
                <div key={p.id} className="card-producto">
                  <img src={p.imagenUrl || "/placeholder.jpg"} alt={p.nombre} className="card-image" />
                  <h3 className="card-title" >{p.codigo}</h3>
                  <div className="card-footer">
                    <p className="card-description">Marca: {p.marca}</p>
                    <span className="card-code">{p.modelo}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No encontramos el código <strong>"{busqueda}"</strong>.</p>
                <p>¡No te preocupes! Podemos verificar el stock por ti.</p>
                <a 
                  href={linkWhatsApp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-whatsapp"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            )}
          </div>

          {/* Botón Ver Más */}
          <div className="container-boton-ver-mas" style={{ textAlign: 'center', marginTop: '20px' }}>
            {/* Comparamos contra productosFiltrados.length, no contra productosSachs */}
            {visibleCount < productosFiltrados.length && (
              <button onClick={() => setVisibleCount(visibleCount + 6)}>
                Ver más productos
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Productos;