"use client";

import Image from "next/image";
import { useEffect } from "react";

const galleryImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPR8OObuf55aprd0xgmZqKd5SZ6vCHh6g7w&s";

const bars = Array.from({ length: 10 }, (_, index) => index);

export default function Page() {
  useEffect(() => {
    const observerOptions = {
      rootMargin: "0px 0px -100px 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = "1";
          target.style.transform = "translateY(0)";
        }
      }
    }, observerOptions);

    const animatedElements = document.querySelectorAll<HTMLElement>(
      ".service-card, .timeline-item, .skill-category, .gallery-item"
    );

    for (const element of animatedElements) {
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      element.style.transition = "all 0.6s ease-out";
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg-animation" />

      <nav>
        <div className="container">
          <div className="logo">
            &ldquo;Capture the sound, shape the music.&rdquo;
          </div>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#experiencia">Experiencia</a>
            </li>
            <li>
              <a href="#habilidades">Habilidades</a>
            </li>
            <li>
              <a href="#galeria">Galer&iacute;a</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                <span className="highlight">Hir&aacute;n Monta&ntilde;o</span>
                <br />
              </h1>
              <p className="subtitle">
                M&Uacute;SICO | INGENIERO DE AUDIO | T&Eacute;CNICO DE STAGE
              </p>
              <p className="pitch">
                Soy percusionista e ingeniero de audio. Ofrezco un servicio
                completo: desde tocar en tu proyecto, hasta mezclarlo,
                masterizarlo y hacer el stage en vivo. He trabajado en el sonido
                del Deportivo Cali, el Mercado Musical del Pac&iacute;fico,
                entre otros. Mi compromiso es total, desde el montaje hasta el
                &uacute;ltimo detalle.
              </p>
              <div className="cta-buttons">
                <a className="btn btn-primary" href="#contacto">
                  Trabajemos Juntos
                </a>
                <a className="btn btn-secondary" href="#experiencia">
                  Ver Experiencia
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="audio-bars">
                {bars.map((bar) => (
                  <div className="bar" key={bar} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicios">
          <h2 className="section-title">SERVICIOS</h2>
          <p className="section-subtitle">
            {"// Soluciones completas de audio"}
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🥁</div>
              <h3>Instrumentista</h3>
              <p>Percusi&oacute;n profesional para tus proyectos musicales</p>
              <ul>
                <li>Sesiones de grabaci&oacute;n</li>
                <li>Presentaciones en vivo</li>
                <li>Diversos g&eacute;neros musicales</li>
                <li>Arreglos personalizados</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🎚️</div>
              <h3>Ingenier&iacute;a de Audio</h3>
              <p>Producci&oacute;n de audio de alta calidad</p>
              <ul>
                <li>Mezcla profesional</li>
                <li>Mastering</li>
                <li>Grabaci&oacute;n en estudio</li>
                <li>Post-producci&oacute;n</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🎤</div>
              <h3>Producci&oacute;n en Vivo</h3>
              <p>Gesti&oacute;n t&eacute;cnica completa de eventos</p>
              <ul>
                <li>FOH (Front of House)</li>
                <li>Monitores de escenario</li>
                <li>Stage Management</li>
                <li>Montaje y desmontaje</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Soporte T&eacute;cnico</h3>
              <p>Log&iacute;stica y operaci&oacute;n de equipos</p>
              <ul>
                <li>Instalaci&oacute;n de sistemas de sonido</li>
                <li>Mantenimiento de equipos</li>
                <li>Log&iacute;stica de eventos</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experiencia">
          <h2 className="section-title">EXPERIENCIA</h2>
          <p className="section-subtitle">
            {"// Proyectos y colaboraciones destacadas"}
          </p>

          <div className="timeline">
            <div className="timeline-item">
              <h3>Deportivo Cali</h3>
              <p className="location">Sonido en Estadio</p>
              <p>
                Operaci&oacute;n t&eacute;cnica de sonido en eventos deportivos
                de alto perfil, garantizando calidad ac&uacute;stica en espacios
                masivos.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Mercado Musical del Pac&iacute;fico</h3>
              <p className="location">Stage &amp; Audio</p>
              <p>
                Gesti&oacute;n t&eacute;cnica y operaci&oacute;n de sonido en
                uno de los eventos musicales m&aacute;s importantes de la
                regi&oacute;n Pac&iacute;fica.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Sevijazz</h3>
              <p className="location">T&eacute;cnico de Stage</p>
              <p>
                Soporte t&eacute;cnico y operaci&oacute;n de escenario en
                festival de jazz, trabajando con artistas nacionales e
                internacionales.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Universidad Icesi</h3>
              <p className="location">
                Estudiante &amp; T&eacute;cnico de Audio
              </p>
              <p>
                FOH e ingenier&iacute;a de sonido en eventos universitarios.
                Formaci&oacute;n continua en producci&oacute;n de audio y
                tecnolog&iacute;as musicales.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Eventos Diversos</h3>
              <p className="location">Log&iacute;stica &amp; Stage</p>
              <p>
                Coordinaci&oacute;n log&iacute;stica y operaci&oacute;n
                t&eacute;cnica en m&uacute;ltiples eventos corporativos,
                culturales y musicales en Cali.
              </p>
            </div>
          </div>
        </section>

        <section id="habilidades">
          <h2 className="section-title">HABILIDADES</h2>
          <p className="section-subtitle">
            {"// Herramientas y conocimientos t\u00e9cnicos"}
          </p>

          <div className="skills-container">
            <div className="skill-category">
              <h3>DAWs &amp; Software</h3>
              <div>
                <span className="skill-tag">Pro Tools</span>
                <span className="skill-tag">Logic Pro</span>
                <span className="skill-tag">Ableton Live</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Consolas &amp; Hardware</h3>
              <div>
                <span className="skill-tag">Consolas Digitales</span>
                <span className="skill-tag">Consolas An&aacute;logas</span>
                <span className="skill-tag">Yamaha CL/QL</span>
                <span className="skill-tag">Behringer X32</span>
                <span className="skill-tag">MIDAS X32</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Producci&oacute;n en Vivo</h3>
              <div>
                <span className="skill-tag">FOH Mixing</span>
                <span className="skill-tag">Monitor Systems</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Conocimientos T&eacute;cnicos</h3>
              <div>
                <span className="skill-tag">Ac&uacute;stica</span>
                <span className="skill-tag">Microfon&iacute;a</span>
                <span className="skill-tag">Mezcla</span>
                <span className="skill-tag">Mastering</span>
                <span className="skill-tag">Procesamiento de se&ntilde;al</span>
                <span className="skill-tag">
                  Calibraci&oacute;n de sistemas
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="galeria">
          <h2 className="section-title">GALER&Iacute;A</h2>
          <p className="section-subtitle">
            {"// Momentos en vivo, stage y producci\u00f3n"}
          </p>

          <div className="gallery-grid">
            <div className="gallery-item">
              <Image
                alt="Audio en vivo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={galleryImage}
              />
              <div className="gallery-info">
                <h3>Audio en vivo</h3>
                <p>FOH / Monitores / Stage</p>
              </div>
            </div>

            <div className="gallery-item">
              <Image
                alt="Escenario musical"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={galleryImage}
              />
              <div className="gallery-info">
                <h3>Escenario</h3>
                <p>Eventos musicales</p>
              </div>
            </div>

            <div className="gallery-item">
              <Image
                alt="Consola de sonido"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={galleryImage}
              />
              <div className="gallery-info">
                <h3>Consolas</h3>
                <p>Mezcla profesional</p>
              </div>
            </div>

            <div className="gallery-item">
              <Image
                alt="Percusion en vivo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={galleryImage}
              />
              <div className="gallery-info">
                <h3>Percusi&oacute;n</h3>
                <p>Sesiones y presentaciones</p>
              </div>
            </div>

            <div className="gallery-item">
              <Image
                alt="Montaje tecnico"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={galleryImage}
              />
              <div className="gallery-info">
                <h3>Montaje</h3>
                <p>Log&iacute;stica t&eacute;cnica</p>
              </div>
            </div>

            <div className="gallery-item">
              <Image
                alt="Produccion musical"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={galleryImage}
              />
              <div className="gallery-info">
                <h3>Producci&oacute;n</h3>
                <p>Grabaci&oacute;n / Mezcla / Mastering</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto">
          <h2 className="section-title">CONTACTO</h2>
          <p className="section-subtitle">{"// Hablemos de tu proyecto"}</p>

          <div className="contact-grid">
            <a className="contact-item" href="mailto:hiranmontano27@gmail.com">
              <div className="icon">📧</div>
              <h3>Email</h3>
              <p>hiranmontano27@gmail.com</p>
            </a>

            <a
              className="contact-item"
              href="https://wa.me/573157734284"
              rel="noreferrer"
              target="_blank"
            >
              <div className="icon">📱</div>
              <h3>WhatsApp</h3>
              <p>+57 315 7734284</p>
            </a>

            <a
              className="contact-item"
              href="https://instagram.com/hiranmontano_12"
              rel="noreferrer"
              target="_blank"
            >
              <div className="icon">📸</div>
              <h3>Instagram</h3>
              <p>@hiranmontano_12</p>
            </a>

            <div className="contact-item">
              <div className="icon">📍</div>
              <h3>Ubicaci&oacute;n</h3>
              <p>Cali, Colombia</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>
          &copy; 2026 - Todos los derechos reservados | Dise&ntilde;ado para
          destacar en audio
        </p>
      </footer>
    </>
  );
}
