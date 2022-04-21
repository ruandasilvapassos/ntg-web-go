export const Footer: React.FC = () => {
  return (
    <footer className="pt-6 bg-gray-200 footer">
      <div className="container">
        <div className="row">
          <div className="mb-4 col-md-4 ms-auto">
            <div>
              <a href="#">
                <img src="/static/img/logo-light.png" alt="main_logo" style={{ height: '25px' }} />
              </a>
              <div className="mt-3 pe-4">
                <p className="p-0 mb-2 nav-link ">
                  If you're looking to get started on your project, or need help implementing a existing effort. We'd love to
                  speak with you.
                </p>
                <p className="p-0 nav-link">
                  We constantly strive to be a company that delivers outstanding products and services.
                </p>
              </div>

              <div className="pb-4">
                <div className="dropdown dropdown-language">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <img alt="" src="/static/img/united-states.png" />
                    English (US)
                  </button>
                  <ul className="px-2 py-3 dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                      <a className="dropdown-item border-radius-md">
                        <img alt="" src="/static/img/united-states.png" />
                        English (US)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item border-radius-md">
                        <img alt="" src="/static/img/spain.png" />
                        Spanish{' '}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-2 col-sm-6 col-6">
            <div>
              <h6 className="text-sm">Products</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    AWS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    Microsoft Azure
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    Oracle
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    IBM
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    RedHat
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-4 col-md-2 col-sm-6 col-6">
            <div>
              <h6 className="text-sm">Services</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    Salesforce Cosulting
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    Azure Cosulting
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    AWS Consulting
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-4 col-md-2 col-sm-6 col-6">
            <div>
              <h6 className="text-sm">Insights</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <a className="nav-link" href="./insights.html" target="_blank">
                    New Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-4 col-md-2 col-sm-6 col-6 me-auto">
            <div>
              <h6 className="text-sm">Career</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <a className="nav-link" href="./career-list.html">
                    Opportunites
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-3 pb-3 mt-4 border-top">
          <div className="py-2 row justify-content-between align-items-center">
            <div className="col-md-6">
              <p className="p-0 m-0 text-sm text-muted font-weight-normal">© 2022 Ntegral Inc. All Rights Reserved</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="./privacy.html" className="text-xs text-muted ms-0">
                PRIVACY POLICY
              </a>
              <a href="./terms.html" className="text-xs text-muted ms-3">
                TERMS
              </a>
              <a href="./contact.html" className="text-xs text-muted ms-3">
                CONNECT
              </a>
            </div>
          </div>

          <div className="text-center"></div>
        </div>
      </div>
      <div className="back-to-top">
        <div className="inner">
          <span className="material-icons">expand_less</span>
        </div>
      </div>
    </footer>
  )
}
