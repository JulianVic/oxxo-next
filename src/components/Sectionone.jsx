import "@/styles/globals.css"
import "@/styles/inicio.css"
export function Sectionone(){
  return (
<>
                  <section className="container cont-float cont-floatm features-desktop">
        <div id="centrar" className="row justify-content-md-center">
          <a href="https://www.oxxo.com/reunion">
            <img src="/img/reunion.png" alt="reunion" />
          </a>
          <a href="https://linktr.ee/oxxoreclutamiento">
            <img src="/img/joinus.png" alt="reclutamiento" />
          </a>
          <a href="https://www.oxxo.com/tiendas?source=action-btn">
            <img src="/img/tiendas.png" alt="tiendas" />
          </a>
        </div>
      </section>
      <section className="container destacados">
        <h2 className="text-center">OXXO TE ACOMPAÑA EN CADA MOMENTO</h2>
        <div className="row">
          <div className="col-sm-6">
            <a href="https://www.oxxo.com/historias-oxxo"
              ><img
                src="https://oxxo-com.s3.amazonaws.com/media-library/3988ef6eb76a4a3aef2299092510f949.png"
                alt="Historias OXXO 40 Aniversario"
                className="img-fluid"
            /></a>
          </div>
          <div className="col-sm-6">
            <a href="https://www.oxxo.com/conocenos"
              ><img
                src="https://oxxo-com.s3.amazonaws.com/media-library/9b364fdab9f521c8d64fe9ef38c73881.png"
                alt="Conoce OXXO"
                className="img-fluid"
            /></a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <a href="https://www.oxxo.com/blog"
              ><img
                src="https://oxxo-com.s3.amazonaws.com/media-library/cc9b080235831ec37d3ee6562647e593.png"
                alt="Blog OXXO"
                className="img-fluid"
            /></a>
          </div>
        </div>
      </section>
    </>
  )
}