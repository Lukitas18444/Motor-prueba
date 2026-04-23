import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import '../style/hero.css';

const Hero = () => {
    const [init, setInit] = useState(false);

    // Inicializa el motor de partículas una sola vez
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = {
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab", // Esto hace que se conecten al mouse
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
                enable: true, // Esto crea las líneas entre puntos
                opacity: 0.3,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1,
            },
            number: { value: 80 }, // Cantidad de triangulitos
            opacity: { value: 0.3 },
            shape: { type: "cyrcle" },
            size: { value: { min: 1, max: 3 } },
        },
    };

    return (
        <div className="hero-container">
            {init && <Particles id="tsparticles" options={options} />}
            
            <div className="hero-content">
                <h1>Distribuidora Motor Trans S.A</h1>
                <p>Repuestos para pesados</p>
            </div>
        </div>
    );
};

export default Hero;