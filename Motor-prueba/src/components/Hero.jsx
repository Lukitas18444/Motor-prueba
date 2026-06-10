import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import '../style/hero.css';
import videoFondo from '../assets/animacion.mp4';

import igLogo from '../assets/ig-logo.png';
import faceLogo from '../assets/facebook-logo.png'

const Hero = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = {
        fullScreen: { enable: false }, // CLAVE: Esto evita que ocupen toda la pantalla
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab",
                },
            },
            modes: {
                grab: { distance: 200, links: { opacity: 0.5 } },
            },
        },
        particles: {
            color: { value: "#ffffff" },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1,
            },
            number: { value: 80 },
            opacity: { value: 0.3 },
            shape: { type: "circle" }, // Corregido de "cyrcle" a "circle"
            size: { value: { min: 1, max: 3 } },
        },
    };

    return (
        <div className="hero-container">
        <video  loop muted playsInline className="hero-video">
            <source src={videoFondo} type="video/mp4" />
        </video>
            {init && (
                <Particles 
                    id="tsparticles" 
                    className="particles-canvas" 
                    options={options} 
                />
            )}
            
            <div className="hero-content">
                <h1>Distribuidora Motor Trans S.A</h1>
                <p>Repuestos para pesados</p>
            </div>
            <div className="container-redes">
                <div className="insta-container"><a href="https://www.instagram.com/motortrans_autopartes_pesados/" target="_blank" rel="noopener noreferrer"><img src={igLogo} alt="instagram-logo" /></a></div>
                <div className="face-container"><a href="https://www.facebook.com/MotortransAutopartesPesados/" target="_blank" rel="noopener noreferrer"><img src={faceLogo} alt="Facebook-logo" /></a></div>
            </div>
        </div>
    );
};

export default Hero;