export const ProductDetailTab: React.FC = () => {
  return (
    <div className="row flex-column py-2">
      <div className="col-lg-8">
        <div className="nav-wrapper position-relative">
          <ul
            className="nav nav-pills nav-fill p-1 me-3 custom-tabs d-flex flex-sm-row flex-column"
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
                Overview
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
                Plans & Pricing
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
                Integrations
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
                How to buy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-12 text-start">
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <section className="py-4">
              <div className="container p-0">
                <div className="row">
                  {/* <!-- START Blogs w/ 4 cards w/ image & text & link --> */}
                  <section>
                    <div className="container p-0">
                      <div className="row">
                        <div className="col-lg-7">
                          <h3 className="mb-4 pt-4">What is CentOS 7</h3>
                          <p className="m-y-10 fs-20 text-black">
                            CentOS 7 for Azure is a premier image designed by Ntegral optimized for production environments
                            on Azure. This VM provides the latest features available in CentOS 7.9. It is a premier Linux
                            distro for enterprise cloud environments. CentOS is an excellent virtual machine (VM) platform
                            for all workloads that include Node.js, web applications and various database platforms.
                            <br />
                            <br />
                            Ntegral packages applications following industry standards, and continuously monitors all
                            components and libraries for vulnerabilities and application updates. When any security threat or
                            update is identified, Ntegral automatically repackages the applications and pushes the latest
                            versions to the cloud marketplaces.
                          </p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                          <div className="pt-5">
                            <img alt="" src="/static/img/pd1.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* <!-- END Blogs w/ 4 cards w/ image & text & link --> */}
                </div>
              </div>
            </section>
          </div>
          <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <section className="pt-5">
              <div className="container p-0">
                <div className="row justify-content-center">
                  {/* <!-- <div className="col-12 text-center">
                        <h2 className="text-gradient text-primary text-center">Compare Features</h2>
                        <p className="lead mb-5">Join the world&#39;s largest developer community</p>
                      </div> --> */}
                  <div className="col-lg-12">
                    <div className="table-responsive card-border">
                      <table className="table table-pricing">
                        <thead className="text-white bg-primary">
                          <tr>
                            <th className="ps-3">
                              <h6 className="mb-0 text-white">Instance</h6>
                            </th>
                            <th className="text-center">
                              {/* <!-- <h6 className="font-weight-bold">Team</h6> --> */}
                              <h6 className="text-white mb-0">Category</h6>
                            </th>
                            <th className="text-center">
                              {/* <!-- <h6 className="font-weight-bold">Growth</h6> --> */}
                              <h6 className="text-white mb-0">Core</h6>
                            </th>
                            <th className="text-center">
                              {/* <!-- <h6 className="font-weight-bold">Enterprise</h6> --> */}
                              <h6 className="text-white mb-0">RAM</h6>
                            </th>
                            <th className="text-center">
                              {/* <!-- <h6 className="font-weight-bold">Enterprise</h6> --> */}
                              <h6 className="text-white mb-0">Disk Space</h6>
                            </th>
                            <th className="text-center">
                              {/* <!-- <h6 className="font-weight-bold">Enterprise</h6> --> */}
                              <h6 className="text-white mb-0">Drive Type</h6>
                            </th>
                            <th className="text-center">
                              {/* <!-- <h6 className="font-weight-bold">Enterprise</h6> --> */}
                              <h6 className="text-white mb-0">Infrastructure Cost</h6>
                            </th>
                            <th className="text-center">
                              {/* <!-- <h6 className="font-weight-bold">Enterprise</h6> --> */}
                              <h6 className="text-white mb-0">Software Cost</h6>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-3 ps-3">
                              <span className="text-bold text-black">B2S*</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">Standard*</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">2</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">4GB</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">SSD</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 ps-3">
                              <span className="text-bold text-black">DS3V2*</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">Standard*</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">2</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">4GB</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">SSD</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 ps-3">
                              <span className="text-bold text-black">DS4V2*</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">Standard*</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">2</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">4GB</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">SSD</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-bold text-black ps-3">
                              <span className="text-bold text-black">DS4V2*</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">Standard*</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">2</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">4GB</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">SSD</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                          </tr>
                          {/* <!-- <tr>
                                <th className="pt-4 pb-2 ps-3">
                                  <h6 className="mb-0">Developer tools</h6>
                                </th>
                                <th></th>
                                <th></th>
                                <th></th>
                              </tr> --> */}
                          <tr>
                            <td className="py-3 ps-3">
                              <span className="text-bold text-black">DS4V2*</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">Standard*</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">2</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">4GB</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">SSD</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 ps-3">
                              <span className="text-bold text-black">DS4V2*</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">Standard*</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">2</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">4GB</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">SSD</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                            <td className="py-3 text-center">
                              <span className=" text-black">US$0.05</span>
                            </td>
                          </tr>
                          {/* <!-- <tr>
                                <th className="border-bottom-0"></th>
                                <th className="text-center align-items-center border-bottom-0">
                                  <a href="javascript:;" className="btn btn-dark mt-3">Choose Plan</a>
                                </th>
                                <th className="text-center align-items-center border-bottom-0">
                                  <a href="javascript:;" className="btn btn-dark mt-3">Choose Plan</a>
                                </th>
                                <th className="text-center align-items-center border-bottom-0">
                                  <a href="javascript:;" className="btn bg-gradient-primary mt-3">Choose Plan</a>
                                </th>
                              </tr> --> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-normal">
                      {' '}
                      <span className="text-color">*</span> Premium storage is available for this type of virtual machine.{' '}
                      <a href="#" className="text-primary fw-bold">
                        Learn more
                      </a>{' '}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            It’s better to choose, commit, and get started instead of waiting for the best possible option.
          </div>
          <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
            If you think you can learn a lot from reading books, try writing one.
          </div>
        </div>
      </div>
    </div>
  )
}
