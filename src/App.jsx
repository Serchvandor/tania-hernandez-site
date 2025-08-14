import React from 'react'
import logoUrl from '/logo.png'

const services = [
  { name: 'Facial BioRePeel', duration: '60 min', price: '$1,300 o 3 x $3,000' },
  { name: 'Sculptural Lifting Facial', duration: '90 min', price: '$1,900' },
  { name: 'Facial 90', duration: '90 min', price: '$800' },
  { name: 'Let’s Balance Your Skin', duration: '80 min', price: '$900' },
  { name: 'Inducción al colágeno', duration: '70 min', price: '$1,700' },
  { name: 'Anti Acne', duration: '75 min', price: '$1,500' },
  { name: 'Facial 120', duration: '120 min', price: '$990' },
  { name: 'Time To Relax (Masaje)', duration: '90 min', price: '$1,400' },
]

export default function App(){
  return (
    <>
      <header className="hero">
        <div className="container">
          <div className="brand">
            <img alt="Logo Tania Hernández" src={logoUrl} />
            <div>
              <div className="brand-name">Tania Hernández</div>
              <div className="brand-role">Cosmetóloga Cosmiatra</div>
            </div>
          </div>
          <h1>Tu piel, tu momento, tu cuidado profesional</h1>
          <div className="subtitle">Tratamientos faciales y corporales personalizados</div>
          <div className="cta-row">
            <a className="btn btn-primary" href="https://wa.me/527443348937" target="_blank" rel="noreferrer">Agendar por WhatsApp</a>
            <a className="btn" href="#servicios">Ver servicios</a>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="servicios">
          <h2 className="section-title">Servicios</h2>
          <div className="grid">
            {services.map((s, i) => (
              <div className="card" key={i}>
                <h3>{s.name}</h3>
                <div className="muted">Duración: {s.duration}</div>
                <div style={{marginTop:6, fontWeight:700}}>Costo: {s.price}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Sobre mí</h2>
          <div className="about">
            <p>
              Realizo tratamientos faciales y corporales en <strong>pieles sanas</strong>, adaptando cada experiencia a la necesidad de cada cliente. Mi prioridad es que te sientas en sincronía: <strong>alma, mente y cuerpo</strong>.
            </p>
          </div>
        </section>

        <section>
          <h2 className="section-title">Galería</h2>
          <div className="gallery">
            <div><span>Imagen facial</span></div>
            <div><span>Imagen masaje</span></div>
            <div><span>Cuidado de piel</span></div>
            <div><span>Relajación</span></div>
          </div>
        </section>

        <section>
          <h2 className="section-title">Contacto</h2>
          <p className="address">Francisco Pizarro 25, Edificio Jamateco, Local 30,<br/> Fracc Magallanes, 39670 Acapulco de Juárez, Gro.</p>
          <div className="cta-row" style={{marginTop: 10}}>
            <a className="btn btn-primary" href="https://wa.me/527443348937" target="_blank" rel="noreferrer">Enviar WhatsApp</a>
            <a className="btn" href="https://www.instagram.com/taniahernandez.cosmetologa" target="_blank" rel="noreferrer">Instagram</a>
            <a className="btn" href="https://www.facebook.com/share/1Cd93UWbwg/" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Tania Hernández. Todos los derechos reservados.
      </footer>
    </>
  )
}
