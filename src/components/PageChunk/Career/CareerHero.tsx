export const CareerHero: React.FC = () => {
  return (
    <header>
      <div className="page-header min-vh-75">
        <div
          className="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block"
          style={{ backgroundImage: 'url(/static/img/c1.png)', backgroundSize: 'cover' }}>
          <span className="mask bg-gradient-dark opacity-4"></span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex justify-content-center flex-column">
              <div className="card card-body blur d-flex justify-content-center shadow-lg p-5 mt-5">
                <h1 className="text-dark mb-4">Do great work & grow in a strong culture</h1>

                <p className="lead text-dark pe-md-5 me-md-5">
                  Ntegral is a mission-driven company dedicated to helping create a world where anyone can belong anywhere.
                  It takes a unified team committed to our core values to achieve this goal.
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
