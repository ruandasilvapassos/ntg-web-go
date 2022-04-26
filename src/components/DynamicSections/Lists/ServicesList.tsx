import Link from 'next/link'

import { useFetcher } from '@hooks/useFetcher'

interface ServicesListProps {
  title?: string
  description?: string
}
export const ServicesList: React.FC<ServicesListProps> = ({ title, description }) => {
  const { data } = useFetcher<Component.ServiceResponse[]>(`/services?populate=*&sort[0]=createdAt:desc`)

  return (
    <section className="py-lg-7 py-5 bg-gray-200">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </div>
        </div>

        <div className="row mt-lg-5 mt-4">
          {data?.map((service, i) => (
            <div key={i} className="col-lg-4 col-md-6 mb-5">
              <div className="card card-service-item">
                {service?.attributes?.logo?.data?.attributes?.url && (
                  <div className="ps-4 mt-n4">
                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl">
                      <div className="icon-inner">
                        <img
                          alt={service?.attributes?.logo?.data?.attributes?.alternativeText}
                          src={service?.attributes?.logo?.data?.attributes?.url}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="card-body border-radius-lg position-relative overflow-hidden pb-4">
                  <h5 className="mt-2">{service?.attributes?.title}</h5>
                  {service?.attributes?.description && <p className="mb-3">{service?.attributes?.description}</p>}
                  {service?.attributes?.link && (
                    <Link href={service?.attributes?.link?.url || '#!'} passHref>
                      <a
                        target={service?.attributes?.link?.target || '_self'}
                        className="mt-3 btn btn-sm btn-outline-primary text-xs"
                        title={service?.attributes?.link?.title}>
                        {service?.attributes?.link?.text}
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
