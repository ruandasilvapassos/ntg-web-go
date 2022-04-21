export const BlogThumbnail: React.FC = () => {
  return (
    <header>
      <div className="page-header min-vh-85" style={{ backgroundImage: 'url(/static/img/bg5.jpg)' }}>
        <span className="mask bg-gradient-dark opacity-4"></span>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex justify-content-center flex-column">
              <h1 className="text-white mb-0">6 insights into the French Fashion landscape</h1>
              <p className="lead pe-sm-5 me-sm-5 text-white opacity-8">
                Like so many organizations these days, Autodesk is a company in transition. It was until recently a
                traditional boxed software company selling licenses.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
