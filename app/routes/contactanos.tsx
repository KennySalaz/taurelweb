import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedElement from "../components/AnimatedElement";
import "../styles/contactanos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import LocationsFinder from "../components/LocationsFinder";
import hexaImage from "../assets/hexa-image.png";
import hexagonaWhite from "../assets/Hexagonos-5.png";
import mapapoints from "../assets/maos2.png";
import hexaBlue from "../assets/hexagonos.png";

export function meta() {
  return [
    { title: "Contáctanos - Taurel" },
    {
      name: "description",
      content:
        "Ponte en contacto con Taurel para solicitar información sobre nuestros servicios logísticos",
    },
  ];
}

export default function Contactanos() {
  const [formData, setFormData] = useState({
    solicitud: "",
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
  });

  const [errors, setErrors] = useState({
    solicitud: "",
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const locations = [
    {
      city: "Caracas, Dtto. Capital",
      phone: "+58212-5584563",
    },
    {
      city: "La Guaira, Edo. Vargas",
      phone: "+58212-5584563",
    },
    {
      city: "Catia La Mar, Vargas",
      phone: "+58212-5584563",
    },
    {
      city: "Valencia, Edo. Carabobo",
      phone: "+58212-5584563",
    },
    {
      city: "El Guamache, Nueva Esparta",
      phone: "+58212-5584563",
    },
    {
      city: "Maracaibo, Edo. Zulia",
      phone: "+58212-5584563",
    },
    {
      city: "Barquisimeto, Edo. Lara",
      phone: "+58212-5584563",
    },
    {
      city: "Pto. Cabello, Edo. Carabobo",
      phone: "+58212-5584563",
    },
    {
      city: "San Antonio del táchira, Edo. Táchira",
      phone: "+58212-5584563",
    },
    {
      city: "Santa Elena de Uairén, Bolívar",
      phone: "+58212-5584563",
    },
  ];

  const validateForm = () => {
    const newErrors = {
      solicitud: validateField("solicitud", formData.solicitud),
      nombre: validateField("nombre", formData.nombre),
      email: validateField("email", formData.email),
      telefono: validateField("telefono", formData.telefono),
      empresa: validateField("empresa", formData.empresa),
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "solicitud":
        if (!value.trim()) {
          error = "Por favor, indique su solicitud o requerimiento";
        }
        break;
      case "nombre":
        if (!value.trim()) {
          error = "El nombre y apellido es requerido";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "El correo electrónico es requerido";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Por favor, ingrese un correo electrónico válido";
        }
        break;
      case "telefono":
        if (!value.trim()) {
          error = "El número de teléfono es requerido";
        }
        break;
      case "empresa":
        if (!value.trim()) {
          error = "El nombre de la empresa es requerido";
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

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Aquí puedes agregar la lógica para enviar el formulario
      // Por ejemplo, hacer una llamada a una API
      console.log("Datos del formulario:", formData);

      // Simular envío
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Resetear formulario después del envío exitoso
      setFormData({
        solicitud: "",
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
      });

      alert("¡Formulario enviado exitosamente!");
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      alert("Error al enviar el formulario. Por favor, inténtelo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.solicitud.trim() &&
    formData.nombre.trim() &&
    formData.email.trim() &&
    formData.telefono.trim() &&
    formData.empresa.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  return (
    <div className="contactanos-page">
      {/* Sección de Ubicaciones */}
      <section className="taurel-contact-section">
        <div className="taurel-contact-container">
          <motion.div
            className="taurel-contact-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Contáctanos</h1>
          </motion.div>

          <div className="taurel-contact-content">
            <div className="taurel-contact-columns">
              <div className="taurel-contact-locations-container">
                <div className="taurel-contact-left-column">
                  {locations.slice(0, 5).map((location, index) => (
                    <div key={index} className="taurel-contact-item">
                      <div className="taurel-contact-bullet"></div>
                      <div className="taurel-contact-info">
                        <span className="taurel-contact-city">
                          {location.city}
                        </span>
                        <span className="taurel-contact-phone">
                          <FontAwesomeIcon icon={faPhone} />
                          {location.phone}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="taurel-contact-right-column">
                  {locations.slice(5, 10).map((location, index) => (
                    <div key={index} className="taurel-contact-item">
                      <div className="taurel-contact-bullet"></div>
                      <div className="taurel-contact-info">
                        <span className="taurel-contact-city">
                          {location.city}
                        </span>
                        <span className="taurel-contact-phone">
                          <FontAwesomeIcon icon={faPhone} />
                          {location.phone}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="taurel-contact-image-container">
                <div className="taurel-contact-hexagon">
                  <img src={hexaImage} alt="Profesional Taurel" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="contact-form-section">
        <img
          className="hexagon-blue-left-form hexagon-hover-zoom"
          src={hexaBlue}
          alt="Mapa de Ubicación"
        />
        <img
          className="hexagon-blue-right-form hexagon-hover-zoom"
          src={hexaBlue}
          alt="Mapa de Ubicación"
        />
        <div className="container">
          <motion.div
            className="contact-form-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-header">
              <h2>¿Cómo podemos ayudarte?</h2>
              <p>
                Si tiene alguna pregunta sobre Taurel o puede cómo podemos
                ayudar con cualquier asunto relacionado con logística, póngase
                en contacto con nuestra gente de atendimiento.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group form-group-full">
                <input
                  type="text"
                  name="solicitud"
                  value={formData.solicitud}
                  onChange={handleInputChange}
                  className={`input-white ${errors.solicitud ? "input-error" : ""}`}
                  placeholder="Indique su solicitud o requerimiento..."
                  required
                />
                {errors.solicitud && (
                  <span className="error-message">{errors.solicitud}</span>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className={errors.nombre ? "input-error" : ""}
                    placeholder="Nombre y Apellido"
                    required
                  />
                  {errors.nombre && (
                    <span className="error-message">{errors.nombre}</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? "input-error" : ""}
                    placeholder="Correo Electrónico"
                    required
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className={errors.telefono ? "input-error" : ""}
                    placeholder="Número de teléfono"
                    required
                  />
                  {errors.telefono && (
                    <span className="error-message">{errors.telefono}</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className={errors.empresa ? "input-error" : ""}
                    placeholder="Empresa"
                    required
                  />
                  {errors.empresa && (
                    <span className="error-message">{errors.empresa}</span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className={`btn-send ${!isFormValid ? "btn-disabled" : ""}`}
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Decoraciones hexagonales */}
        <div className="hex-decorations-form">
          <div className="hex-decoration hex-4"></div>
          <div className="hex-decoration hex-5"></div>
        </div>
      </section>

      {/* Sección de Ubicación con Mapa */}
      <section className="map-location-section">
        <img
          className="hexagon-map-left"
          src={hexagonaWhite}
          alt="Mapa de Ubicación"
        />
        <img
          className="hexagon-map-right"
          src={hexagonaWhite}
          alt="Mapa de Ubicación"
        />
        <img
          className="hexagon-map-center"
          src={mapapoints}
          alt="Mapa de Ubicación"
        />
        <div className="container">
          <motion.div
            className="map-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="map-header">
              <h2>Taurel va a donde tú estés</h2>
              <p>
                Tu destino fácil de encontrar, visitanos en la ubicación de
                preferencia
              </p>
            </div>

            <div className="map-container">
              <div className="map-wrapper">
                <LocationsFinder googleMapsApiKey="AIzaSyBR74ZoUfUzm9CWR4T8FNDc_BgsAsPoWho" />
              </div>

              <div className="office-hours">
                <p>
                  <strong>Horario de atención: </strong>
                  Lunes a Viernes. 8:00am - 5:00pm.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decoraciones hexagonales */}
        <div className="hex-decorations-map">
          <div className="hex-decoration hex-6"></div>
          <div className="hex-decoration hex-7"></div>
          <div className="hex-decoration hex-8"></div>
        </div>
      </section>
    </div>
  );
}
