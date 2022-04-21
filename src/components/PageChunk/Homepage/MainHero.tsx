import Link from 'next/link'

export const MainHero = () => {
  return (
    <header>
      <div
        className="page-header min-vh-75"
        style={{
          backgroundImage: 'url(../../static/img/home-bg.png)'
        }}>
        <div className="container">
          <div className="row">
            <div className="pt-3 mt-5 col-lg-8 col-md-12 d-flex justify-content-center text-start flex-column mt-sm-7">
              <h1 className="text-dark">Step up your Development Approach & Business</h1>
              <p className="lead pe-md-5 me-md-5 opacity-8">
                We refine the process to integrate people, technology, and change management using our wide range of products
              </p>
              <div className="buttons">
                <Link href="/product" passHref>
                  <a type="button" className="mt-4 btn bg-gradient-primary">
                    See all products
                  </a>
                </Link>
              </div>

              <div className="mt-5 mb-5 row mt-lg-3">
                <div className="col-12">
                  <p className="mb-2 fw-bold">Available on</p>
                </div>
                <div className="col-md-5">
                  <div className="mt-2 row align-items-center">
                    <div className="col-4">
                      <img className="w-100 logo-available" src="/static/img/azure.svg" alt="logo" />
                    </div>
                    <div className="col-4">
                      <img className="w-100 logo-available" src="/static/img/ibm.svg" alt="logo" />
                    </div>
                    <div className="col-4">
                      <img className="w-100 logo-available" src="/static/img/aws.svg" alt="logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
