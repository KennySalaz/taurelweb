import React from "react";
import { motion } from "framer-motion";
import "../styles/partners-slider.css";
import arrowpUT from "../assets/arrorflow.png";

// Importar imágenes de socios
import logo9 from "../assets/slider/Logo camara de comercio 9.png";
import logo10 from "../assets/slider/Logo camara de comercio 10.png";
import logo11 from "../assets/slider/Logo camara de comercio 11.png";
import logo12 from "../assets/slider/Logo camara de comercio 12.png";
import logo15 from "../assets/slider/Logo camara de comercio 15.png";
import logo16 from "../assets/slider/Logo camara de comercio 16.png";
import logo19 from "../assets/slider/Logo camara de comercio 19.png";

const PartnersSlider: React.FC = () => {
  const partners = [
    { id: 1, src: logo9, alt: "Cámara de Comercio 9" },
    { id: 2, src: logo10, alt: "Cámara de Comercio 10" },
    { id: 3, src: logo11, alt: "Cámara de Comercio 11" },
    { id: 4, src: logo12, alt: "Cámara de Comercio 12" },
    { id: 5, src: logo15, alt: "Cámara de Comercio 15" },
    { id: 6, src: logo16, alt: "Cámara de Comercio 16" },
    { id: 7, src: logo19, alt: "Cámara de Comercio 19" },
  ];

  // Duplicar los partners para crear el efecto de loop infinito
  const duplicatedPartners = [...partners, ...partners, ...partners];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="partners-container">
      <div className="partners-content">
        <div className="partners-with-button">
          <div className="partners-slider-wrapper">
            <motion.div
              className="partners-slider-track"
              animate={{
                x: [0, -100 * partners.length],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <motion.div
                  key={`${partner.id}-${Math.floor(index / partners.length)}`}
                  className="partner-logo-item"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={partner.src} alt={partner.alt} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Botón Back to Top */}
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <img src={arrowpUT} alt="" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default PartnersSlider;
