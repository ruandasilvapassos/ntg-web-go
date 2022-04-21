export const ContactV2Form: React.FC = () => {
  return (
    <section className="py-lg-7 py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 position-relative ms-lg-auto">
            <div className="p-3 text-center border-right-after">
              <i className="material-icons text-gradient text-primary text-5xl mb-3">email</i>
              <h6 className="mb-0">Email</h6>
              <p className="text-dark font-weight-normal">cotact@ntegral.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 position-relative">
            <div className="p-3 text-center border-right-after">
              <i className="material-icons text-gradient text-primary text-5xl mb-3">call</i>
              <h6 className="mb-0">Phone</h6>
              <p className="text-dark font-weight-normal">+1(424) 535 3523</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 me-lg-auto">
            <div className="p-3 text-center">
              <i className="material-icons text-gradient text-primary text-5xl mb-3">contacts</i>
              <h6 className="mb-0">Contact</h6>
              <p className="text-dark font-weight-normal">Andrew Samian</p>
            </div>
          </div>
        </div>
        <div className="row mt-6">
          <div className="col-lg-6 mx-auto text-center pb-4">
            <h2>Send us a message</h2>
            <p className="lead">
              You can send us a message by completing the below form. Our average response time is 2 hours
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="card card-plain">
              <form id="contact-form" method="post" autoComplete="off">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Full Name</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input type="text" className="form-control" placeholder="Full Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label>Email</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label>Company</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input type="text" className="form-control" placeholder="Company" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label>Topic</label>
                      <div className="input-group input-group-outline is-filled mb-4">
                        <input type="text" className="form-control" placeholder="Topic" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-4 mt-md-0 mt-4">
                    <label>What can we help you?</label>
                    <div className="input-group input-group-outline is-filled mb-4">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows={6}
                        placeholder="Describe your problem in at least 250 characters"></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn bg-gradient-primary mt-4">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
