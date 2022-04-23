import Image from 'next/image'
import Link from 'next/link'

interface MainHeroProps {
  data?: {
    title?: string
    overview?: string
    background?: Strapi.Media
    button?: Component.Link
    logo?: Component.Logo[]
    logo_title?: string
  }
}
export const MainHero: React.FC<MainHeroProps> = ({ data }) => {
  return (
    <header>
      <div
        className="page-header min-vh-75"
        style={{
          backgroundImage: `url(${data?.background?.data?.attributes?.url})`
        }}>
        <div className="container">
          <div className="row">
            <div className="pt-3 mt-5 col-lg-8 col-md-12 d-flex justify-content-center text-start flex-column mt-sm-7">
              {data?.title && <h1 className="text-dark">{data?.title}</h1>}
              {data?.overview && <p className="lead pe-md-5 me-md-5 opacity-8">{data?.overview}</p>}
              {data?.button && (
                <div className="buttons">
                  <Link href={data?.button?.url || '#!'} passHref>
                    <a type="button" title={data?.button?.title} className="mt-4 btn bg-gradient-primary">
                      {data?.button?.text}
                    </a>
                  </Link>
                </div>
              )}

              <div className="mt-5 mb-5 row mt-lg-3">
                {data?.logo_title && (
                  <div className="col-12">
                    <p className="mb-2 fw-bold">{data?.logo_title}</p>
                  </div>
                )}
                <div className="col-md-5">
                  <div className="mt-2 row align-items-center">
                    {data?.logo?.map((logo) => (
                      <div key={logo?.id} className="col-4">
                        {logo?.image?.data?.attributes?.url && (
                          <Image
                            src={logo?.image?.data?.attributes?.url}
                            title={logo?.title}
                            height={32}
                            width={90}
                            objectFit="contain"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
