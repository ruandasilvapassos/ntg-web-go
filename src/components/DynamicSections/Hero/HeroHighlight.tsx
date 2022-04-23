interface HeroHighlightProps {
  data: {
    title: string
    overview?: string
    item?: {
      title?: string
      image?: Strapi.Media
      description?: string
    }[]
    image?: Strapi.Media
  }
}
export const HeroHighlight: React.FC<HeroHighlightProps> = ({ data }) => {
  const { title, overview, item: items, image } = data

  return (
    <section className="py-4">
      <div className="container py-7">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5">
            <div className="row justify-content-start">
              {items?.map((item, i) => (
                <div key={i} className="col-md-6 mb-3">
                  <div className="info">
                    {item?.image?.data?.attributes?.url && (
                      <img className="width-32-px mb-4" src={item?.image?.data?.attributes?.url} alt="equity rewards" />
                    )}
                    {item?.title && <h5 className="text-blk">{item?.title}</h5>}
                    {item?.description && <p className="text-blk opacity-8">{item?.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 ms-auto">
            <div className="card mb-lg-5">
              {image?.data?.attributes?.url && (
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <a className="d-block blur-shadow-image">
                    <img
                      src={image?.data?.attributes?.url}
                      alt="img-colored-shadow"
                      className="img-fluid border-radius-lg"
                    />
                  </a>
                </div>
              )}
              <div className="card-body">
                <h4>{title}</h4>
                <p>{overview}</p>
                {/* <!-- <a href="javascript:;" className="text-primary icon-move-right">More about us
                <i className="fas fa-arrow-right text-xs ms-1"></i>
              </a> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
