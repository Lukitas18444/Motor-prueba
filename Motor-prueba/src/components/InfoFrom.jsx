import React from 'react';
import { FaUserTie, FaTruck, FaShieldAlt } from 'react-icons/fa'; 
import '../style/infoForm.css'

const infoFrom = () => {
    return (
    <section className='container-from'> 
        <div className="cta-container">
            <div className="cta-text">
            <h3>¿Necesita una cotización inmediata?</h3>
            <p>Envíanos los detalles de las piezas que buscas y nuestro equipo técnico te responderá en menos de 2 horas hábiles.</p>
            </div>
            <form className="cta-form">
            <input type="email" placeholder="Su correo electrónico" />
            <button type="submit">SOLICITAR INFORMACIÓN</button>
            </form>
        </div>
    </section>
    )
}

export default infoFrom