import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import brands from '../data/brands'; 
import productosData from '../data/productos.json';
import productosMahle from '../data/productosMahle.json'
import './stylePages/brandPage.css';
import { Link } from 'react-router-dom';

const BrandPage = () => {
  const [busqueda, setBusqueda] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const { brandName } = useParams();
  
  const numeroWhatsApp = "5491112345678";

  const catalogos = {
    "zf-sachs": productosData,
    "mahle": productosMahle
  };
  const datosSeleccionados = catalogos[brandName] || [];

  const brand = brands.find(b => 
    b.name.toLowerCase().replace(' ', '-') === brandName
  );

  if (!brand) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Marca no encontrada</h1>
        <p>No pudimos encontrar la marca: <strong>{brandName}</strong></p>
      </div>
    );
  }

  const productosFiltrados = datosSeleccionados.filter((p) => {
    const coincideMarca = p.marca.toLowerCase() === brand.name.toLowerCase();
    const coincideBusqueda = p.codigo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideBusquedaOriginal = p.codigoOriginal?.toLowerCase().includes(busqueda.toLowerCase()) || false;
    const coincideAplicacion = p.aplicacion?.toLowerCase().includes(busqueda.toLowerCase()) || false;
    
    return (coincideMarca && coincideBusqueda) || coincideAplicacion || coincideBusquedaOriginal;
  });
  return (
    <div className="brand-detail-page">
      <nav className="breadcrumb" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
        <Link to="/home" style={{ color: '#555', textDecoration: 'none' }}>Home</Link> 
        {' > '}
        <Link to="/#BrandSection" style={{ color: '#555', textDecoration: 'none' }}>Productos</Link> 
        {' > '}
        <span style={{ fontWeight: 'bold', color: '#000' }}>{brand.name}</span>
      </nav>

      <div className='container-all-marca'>
        <div className='container-banner'>
          <img src={brand.banner} alt="foto de portada" />
        </div>

        <div className='container-descripcion-marca'>
          <input 
            type="text" 
            placeholder="Buscar por código..." 
            value={busqueda}
            onChange={(e) => {
              setBusqueda(e.target.value);
              setVisibleCount(6); 
            }}
          />
          <h1>{brand.name}</h1> 
          <p>{brand.desc}</p>

          <div className="grid-productos">
            {productosFiltrados.length > 0 ? (
  
              productosFiltrados.slice(0, visibleCount).map((p) => (
                <div key={p.id} className="card-producto">
                  <img src={p.imagenUrl || "/placeholder.jpg"} alt={p.nombre} className="card-image" />
                  <h3 className="card-title">{p.codigo}</h3>
                  <div className="card-footer">
                    <p className="card-description">Marca: {p.marca}</p>
                    <span className="card-code">{p.modelo}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No encontramos el código <strong>"{busqueda}"</strong>.</p>
                <a href={`https://wa.me/${numeroWhatsApp}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  Consultar por WhatsApp
                </a>
              </div>
            )}
          </div>

          {/* Botón Ver Más */}
          <div className="container-boton-ver-mas" style={{ textAlign: 'center', marginTop: '20px' }}>
            {visibleCount < productosFiltrados.length && (
              <button 
                onClick={() => setVisibleCount(visibleCount + 6)}
                style={{ padding: '10px 20px', cursor: 'pointer' }}
              >
                Ver más productos
              </button>
            )}
          </div>
        </div>    
      </div>
    </div>
  );
};

export default BrandPage;