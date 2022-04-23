import classNames from 'classnames'
import Link from 'next/link'

interface HeaderHeroProps {
  data: {
    title: string
    overview?: string
    image?: Strapi.Media
    button?: Component.Button
    verticalHeight?: number
  }
}

export const HeaderHero: React.FC<HeaderHeroProps> = ({ data }) => {
  const { title, overview, image, button, verticalHeight } = data
  return (
    <header>
      <div
        className="page-header min-vh-75"
        style={{
          maxHeight: verticalHeight || 500 + 'px'
        }}>
        <div
          className="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block"
          style={{ backgroundImage: `url(${image?.data?.attributes?.url})`, backgroundSize: 'cover' }}>
          <span className="mask bg-gradient-dark opacity-4"></span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex justify-content-center flex-column">
              <div className="card card-body blur d-flex justify-content-center shadow-lg p-5 mt-5">
                {title && <h1 className="text-dark mb-4">About Us</h1>}
                {overview && (
                  <p className="lead text-dark pe-md-5 me-md-5">
                    Ntegral seeks to find the right products and solutions to enable technology transformation across our
                    client’s enterprise and run mission-critical processes efficiently and securely – today and as their
                    business needs evolve.
                  </p>
                )}
                {button && (
                  <div className="buttons">
                    <Link href={button?.link || ''}>
                      <a type="button" className={classNames(['btn bg-gradient-primary mt-4', button?.class])}>
                        {button?.text}
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
