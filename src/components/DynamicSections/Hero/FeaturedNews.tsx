interface FeaturedNewsProps {
  data?: {
    insight?: any
    shareTitle?: string
    socialShare?: {
      icon?: Strapi.Media
      url?: string
      title?: string
    }[]
  }
}
export const FeaturedNews: React.FC<FeaturedNewsProps> = ({ data }) => {
  const { data: insight } = data?.insight
  console.log(insight)
  return (
    <header>
      <div className="container my-sm-8 pt-7 pt-lg-0">
        <div className="row mt-5">
          <div className="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
            <h1 className="secondary-font fw-bold insight max-width-500">{insight?.attributes?.title}</h1>
            <p className="m-y-10 fs-20 text-black max-width-485 fw-normal">
              {insight?.attributes?.excerpt || insight?.attributes?.content?.replace(/<[^>]*>/g, '')?.substr(0, 160)}
            </p>
            <div>
              <span>{data?.shareTitle}</span>
              <div className="d-lg-flex mt-4">
                <figure className="col-5 ">
                  {data?.socialShare?.map((social, i) => (
                    <img key={i} src={social?.icon?.data?.attributes?.url} style={{ marginRight: '.25rem' }} />
                  ))}
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {insight?.attributes?.image?.data?.attributes?.url && (
              <img
                className="img-fluid"
                src={insight?.attributes?.image?.data?.attributes?.url}
                alt={insight?.attributes?.image?.data?.attributes?.alternativeText}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
