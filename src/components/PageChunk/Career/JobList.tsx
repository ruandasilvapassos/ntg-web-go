import Link from 'next/link'

export const JobList: React.FC = () => {
  return (
    <section className="py-lg-7 py-5  bg-white career-list">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="text-dark mb-5">We are currently hiring for the following positions</h2>
            {/* <!--item--> */}
            <div className="border  border-radius-lg py-3 px-4 mb-3 mb-md-4">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <p className="mb-0 fw-500 text-dark">
                    Data Engineer <span className="text-muted fw-400">|</span>{' '}
                    <span className="text-muted fw-400">Remote friendly</span>
                  </p>
                </div>
                <div className="col-auto">
                  <Link href="/career/data-engineer" passHref>
                    <a className="fw-bold apply-now">
                      Apply now
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!--item--> */}
            <div className="border  border-radius-lg py-3 px-4 mb-3 mb-md-4">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <p className="mb-0 fw-500 text-dark">
                    Lead Software Engineer – FullStack <span className="text-muted fw-400">|</span>{' '}
                    <span className="text-muted fw-400">Remote</span>
                  </p>
                </div>
                <div className="col-auto">
                  <Link href="/career/data-engineer" passHref>
                    <a className="fw-bold apply-now">
                      Apply now
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!--item--> */}
            <div className="border  border-radius-lg py-3 px-4 mb-3 mb-md-4">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <p className="mb-0 fw-500 text-dark">
                    Lead Technical Consultant – Salesforce <span className="text-muted fw-400">|</span>{' '}
                    <span className="text-muted fw-400">On-site</span>
                  </p>
                </div>
                <div className="col-auto">
                  <Link href="/career/data-engineer" passHref>
                    <a className="fw-bold apply-now">
                      Apply now
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!--item--> */}
            <div className="border  border-radius-lg py-3 px-4 mb-3 mb-md-4">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <p className="mb-0 fw-500 text-dark">
                    Lead Software Engineer – Java <span className="text-muted fw-400">|</span>
                    <span className="text-muted fw-400">On-site</span>
                  </p>
                </div>
                <div className="col-auto">
                  <Link href="/career/data-engineer" passHref>
                    <a className="fw-bold apply-now">
                      Apply now
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!--item--> */}
            <div className="border  border-radius-lg py-3 px-4 mb-3 mb-md-4">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <p className="mb-0 fw-500  text-dark">
                    Test Automation Engineer<span className="text-muted fw-400">|</span>{' '}
                    <span className="text-muted fw-400">Remote</span>
                  </p>
                </div>
                <div className="col-auto">
                  <Link href="/career/data-engineer" passHref>
                    <a className="fw-bold apply-now">
                      Apply now
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!--item--> */}
            <div className="border  border-radius-lg py-3 px-4 mb-3 mb-md-4">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <p className="mb-0 fw-500  text-dark">
                    Talent Acquisition Manager<span className="text-muted fw-400">|</span>
                    <span className="text-muted fw-400">On-site</span>
                  </p>
                </div>
                <div className="col-auto">
                  <Link href="/career/data-engineer" passHref>
                    <a className="fw-bold apply-now">
                      Apply now
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
