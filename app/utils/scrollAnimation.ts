import { useEffect } from "react";

// Esta función añade la clase 'active' a los elementos cuando aparecen en el viewport
export const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.8) {
          element.classList.add('active');
        }
      });
    };
    
    // Ejecutar una vez al inicio para elementos ya visibles
    handleScroll();
    
    // Añadir el event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useScrollAnimation;