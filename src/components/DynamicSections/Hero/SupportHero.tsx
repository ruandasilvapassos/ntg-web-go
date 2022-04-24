import Link from 'next/link'

interface SupportHeroProps {
  data?: {
    title?: string
    overview?: string
    items?: {
      icon?: string
      iconBackground?: string
      title?: string
      description?: string
    }[]
    support?: {
      image?: Strapi.Media
      title?: string
      description?: string
      buttonText?: string
      buttonUrl?: string
    }[]
  }
}
export const SupportHero: React.FC<SupportHeroProps> = ({ data }) => {
  return (
    <section className="py-lg-7 py-5  bg-gray-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center pb-4">
            {data?.title && <h2>{data?.title}</h2>}
            {data?.overview && <p className="lead">{data?.overview}</p>}
          </div>
        </div>
        <div className="row">
          {data?.items?.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="p-3 text-center">
                {item?.icon && (
                  <div
                    className="icon icon-shape icon-md shadow mx-auto"
                    style={{
                      background: item?.iconBackground
                    }}>
                    <i className="material-icons opacity-10">{item?.icon}</i>
                  </div>
                )}
                <h5 className="mt-4">{item?.title}</h5>
                <p>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>

        {data?.support && (
          <div className="row mt-6">
            {data?.support?.map((support, i) => (
              <div key={i} className="col-md-6 col-10 mx-auto">
                <div className="card mb-3">
                  {support?.image?.data?.attributes?.url && (
                    <img
                      src={support?.image?.data?.attributes?.url}
                      style={{
                        width: 110,
                        height: 100,
                        objectFit: 'contain',
                        position: 'absolute',
                        right: '1rem',
                        opacity: 0.05
                      }}
                    />
                  )}
                  <div className="card-body border-radius-lg position-relative overflow-hidden pb-4">
                    <h5 className="mt-2 mb-3">{support?.title}</h5>
                    <p className="mb-3">
                      {support?.description?.split('\n')?.map((v, i) => (
                        <span className="d-block" key={i}>
                          {v}
                        </span>
                      ))}
                    </p>
                    <Link href={support?.buttonUrl || '#!'} passHref>
                      <a type="button" className="btn btn-sm bg-gradient-primary mb-0">
                        {support?.buttonText}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
