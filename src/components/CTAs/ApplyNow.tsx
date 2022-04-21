export const ApplyNow: React.FC = () => {
  return (
    // <!-- section -->
    <section className="bg-gradient-dark position-relative overflow-hidden mt-5">
      <img src="/static/img/shapes/waves-white.svg" alt="pattern-lines" className="position-absolute opacity-1 w-100" />
      <div className="container py-lg-4 py-2">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center flex-column">
            <div className="py-7">
              {/* <!-- <div className="carousel-indicators justify-content-start ms-0">
              <a href="javascript:;">
                <img src="/static/img/team-4.jpg" alt="..." className="avatar avatar-sm avatar-scale-up border-radius-lg shadow border-0 active" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="0">
                <span className="text-white mx-2">&#124;</span>
              </a>
              <a href="javascript:;">
                <img src="/static/img/team-3.jpg" alt="..." className="avatar avatar-sm avatar-scale-up border-radius-lg shadow border-0" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="1">
                <span className="text-white mx-2">&#124;</span>
              </a>
              <a href="javascript:;">
                <img src="/static/img/team-2.jpg" alt="..." className="avatar avatar-sm avatar-scale-up border-radius-lg shadow border-0" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="2">
              </a>
            </div> --> */}
              <div className="container">
                <h2 className="text-white mb-0">Got what it takes?</h2>
                <p className="text-white opacity-8 mb-1">
                  We would love to hear from you! Browse our open positions and apply to get in touch with our recruiting
                  team.
                </p>
                <hr className="text-white horizontal opacity-6 mb-4 mt-2 w-25 text-start" />
                <div>
                  <div className="py-5">
                    <a href="#" className="btn bg-gradient-primary text-white   fw-bold px-4 mb-4">
                      Apply now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center flex-column d-sm-none d-md-none d-lg-flex d-xl-flex">
            <div className="row justify-content-center d-none d-md-flex">
              <div className="col-3 mb-4">
                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 mt-n4 ms-8 fadeIn2 fadeInBottom">
                  <img src="/static/img/logos/small-logos/logo-zoom.svg" alt="Logo Image" />
                </div>
              </div>
              <div className="col-4 mb-4">
                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-8 mt-n6 fadeIn1 fadeInBottom">
                  <img src="/static/img/logos/small-logos/logo-google-cloud.svg" alt="Logo Image" />
                </div>
              </div>
              <div className="col-4 mb-4">
                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-6 mt-2 fadeIn3 fadeInBottom">
                  <img src="/static/img/logos/small-logos/logo-github.svg" alt="Logo Image" />
                </div>
              </div>
            </div>
            <div className="row justify-content-end d-none d-md-flex">
              <div className="col-4 my-4">
                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-4 fadeIn1 fadeInBottom">
                  <img className="avatar-img" src="/static/img/logos/small-logos/logo-amazon.svg" alt="Logo Image" />
                </div>
              </div>
              <div className="col-3 my-4">
                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 me-auto fadeIn1 fadeInBottom">
                  <img className="avatar-img" src="/static/img/logos/small-logos/logo-apple.svg" alt="Logo Image" />
                </div>
              </div>
              <div className="col-3 my-4">
                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 fadeIn3 fadeInBottom ms-3 mt-3">
                  <img className="avatar-img" src="/static/img/logos/small-logos/logo-twitter.svg" alt="Logo Image" />
                </div>
              </div>
            </div>
            <div className="row d-none d-md-flex">
              <div className="col-6">
                {/* <!-- Logo --> */}
                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-auto mt-5 fadeIn2 fadeInBottom">
                  <img className="avatar-img" src="/static/img/logos/small-logos/logo-youtube.svg" alt="Logo Image" />
                </div>
                {/* <!-- End Logo --> */}
              </div>
              <div className="col-6 mt-6">
                {/* <!-- Logo --> */}
                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 mx-auto mt-n3 fadeIn3 fadeInBottom">
                  <img className="avatar-img" src="/static/img/logos/small-logos/logo-dribbble.svg" alt="Logo Image" />
                </div>
                {/* <!-- End Logo --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
