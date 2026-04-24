import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import '../style/hero.css';

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
            {init && (
                <Particles 
                    id="tsparticles" 
                    className="particles-canvas" // Clase para control total desde CSS
                    options={options} 
                />
            )}
            
            <div className="hero-content">
                <h1>Distribuidora Motor Trans S.A</h1>
                <p>Repuestos para pesados</p>
            </div>
        </div>
    );
};

export default Hero;