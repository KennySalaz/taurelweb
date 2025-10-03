import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/footer.css";
import TaurelLogo from "../assets/logo.png";
import LinkedinIcon from "../assets/linkedin.png";
import FacebookIcon from "../assets/facebook.png";
import InstagramIcon from "../assets/instagram.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import bandera from "../assets/bandera.png";
const Footer = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "nombre":
        if (!value.trim()) {
          error = "El nombre es requerido";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "El correo electrónico es requerido";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Formato de correo inválido";
        }
        break;
    }

    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validación en tiempo real
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar todos los campos
    const newErrors = {
      nombre: validateField("nombre", formData.nombre),
      email: validateField("email", formData.email),
    };

    setErrors(newErrors);

    // Si hay errores, no enviar
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envío
      console.log("Datos del formulario footer:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Resetear formulario después del envío exitoso
      setFormData({
        nombre: "",
        email: "",
      });

      alert("¡Mensaje enviado exitosamente!");
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      alert("Error al enviar el mensaje. Por favor, inténtelo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.nombre.trim() &&
    formData.email.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-inner">
          {/* Columna izquierda: Logo, tagline, contacto, sociales */}
          <div className="footer-left">
            <Link to="/" className="footer-logo-line" aria-label="Ir al inicio">
              <img src={TaurelLogo} alt="Taurel" />
            </Link>
            <p className="footer-tagline">
              Impulsamos tu negocio de principio a fin.
            </p>

            <ul className="contact-list">
              <li>
                <span className="icon-wrap">
                  <img src={phone} alt="Teléfono" />
                </span>
                <span>+58 424-1665906</span>
              </li>
              <li>
                <span className="icon-wrap">
                  <img src={phone} alt="Teléfono" />
                </span>
                <span>+58 424-2584353</span>
              </li>
              <li>
                <span className="icon-wrap icon-custom-location">
                  <img src={location} alt="Ubicación" />
                </span>
                <span>Boleíta Norte, Caracas Dtto Capital</span>
              </li>
            </ul>

            <div className="footer-social">
              <a
                href="#"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedinIcon}
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
            </div>
          </div>

          {/* Columna derecha: Publicaciones y contacto rápido */}
          <div className="footer-right">
            <div className="recent-posts">
              <h3>Publicaciones Recientes</h3>
              <div className="posts-row">
                <a
                  className="post-card post-1"
                  href="#"
                  aria-label="Publicación 1"
                />
                <a
                  className="post-card post-2"
                  href="#"
                  aria-label="Publicación 2"
                />
                <a
                  className="post-card post-3"
                  href="#"
                  aria-label="Publicación 3"
                />
              </div>
            </div>

            <div className="quick-contact">
              <h3>Contacto rápido</h3>
              <form className="quick-form" onSubmit={handleSubmit}>
                <div className="footer-form-group-row">
                  <div className="footer-form-group">
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className={errors.nombre ? "input-error" : ""}
                      placeholder="Nombre y Apellido"
                      aria-label="Nombre y Apellido"
                    />
                    {errors.nombre && (
                      <span className="footer-error-message">
                        {errors.nombre}
                      </span>
                    )}
                  </div>
                  <div className="footer-form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? "input-error" : ""}
                      placeholder="Correo electrónico"
                      aria-label="Correo electrónico"
                    />
                    {errors.email && (
                      <span className="footer-error-message">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>
                <div className="footer-form-group">
                  <button
                    type="submit"
                    className={`btn-send ${!isFormValid ? "btn-disabled" : ""}`}
                    disabled={!isFormValid || isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Idioma */}
        </div>
        <div className="footer-lang">
          <img className="flag-ven" src={bandera} alt="Venezuela" />
          <a href="#" className="lang-active">
            ESP
          </a>
          <span className="sep">|</span>
          <a href="#">ENG</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">Copyright 2025 Taurel. RIF: J-00035914-8</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
