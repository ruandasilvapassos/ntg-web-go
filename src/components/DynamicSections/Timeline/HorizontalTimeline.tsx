import { useMemo } from 'react'

interface HorizontalTimelineProps {
  title?: string
  description?: string
  items?: {
    title?: string
    description?: string
    image?: Strapi.Media
  }[]
}

export const HorizontalTimeline: React.FC<HorizontalTimelineProps> = ({ title, description, items }) => {
  const showHeading = useMemo(() => {
    if (title || description) return true
    return false
  }, [title, description])

  return (
    <section className="py-lg-7 py-5 bg-gray-100">
      <div className="container">
        {showHeading && (
          <div className="row">
            <div className="col-lg-6">
              {title && <h2>{title}</h2>}
              {description && <p>{description}</p>}
            </div>
          </div>
        )}
        <div className="hori-timeline">
          <div className="row">
            {items?.map((item, i) => (
              <div key={i} className="col-md-4 col-sm-12 col-12">
                <div className="item">
                  <div className="step">
                    <span className="badge bg-danger mb-2">Step 0{i + 1}</span>
                  </div>
                  <div className="inner">
                    <div className="text-center">
                      {item?.image?.data?.attributes?.url && (
                        <div className="text-center">
                          <img src={item?.image?.data?.attributes?.url} width={42} />
                          {/* <i className="material-icons text-gradient text-primary text-5xl mb-3">account_circle</i> */}
                        </div>
                      )}
                      {item?.title && <h5 className="mb-2 fw-bold">{item?.title}</h5>}
                      {item?.description && <p>{item?.description}</p>}
                    </div>
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
