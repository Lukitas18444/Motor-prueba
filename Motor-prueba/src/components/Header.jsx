import { useState, useEffect } from 'react';
import '../style/header.css';
import dmtLogo from '../assets/dmt-logo.png';

import { NavLink } from 'react-router-dom';

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
          <img src={dmtLogo} alt="dmt logo" />
        </div>
        <div className='container-search'>
          <div>
            <i>Lupa</i>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className='container-item'>
          <nav>
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Inicio</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/productos">Productos</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;