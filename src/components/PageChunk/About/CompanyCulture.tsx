export const CompanyCulture = () => {
  return (
    <section className="py-lg-7 py-5  bg-gray-200">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5">
            {/* <!-- <span className="badge badge-primary mb-2">Co-working</span> --> */}
            <h2>Our company culture </h2>
            <p>
              If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short
              term (pain avoidance is creating an illusion of equality).
            </p>
          </div>
        </div>
        <div className="row min-vh-25">
          <div className="col-sm-4 col-5 mb-sm-0 mb-3">
            <div
              style={{ backgroundImage: 'url(/static/img/c3.png)' }}
              className="w-100 h-100 border-radius-lg shadow bg-cover"></div>
          </div>
          <div className="col-sm-3 col-7 mb-sm-0 mb-3">
            <div
              style={{ backgroundImage: 'url(/static/img/c2.png)' }}
              className="w-100 h-100 border-radius-lg bg-cover"></div>
          </div>
          <div className="col-sm-5 mb-sm-0 mb-3">
            <div
              style={{ backgroundImage: 'url(/static/img/c6.png)' }}
              className="w-100 h-100 border-radius-lg shadow bg-cover"></div>
          </div>
        </div>
        <div className="row min-vh-25 mt-4">
          <div className="col-sm-3 col-7 mb-sm-0 mb-3">
            <div
              style={{ backgroundImage: 'url(/static/img/c4.png)' }}
              className="w-100 h-100 border-radius-lg shadow bg-cover"></div>
          </div>
          <div className="col-sm-5 col-5 mb-sm-0 mb-3">
            <div
              style={{ backgroundImage: 'url(/static/img/c5.png)' }}
              className="w-100 h-100 border-radius-lg shadow bg-cover"></div>
          </div>
          <div className="col-sm-4 mb-sm-0 mb-3">
            <div
              style={{ backgroundImage: 'url(/static/img/examples/content-5.jpg)' }}
              className="w-100 h-100 border-radius-lg shadow bg-cover"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
