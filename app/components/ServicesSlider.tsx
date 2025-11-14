import React, { useState, useEffect } from 'react';
import slide1 from '../assets/home-carousel/1.png';
import slide2 from '../assets/home-carousel/2.png';
import slide3 from '../assets/home-carousel/3.png';
import slide4 from '../assets/home-carousel/4.png';
import slide5 from '../assets/home-carousel/5.png';
import slide6 from '../assets/home-carousel/6.png';
import slide7 from '../assets/home-carousel/7.png';

interface ServicesSliderProps {
  className?: string;
}

const services = [
  {
    title: 'Asesoría Técnica',
    description: 'Este servicio te ayuda a tramitar permisos para importar, exportar y mover mercancías. Además, ofrece asesoría especializada en aduanas y comercio exterior, basándose en el marco legal del Arancel de Aduanas para que todos los procesos sean correctos.',
    image: slide1,
    textAlign: 'left'
  },
  {
    title: 'Agenciamiento Aduanas',
    description: 'Atendemos las Importaciones, Exportaciones y/o Tránsito de sus embarques, alineados con la cambiante normativa tanto nacional como internacional, contando con oficinas a través de todas las Aduanas habilitadas marítimas, aéreas y terrestres.',
    image: slide2,
    textAlign: 'right'
  },
  {
    title: 'Transporte de Carga Internacional',
    description: 'Llegamos a más de 180 países del mundo, lo que nos permite ofrecerte: Cobertura en todos los continentes, Servicios consolidados aéreos, marítimos y multimodal, Servicio de contenedores completos (FCL) y carga fraccionada (LCL), Transporte terrestre internacional en furgones completos (FTL) y fraccionados (LTL).',
    image: slide3,
    textAlign: 'left'
  },
  {
    title: 'Transporte Terrestre',
    description: 'La empresa ofrece un servicio de flete terrestre nacional para asegurar que tus cargas lleguen a tiempo y de forma segura. Este servicio incluye: Control y calidad en el manejo de la carga. Seguimiento en tiempo real del estado de tu envío a través de su aplicación Servicios en Línea.',
    image: slide4,
    textAlign: 'right'
  },
  {
    title: 'Servicios Navieros',
    description: 'Tenemos una vasta experiencia que nos ha posicionado como agente de confianza en Venezuela para las líneas navieras más importantes del mundo. Actuando como: agente general, portuario, protector, manejo de carga pesada y voluminosa, coordinación de las operaciones de carga y descarga.',
    image: slide5,
    textAlign: 'left'
  },
  {
    title: 'Almacenamiento',
    description: 'Contamos con almacenes equipados y operativos que ofrecen soluciones de embalaje y llenado/vaciado de contenedores. También disponen de un Depósito Aduanero In Bond y se encargan de la gestión completa de la cadena de suministros.',
    image: slide6,
    textAlign: 'right'
  },
  {
    title: 'Compras Internacionales',
    description: 'Ponemos a tu disposición un equipo capacitado y de alto rendimiento que te guiará en cada paso durante todo el proceso, desde donde realizar tus compras hasta colocarlo en la puerta de tu fábrica. Cubriendo demanda desde Asia hasta Latinoamérica.',
    image: slide7,
    textAlign: 'left'
  }
];

export default function ServicesSlider({ className = '' }: ServicesSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = services.length;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 7000); // Cambia cada 7 segundos

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className={`slider-container ${className}`}>
      {services.map((service, index) => (
        <div 
          key={index}
          className={`slide slide-${index + 1} ${activeSlide === index ? 'active' : ''}`}
          style={{
            backgroundImage: `linear-gradient(${
              service.textAlign === 'left' 
                ? '270deg, rgba(26, 144, 206, 0) 0%, rgba(26, 144, 206, 0.5) 43.32%, #1a90ce 99.19%'
                : '90deg, rgba(26, 144, 206, 0) 0%, rgba(26, 144, 206, 0.5) 43.32%, #1a90ce 99.19%'
            }), url(${service.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="slide-content">
            <div className={`slide-text slide-text-${service.textAlign}`}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slider Navigation */}
      <div className="slider-arrows">
        <button 
          className="slider-arrow slider-arrow-left"
          onClick={prevSlide}
          aria-label="Slide anterior"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button 
          className="slider-arrow slider-arrow-right"
          onClick={nextSlide}
          aria-label="Slide siguiente"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
        </button>
      </div>
    </div>
  );
}