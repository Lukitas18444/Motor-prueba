import { MapPin, Phone, Mail} from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, WhatsappIcon } from './ui/SocialIcon';
import { NavLink } from 'react-router-dom';

import '../style/footer.css';

import logoMotorTrans from '../assets/dmt-logo.png';
import brands from '../data/brands';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-main">

        <div className="footer-col footer-about">
          <img src={logoMotorTrans} alt="Motor Trans" className="footer-logo" />
          <p>
            Importa y distribuye al por mayor y menor autopartes originales y alternativas.
            Representando marcas de primer nivel, con reconocimiento internacional.
          </p>
          <p>
            Muchas de ellas equipo original en las principales automotrices,
            garantizan la calidad de todos sus componentes.
          </p>
        </div>

        <div className="footer-col footer-info">
          <h4>Información</h4>

          <div className="footer-item">
            <MapPin size={18} />
            <div>
              <strong>Ubicación</strong>
              <p>Vieytes 1409 {'{1275}'} Buenos Aires, Argentina</p>
            </div>
          </div>

          <div className="footer-item">
            <Phone size={18} />
            <div>
              <strong>Teléfono:</strong>
              <p>[54 11] 4301.7735 (Líneas rotativas)</p>
              <p>Whatsapp: (+54 9) 11 5833-1780</p>
            </div>
          </div>

          <div className="footer-item">
            <Mail size={18} />
            <div>
              <strong>Email</strong>
              <p>ofventas@motortrans.com.ar</p>
            </div>
          </div>
        </div>

        <div className="footer-col footer-brands">
          <h4>Distribuidor Autorizado</h4>
          <div className="footer-brands-grid">
            {brands.map((brand) => (
              <div className="footer-brand-item" key={brand.id}>
                <img src={brand.logo} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          <strong>Motor Trans.</strong> Distribuidor Autopartista. Todos los Derechos Reservados.
        </p>
        <div className="footer-socials">
          <a href="#" target="_blank" rel="noopener noreferrer"><FacebookIcon size={18} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><InstagramIcon  size={18} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><LinkedinIcon  size={18} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><YoutubeIcon  size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;