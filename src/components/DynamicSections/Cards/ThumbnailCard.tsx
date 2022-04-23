interface ThumbnailCardSectionProps {
  data: {
    title: string
    overview?: string
    card: Component.Card[]
  }
}

export const ThumbnailCardSection: React.FC<ThumbnailCardSectionProps> = ({ data }) => {
  const { title, overview, card: cards } = data
  // console.log(cards)
  return (
    <section className="py-5 bg-white py-lg-7">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {title && <h2>{title}</h2>}
            {overview && <p>{overview}</p>}
          </div>
        </div>
        <div className="mt-5 row">
          {cards?.map((card, i) => (
            <div key={i} className="mb-4 col-lg-4 mb-lg-0">
              <div className="mt-5 card">
                <div className="p-0 mx-3 card-header position-relative mt-n4 z-index-2">
                  <a className="d-block blur-shadow-image">
                    {card?.image?.data?.attributes?.url && (
                      <img
                        src={card?.image?.data?.attributes?.url}
                        alt="img-blur-shadow"
                        className="shadow img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    )}
                  </a>
                </div>
                <div className="card-body">
                  {card?.title && <h5 className="mt-3">{card?.title}</h5>}
                  {card?.description && (
                    <p>
                      We help companies develop the capacity to continually change—and do so without buckling under the
                      pressure of new ways of working or disrupting their ongoing business operations.
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
