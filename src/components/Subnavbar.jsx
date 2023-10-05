import "@/styles/globals.css" 
import "@/styles/inicio.css" 
import "@/styles/promociones.css"

export function Subnavbar(){
    return (
        <nav id="promotions-categories">
          <ul className="m-0 list-unstyled p-1">
            <li className="d-inline-block active">
              <a
                href="https://www.oxxo.com/promociones"
                className="d-block mx-2 py-1 px-2"
                >Todas</a
              >
            </li>
            <li id="c0" className="d-inline-block category_promotion">
              <a
                href="https://www.oxxo.com/promociones/abarrotes#c0"
                className="d-block mx-2 py-1 px-2"
                >Abarrotes</a
              >
            </li>
            <li id="c1" className="d-inline-block category_promotion">
              <a
                href="https://www.oxxo.com/promociones/hogar#c1"
                className="d-block mx-2 py-1 px-2"
                >Hogar</a
              >
            </li>
            <li id="c2" className="d-inline-block category_promotion">
              <a
                href="https://www.oxxo.com/promociones/botanas#c2"
                className="d-block mx-2 py-1 px-2"
                >Botanas</a
              >
            </li>
            <li id="c3" className="d-inline-block category_promotion">
              <a
                href="https://www.oxxo.com/promociones/cerveza-vinos-y-licores#c3"
                className="d-block mx-2 py-1 px-2"
                >Cerveza, vinos y licores</a
              >
            </li>
            <li id="c4" className="d-inline-block category_promotion">
              <a
                href="https://www.oxxo.com/promociones/bebidas#c4"
                className="d-block mx-2 py-1 px-2"
                >Bebidas</a
              >
            </li>
            <li id="c5" className="d-inline-block category_promotion">
              <a
                href="https://www.oxxo.com/promociones/bebes#c5"
                className="d-block mx-2 py-1 px-2"
                >Bebés</a
              >
            </li>
            <li id="c6" className="d-inline-block category_promotion">
              <a
                href="https://www.oxxo.com/promociones/mascotas#c6"
                className="d-block mx-2 py-1 px-2"
                >Mascotas</a
              >
            </li>
            <li id="c7" className="d-inline-block category_promotion">
              <a
                href="https://www.oxxo.com/promociones/cuidado-personal#c7"
                className="d-block mx-2 py-1 px-2"
                >Cuidado personal</a
              >
            </li>
            <li id="c8" className="d-inline-block category_promotion">
              <a
                href="https://www.oxxo.com/promociones/dulceria#c8"
                className="d-block mx-2 py-1 px-2"
                >Dulcería</a
              >
            </li>
            <li id="c9" className="d-inline-block category_promotion">
              <a
                href="https://www.oxxo.com/promociones/lacteos-y-refrigerados#c9"
                className="d-block mx-2 py-1 px-2"
                >Lácteos y refrigerados</a
              >
            </li>
            <li id="c10" className="d-inline-block category_promotion">
              <a
                href="https://www.oxxo.com/promociones/panaderia#c10"
                className="d-block mx-2 py-1 px-2"
                >Panadería</a
              >
            </li>
            <li id="c11" className="d-inline-block category_promotion">
              <a
                href="https://www.oxxo.com/promociones/farmacia#c11"
                className="d-block mx-2 py-1 px-2"
                >Farmacia</a
              >
            </li>
            <li id="c12" className="d-inline-block category_promotion">
              <a
                href="https://www.oxxo.com/promociones/mercancias-generales#c12"
                className="d-block mx-2 py-1 px-2"
                >Mercancías Generales</a
              >
            </li>
          </ul>
        </nav>
    )
}