import Link from 'next/link'

export const FeaturedProduct: React.FC = () => {
  return (
    <section className="py-5 bg-gray-200 py-lg-7">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2>Featured Products</h2>
            <p>Our products are enterprise ready and can help you accelerate your go-to-market strategy.</p>
          </div>
          <div className="col-lg-5 text-end d-flex flex-column justify-content-center">
            <Link href="/product" passHref>
              <a type="button" className="mt-2 mb-0 btn bg-gradient-primary ms-lg-auto me-lg-0 me-auto mt-lg-0">
                View All Products
              </a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="mt-5 card">
              <div className="pt-3 card-body">
                <img className="mb-3 width-32-px" src="/static/img/logos/small-logos/logo-github.svg" alt="logo" />
                <a href="#!">
                  <h4 className="mb-5">SQL Server Evaluation for Ubuntu:18-04</h4>
                </a>
                <p className="mb-2 fw-bold">Container Instance</p>
                <p className="mb-4">
                  Azure Marketplace: Microsoft SQL Server Evaluation 2019 for Ubuntu:18-04 container image
                </p>
                <Link href="/product/example" passHref>
                  <a type="button" className="mb-0 btn bg-gradient-primary w-100">
                    View Product
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="mt-5 card">
              <div className="pt-3 card-body">
                <img className="mb-3 width-32-px" src="/static/img/logos/small-logos/logo-amazon.svg" alt="logo" />
                <a href="#!">
                  <h4 className="mb-5">SQL Server Evaluation for Ubuntu:18-04</h4>
                </a>
                <p className="mb-2 fw-bold">Container Instance</p>
                <p className="mb-4">
                  Azure Marketplace: Microsoft SQL Server Evaluation 2019 for Ubuntu:18-04 container image
                </p>
                <Link href="/product/example" passHref>
                  <a type="button" className="mb-0 btn bg-gradient-primary w-100">
                    View Product
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="mt-5 card">
              <div className="pt-3 card-body">
                <img className="mb-3 width-32-px" src="/static/img/logos/small-logos/logo-google-cloud.svg" alt="logo" />
                <a href="#!">
                  <h4 className="mb-5">SQL Server Evaluation for Ubuntu:18-04</h4>
                </a>
                <p className="mb-2 fw-bold">Container Instance</p>
                <p className="mb-4">
                  Azure Marketplace: Microsoft SQL Server Evaluation 2019 for Ubuntu:18-04 container image
                </p>
                <Link href="/product/example" passHref>
                  <a type="button" className="mb-0 btn bg-gradient-primary w-100">
                    View Product
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
