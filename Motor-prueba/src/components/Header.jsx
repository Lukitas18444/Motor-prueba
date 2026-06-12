import { useState, useEffect } from 'react';
import '../style/header.css';
import dmtLogo from '../assets/dmt-logo.png';

import { NavLink } from 'react-router-dom';

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
  const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
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
            <button 
                className="nav-link" 
                onClick={() => scrollToSection('BrandSection')}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Productos
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;