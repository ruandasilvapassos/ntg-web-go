import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { animateScroll } from 'react-scroll'
import { useWindowScroll } from 'react-use'

interface FooterProps {
  data?: {
    id: number
    attributes?: SEO.Metadata & {
      footer: {
        id: number
        copyright?: string
        copyText?: string
        copylinks?: Component.Link[]
        columns?: {
          title?: string
          links?: Component.Link[]
        }[]
      }
    }
  }
}
export const Footer: React.FC<FooterProps> = ({ data }) => {
  const { locale, replace } = useRouter()
  const { y } = useWindowScroll()
  return (
    <footer className="pt-6 bg-gray-200 footer">
      <div className="container">
        <div className="row">
          <div className="mb-4 col-md-4 ms-auto">
            <div>
              <a href="#">
                <img src="/static/img/logo-light.png" alt="main_logo" style={{ height: '25px' }} />
              </a>
              <div className="mt-3 pe-4">
                {data?.attributes?.footer?.copyText?.split('\n')?.map((copy, i) => (
                  <p key={i} className="p-0 mb-2 nav-link ">
                    {copy}
                  </p>
                ))}
              </div>

              <div className="pb-4">
                <div className="dropdown dropdown-language">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {locale === 'en' ? (
                      <>
                        <img alt="" src="/static/img/united-states.png" />
                        English (US)
                      </>
                    ) : (
                      <>
                        <img alt="" src="/static/img/spain.png" />
                        Spanish
                      </>
                    )}
                  </button>
                  <ul className="px-2 py-3 dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                      <a onClick={() => replace('/', '', { locale: 'en' })} className="dropdown-item border-radius-md">
                        <img alt="" src="/static/img/united-states.png" />
                        English (US)
                      </a>
                    </li>
                    <li>
                      <a onClick={() => replace('/es', '', { locale: 'es' })} className="dropdown-item border-radius-md">
                        <img alt="" src="/static/img/spain.png" />
                        Spanish
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {data?.attributes?.footer?.columns?.map((menu, i) => (
            <div key={i} className="mb-4 col-md-2 col-sm-6 col-6">
              <div>
                <h6 className="text-sm">{menu?.title}</h6>
                <ul className="flex-column ms-n3 nav">
                  {menu?.links?.map((link) => (
                    <li key={link.id} className="nav-item">
                      <Link href={`${link?.url || '#!'}`} passHref>
                        <a className="nav-link" target="_blank">
                          {link?.text}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-3 pb-3 mt-4 border-top">
          <div className="py-2 row justify-content-between align-items-center">
            <div className="col-md-6">
              {data?.attributes?.footer?.copyright && (
                <p className="p-0 m-0 text-sm text-muted font-weight-normal">{data?.attributes?.footer?.copyright}</p>
              )}
            </div>
            <div className="col-md-6 text-md-end">
              {data?.attributes?.footer?.copylinks?.map((link) => (
                <Link key={link.id} href={link?.url || '#!'} passHref>
                  <a className="text-xs text-muted ms-3" title={link?.title}>
                    {link?.text}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center"></div>
        </div>
      </div>
      <div
        onClick={() =>
          animateScroll.scrollToTop({
            delay: 0,
            duration: 0
          })
        }
        className={classNames(['fade back-to-top', y > 300 ? 'show' : ''])}>
        <div className="inner">
          <span className="material-icons">expand_less</span>
        </div>
      </div>
    </footer>
  )
}
