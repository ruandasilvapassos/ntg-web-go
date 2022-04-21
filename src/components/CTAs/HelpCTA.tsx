export const HelpCTA: React.FC = () => {
  return (
    <section className="py-lg-7 py-5  bg-gray-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center pb-4">
            <h2>Always ready to help</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend nibh vel sodales pretium.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="p-3 text-center">
              <div className="icon icon-shape icon-md bg-gradient-success  shadow mx-auto">
                <i className="material-icons opacity-10">receipt</i>
              </div>
              <h5 className="mt-4">Sales</h5>
              <p>Ready to open an account? Have questions about purchasing a product?</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="p-3 text-center">
              <div className="icon icon-shape icon-md bg-gradient-info shadow mx-auto">
                <i className="material-icons opacity-10">support</i>
              </div>
              <h5 className="mt-4">Support 24/7</h5>
              <p>Need help with a product that you just purchased? Need help with your account?</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mx-md-auto">
            <div className="p-3 text-center">
              <div className="icon icon-shape icon-md bg-gradient-warning shadow mx-auto">
                <i className="material-icons opacity-10">perm_media</i>
              </div>
              <h5 className="mt-4">Media</h5>
              <p>Looking to contact our media team for a press release or related story?</p>
            </div>
          </div>
        </div>

        <div className="row mt-6">
          <div className="col-md-6 col-10 mx-auto">
            <div className="card discord-card mb-3">
              <div className="card-body border-radius-lg position-relative overflow-hidden pb-4">
                <h5 className="mt-2 mb-3">Join us on Discord!</h5>
                <p className="mb-3">
                  Join the discussion on Discord. <br />
                  Our community can help answer, Join and experience.
                </p>
                <button type="button" className="btn btn-sm bg-gradient-primary mb-0">
                  Join now{' '}
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-10 mx-auto">
            <div className="card email-card mb-3">
              <div className="card-body border-radius-lg position-relative overflow-hidden pb-4">
                <h5 className="mt-2 mb-3">General Support</h5>
                <p className="mb-3">
                  For any other support questions, <br />
                  please send us an email at
                  <b>support@example.com</b>
                </p>
                <button type="button" className="btn btn-sm bg-gradient-primary mb-0">
                  Send email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
