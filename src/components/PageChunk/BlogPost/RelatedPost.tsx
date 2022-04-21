export const RelatedPost: React.FC = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-9 text-center mx-auto">
            <h3 className="mb-1">See other articles</h3>
            <p className="mb-6 px-md-6">
              Create a unique and beautiful blog posts. You can also connect your blog directly to Google Analytics to have a
              more detailed look.
            </p>
          </div>
          <div className="col-lg-4 mb-lg-0 mb-4">
            <div className="card">
              <div className="card-header p-0 mx-3 mt-n4 position-relative z-index-1">
                <a href="#!" className="d-block blur-shadow-image">
                  <img
                    src="/static/img/examples/color2.jpg"
                    className="img-fluid border-radius-md"
                    alt="anastasia"
                    loading="lazy"
                  />
                </a>
                <div className="colored-shadow" style={{ backgroundImage: 'url(/static/img/examples/color2.jpg' }} />
              </div>
              <div className="card-body">
                <span className="text-gradient text-primary text-uppercase text-xs font-weight-bold">House</span>
                <a href="#!" className="card-title mt-3 h5 d-block text-darker">
                  Shared Coworking
                </a>
                <p className="card-description mb-4">
                  Use border utilities to quickly style the border and border-radius of an element. Great for images,
                  buttons.
                </p>
                <div className="author align-items-center">
                  <img src="/static/img/team-2.jpg" alt="..." className="avatar shadow" loading="lazy" />
                  <div className="name ps-2">
                    <span>Mathew Glock</span>
                    <div className="stats">
                      <small>Posted on 28 February</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-lg-0 mb-4">
            <div className="card">
              <div className="card-header p-0 mx-3 mt-n4 position-relative z-index-1">
                <a href="#!" className="d-block blur-shadow-image">
                  <img
                    src="/static/img/examples/color3.jpg"
                    className="img-fluid border-radius-md"
                    alt="nastuh"
                    loading="lazy"
                  />
                </a>
                <div className="colored-shadow" style={{ backgroundImage: 'url(/static/img/examples/color3.jpg)' }} />
              </div>
              <div className="card-body">
                <span className="text-gradient text-info text-uppercase text-xs font-weight-bold">House</span>
                <a href="#!" className="text-darker card-title mt-3 h5 d-block">
                  Really Housekeeping
                </a>
                <p className="card-description mb-4">
                  Use border utilities to quickly style the border and border-radius of an element. Great for images,
                  buttons.
                </p>
                <div className="author align-items-center">
                  <img src="/static/img/ivana-squares.jpg" alt="ivana" className="avatar shadow" loading="lazy" />
                  <div className="name ps-2">
                    <span>Mathew Glock</span>
                    <div className="stats">
                      <small>Posted on 28 February</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-lg-0 mb-4">
            <div className="card">
              <div className="card-header p-0 mx-3 mt-n4 position-relative z-index-1">
                <a href="#!" className="d-block blur-shadow-image">
                  <img
                    src="/static/img/examples/color1.jpg"
                    className="img-fluid border-radius-md"
                    alt="annie"
                    loading="lazy"
                  />
                </a>
                <div className="colored-shadow" style={{ backgroundImage: 'url(/static/img/examples/color1.jpg)' }} />
              </div>
              <div className="card-body">
                <span className="text-gradient text-warning text-uppercase text-xs font-weight-bold">House</span>
                <a href="#!" className="text-darker card-title mt-3 h5 d-block">
                  Shared Coworking
                </a>
                <p className="card-description mb-4">
                  Use border utilities to quickly style the border and border-radius of an element. Great for images,
                  buttons.
                </p>
                <div className="author align-items-center">
                  <img src="/static/img/marie.jpg" alt="marie" className="avatar shadow" loading="lazy" />
                  <div className="name ps-2">
                    <span>Mathew Glock</span>
                    <div className="stats">
                      <small>Posted on 28 February</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
