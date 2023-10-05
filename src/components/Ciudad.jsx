import "@/styles/promociones.css"
import "@/styles/globals.css"
export function Ciudad(){
    return(
        <div className="container-fluid bg-white">
        <div className="results row">
          <div className="col-md-6 text-center text-md-left py-1 py-md-3">
            <strong>227</strong> promociones disponibles.
          </div>
          <div className="col-md-6 pt-0 pb-2 py-md-3">
            <div className="d-flex w-100">
              <button
                data-toggle="modal"
                data-target="#modal2"
                className="btn btn-xs btn-danger mr-2"
                id="btn_ciudad"
              >
                Mi ciudad

                <i className="fas fa-map-marker-alt"></i>
              </button>
              <form action="https://www.oxxo.com/promociones" className="w-100">
                <div className="input-group">
                  <input
                  id="search"
                    type="text"
                    name="s"
                    placeholder="Buscar promoción"
                    className="form-control"
                  />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-danger">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}