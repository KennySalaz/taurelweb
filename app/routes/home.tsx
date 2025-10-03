import type { Route } from "./+types/home";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedElement from "../components/AnimatedElement";
import CountUp from "../components/CountUp";
import ServicesSlider from "../components/ServicesSlider";
import CertificationModal from "../components/CertificationModal";
import PartnersSlider from "../components/PartnersSlider";
import LocationsBanner from "../components/LocationsBanner";
import "../styles/home.css";
import hexagonos from "../assets/hexagonos.png";
import isoLogo from "../assets/Logo-ISO.png";
import fondonormaLogo from "../assets/brillante _FONDONORMA_ 1.png";
import img1911 from "../assets/1911.png";
import img1945 from "../assets/1945.png";
import img1999 from "../assets/1999.png";
import img2002 from "../assets/2002.png";
import img2024 from "../assets/2024.png";
import img1994 from "../assets/1994.png";
import videoBanner from "../assets/video-banner.mp4";
import maos2 from "../assets/maos2.png";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Taurel - Soluciones Logísticas" },
    {
      name: "description",
      content:
        "Taurel - Empresa líder en soluciones logísticas y transporte internacional",
    },
  ];
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="home-page">
      {/* Main Hero Section */}
      <section className="main-hero">
        <video
          className="main-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          onLoadStart={() => console.log("Video loading started")}
          onCanPlay={() => console.log("Video can play")}
          onError={(e) => console.error("Video error:", e)}
        >
          <source src={videoBanner} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="main-hero-overlay"></div>
        <div className="main-hero-content">
          <div className="main-hero-text">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>
                Somos su aliado logístico de principio a fin, comprometidos en
                cada paso: desde la planificación inicial hasta el destino
                final.
              </h1>
              <motion.button
                className="cta-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conoce nuestras soluciones
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Hero Section */}
      <section className="stats-hero">
        <div className="stats-hero-overlay"></div>
        <div className="container stats-hero-container">
          <img className="maos2" src={maos2} alt="" />
          <motion.div
            className="stats-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="stats-title">
              Más que logística: es un legado de 100 años
            </p>
            <p className="stats-subtitle">
              Algunos datos curiosos sobre nuestra compañía
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>
                  <CountUp end={9} duration={2.5} prefix="+" />
                </h3>
                <p>Oficinas a nivel Nacional</p>
              </div>
              <div className="stat-card">
                <h3>
                  <CountUp end={180} duration={2.8} prefix="+" />
                </h3>
                <p>Aliados a nivel global para conectar sus operaciones</p>
              </div>
              <div className="stat-card">
                <h3>
                  <CountUp end={200} duration={3} prefix="+" />
                </h3>
                <p>Colaboradores para satisfacer sus necesidades</p>
              </div>
              <div className="stat-card">
                <h3>
                  <CountUp end={2000} duration={3.2} prefix="+" />
                </h3>
                <p>Clientes que confían en nuestras soluciones innovadoras</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Slider */}
      <section className="services-slider section">
        <ServicesSlider />
      </section>

      {/* Timeline Section */}
      <section className="timeline-section section">
        <div className="container">
          <AnimatedElement animation="fadeUp">
            <div className="section-title">
              <h2>Nuestra Historia, Tu Confianza...</h2>
            </div>
          </AnimatedElement>

          {/* Hex Timeline */}
          <div className="hex-timeline">
            {/* línea central */}
            <motion.div
              className="timeline-line"
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />

            {/* fila superior */}
            <div className="hex-row top">
              <motion.div
                className="hex-item top"
                initial={{ opacity: 0, y: -100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className="hex"
                  style={{
                    backgroundImage: `url(${img1911})`,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="hex-content-wrapper"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="hex-overlay" />
                    <motion.span
                      className="hex-year"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      1911
                    </motion.span>
                  </motion.div>
                </motion.div>
                <motion.p
                  className="hex-caption"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Comenzamos con una pequeña oficina aduanal manejando trámites
                  portuarios básicos de recepción de mercancías en puerto.
                </motion.p>
              </motion.div>

              <motion.div
                className="hex-item top"
                initial={{ opacity: 0, y: -100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className="hex"
                  style={{
                    backgroundImage: `url(${img1945})`,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="hex-content-wrapper"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="hex-overlay" />
                    <motion.span
                      className="hex-year"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      1945
                    </motion.span>
                  </motion.div>
                </motion.div>
                <motion.p
                  className="hex-caption"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  Decidimos expandir nuestras actividades al manejo del
                  transporte de carga vía marítima, construyendo un edificio
                  emblemático en La Guaira – Venezuela.
                </motion.p>
              </motion.div>

              <motion.div
                className="hex-item top"
                initial={{ opacity: 0, y: -100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className="hex"
                  style={{
                    backgroundImage: `url(${img1994})`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    /*  rotateY: 10,
                    rotateX: -5, */
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="hex-content-wrapper"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="hex-overlay" />
                    <motion.span
                      className="hex-year"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      viewport={{ once: true }}
                    >
                      1994
                    </motion.span>
                  </motion.div>
                </motion.div>
                <motion.p
                  className="hex-caption"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  Seleccionados como Agente de Aduanas y Asesor en Materia de
                  Aduanas del METRO DE CARACAS C.A. durante 4 años (Línea 3).
                </motion.p>
              </motion.div>
            </div>

            {/* fila inferior */}
            <div className="hex-row bottom">
              <motion.div
                className="hex-item bottom"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className="hex"
                  style={{
                    backgroundImage: `url(${img1999})`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    /*  rotateY: -10,
                    rotateX: -5, */
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="hex-content-wrapper"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="hex-overlay" />
                    <motion.span
                      className="hex-year"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      1999
                    </motion.span>
                  </motion.div>
                </motion.div>
                <motion.p
                  className="hex-caption"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  Primer Certificado del Servicio de Gestión de la Calidad. Bajo
                  la norma COVENIN-ISO 9002:1995.
                </motion.p>
              </motion.div>

              <motion.div
                className="hex-item bottom"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className="hex"
                  style={{
                    backgroundImage: `url(${img2002})`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    /*  rotateY: 10,
                    rotateX: -5, */
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="hex-content-wrapper"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="hex-overlay" />
                    <motion.span
                      className="hex-year"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      viewport={{ once: true }}
                    >
                      2002
                    </motion.span>
                  </motion.div>
                </motion.div>
                <motion.p
                  className="hex-caption"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  Representación de la naviera ZIM en Venezuela. Desde 2002,
                  representación exclusiva con la creación de ZIM Venezuela.
                </motion.p>
              </motion.div>

              <motion.div
                className="hex-item bottom"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className="hex"
                  style={{
                    backgroundImage: `url(${img2024})`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotateY: -10,
                    rotateX: 5,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="hex-content-wrapper"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="hex-overlay" />
                    <motion.span
                      className="hex-year"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                      viewport={{ once: true }}
                    >
                      2024
                    </motion.span>
                  </motion.div>
                </motion.div>
                <motion.p
                  className="hex-caption"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  viewport={{ once: true }}
                >
                  Innovamos a nivel tecnológico con la creación de DragOn,
                  nuestra APP.
                </motion.p>
              </motion.div>
            </div>

            {/* decoraciones laterales */}
            <motion.div
              className="hex-decoration hex-left"
              aria-hidden="true"
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              animate={{
                scale: [1, 1.015, 1],
                y: [0, -4, 0],
              }}
              whileHover={{
                opacity: 0.8,
                scale: 1.05,
                filter: "brightness(1.1) drop-shadow(0 0 12px rgba(26, 144, 206, 0.4))",
              }}
            />
            <motion.div
              className="hex-decoration hex-right"
              aria-hidden="true"
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              animate={{
                rotate: [0, 1.5, 0, -1.5, 0],
                scale: [1, 1.015, 1],
                y: [0, 3, 0, -3, 0],
              }}
              whileHover={{
                opacity: 0.8,
                scale: 1.05,
                rotate: 5,
                filter: "brightness(1.1) drop-shadow(0 0 12px rgba(26, 144, 206, 0.4))",
              }}
            />
          </div>
        </div>
      </section>

      {/* Certificación ISO Banner */}
      <div className="certifications section">
        <div className="cert-banner">
          <img src={isoLogo} alt="ISO" className="cert-logo cert-logo-left" />
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1, cursor: "pointer" }}
            whileTap={{ scale: 0.98 }}
            onClick={openModal}
            className="cert-title"
          >
            Certificación ISO 9001:2025
          </motion.h3>
          <img
            src={fondonormaLogo}
            alt="FONDONORMA"
            className="cert-logo cert-logo-right"
          />
        </div>
      </div>
      {/* Locations Banner */}
      <LocationsBanner />
      {/* Partners Slider Section */}
      <PartnersSlider />
      {/* Modal de Certificaciones */}
      <CertificationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
