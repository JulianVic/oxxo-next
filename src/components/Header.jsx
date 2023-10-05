"use client"
import { useEffect, useState, useRef } from "react"
import "@/styles/globals.css" 
import "@/styles/inicio.css" 
import "@/styles/promociones.css"

export function Header(){
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Agrega un manejador de clic al documento global
    document.addEventListener("click", handleDocumentClick);

    // Limpia el manejador de clic cuando el componente se desmonta
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const ponerVisible = () => {
    const countrySelector = document.getElementById("country-selector");
    countrySelector.classList.toggle("show");
  }

  return (

    <header className="wrapper pt-3">
    <section className="top-header mg-l mg-r">
      <div id="float-l">
        <a
          href="https://negocios2.buzonfiscal.com/comun/html/oxxo/guia/inicio.html"
          className="text_dark"
          >Facturación electrónica</a
        >
        <a href="https://www.oxxo.com/contacto" className="text_dark"
          >Contacto</a
        >
      </div>
      <div id="float-r">
        <button
          type="button"
          id="country-button"
          className="btn btn-primary btn-sm dropdown-toggle country-btn"
          onClick={ponerVisible}
        >
          Tu país
        </button>
        <div
          id="country-selector"
          className="dropdown-menu country-selector desplegarCountrySelect"
        >
          <a href="https://www.oxxo.co" className="dropdown-item"> Colombia</a>
          <a href="" className="dropdown-item"> México</a>
          <a href="https://www.oxxo.cl" className="dropdown-item"> Chile</a>
          <a href="https://www.oxxo.pe" className="dropdown-item"> Perú</a>
          <a href="https://www.mercadooxxo.com.br" className="dropdown-item">
            Brasil</a
          >
        </div>
      </div>
    </section>
    <div id="oxxo-header">
      <a href="">
        <img src="/img/logo-oxxo.png" alt="" />
      </a>
      <div className="header-top"></div>
      <div className="header-bottom"></div>
    </div>
    <nav className="navbar">
      <div>
        <ul className="dp-flex">
          <li>
            <a href="https://www.oxxo.com/cupones">Cupones</a>
          </li>
          <li>
            <a href="1">Promociones</a>
          </li>
          <li>
            <a href="oxxopremia.oxxo.com">Spin Premia</a>
          </li>
          <li>
            <a
              href="https://www.spinbyoxxo.com.mx/?source_caller=ui&pid=Website_OXXO&is_retargeting=true&utm_id=OXXO.com&utm_source=Menu&shortlink=s1ti0pzf&utm_medium=Link-Menu&af_ad=Header&c=Canales_OXXO"
              >Spin By Oxxo</a
            >
          </li>
          <li>
            <a href="https://www.oxxoandatti.com">andatti</a>
          </li>
          <li className="dropdown-parent">
          <label htmlFor="servicios" className="dropdown-toggle" onClick={toggleMenu}>Servicios</label>
          <input type="checkbox" id="servicios" className="checkbox-toggle" />
            <ul  id="menu-vertical-servicios"
          className={`menu-vertical ${menuOpen ? "show" : ""}`}
          ref={menuRef}>
              <li>
                <a className="dropdown-item" href="https://www.oxxocel.com"
                  >OXXO Cel</a
                >
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.oxxo.com/pagos-depositos-tarjetas"
                  >Depósitos y retiros de efectivo</a
                >
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.oxxo.com/boletos-de-autobus"
                  >Boletos de autobús</a
                >
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.oxxo.com/terminales-de-pago"
                  >Terminales de pago</a
                >
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.oxxo.com/envios-de-dinero-internacional"
                  >Envíos de dinero internacional</a
                >
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.oxxo.com/oxxo-pay"
                  >OXXO Pay</a
                >
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.oxxo.com/telefonos-celulares-smartphones"
                  >Telefonía</a
                >
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.oxxo.com/pago-de-servicios"
                  >Pago de servicios</a
                >
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.oxxo.com/tarjetas-de-regalo"
                  >Tarjetas de regalo</a
                >
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.oxxo.com/envios-de-dinero"
                  >Envíos de dinero nacional</a
                >
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.oxxo.com/otros-servicios"
                  >Otros servicios</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.oxxo.com/quienes-somos">Quiénes somos</a>
          </li>
          <li className="dropdown-parent">
            <label htmlFor="proveedores" className="dropdown-toggle"
              >Proveedores</label
            >
            <input
              type="checkbox"
              id="proveedores"
              className="checkbox-toggle"
            />
            <ul
              id="menu-vertical-proveedores"
              className="menu-vertical menu-vertical-normal"
            >
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.oxxo.com/proveedores"
                  >Productos y servicios en tienda</a
                >
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.oxxo.com/proveedores/contratistas"
                  >Construcción y diseño</a
                >
              </li>
            </ul>
          </li>
          <li className="dropdown-parent">
            <label htmlFor="braices" className="dropdown-toggle"
              >Bienes raíces</label
            >
            <input type="checkbox" id="braices" className="checkbox-toggle" />
            <ul
              id="menu-vertical-braices"
              className="menu-vertical menu-vertical-normal"
            >
              <li>
                <a
                  className="dropdown-item"
                  href="https://oxxoinmuebles.com.mx/ofertar-terreno/"
                  >Ofrezco un espacio</a
                >
              </li>
              <li>
                <a className="dropdown-item" href="https://oxxoinmuebles.com.mx"
                  >Busco un espacio</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.oxxo.com/tiendas?source=link-menu"
              >Localizador de tiendas</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
  
  )
}


