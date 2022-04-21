export const UsDifferent: React.FC = () => {
  return (
    <>
      <section className="py-4 bg-gray-200">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-md-0 mb-4">
              <h3 className="text-dark mb-0">What makes us different</h3>
              <p className="my-4">
                We help our clients solve challenging problems by assembling highly experienced teams drawn from strategic,
                change management and technical backgrounds.
              </p>
              <p className="mb-4">
                We leverage technology as a tool to assist in obtaining business objectives. We realized that technology is
                not a "one-size fits all" environment. We implement the "best" technology that solves our clients' needs.
              </p>
            </div>
            <div className="col-md-6">
              <div className="card p-0 border-radius-lg">
                <div className="blur-shadow-image">
                  <img
                    src="https://images.unsplash.com/photo-1574766699303-ac3a5dffb74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                    alt="img-blur-shadow-blog-2"
                    className="img-fluid border-radius-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container py-7">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5">
              <div className="row justify-content-start">
                <div className="col-md-6">
                  <div className="info">
                    {/* <!-- <i className="material-icons text-3xl text-white mb-3">view_in_ar</i> --> */}
                    <img className="width-32-px mb-4" src="/static/img/c-icon3.svg" alt="equity rewards" />
                    <h5 className="text-blk">Integrity &amp; Honesty</h5>
                    <p className="text-blk opacity-8">We get insulted by others, lose trust for those We get back freezes</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info">
                    {/* <!-- <i className="material-icons text-3xl text-white mb-3">credit_card</i> --> */}
                    <img className="width-32-px mb-4" src="/static/img/c-icon7.svg" alt="global impact" />
                    <h5 className="text-blk">Cost Efficient</h5>
                    <p className="text-blk opacity-8">We get insulted by others, lose trust for those We get back freezes</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-start mt-4">
                <div className="col-md-6">
                  <div className="info">
                    {/* <!-- <i className="material-icons text-3xl text-white mb-3">dashboard</i> --> */}
                    <img className="width-32-px mb-4" src="/static/img/c-icon8.svg" alt="career growth" />
                    <h5 className="text-blk">Career Growth</h5>
                    <p className="text-blk opacity-8">We get insulted by others, lose trust for those We get back freezes</p>
                  </div>
                </div>
                <div className="col-md-6">
                  {/* <!-- <div className="info">
                <i className="material-icons text-3xl text-white mb-3">call_to_action</i>
                <h5 className="text-white">Improved platform</h5>
                <p className="text-white opacity-8">We get insulted by others, lose trust for those We get back freezes</p>
              </div> --> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 ms-auto">
              <div className="card mb-lg-5">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <a className="d-block blur-shadow-image">
                    <img
                      src="/static/img/examples/blog-9-2.jpg"
                      alt="img-colored-shadow"
                      className="img-fluid border-radius-lg"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h4>Core Values</h4>
                  <p>
                    One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That&#39;s pretty
                    impressive.
                  </p>
                  {/* <!-- <a href="javascript:;" className="text-primary icon-move-right">More about us
                <i className="fas fa-arrow-right text-xs ms-1"></i>
              </a> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
