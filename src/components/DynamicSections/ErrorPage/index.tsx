import { useRouter } from 'next/router'

import { MainLayout } from '@components/Layouts'

export const ErrorPage: React.FC = () => {
  const { reload } = useRouter()
  return (
    <MainLayout noFooter noHeader>
      <section className="py-lg-7 py-5 bg-gray-100 product-section">
        <div className="container my-auto">
          <div className="row pt-7 pb-5 mt-3">
            <div className="col-lg-12 m-auto text-center">
              <h1 className="display-1 text-bolder text-dark">Error 500</h1>
              <h2 className="text-dark">Something went wrong</h2>
              <p className="lead text-dark">Refreshing page may resolve this issue.</p>
              <button onClick={() => reload()} type="button" className="btn btn-primary mt-4">
                Refresh
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
