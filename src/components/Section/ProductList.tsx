import classNames from 'classnames'
import Link from 'next/link'
import { useMemo } from 'react'

import { ProductCheckbox } from '@components/Filters/ProductCheckbox'
import { useHeaderHeight } from '@hooks/useHeaderHeight'

interface ProductListProps {
  className?: string
  title?: string
  description?: string
}

export const ProductList: React.FC<ProductListProps> = (props) => {
  const { className, title, description } = props
  const headerHeight = useHeaderHeight()

  const showHeading = useMemo(() => {
    if (title || description) return true
    return false
  }, [props])
  return (
    <section className={classNames(['py-5 bg-gray-100 py-lg-7 product-section', className])}>
      <div className="container">
        {showHeading && (
          <div className="row pb-6">
            <div className="col-lg-7">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-lg-3 categories-section ">
            {/* Filter Product Checkbox */}
            <ProductCheckbox />
          </div>
          <div className="col-lg-9">
            <section>
              <div className="row flex-column">
                <div>
                  <div className="nav-wrapper position-relative d-flex align-items-start">
                    <div className="filter-wrap">
                      <button
                        className="p-0 m-0 btn me-2 d-lg-none filter-menu-icon"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample">
                        <img src="/static/img/filters.svg" alt="filters" />
                      </button>
                      <div
                        key={headerHeight}
                        className="offcanvas offcanvas-start"
                        id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel"
                        aria-hidden="true"
                        style={{ visibility: 'hidden', top: headerHeight }}>
                        <div>
                          <div className="px-3 pt-3 d-flex justify-content-between align-items-center">
                            <button
                              type="button"
                              className="btn-close text-reset text-dark"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close">
                              <span className="material-icons">close</span>
                            </button>
                            <div>
                              <button type="button" className="mb-0 btn btn-outline-secondary btn-sm me-2">
                                Clear
                              </button>
                              <button type="button" className="mb-0 btn btn-primary btn-sm">
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="offcanvas-body">
                          <div className="row">
                            <div className="col-md-12">
                              <p className="pt-2 mb-2 text-sm fw-bold">Platform</p>
                            </div>
                            <div className="col-6">
                              <div className="mb-3">
                                <input type="checkbox" />
                                <span>
                                  Windows <b className="text-muted text-normal">(125)</b>
                                </span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="mb-3">
                                <input type="checkbox" />
                                <span>
                                  Linux <b className="text-muted text-normal">(148)</b>
                                </span>
                              </div>
                            </div>
                          </div>
                          <hr className="mt-2 mb-4" />
                          <div className="row">
                            <div className="col-12">
                              <p className="mb-3 text-sm fw-bold">Categories</p>
                            </div>

                            <div className="col-12">
                              <div className="row">
                                <div className="col-6">
                                  <ProductCheckbox />
                                </div>
                                <div className="col-6">
                                  <ProductCheckbox />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul
                      className="nav nav-pills nav-fill me-3 custom-tabs"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical">
                      <li className="nav-item">
                        <a
                          className="nav-link active custom-tabs-links"
                          id="v-pills-home-tab"
                          data-bs-toggle="pill"
                          href="#v-pills-home"
                          role="tab"
                          aria-controls="v-pills-home"
                          aria-selected="true">
                          All Platfrom
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link custom-tabs-links"
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          href="#v-pills-profile"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false">
                          AWS
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link custom-tabs-links"
                          id="v-pills-messages-tab"
                          data-bs-toggle="pill"
                          href="#v-pills-messages"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false">
                          Microsoft Azure
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link custom-tabs-links"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          href="#v-pills-settings"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false">
                          Oracle
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link custom-tabs-links"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          href="#v-pills-settings"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false">
                          RedHat
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12 text-start">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade active show"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab">
                      <section className="py-4">
                        <div className="container p-0">
                          <div className="row">
                            <form method="" action="" className="mb-4">
                              <div className="input-group is-filled position-relative">
                                <input type="text" className="px-4 bg-white shadow form-control" placeholder="Search..." />
                                <button className="mb-0 text-white btn bg-primary" type="button" id="button-addon1">
                                  <span className="material-icons">search</span>
                                  Search
                                </button>
                              </div>
                            </form>
                            {/* <!-- START Blogs w/ 4 cards w/ image & text & link --> */}
                            <section>
                              <div className="container p-0">
                                <div className="row home-cards">
                                  {[...Array(8)].map((_, i) => (
                                    <div key={i} className="mb-4 col-lg-6 col-sm-6 card-col">
                                      <div className="card-shadow">
                                        <div className="p-0 card card-body text-start card-shadow">
                                          <div className="p-4">
                                            <h4 className="mb-2 text-dark">Prometheus and Grafana on Ubuntu 20.04 LTS</h4>
                                            <div>
                                              <p className="mb-2 fw-bold">VM Instance</p>
                                              <p className="text-dark">
                                                Consulting services that helps organization leverage and extend...
                                              </p>

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
                                              <Link href={`/product/${i + 1}`} passHref>
                                                <a className="mt-3 text-xs btn btn-sm btn-outline-primary">Learn more</a>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <div className="text-center buttons">
                                  <button type="button" className="mt-4 btn btn-primary">
                                    See All Products
                                  </button>
                                </div>
                              </div>
                            </section>
                            {/* <!-- END Blogs w/ 4 cards w/ image & text & link --> */}
                          </div>
                        </div>
                      </section>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab">
                      <section className="py-4">
                        <div className="container p-0">
                          <div className="row">
                            <form method="" action="" className="mb-4">
                              <div className="input-group is-filled position-relative">
                                <input type="text" className="px-4 bg-white shadow form-control" placeholder="Search..." />
                                <button className="mb-0 text-white btn bg-primary" type="button" id="button-addon1">
                                  <span className="material-icons">search</span>
                                  Search
                                </button>
                              </div>
                            </form>
                            {/* <!-- START Blogs w/ 4 cards w/ image & text & link --> */}
                            <section>
                              <div className="container p-0">
                                <div className="row home-cards">
                                  {[...Array(6)].map((_, i) => (
                                    <div key={i} className="mb-4 col-lg-6 col-sm-6 card-col">
                                      <div className="card-shadow">
                                        <div className="p-0 card card-body text-start card-shadow">
                                          <div className="p-4">
                                            <h4 className="mb-2 text-dark">Prometheus and Grafana on Ubuntu 20.04 LTS</h4>
                                            <div>
                                              <p className="text-dark">
                                                Consulting services that helps organization leverage and extend...
                                              </p>

                                              <div className="mt-5 align-items-center">
                                                <p className="mb-3">Companies using this product</p>
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
                                                    <a className="p-2 text-center cursor-pointer text-gray list-group-item-dark rounded-3">
                                                      View more
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-4 plans bg-custom">
                                            <p>Software Plan Starts at</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                              <h5 className="mb-0">US$0.0013/hour</h5>
                                              <Link href={`/product/${i + 1}`} passHref>
                                                <a className="text-sm icon-move-right">
                                                  <span className="text-dark">Learn more</span>

                                                  <i className="text-xs fas fa-arrow-right ms-1" aria-hidden="true"></i>
                                                </a>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}

                                  <div className="buttons">
                                    <button type="button" className="mt-4 btn btn-primary">
                                      Learn more
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </section>
                            {/* <!-- END Blogs w/ 4 cards w/ image & text & link --> */}
                          </div>
                        </div>
                      </section>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab">
                      <section className="py-4">
                        <div className="container p-0">
                          <div className="row">
                            <form method="" action="" className="mb-4">
                              <div className="input-group is-filled position-relative">
                                <input type="text" className="px-4 bg-white shadow form-control" placeholder="Search..." />
                                <button className="mb-0 text-white btn bg-primary" type="button" id="button-addon1">
                                  <span className="material-icons">search</span>
                                  Search
                                </button>
                              </div>
                            </form>
                            {/* <!-- START Blogs w/ 4 cards w/ image & text & link --> */}
                            <section>
                              <div className="container p-0">
                                <div className="row home-cards">
                                  {[...Array(6)].map((_, i) => (
                                    <div key={i} className="mb-4 col-lg-6 col-sm-6 card-col">
                                      <div className="card-shadow">
                                        <div className="p-0 card card-body text-start card-shadow">
                                          <div className="p-4">
                                            <h4 className="mb-2 text-dark">CentOS 7</h4>

                                            <p className="text-dark">
                                              Consulting services that helps organization leverage and extend...
                                            </p>

                                            <div className="mt-5 align-items-center">
                                              <p className="mb-3">Companies using this product</p>
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
                                                  <a className="p-2 text-center cursor-pointer text-gray list-group-item-dark rounded-3">
                                                    View more
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-4 plans bg-custom">
                                            <p>Software Plan Starts at</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                              <h5 className="mb-0">US$0.0013/hour</h5>
                                              <Link href={`/product/${i + 1}`} passHref>
                                                <a className="text-sm icon-move-right">
                                                  <span className="text-dark">Learn more</span>
                                                  <i className="text-xs fas fa-arrow-right ms-1" aria-hidden="true"></i>
                                                </a>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}

                                  <div className="buttons">
                                    <Link href={`/product`} passHref>
                                      <a type="button" className="mt-4 btn btn-primary">
                                        Learn more
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </section>
                            {/* <!-- END Blogs w/ 4 cards w/ image & text & link --> */}
                          </div>
                        </div>
                      </section>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab">
                      <section className="py-4">
                        <div className="container p-0">
                          <div className="row">
                            <form method="" action="" className="mb-4">
                              <div className="input-group is-filled position-relative">
                                <input type="text" className="px-4 bg-white shadow form-control" placeholder="Search..." />
                                <button className="mb-0 text-white btn bg-primary" type="button" id="button-addon1">
                                  <span className="material-icons">search</span>
                                  Search
                                </button>
                              </div>
                            </form>
                            {/* <!-- START Blogs w/ 4 cards w/ image & text & link --> */}
                            <section>
                              <div className="container p-0">
                                <div className="row">
                                  {[...Array(6)].map((_, i) => (
                                    <div key={i} className="mb-4 col-lg-6 col-sm-6">
                                      <div className="card-shadow">
                                        <div className="p-0 card card-body text-start card-shadow">
                                          <div className="p-4">
                                            <h4 className="mb-2 text-dark">CentOS 7</h4>

                                            <p className="text-dark">
                                              Consulting services that helps organization leverage and extend...
                                            </p>

                                            <div className="mt-5 align-items-center">
                                              <p className="mb-3">Companies using this product</p>
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
                                                  <a className="p-2 text-center cursor-pointer text-gray list-group-item-dark rounded-3">
                                                    View more
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="p-4 plans bg-custom">
                                            <p>Software Plan Starts at</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                              <h5 className="mb-0">US$0.0013/hour</h5>
                                              <Link href={`/product/${i + 1}`} passHref>
                                                <a className="text-sm icon-move-right">
                                                  <span className="text-dark">Learn more</span>

                                                  <i className="text-xs fas fa-arrow-right ms-1" aria-hidden="true"></i>
                                                </a>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}

                                  <div className="buttons">
                                    <button type="button" className="mt-4 btn btn-primary">
                                      See All Products
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </section>
                            {/* <!-- END Blogs w/ 4 cards w/ image & text & link --> */}
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
