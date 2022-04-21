export const ContactHero: React.FC = () => {
  return (
    <header className="bg-gradient-dark">
      <div className="page-header min-vh-50" style={{ backgroundImage: 'url(/static/img/bg9.jpg)' }}>
        <span className="mask bg-gradient-dark opacity-6"></span>
        <div className="container">
          <div className="row text-white">
            <div className="col-md-8 col-lg-6 text-left tablet-top-30">
              <h1 className="m-y-25 fs-60 secondary-font fw-bold text-white">Let's Connect.</h1>
              <p className="m-y-10">
                Every landing page needs a small description after the big bold title, that's why we added this text here.
                Add here all the information that can make you or your product create the first impression.
              </p>
            </div>
            {/* Row */}
          </div>
          {/* Column */}
        </div>
      </div>
    </header>
  )
}
