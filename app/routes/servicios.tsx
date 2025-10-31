import { motion } from "framer-motion";
import AnimatedElement from "../components/AnimatedElement";
import "../styles/servicios.css";
import imageMap from "../assets/maps.png";
import hexagonIcon from "../assets/arrow-right.png";
import heaxogono3 from "../assets/Hexagonos 3.png";
import hexagonoBgRight from "../assets/Hexagonos 9.png";
import servicioImg from "../assets/servicio-img-1.png";
import servicioImg2 from "../assets/servicio-img-2.png";
import servicioImg3 from "../assets/servicio-img-3.png";
import servicioImg4 from "../assets/servicio-img-4.png";
import hexagono14 from "../assets/Hexagonos 14.png";

export function meta() {
  return [
    { title: "Servicios - Taurel" },
    {
      name: "description",
      content:
        "Conoce nuestros servicios logísticos y de transporte internacional",
    },
  ];
}

export default function Servicios() {
  return (
    <div className="servicios-page">
      <div className="page-header-servicios">
        <h2>Nuestras Soluciones Logisticas</h2>
      </div>
      {/* Asesoría Técnica */}
      <section className="advisory-section section">
        <motion.img
          src={heaxogono3}
          alt="Hexágonos decorativos"
          className="hexagonos-decorativos"
          whileHover={{
            scale: 1.05,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <div className="container">
          <div className="service-content-wrapper">
            <AnimatedElement
              animation="fadeLeft"
              className="service-text-content"
            >
              <div className="service-icon-title">
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={hexagonIcon}
                  alt=""
                />
                <h2>Asesoría técnica</h2>
              </div>
              <p className="service-description">
                Ponemos a tu disposición asesoría técnica especializada en
                materia de aduanas, comercio internacional e integración
                económica.
              </p>
              <ul className="service-list">
                <li>Asesoramos.</li>
                <li>Informamos.</li>
                <li>Apoyamos</li>
              </ul>
              <p className="service-extra-info">
                Trámite de permisos requeridos, por las autoridades aduaneras,
                para el ingreso o extracción de mercancías relacionadas con el
                territorio nacional.
              </p>
            </AnimatedElement>

            <AnimatedElement
              animation="fadeRight"
              className="service-image-content"
            >
              <motion.div
                className="hexagon-image-container"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.img
                  src={servicioImg}
                  alt="Asesoría técnica - Reunión de negocios"
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Transporte de Carga Internacional */}
      <section className="international-transport-section section">
        <div className="container">
          <div className="service-content-wrapper reverse">
            <div>
              <AnimatedElement
                animation="fadeRight"
                className="service-text-content"
              >
                <div className="service-icon-title">
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={hexagonIcon}
                    alt=""
                  />
                  <h2>Transporte de Carga Internacional:</h2>
                </div>
                <p className="service-highlight">
                  <em>
                    Llegamos a más de 180 países del mundo, lo que nos permite
                    ofrecerte:
                  </em>
                </p>
                <ul className="service-list">
                  <li>Cobertura en todos los continentes.</li>
                  <li>
                    Servicios consolidados aéreos, marítimos y multimodal.
                  </li>
                  <li>
                    Servicio de contenedores completos (FCL) y carga fraccionada
                    (LCL).
                  </li>
                  <li>
                    Transporte terrestre internacional en furgones completos
                    (FTL) y fraccionados (LTL).
                  </li>
                </ul>
              </AnimatedElement>
              <div className="service-content-wrapper">
                <AnimatedElement
                  animation="fadeLeft"
                  className="service-text-content"
                >
                  <div className="service-icon-title">
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src={hexagonIcon}
                      alt=""
                    />
                    <h2>Transporte Terrestre:</h2>
                  </div>
                  <p className="service-description">
                    De manera eficiente, segura e integrada, colocamos a tu
                    disposición el servicio de flete terrestre nacional, a fin
                    de garantizar que tus cargas lleguen a tiempo en el lugar
                    exacto, bajo el cuidado de la misma empresa, con los
                    controles y estándares de calidad.
                  </p>
                </AnimatedElement>
              </div>
            </div>
            <AnimatedElement
              animation="fadeLeft"
              className="service-image-content"
            >
              <motion.div
                className="hexagon-image-container"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.img
                  src={servicioImg2}
                  alt="Transporte de carga internacional"
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Almacenamiento y Distribución / Servicios Navieros */}

      <section className="storage-maritime-section section">
        <div className="bg-asolute-heaxogono14">
          <motion.img src={hexagono14} alt="Mapa mundial" />
        </div>
        <div className="container">
          <div className="storage-maritime-content">
            <div className="map-background">
              <motion.img src={imageMap} alt="Mapa mundial" />
            </div>

            {/* Almacenamiento y Distribución */}
            <div className="service-content-wrapper">
              <AnimatedElement
                animation="fadeUp"
                delay={0.1}
                className="storage-section"
              >
                <div className="service-icon-title">
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={hexagonIcon}
                    alt=""
                  />
                  <h2>Almacenamiento y Distribución:</h2>
                </div>

                <p className="service-description">
                  <strong>Compras Internacionales:</strong> Ponemos a tu
                  disposición un equipo capacitado y de alto rendimiento que te
                  guiará en cada paso durante todo el proceso, desde donde
                  realizar tus compras hasta colocarlo en la puerta de tu
                  fábrica. Cubriendo demanda desde Asia hasta Latinoamérica.
                </p>

                <ul className="service-list">
                  <li>
                    Soluciones integrales en compras y logísticas, con envíos
                    aéreos y marítimos.
                  </li>
                  <li>
                    Consolidación de carga, sin importar el tamaño y ubicación.
                  </li>
                  <li>
                    Networking, investigación de mercado para importación y
                    exportación.
                  </li>
                  <li>
                    Envío de carga desde Miami a Venezuela, haciendo entrega en
                    almacenes u oficinas.
                  </li>
                </ul>
              </AnimatedElement>
              <AnimatedElement
                animation="fadeLeft"
                className="service-image-content"
              >
                <motion.div
                  className="hexagon-image-container"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.img
                    src={servicioImg3}
                    alt="Transporte de carga internacional"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.div>
              </AnimatedElement>
            </div>

            {/* Servicios Navieros */}
            <AnimatedElement
              animation="fadeUp"
              delay={0.2}
              className="maritime-section"
            >
              <div className="service-icon-title">
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={hexagonIcon}
                  alt=""
                />
                <h2>Servicios Navieros</h2>
              </div>

              <p className="service-description">
                Desde 1945, hemos perfeccionado nuestro servicio para ofrecer la
                excelencia que tu negocio merece. Nuestra vasta experiencia nos
                ha posicionado como agentes de confianza en Venezuela para las
                líneas navieras más importantes del mundo.
              </p>

              <div className="maritime-services-grid">
                <div className="maritime-service-column">
                  <h4>Manejo de contenedores llenos y vacíos:</h4>
                  <ul className="service-sublist">
                    <li>
                      Gestión total de contenedores: llenos y vacíos con
                      movilización eficiente en los principales puertos de
                      Venezuela.
                    </li>
                    <li>
                      Control y monitoreo en tiempo real: ofrecemos visibilidad
                      y control sobre el estatus de sus equipos.
                    </li>
                    <li>
                      Seguridad: garantizamos la integridad de su mercancía y el
                      resguardo de los contenedores.
                    </li>
                    <li>
                      Reparaciones de contenedores: operamos bajo estándares
                      internacionales.
                    </li>
                  </ul>
                </div>

                <div className="maritime-service-column">
                  <h4>Actuando como:</h4>
                  <ul className="service-sublist">
                    <li>Agente general</li>
                    <li>Agente portuario</li>
                    <li>Agente protector</li>
                    <li>
                      Manejo de carga pesada y voluminosa, y coordinación de las
                      operaciones de carga y descarga.
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Agenciamiento Aduana */}
      <section className="customs-agency-section section">
        <motion.img
          src={hexagonoBgRight}
          alt=""
          className="hexagono-bg right"
          whileHover={{
            scale: 1.1,
            rotate: -5,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <div>
          <div className="service-content-wrapper service-content-wrapper-edit">
            <AnimatedElement
              animation="fadeRight"
              className="service-image-content"
            >
              <motion.div
                className="hexagon-image-container"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.img
                  src={servicioImg4}
                  alt="Agenciamiento Aduana - Puerto y contenedores"
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>
            </AnimatedElement>
            <AnimatedElement
              animation="fadeLeft"
              className="service-text-content"
            >
              <div className="service-icon-title">
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={hexagonIcon}
                  alt=""
                />
                <h2>Agenciamiento Aduana</h2>
              </div>
              <p className="service-description">
                Con más de 110 años de experiencia en el mercado venezolano,
                atendemos tus importaciones, exportaciones y/o tránsito de
                embarques; así como tu reimportación, reexportación,
                reexpedición, almacenamiento o depósito y/o la aplicación de los
                Regímenes Aduaneros Especiales, a través de todas las aduanas
                habilitadas marítimas, aéreas y terrestres, en las que tenemos
                presencia.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Nuestra Cadena Logística */}
      <section className="logistics-chain-flow section">
        <div>
          <AnimatedElement animation="fadeUp">
            <div className="logistics-chain-header">
              <h2>NUESTRA CADENA LOGÍSTICA...</h2>
            </div>
          </AnimatedElement>
          <AnimatedElement animation="fadeUp" delay={0.2}>
            <div className="logistics-flow-container">
              <div className="logistics-flow-background"></div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}
