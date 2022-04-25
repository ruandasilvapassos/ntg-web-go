import Link from 'next/link'

import { useFetcher } from '@hooks/useFetcher'

interface CareerListProps {
  title?: string
}
export const CareerList: React.FC<CareerListProps> = ({ title }) => {
  const { data } = useFetcher<Component.Career[]>(`/careers?populate=contentSection,typeJob`)
  return (
    <section className="py-lg-7 py-5  bg-white career-list">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {title && <h2 className="text-dark mb-5">{title}</h2>}
            {/* <!--item--> */}
            {data?.map((career, i) => (
              <div key={i} className="border  border-radius-lg py-3 px-4 mb-3 mb-md-4">
                <div className="row align-items-center justify-content-between">
                  <div className="col-auto">
                    <p className="mb-0 fw-500 text-dark">
                      {career?.attributes?.position} <span className="text-muted fw-400">|</span>{' '}
                      <span className="text-muted fw-400">{career?.attributes?.typeJob?.data?.attributes?.name}</span>
                    </p>
                  </div>
                  <div className="col-auto">
                    <Link href={`/careers/${career?.attributes?.positionCode}`} passHref>
                      <a className="fw-bold apply-now">
                        Apply now
                        <span></span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
