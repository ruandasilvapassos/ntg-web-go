import classNames from 'classnames'
import { useMemo } from 'react'

interface VerticalTimelineProps {
  title?: string
  description?: string
  items?: {
    title?: string
    description?: string
    icon?: string
  }[]
}

export const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ title, description, items }) => {
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
        <div className="timeline">
          {items?.map((item, i) => (
            <div
              key={i}
              className={classNames([
                'timeline-item',
                {
                  left: i % 2 === 1 ? true : false
                }
              ])}>
              <div className=" border-radius-lg bg-white px-4 py-4 shadow">
                {item?.icon && (
                  <div className="icon icon-md icon-shape bg-gradient-primary shadow-primary shadow text-center border-radius-xl mb-2">
                    <i className="material-icons opacity-10">{item?.icon}</i>
                  </div>
                )}
                <h4 className="mb-2 fw-bold">
                  <b className="fw-bold">0{i + 1}.</b> {item.title}
                </h4>
                <p>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
