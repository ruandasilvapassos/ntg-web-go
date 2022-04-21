export const FeaturedNews: React.FC = () => {
  return (
    <header>
      <div className="container my-sm-8 pt-7 pt-lg-0">
        <div className="row mt-5">
          <div className="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
            <h1 className="secondary-font fw-bold insight max-width-500">
              React Native vs. Native Apps: Which is better & why?
            </h1>
            <p className="m-y-10 fs-20 text-black max-width-485 fw-normal">
              There are two popular approaches to build mobile apps: native and react-native. This blog shines the light on
              which apps ...
            </p>
            <div>
              <span>Follow us on</span>
              <div className="d-lg-flex mt-4">
                <figure className="col-5 ">
                  <img src="/static/img/logos/facebook.svg" style={{ marginRight: '.25rem' }} />
                  <img src="/static/img/logos/youtube.svg" style={{ marginRight: '.25rem' }} />
                  <img src="/static/img/logos/linkdin.svg" style={{ marginRight: '.25rem' }} />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid" src="/static/img/react-native.png" alt="react-native" />
          </div>
        </div>
      </div>
    </header>
  )
}
