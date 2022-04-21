export const WhyUs: React.FC = () => {
  return (
    <section className="py-5 py-lg-7 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2>Why use our Products</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
        <div className="mt-5 row align-items-center">
          <div className="col-lg-7">
            <div className="row justify-content-start">
              <div className="col-md-6">
                <div className="info">
                  <i className="mb-3 text-3xl material-icons text-gradient-primary text-primary">public</i>
                  <h5>Bug-free</h5>
                  <p>
                    Plan your approach. Don't code unless you have a well thought plan. Write concise code; Communicate. Not
                    only within your team, but in general.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info">
                  <i className="mb-3 text-3xl material-icons text-gradient-primary text-primary">payments</i>
                  <h5>Modular</h5>
                  <p>
                    Software licensing and delivery model in which software is licensed on a subscription basis and is
                    centrally hosted.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 row justify-content-start">
              <div className="col-md-6">
                <div className="info">
                  <i className="mb-3 text-3xl material-icons text-gradient-primary text-primary">apps</i>
                  <h5>Cloud based</h5>
                  <p>
                    Cloud based services provide information technology (IT) as a service over the Internet or dedicated
                    network, with delivery on demand, and payment based on usage.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info">
                  <i className="mb-3 text-3xl material-icons text-gradient-primary text-primary">3p</i>
                  <h5>Easy integrations</h5>
                  <p>
                    Enterprise integration platform with a growing list of connectors. Peregrine Connect provides a suite of
                    apps and tools to connect your enterprise data.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 col-lg-4 ms-auto mt-lg-0">
            <a className="d-none d-lg-block blur-shadow-image">
              <img src="/static/img/h1.png" alt="img-colored-shadow" className="shadow-lg img-fluid border-radius-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
