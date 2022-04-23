import classNames from 'classnames'
import Link from 'next/link'

interface BackgroundHeroProps {
  data: {
    title: string
    overview?: string
    background?: Strapi.Media
    buttons?: Component.Button[]
    verticalHeight?: number
  }
}

export const BackgroundHero: React.FC<BackgroundHeroProps> = ({ data }) => {
  const { title, overview, background, buttons, verticalHeight } = data
  return (
    <section
      className="overflow-hidden bg-gradient-dark position-relative"
      style={{
        maxHeight: verticalHeight || 500 + 'px'
      }}>
      {background?.data?.attributes?.url && (
        <img
          src={background?.data?.attributes?.url}
          alt="pattern-lines"
          className="position-absolute opacity-9 w-100 enterprise-img"
          style={{
            maxHeight: verticalHeight || 500 + 'px'
          }}
        />
      )}
      <div className="container py-2 py-lg-4">
        <div className="row">
          <div className="col-lg-8 d-flex justify-content-center flex-column">
            <div className="py-7 position-relative">
              {title && <h2 className="mb-4 text-white">{title}</h2>}
              {overview && <p className="mb-4 text-white opacity-8">{overview}</p>}
              <div>
                <div className="pt-5">
                  {buttons?.map((button, i) => (
                    <Link key={i} href={button?.link || '#!'}>
                      <a
                        className={classNames(['px-4 mb-4 text-white btn bg-gradient-primary fw-bold mr-1', button?.class])}>
                        {button?.text}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
