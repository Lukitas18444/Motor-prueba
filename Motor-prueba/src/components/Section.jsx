
import '../style/section.css'

const Section = () => {
  return (
    <section className="container-section">
      <h4 className='first-title'>
        <span>
          Para cada vehículo
        </span>
      </h4>
      <div className="cuadrado-base"></div>
      <div className="cuadrado-flotante">
        <h3>Calidad en Repuestos</h3>
        <p>Scania, Mercedes, Volvo</p>
      </div>
    </section>
  );
}

export default Section
