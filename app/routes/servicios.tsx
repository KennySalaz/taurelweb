import React from "react";
import { motion } from "framer-motion";
import AnimatedElement from "../components/AnimatedElement";
import "../styles/servicios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faShip, 
  faTruckMoving, 
  faWarehouse, 
  faFileAlt, 
  faCube, 
  faGlobeAmericas 
} from "@fortawesome/free-solid-svg-icons";

export function meta() {
  return [
    { title: "Servicios - Taurel" },
    { name: "description", content: "Conoce nuestros servicios logísticos y de transporte internacional" },
  ];
}

export default function Servicios() {
  return (
    <div className="servicios-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="page-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Servicios</h1>
            <p>Nuestras Soluciones Logísticas</p>
          </motion.div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="main-services section">
        <div className="container">
          <AnimatedElement animation="fadeUp">
            <div className="section-title">
              <h2>Transporte Internacional de Carga</h2>
            </div>
            <p className="section-description">
              En Taurel Internacional de Carga ofrecemos soluciones logísticas completas para optimizar su cadena de suministro.
            </p>
          </AnimatedElement>

          <div className="service-boxes">
            <AnimatedElement animation="fadeUp" delay={0.1} className="service-box">
              <div className="service-icon">
                <FontAwesomeIcon icon={faShip} />
              </div>
              <h3>Transporte Marítimo</h3>
              <p>
                Servicio de transporte marítimo con conexiones a los principales puertos del mundo. Ofrecemos soluciones para carga completa y consolidada.
              </p>
              <ul className="service-features">
                <li>Servicio de puerta a puerta</li>
                <li>Rastreo en línea</li>
                <li>Consolidación de carga</li>
              </ul>
            </AnimatedElement>

            <AnimatedElement animation="fadeUp" delay={0.2} className="service-box">
              <div className="service-icon">
                <FontAwesomeIcon icon={faTruckMoving} />
              </div>
              <h3>Transporte Terrestre</h3>
              <p>
                Red de transporte terrestre que conecta los principales centros logísticos con entregas puntuales y servicio personalizado.
              </p>
              <ul className="service-features">
                <li>Flota moderna y segura</li>
                <li>Seguimiento GPS en tiempo real</li>
                <li>Transporte nacional e internacional</li>
              </ul>
            </AnimatedElement>

            <AnimatedElement animation="fadeUp" delay={0.3} className="service-box">
              <div className="service-icon">
                <FontAwesomeIcon icon={faFileAlt} />
              </div>
              <h3>Gestión Aduanera</h3>
              <p>
                Servicios integrales de gestión aduanera para facilitar sus importaciones y exportaciones cumpliendo con todas las regulaciones.
              </p>
              <ul className="service-features">
                <li>Asesoría en comercio exterior</li>
                <li>Clasificación arancelaria</li>
                <li>Documentación y permisos</li>
              </ul>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Servicios Marítimos */}
      <section className="maritime-services section">
        <div className="container">
          <AnimatedElement animation="fadeUp">
            <div className="section-title">
              <h2>Servicios Marítimos</h2>
            </div>
          </AnimatedElement>

          <div className="services-content">
            <AnimatedElement animation="fadeLeft" className="services-image">
              <div className="hexagon-image">
                <img src="https://via.placeholder.com/600x400" alt="Servicios Marítimos" />
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeRight" className="services-text">
              <h3>Conectamos todos los continentes con nuestros servicios marítimos</h3>
              <p>
                Ofrecemos soluciones de transporte marítimo global para todo tipo de carga. Nuestro equipo experto gestiona cada embarque con atención al detalle y compromiso con la excelencia.
              </p>
              <div className="service-details">
                <div className="service-detail">
                  <FontAwesomeIcon icon={faGlobeAmericas} className="detail-icon" />
                  <div className="detail-text">
                    <h4>Cobertura Global</h4>
                    <p>Conexiones con los principales puertos del mundo</p>
                  </div>
                </div>
                <div className="service-detail">
                  <FontAwesomeIcon icon={faCube} className="detail-icon" />
                  <div className="detail-text">
                    <h4>Carga Consolidada</h4>
                    <p>Soluciones eficientes para envíos más pequeños</p>
                  </div>
                </div>
                <div className="service-detail">
                  <FontAwesomeIcon icon={faWarehouse} className="detail-icon" />
                  <div className="detail-text">
                    <h4>Almacenaje Temporal</h4>
                    <p>Instalaciones seguras para su mercancía</p>
                  </div>
                </div>
              </div>
              <a href="/contactanos" className="btn btn-primary">Solicitar Cotización</a>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Cadena Logística */}
      <section className="logistics-chain section">
        <div className="container">
          <AnimatedElement animation="fadeUp">
            <div className="section-title">
              <h2>Cadena Logística Completa</h2>
            </div>
          </AnimatedElement>
          
          <div className="logistics-flow">
            <AnimatedElement animation="fadeUp" delay={0.1} className="logistics-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Planificación</h4>
                <p>Análisis de sus necesidades y diseño de soluciones personalizadas</p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeUp" delay={0.2} className="logistics-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Recogida</h4>
                <p>Recolección de mercancía en el punto de origen</p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeUp" delay={0.3} className="logistics-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Transporte</h4>
                <p>Traslado seguro y eficiente por vía marítima, terrestre o aérea</p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeUp" delay={0.4} className="logistics-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Aduanas</h4>
                <p>Gestión de trámites y documentación aduanera</p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeUp" delay={0.5} className="logistics-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>Entrega</h4>
                <p>Distribución final hasta el punto de destino</p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <AnimatedElement animation="fadeUp" className="cta-content">
            <h2>Soluciones logísticas a medida</h2>
            <p>Contáctanos para discutir cómo podemos ayudar a optimizar tu cadena de suministro.</p>
            <a href="/contactanos" className="btn btn-primary">Solicitar Información</a>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}