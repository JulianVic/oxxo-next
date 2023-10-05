"use client"
import "@/styles/globals.css" 
import "@/styles/inicio.css" 
import "@/styles/promociones.css"
import { useEffect } from "react";

export function Carousel() {
  useEffect(() => {
  function mandarMensaje() {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => alert(data.message));
  }
  mandarMensaje();
} , []);

  return (

    <section id="home" className="carousel slide">
    <ol className="carousel-indicators">
      <li
        id="selectHD0"
        className="active"
      ></li>
    </ol>
    <div
      data-ride="carousel"
      className="carousel-inner"
    >
      <div
        id="elementHD0"
        data-element_name="cie - Slide 1"
        className="carousel-item active"
      >
        <a
          href="https://mioxxo.page.link/45_aniversario"
          className="trace_event"
          ><div role="banner" className="evg-banner-with-cta evg-jumbotron">
            <picture
              ><source
                media="(min-width: 1001px)"
                srcSet="
                  https://cdn.evergage.com/promotions/femsacomercio/oxxomxprd/QtiXp/uzoi2.png
                " />
              <source
                media="(max-width: 640px)"
                srcSet="
                  https://cdn.evergage.com/promotions/femsacomercio/oxxomxprd/QtiXp/wBCGa.png
                " />
              <img
                srcSet="https://cdn.evergage.com/promotions/femsacomercio/oxxomxprd/QtiXp/uzoi2.png"
                className="six-slide"
            /></picture></div
        ></a>
      </div>
    </div>
    <a
      href=""
      role="button"
      data-slide="prev"
      className="carousel-control-prev"
      ><span aria-hidden="true" className="carousel-control-prev-icon"></span>
      <span className="sr-only">Previous</span></a
    >
    <a
      href=""
      role="button"
      data-slide="next"
      className="carousel-control-next"
      ><span aria-hidden="true" className="carousel-control-next-icon"></span>
      <span className="sr-only">Next</span></a
    >
  </section>

  )
}
