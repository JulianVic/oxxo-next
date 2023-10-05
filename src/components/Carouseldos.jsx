"use client"
import React, { useState, useEffect } from 'react';

export function Carouseldos() {
  // Inicializa el estado para controlar el índice de la diapositiva actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Obtén las diapositivas del carrusel
  const slides = [
    // Aquí coloca las URL de tus imágenes
    'https://oxxo-com.s3.amazonaws.com/carousel/promociones/32cafeea20750c9bdb7269f46de77c6f.png',
    'https://oxxo-com.s3.amazonaws.com/carousel/promociones/e911f1201a2c661c476360c95c67fa17.png',
    'https://oxxo-com.s3.amazonaws.com/carousel/promociones/af9518b4ddb33526bd5f299d8892366f.png',
    'https://oxxo-com.s3.amazonaws.com/carousel/promociones/b750bdfb5b2af372b6ecc7c3e799427b.png',
  ];

  // Función para mostrar la siguiente diapositiva
  const mostrarSiguienteDiapositiva = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Función para mostrar la diapositiva anterior
  const mostrarDiapositivaAnterior = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Configura un temporizador para cambiar automáticamente las diapositivas cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(mostrarSiguienteDiapositiva, 5000);

    // Limpia el temporizador cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="promociones" data-ride="carousel" className="carousel slide">
      <ol className="carousel-indicators">
        {slides.map((slide, index) => (
          <li
            key={index}
            data-target="#promociones"
            data-slide-to={index}
            className={index === currentIndex ? 'active' : ''}
          ></li>
        ))}
      </ol>
      <section className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            data-element_name={`Slide ${index + 1}`}
          >
            <a
              href=""
              data-element_name={`Slide ${index + 1}`}
              target=""
              className="trace_event"
            >
              <img src={slide} alt={`Slide ${index + 1}`} title={`Slide ${index + 1}`} />
            </a>
          </div>
        ))}
      </section>
      <a
        href="#promociones"
        role="button"
        data-slide="prev"
        className="carousel-control-prev"
        onClick={mostrarDiapositivaAnterior}
      >
        <span aria-hidden="true" className="carousel-control-prev-icon"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        href="#promociones"
        role="button"
        data-slide="next"
        className="carousel-control-next"
        onClick={mostrarSiguienteDiapositiva}
      >
        <span aria-hidden="true" className="carousel-control-next-icon"></span>
        <span className="sr-only">Next</span>
      </a>
    </section>
  );
}
