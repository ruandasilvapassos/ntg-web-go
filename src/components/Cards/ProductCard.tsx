import Link from 'next/link'

interface ProductCardProps {
  title?: string
  subtitle?: string
  description?: string
  companies: any[]
  pricing?: string
}

export const ProductCard: React.FC<ProductCardProps> = () => {
  return (
    <div className="mb-4 col-lg-6 col-sm-6 card-col">
      <div className="card-shadow">
        <div className="p-0 card card-body text-start card-shadow">
          <div className="p-4">
            <h4 className="mb-2 text-dark">Prometheus and Grafana on Ubuntu 20.04 LTS</h4>
            <div>
              <p className="mb-2 fw-bold">VM Instance</p>
              <p className="text-dark">Consulting services that helps organization leverage and extend...</p>

              <div className="mt-5 align-items-center">
                <h6 className="mb-3">Companies using this product</h6>
                <div className="row align-items-center">
                  <div className="col-md-2 col-3">
                    <img src="/static/img/IMB.svg" alt="logo" />
                  </div>
                  <div className="col-md-2 col-3">
                    <img src="/static/img/a.svg" alt="logo" />
                  </div>
                  <div className="col-md-2 col-3">
                    <img src="/static/img/walmart.svg" alt="logo" />
                  </div>
                  <div className="col-md-4 col-3">
                    {/* <!-- <a
                className="p-2 text-center cursor-pointer text-gray list-group-item-dark rounded-3">
                View more
              </a> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 plans bg-custom">
            <h6>Software Plan Starts at</h6>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0 text-md">US&nbsp;$0.0013/hour</h5>
              {/* <!-- <a href="./product.html" className="text-sm icon-move-right">
          <span className="text-dark">
            Learn more
          </span>

          <i className="text-xs fas fa-arrow-right ms-1" aria-hidden="true"></i>
        </a> --> */}
              <Link href={`/product`} passHref>
                <a className="mt-3 text-xs btn btn-sm btn-outline-primary">Learn more</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
