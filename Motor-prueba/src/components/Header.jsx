import { useState, useEffect } from 'react';
import '../style/header.css';

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll baja más de 50px, cambiamos el estado
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`container-header ${scrolled ? 'header-active' : ''}`} >
      <div className='container-header-item'>
        <div className='container-logo'>
          <h1>Logo DMT</h1>
        </div>
        <div className='container-search'>
          <div>
            <i>Lupa</i>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className='container-item'>
          <li><a href="">Inicio</a></li>
          <li><a href="">Productos</a></li>
          <li><a href="">Nosotros</a></li>
        </div>
      </div>
    </header>
  );
};

export default Header;