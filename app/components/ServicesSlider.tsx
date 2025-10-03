import React, { useState, useEffect } from 'react';

interface ServicesSliderProps {
  className?: string;
}

export default function ServicesSlider({ className = '' }: ServicesSliderProps) {
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
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`slider-container ${className}`}>
      {/* Slide 1 - Transporte Internacional */}
      <div className={`slide slide-1 ${activeSlide === 0 ? 'active' : ''}`}>
        <div className="slide-content">
          <div className="slide-text slide-text-left">
            <h2>Transporte Internacional de Carga</h2>
            <p>Llegamos a más de 180 países del mundo, lo que nos permite ofrecerte: Cobertura en todos los continentes, Servicios consolidados aéreos, marítimos y multimodal, Servicio de contenedores completos (FCL) y carga fraccionada (LCL), Transporte terrestre internacional en furgones completos (FTL) y fraccionados (LTL).</p>
          </div>
        </div>
      </div>
      
      {/* Slide 2 - Servicios Navieros */}
      <div className={`slide slide-2 ${activeSlide === 1 ? 'active' : ''}`}>
        <div className="slide-content">
          <div className="slide-text slide-text-right">
            <h2>Servicios Navieros</h2>
            <p>Tenemos una vasta experiencia que nos ha posicionado como agente de confianza en Venezuela para las líneas navieras más importantes del mundo. Actuando como: agente general, portuario, protector, manejo de carga pesada y voluminosa, coordinación de las operaciones de carga y descarga.</p>
          </div>
        </div>
      </div>
      
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