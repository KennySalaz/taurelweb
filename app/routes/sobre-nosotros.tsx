import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedElement from "../components/AnimatedElement";
import "../styles/sobre-nosotros.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTrophy, 
  faUsers, 
  faGlobeAmericas, 
  faShieldAlt, 
  faHandshake, 
  faChartLine 
} from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// Import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

export function meta() {
  return [
    { title: "Sobre Nosotros - Taurel" },
    { name: "description", content: "Conoce más sobre Taurel, nuestra historia, valores y equipo" },
  ];
}

export default function SobreNosotros() {
  return (
    <div className="sobre-nosotros-page">
      {/* Hero Banner con Slider */}
      <section className="banner-slider">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="banner-swiper"
        >
          <SwiperSlide>
            <div className="banner-slide" style={{ backgroundImage: "url('https://via.placeholder.com/1920x600')" }}>
              <div className="banner-overlay"></div>
              <div className="banner-content">
                <h1>Misión</h1>
                <p>
                  Brindar soluciones logísticas integrales que superen las expectativas de nuestros clientes, 
                  optimizando sus cadenas de suministro con eficiencia, puntualidad y compromiso.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide" style={{ backgroundImage: "url('https://via.placeholder.com/1920x600')" }}>
              <div className="banner-overlay"></div>
              <div className="banner-content">
                <h1>Visión</h1>
                <p>
                  Ser reconocidos como líderes en logística internacional, expandiendo nuestra presencia global 
                  mientras mantenemos un servicio personalizado y de alta calidad.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide" style={{ backgroundImage: "url('https://via.placeholder.com/1920x600')" }}>
              <div className="banner-overlay"></div>
              <div className="banner-content">
                <h1>Valores</h1>
                <p>
                  Nos guiamos por la integridad, innovación, excelencia y compromiso con nuestros clientes, 
                  colaboradores y el medio ambiente.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Nuestra Historia */}
      <section className="history-section section">
        <div className="container">
          <AnimatedElement animation="fadeUp">
            <div className="section-title">
              <h2>Nuestra Historia</h2>
            </div>
          </AnimatedElement>
          
          <div className="history-content">
            <AnimatedElement animation="fadeRight" className="history-text">
              <p>
                Fundada hace más de 20 años, Taurel nació con la visión de transformar la logística internacional 
                mediante un servicio personalizado y eficiente. A lo largo de las décadas, hemos crecido constantemente, 
                ampliando nuestra red global y desarrollando soluciones innovadoras para afrontar los retos de un 
                mercado cada vez más complejo y dinámico.
              </p>
              <p>
                Nuestra trayectoria está marcada por hitos importantes como la expansión a nuevos mercados, 
                la implementación de tecnologías avanzadas para el seguimiento de mercancías y la obtención de 
                certificaciones internacionales que avalan nuestra calidad y compromiso.
              </p>
              <p>
                Hoy, Taurel se ha convertido en un referente en el sector logístico, ofreciendo soluciones integrales 
                que abarcan desde el transporte marítimo y terrestre hasta la gestión aduanera y el almacenaje. 
                Nuestro compromiso con la excelencia sigue siendo el pilar fundamental de nuestro crecimiento continuo.
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeLeft" className="history-image">
              <img src="https://via.placeholder.com/600x400" alt="Historia de Taurel" />
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="why-choose-us section">
        <div className="container">
          <AnimatedElement animation="fadeUp">
            <div className="section-title">
              <h2>¿Por qué elegirnos?</h2>
            </div>
          </AnimatedElement>
          
          <div className="features-grid">
            <AnimatedElement animation="fadeUp" delay={0.1} className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faTrophy} />
              </div>
              <h3>Experiencia</h3>
              <p>Más de 20 años brindando soluciones logísticas de excelencia</p>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeUp" delay={0.2} className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faGlobeAmericas} />
              </div>
              <h3>Cobertura Global</h3>
              <p>Presencia en los principales mercados internacionales</p>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeUp" delay={0.3} className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3>Equipo Experto</h3>
              <p>Profesionales altamente capacitados y especializados</p>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeUp" delay={0.4} className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3>Seguridad</h3>
              <p>Sistemas y protocolos avanzados para proteger su carga</p>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeUp" delay={0.5} className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h3>Atención Personalizada</h3>
              <p>Soluciones adaptadas a las necesidades específicas de cada cliente</p>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeUp" delay={0.6} className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3>Innovación</h3>
              <p>Constante mejora y adopción de nuevas tecnologías</p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Alianzas y Certificaciones */}
      <section className="alliances-section section">
        <div className="container">
          <div className="alliances-grid">
            <AnimatedElement animation="fadeRight" className="alliances-content">
              <div className="section-title text-left">
                <h2>Participación Activa en Gremios y Cámaras</h2>
              </div>
              <p>
                Formamos parte activa de las principales asociaciones y gremios del sector logístico, 
                lo que nos permite estar a la vanguardia de las tendencias y regulaciones de la industria, 
                ofreciendo así un servicio actualizado y de calidad a nuestros clientes.
              </p>
              
              <div className="alliances-logos">
                <AnimatedElement animation="fadeIn" delay={0.1} className="alliance-logo">
                  <img src="https://via.placeholder.com/120x60" alt="Alianza 1" />
                </AnimatedElement>
                <AnimatedElement animation="fadeIn" delay={0.2} className="alliance-logo">
                  <img src="https://via.placeholder.com/120x60" alt="Alianza 2" />
                </AnimatedElement>
                <AnimatedElement animation="fadeIn" delay={0.3} className="alliance-logo">
                  <img src="https://via.placeholder.com/120x60" alt="Alianza 3" />
                </AnimatedElement>
                <AnimatedElement animation="fadeIn" delay={0.4} className="alliance-logo">
                  <img src="https://via.placeholder.com/120x60" alt="Alianza 4" />
                </AnimatedElement>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeLeft" className="certifications-content">
              <div className="section-title text-left">
                <h2>Nuestras Certificaciones</h2>
              </div>
              <p>
                Contamos con las certificaciones más importantes de la industria, garantizando que nuestros 
                procesos cumplen con los más altos estándares de calidad y seguridad.
              </p>
              
              <div className="certification-items">
                <div className="certification-item">
                  <img src="https://via.placeholder.com/80x80" alt="Certificación ISO" />
                  <div className="certification-details">
                    <h4>ISO 9001:2015</h4>
                    <p>Sistema de Gestión de Calidad</p>
                  </div>
                </div>
                <div className="certification-item">
                  <img src="https://via.placeholder.com/80x80" alt="Certificación OEA" />
                  <div className="certification-details">
                    <h4>Operador Económico Autorizado</h4>
                    <p>Certificación aduanera de seguridad</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <AnimatedElement animation="fadeUp" className="cta-content">
            <h2>Trabajemos juntos</h2>
            <p>Descubre cómo podemos ayudarte a optimizar tu cadena logística con soluciones personalizadas.</p>
            <a href="/contactanos" className="btn btn-primary">Contáctanos</a>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}