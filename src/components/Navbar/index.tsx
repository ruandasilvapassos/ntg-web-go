import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'

interface NavbarProps {
  theme?: 'light' | 'dark'
  data?: {
    id: number
    attributes?: SEO.Metadata & {
      logo?: Strapi.Media
      headerMenu?: {
        id: number
        menuItems?: {
          id: number
          title?: string
          url?: string
          items?: Component.Link[]
        }[]
      }
    }
  }
}

export const Navbar: React.FC<NavbarProps> = ({ theme = 'dark', data }) => {
  const initialNavStyle = [
    'top-0 py-4 shadow-none navbar navbar-expand-lg position-fixed z-index-3 w-100 fixed-top navbar-transparent'
  ]

  const { push } = useRouter()
  // console.log(data?.attributes?.headerMenu)
  const textColor = theme === 'dark' ? '#344767' : '#fff'
  const [navStyle, setNavStyle] = useState(initialNavStyle)
  const { y } = useWindowScroll()

  useEffect(() => {
    if (y > 0) {
      setNavStyle(initialNavStyle.concat('nav-scroll'))
    } else {
      setNavStyle(initialNavStyle)
    }
  }, [y])

  return (
    <nav id="MAIN_HEADER" className={classNames(navStyle)}>
      <div className="container">
        {data?.attributes?.logo?.data?.attributes?.url && (
          <Link href="/" passHref>
            <a className="text-white navbar-brand d-none d-md-block" rel="tooltip" title="" data-placement="bottom">
              <Image
                alt=""
                src={data?.attributes?.logo?.data?.attributes?.url}
                width={130}
                height={40}
                objectFit="contain"
              />
            </a>
          </Link>
        )}
        {data?.attributes?.logo?.data?.attributes?.url && (
          <Link href="/" passHref>
            <a className="text-white navbar-brand d-block d-md-none" rel="tooltip" title="" data-placement="bottom">
              <Image
                alt=""
                src={data?.attributes?.logo?.data?.attributes?.url}
                width={130}
                height={40}
                objectFit="contain"
              />
            </a>
          </Link>
        )}
        <button
          className="shadow-none navbar-toggler ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="mt-2 navbar-toggler-icon">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="pt-3 pb-2 collapse navbar-collapse w-100 py-lg-0" id="navigation">
          <ul className="navbar-nav navbar-nav-hover ms-auto">
            {data?.attributes?.headerMenu?.menuItems?.map((item, i) => (
              <li key={i} className="mx-2 nav-item dropdown dropdown-hover">
                <Link href={item?.url || '#!'} passHref>
                  <a
                    className="cursor-pointer nav-link ps-2 d-flex align-items-center"
                    role="button"
                    id={`dropdownMenu${item?.id}`}
                    data-bs-toggle={item?.items && item?.items?.length > 0 ? 'dropdown' : ''}
                    aria-expanded="false"
                    style={{ color: textColor }}
                    onClick={() => (item?.items && item?.items?.length > 0 ? push(item?.url || '#!') : null)}>
                    {item?.title}
                    {item?.items && item?.items?.length > 0 && <span className="material-icons">expand_more</span>}
                  </a>
                </Link>
                {item?.items && item?.items?.length > 0 && (
                  <div
                    className="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-md border-radius-xl mt-lg-3"
                    aria-labelledby={`dropdownMenu${item?.id}`}>
                    <div className="d-none d-lg-flex">
                      <ul className="list-group w-100">
                        {item?.items?.map((child) => (
                          <li
                            key={child.id}
                            className="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item">
                            <Link href={child?.url || '#!'} passHref>
                              <a className="mb-1 dropdown-item border-radius-md text-dark ps-3 d-flex align-items-center">
                                <span>{child?.text}</span>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
