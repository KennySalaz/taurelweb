import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "~/contexts/LanguageContext";
import "../styles/certification-modal.css";
import image1 from "../assets/modal/1.png";
import image2 from "../assets/modal/2.png";
import image3 from "../assets/modal/3.png";
import image4 from "../assets/modal/4.png";
import image5 from "../assets/modal/5.png";
import image6 from "../assets/modal/6.png";
import hexa from "../assets/Hexagonos-modal.png";
import ISOImage from "../assets/Logo-ISO.png";
import IsoBrinnat from "../assets/brillante _FONDONORMA_ 1.png";
interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CertificationModal: React.FC<CertificationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useLanguage();
  const titles = [
    "TAUREL & CÍA. SUCRS., C.A Certificado n° 9001-151-31-11-2001",
    "CUSTODIAS Y ALMACENAJE , C.A Certificado n° 9001-149-31-12-1999",
    "TAUREL & CÍA. SUCRS., C.A Certificado n°9001-837-31-12-2017",
  ];

  const certificateImages = [image1, image2, image3, image4, image5, image6];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={hexa} alt="Hexagonos" className="modal-hexagonos" />
            <button className="modal-close" onClick={onClose}>
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-3.90187e-05 18.375L7.76996 8.295L7.73496 9.52L0.349961 -1.2517e-06H3.14996L9.20496 7.875L8.15496 7.84L14.21 -1.2517e-06H16.94L9.48496 9.625L9.51996 8.295L17.36 18.375H14.525L8.11996 9.975L9.09996 10.115L2.79996 18.375H-3.90187e-05Z"
                  fill="#243C6B"
                />
              </svg>
            </button>

            <div className="modal-header">
              <div className="modal-cert-banner">
                <img
                  src={ISOImage}
                  alt="ISO"
                  className="modal-cert-logo modal-cert-logo-left"
                />
                <h2 className="modal-cert-title">
                  {t("home.certification.title")}
                </h2>
                <img
                  src={IsoBrinnat}
                  alt="FONDONORMA"
                  className="modal-cert-logo modal-cert-logo-right"
                />
              </div>
            </div>

            <div className="certificates-container">
              {/* Sección de títulos arriba */}
              <motion.div
                className="titles-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {titles.map((title, index) => (
                  <motion.h3
                    key={index}
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    {title}
                  </motion.h3>
                ))}
              </motion.div>

              {/* Contenedor con las 6 imágenes */}
              <motion.div
                className="certificates-grid-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="certificates-grid">
                  {certificateImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="certificate-item"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <img
                        src={image}
                        alt={`Certificado ${index + 1}`}
                        className="certificate-image"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificationModal;
