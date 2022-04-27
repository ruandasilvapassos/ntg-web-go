import Link from 'next/link'

export const NotFoundPage: React.FC = () => {
  return (
    <section className="py-lg-7 py-5 bg-gray-100 product-section">
      <div className="container my-auto">
        <div className="row pt-7 pb-5 mt-3">
          <div className="col-lg-12 m-auto text-center">
            <h1 className="display-1 text-bolder text-dark">Error 404</h1>
            <h2 className="text-dark">Something went wrong</h2>
            <p className="lead text-dark">We suggest you to go to the homepage while we solve this issue.</p>
            <Link href="/" passHref>
              <a type="button" className="btn btn-primary mt-4">
                Go to Homepage
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
