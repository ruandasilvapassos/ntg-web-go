export const ProductDetail: React.FC = () => {
  return (
    <div className="row mt-8 mb-7">
      <div className="col-lg-7 col-md-9 d-flex justify-content-center flex-column">
        <div>
          <p className="m-0  fw-bolder text-gray text-sm">Linux based Operating System</p>
          <h1 className="secondary-font fw-bold mb-0 h1-extra"> CentOS 7</h1>

          <div className="d-flex align-items-center mb-4">
            <span className="fw-bold text-sm ">4.5</span>
            <span className="material-icons text-primary mx-2">star</span>
            <span className="fw-bold text-sm">Microsoft Azure</span>
            <span className="mx-3 text-secondary">|</span>

            <span className="fw-bold text-sm ">4.5</span>
            <span className="material-icons text-primary mx-2">star</span>
            <span className="fw-bold text-sm">Gartner</span>
          </div>
          <p className="font-weight-normal text-black mb-3">
            Looking for additional security and compliance for your Linux production environment? Then look no further.
          </p>
          <p className="font-weight-normal text-black mb-5">
            CentOS 7 for Azure is a premier image designed by Ntegral optimized for production environments on Azure. This VM
            provides the latest features available in CentOS 7.9.
          </p>
          <a href="#" className="btn bg-gradient-primary text-white   fw-bold px-4 mb-4 me-3">
            Get it on Azure
          </a>
          <a href="#" className="btn btn-outline-primary text-primay   fw-bold px-4 mb-4">
            Get it on AWS
          </a>
        </div>
      </div>
      <div className="col-lg-2"></div>
      <div className="col-lg-3 card-border p-0 top-companies  border border-radius-sm">
        <div className="max-height-400 overflow-y-auto">
          <p className="px-3 pt-3 text-bold text-sm">Top Companies Using this product</p>
          <div className="py-3 border-bottom-sm  border-top-sm px-3 ">
            <img src="/static/img/IBM1.svg" alt="logo" />
            <span className="ms-3">IBM</span>
          </div>
          <div className="py-3 border-bottom-sm px-3 ">
            <img src="/static/img/Australian-Gov.svg" alt="logo" />
            <span className="ms-3">Australian Govt.</span>
          </div>
          <div className="py-3 border-bottom-sm px-3">
            <img src="/static/img/BHHS1.svg" alt="logo" />
            <span className="ms-3">BHSH</span>
          </div>
          <div className="py-3 border-bottom-sm px-3">
            <img src="/static/img/walmart1.svg" alt="logo" />
            <span className="ms-3">Walmart</span>
          </div>
          <div className="py-3 border-bottom-sm px-3">
            <img src="/static/img/IBM1.svg" alt="logo" />
            <span className="ms-3">IBM</span>
          </div>
          <div className="py-3 border-bottom-sm px-3">
            <img src="/static/img/Amazone.svg" alt="logo" />
            <span className="ms-3">Amazone</span>
          </div>
        </div>
      </div>
    </div>
  )
}
