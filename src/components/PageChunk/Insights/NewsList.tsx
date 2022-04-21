export const NewsList: React.FC = () => {
  return (
    <section className="py-lg-7 py-5 news-wrapper">
      <div className="container">
        <div className="row">
          <h2 className="text-dark mb-5">Latest news</h2>
          <div className="col-lg-6">
            <div className="d-flex align-items-center mb-4">
              <div className="news-section-img me-3">
                <img src="/static/img/gaming.png" className="shadow-lg" />
              </div>
              <div>
                <h4 className="max-width-385">React Native vs. Native Apps: Which is better & why?</h4>
                <p className="mb-0 fs-6 fw-bolder text-gray">February 22, 2022</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center mb-4">
              <div className="news-section-img me-3">
                <img src="/static/img/gaming.png" className="shadow-lg" />
              </div>
              <div>
                <h4 className="max-width-385">React Native vs. Native Apps: Which is better & why?</h4>
                <p className="mb-0 fs-6 fw-bolder text-gray">February 22, 2022</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center mb-4">
              <div className="news-section-img me-3">
                <img src="/static/img/person.png" className="shadow-lg" />
              </div>
              <div>
                <h4 className="max-width-385">React Native vs. Native Apps: Which is better & why?</h4>
                <p className="mb-0 fs-6 fw-bolder text-gray">February 22, 2022</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center mb-4">
              <div className="news-section-img me-3">
                <img src="/static/img/person.png" className="shadow-lg" />
              </div>
              <div>
                <h4 className="max-width-385">React Native vs. Native Apps: Which is better & why?</h4>
                <p className="mb-0 fs-6 fw-bolder text-gray">February 22, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
