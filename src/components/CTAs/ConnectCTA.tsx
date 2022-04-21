import Link from 'next/link'

export const ConnectCTA: React.FC = () => {
  return (
    <section className="overflow-hidden bg-gradient-dark position-relative">
      <img src="/static/img/about-bg.png" alt="pattern-lines" className="position-absolute opacity-9 w-100 enterprise-img" />
      <div className="container py-2 py-lg-4">
        <div className="row">
          <div className="col-lg-8 d-flex justify-content-center flex-column">
            <div className="py-7 position-relative">
              <h2 className="mb-4 text-white">Enterprise Solutions made Easy</h2>
              <p className="mb-4 text-white opacity-8">
                Ntegral provides ISV and consulting services with a focus on products and services for docker, Kubernetes,
                containers and future cloud adoption
              </p>
              <div>
                <div className="pt-5">
                  <Link href="/contact/v2">
                    <a className="px-4 mb-4 text-white btn bg-gradient-primary fw-bold">Let’s connect</a>
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
