import React from 'react'

import '../../style/ui/buttonWhatsapp.css'


const ButtonWhatsapp = () => {

    const tel = "5491112345678"; 
    const mensaje = "Hola! Consulto por repuestos para pesados.";
    const url = `https://wa.me/${tel}?text=${encodeURIComponent(mensaje)}`;
  return (
    <a 
      href={url} 
      className="btn-whatsapp-fixed" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {/* Puedes usar un icono aquí más adelante */}
      <span>WhatsApp</span> 
    </a>
  )
}

export default ButtonWhatsapp