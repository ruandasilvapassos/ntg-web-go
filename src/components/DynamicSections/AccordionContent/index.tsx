import dynamic from 'next/dynamic'

import Markdown, { useComponent } from '@components/Markdown'

interface AccordionContentProps {
  data: {
    title: string
    overview?: string
    item?: {
      id: number
      title?: string
      content?: string
      icon?: string
      iconColor?: string
    }[]
  }
}

const Link: any = dynamic<any>(
  async () => {
    return import('react-scroll').then((mod) => mod.Link)
  },
  { ssr: false }
)

export const AccordionContent: React.FC<AccordionContentProps> = ({ data }) => {
  const { title, overview, item: items } = data

  return (
    <div className="privacy-page">
      <section className="pt-3 pt-md-3 pb-md-3 pt-lg-7 bg-gray-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-lg-0 mb-5 mt-3 mt-md-5 mt-lg-0">
              <ul className="nav flex-column bg-white border-radius-lg p-3 position-sticky top-10 shadow-lg">
                {items?.map((item, i) => (
                  <li key={i} className="nav-item">
                    <Link
                      type="button"
                      to={item?.id?.toString()}
                      offset={-100}
                      className="nav-link text-dark d-flex align-items-center">
                      {item?.icon && (
                        <i
                          className="material-icons opacity-5 pe-2"
                          style={{
                            color: item?.iconColor || '#344767'
                          }}>
                          {item?.icon}
                        </i>
                      )}
                      {item?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="card shadow-lg mb-5">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg p-3">
                    <h3 className="text-white mb-0">{title}</h3>
                    {overview && <p className="text-white opacity-8 mb-0">{overview}</p>}
                  </div>
                </div>
                <div className="card-body p-5">
                  {items?.map((item, i) => (
                    <div key={i}>
                      <h3 className="mb-3" id={item?.id?.toString()}>
                        {item?.title}
                      </h3>
                      <Markdown children={item?.content} components={useComponent?.default} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
