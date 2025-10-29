import React, { useState, useEffect } from 'react';

interface AboutUsSliderProps {
  className?: string;
}

export default function AboutUsSlider({ className = '' }: AboutUsSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (slideIndex: number) => {
    setActiveSlide(slideIndex);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 1 ? 0 : 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`about-slider-container ${className}`}>
      {/* Slide 1 - Nuestra Historia */}
      <div className={`about-slide about-slide-1 ${activeSlide === 0 ? 'active' : ''}`}>
        <div className="about-slide-content">
          <div className="about-slide-text about-slide-text-left">
            <h2>Misión</h2>
            <p>Nuestra misión fundamental es facilitar el comercio internacional a través de un servicio de logística integral, actuando como el puente estratégico que conecta mercados y oportunidades. </p>
            <p>Nos dedicamos a transformar la experiencia logística en su totalidad, priorizando la calidad en cada eslabón de la cadena de suministro, desde el origen hasta el destino final.</p>
          </div>
        </div>
      </div>
      
      {/* Slide 2 - Nuestro Compromiso */}
      <div className={`about-slide about-slide-2 ${activeSlide === 1 ? 'active' : ''}`}>
        <div className="about-slide-content">
          <div className="about-slide-text about-slide-text-right">
            <h2>Comprometidos con la excelencia</h2>
            <p>Nuestro equipo de más de 200 colaboradores trabaja día a día para brindar soluciones innovadoras y personalizadas. Con presencia en más de 9 oficinas nacionales y alianzas globales en 180 países, estamos cerca de usted.</p>
          </div>
        </div>
      </div>
      
      {/* Slider Navigation */}
      <div className="about-slider-arrows">
        <button 
          className="about-slider-arrow about-slider-arrow-left"
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
          className="about-slider-arrow about-slider-arrow-right"
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