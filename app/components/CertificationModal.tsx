import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/certification-modal.css";

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CertificationModal: React.FC<CertificationModalProps> = ({ isOpen, onClose }) => {
  const certificates = [
    {
      year: "2016",
      title: "TAUREL & CIA. SUCRS., C.A",
      subtitle: "Certificado por",
      code: "9001-513-1-11-2001",
      image: "/images/certificate-2016.png" // Placeholder
    },
    {
      year: "2023", 
      title: "CUSTODIAS Y ALMACENAJE , C.A",
      subtitle: "Certificado por",
      code: "9001-149-3-12-1999",
      image: "/images/certificate-2023.png" // Placeholder
    },
    {
      year: "2024",
      title: "TAUREL & CIA. SUCRS., C.A",
      subtitle: "Certificado por", 
      code: "9001-837-3-12-2017",
      image: "/images/certificate-2024.png" // Placeholder
    }
  ];

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
            <button className="modal-close" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="modal-header">
              <div className="modal-cert-banner">
                <img src="/app/assets/Logo-ISO.png" alt="ISO" className="modal-cert-logo modal-cert-logo-left" />
                <h2 className="modal-cert-title">Certificación ISO 9001:2025</h2>
                <img src="/app/assets/brillante _FONDONORMA_ 1.png" alt="FONDONORMA" className="modal-cert-logo modal-cert-logo-right" />
              </div>
            </div>

            <div className="certificates-grid">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.year}
                  className="certificate-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                 {/*  <div className="certificate-year">{cert.year}</div> */}
                  <div className="certificate-preview">
                    {/* Placeholder certificate image */}
                    <div className="certificate-placeholder">
                      <div className="cert-header">
                        <div className="cert-logo-small">ISO</div>
                        <div className="cert-info">
                          <h4>{cert.title}</h4>
                          <p>{cert.subtitle}</p>
                          <span className="cert-code">{cert.code}</span>
                        </div>
                        <div className="cert-logo-small">FONDONORMA</div>
                      </div>
                      <div className="cert-body">
                        <div className="cert-lines">
                          <div className="cert-line"></div>
                          <div className="cert-line"></div>
                          <div className="cert-line"></div>
                          <div className="cert-line short"></div>
                        </div>
                        <div className="cert-seal">
                          <div className="seal-circle"></div>
                        </div>
                      </div>
                      <div className="cert-footer">
                        <div className="cert-signature-area">
                          <div className="signature-line"></div>
                          <div className="signature-line"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="certificate-details">
                    <h3>{cert.title}</h3>
                    <p className="cert-subtitle">{cert.subtitle}</p>
                    <p className="cert-code-display">{cert.code}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificationModal;