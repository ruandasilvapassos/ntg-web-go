export const ServicesHero: React.FC = () => {
  return (
    <header>
      <div className="page-header min-vh-75">
        <div
          className="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block"
          style={{
            backgroundImage: 'url(/static/img/services.png)',
            backgroundSize: 'cover'
          }}>
          <span className="mask bg-gradient-dark opacity-4"></span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex justify-content-center flex-column">
              <div className="card card-body blur d-flex justify-content-center shadow-lg p-5 mt-5">
                <h1 className="text-dark mb-4">Your business needs our software solutions</h1>

                <p className="lead text-dark pe-md-5 me-md-5">
                  We provide you end to end software development and consultancy services resulting in extraordinary digital
                  experiences.
                </p>
                <div className="buttons">
                  <button type="button" className="btn bg-gradient-primary mt-4">
                    Let's connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
