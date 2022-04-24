import Link from 'next/link'

interface ServicesListProps {
  title?: string
  description?: string
}
export const ServicesList: React.FC<ServicesListProps> = ({ title, description }) => {
  return (
    <section className="py-lg-7 py-5 bg-gray-200">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </div>
        </div>

        <div className="row mt-lg-5 mt-4">
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card card-service-item">
              <div className="ps-4 mt-n4">
                <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl">
                  <div className="icon-inner">
                    <img alt="" src="/static/img/salesforce.png" />
                  </div>
                </div>
              </div>
              <div className="card-body border-radius-lg position-relative overflow-hidden pb-4">
                <h5 className="mt-2">Salesforce Consulting</h5>
                <p className="mb-3">
                  Consulting services that helps organization leverage and extend the Salesforce Platform.
                </p>
                {/* <!-- <a href="#" className="font-weight-bold text-xs text-uppercase font-weight-bolder text-primary icon-move-right">
                See detail
                <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
              </a> --> */}
                <Link href="/product" passHref>
                  <a className="mt-3 btn btn-sm btn-outline-primary text-xs">See detail</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card card-service-item">
              <div className="ps-4 mt-n4">
                <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl">
                  <div className="icon-inner">
                    <img alt="" src="/static/img/Azure.png" />
                  </div>
                </div>
              </div>
              <div className="card-body border-radius-lg position-relative overflow-hidden pb-4">
                <h5 className="mt-2">Azure Consulting</h5>
                <p className="mb-3">
                  Enterprise architecture services the provide market ready, hybrid and cloud services that are hosted in
                  Microsoft Azure Cloud.
                </p>
                {/* <!-- <a href="#" className="font-weight-bold text-xs text-uppercase font-weight-bolder text-primary icon-move-right">
                See detail
                <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
              </a> --> */}
                <Link href="/product" passHref>
                  <a className="mt-3 btn btn-sm btn-outline-primary text-xs">See detail</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card card-service-item">
              <div className="ps-4 mt-n4">
                <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl">
                  <div className="icon-inner">
                    <img alt="" src="/static/img/AWS.png" />
                  </div>
                </div>
              </div>
              <div className="card-body border-radius-lg position-relative overflow-hidden pb-4">
                <h5 className="mt-2">AWS Consulting</h5>
                <p className="mb-3">
                  Enterprise architecture services the provide market ready, hybrid and cloud services that are hosted in
                  Microsoft Azure Cloud.
                </p>
                {/* <!-- <a href="#" className="font-weight-bold text-xs text-uppercase font-weight-bolder text-primary icon-move-right">
                See detail
                <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
              </a> --> */}
                <Link href="/product" passHref>
                  <a className="mt-3 btn btn-sm btn-outline-primary text-xs">See detail</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card card-service-item">
              <div className="ps-4 mt-n4">
                <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl">
                  <div className="icon-inner">
                    <img alt="" src="/static/img/Docker-Kubernetes.png" />
                  </div>
                </div>
              </div>
              <div className="card-body border-radius-lg position-relative overflow-hidden pb-4">
                <h5 className="mt-2">Docker & Kubernetes</h5>
                <p className="mb-3">
                  Helping clients migrate business-critical processes and applications to secure container instances and
                  networks in the cloud.
                </p>
                {/* <!-- <a href="#" className="font-weight-bold text-xs text-uppercase font-weight-bolder text-primary icon-move-right">
                See detail
                <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
              </a> --> */}
                <Link href="/product" passHref>
                  <a className="mt-3 btn btn-sm btn-outline-primary text-xs">See detail</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card card-service-item">
              <div className="ps-4 mt-n4">
                <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl">
                  <div className="icon-inner">
                    <img alt="" src="/static/img/Node.png" />
                  </div>
                </div>
              </div>
              <div className="card-body border-radius-lg position-relative overflow-hidden pb-4">
                <h5 className="mt-2">Node</h5>
                <p className="mb-3">
                  Implementing enterprise solutions using Node, that leverages an open-source, cross-platform javascript
                  runtime environment.
                </p>
                {/* <!-- <a href="#" className="font-weight-bold text-xs text-uppercase font-weight-bolder text-primary icon-move-right">
                See detail
                <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
              </a> --> */}
                <Link href="/product" passHref>
                  <a className="mt-3 btn btn-sm btn-outline-primary text-xs">See detail</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card card-service-item">
              <div className="ps-4 mt-n4">
                <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl">
                  <div className="icon-inner">
                    <img alt="" src="/static/img/React.png" />
                  </div>
                </div>
              </div>
              <div className="card-body border-radius-lg position-relative overflow-hidden pb-4">
                <h5 className="mt-2">React</h5>
                <p className="mb-3">
                  Our React Consulting Services help companies convert powerful ideas to innovative business solutions.
                </p>
                {/* <!-- <a href="#" className="font-weight-bold text-xs text-uppercase font-weight-bolder text-primary icon-move-right">
                See detail
                <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
              </a> --> */}
                <Link href="/product" passHref>
                  <a className="mt-3 btn btn-sm btn-outline-primary text-xs">See detail</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card card-service-item">
              <div className="ps-4 mt-n4">
                <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl">
                  <div className="icon-inner">
                    <img alt="" src="/static/img/Angular.png" />
                  </div>
                </div>
              </div>
              <div className="card-body border-radius-lg position-relative overflow-hidden pb-4">
                <h5 className="mt-2">Angular</h5>
                <p className="mb-3">
                  Our Angular Development Services are utilized to create powerful and feature-rich web apps that help
                  businesses grow.
                </p>
                {/* <!-- <a href="#" className="font-weight-bold text-xs text-uppercase font-weight-bolder text-primary icon-move-right">
                See detail
                <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
              </a> --> */}
                <Link href="/product" passHref>
                  <a className="mt-3 btn btn-sm btn-outline-primary text-xs">See detail</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card card-service-item">
              <div className="ps-4 mt-n4">
                <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl">
                  <div className="icon-inner">
                    <img alt="" src="/static/img/Ionic.png" />
                  </div>
                </div>
              </div>
              <div className="card-body border-radius-lg position-relative overflow-hidden pb-4">
                <h5 className="mt-2">Ionic</h5>
                <p className="mb-3">
                  Leveraging this mobile UI framework for building cross-platform native and progressive web app experiences.
                </p>
                {/* <!-- <a href="#" className="font-weight-bold text-xs text-uppercase font-weight-bolder text-primary icon-move-right">
                See detail
                <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
              </a> --> */}
                <Link href="/product" passHref>
                  <a className="mt-3 btn btn-sm btn-outline-primary text-xs">See detail</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card card-service-item">
              <div className="ps-4 mt-n4">
                <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl">
                  <div className="icon-inner">
                    <img alt="" src="/static/img/c-java.png" />
                  </div>
                </div>
              </div>
              <div className="card-body border-radius-lg position-relative overflow-hidden pb-4">
                <h5 className="mt-2">C# | JAVA</h5>
                <p className="mb-3">
                  Leveraging this mobile UI framework for building cross-platform native and progressive web app experiences.
                </p>
                {/* <!-- <a href="#" className="font-weight-bold text-xs text-uppercase font-weight-bolder text-primary icon-move-right">
                See detail
                <i className="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
              </a> --> */}
                <Link href="/product" passHref>
                  <a className="mt-3 btn btn-sm btn-outline-primary text-xs">See detail</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
