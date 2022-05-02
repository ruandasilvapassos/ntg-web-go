import Link from 'next/link'

interface RelatedPostProps {
  insights?: {
    id: number
    attributes?: Component.Insight
  }[]
}
export const RelatedPost: React.FC<RelatedPostProps> = ({ insights }) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-9 text-center mx-auto">
            <h3 className="mb-1">See other articles</h3>
            <p className="mb-6 px-md-6">
              Create a unique and beautiful blog posts. You can also connect your blog directly to Google Analytics to have a
              more detailed look.
            </p>
          </div>
          {insights?.slice(0, 3)?.map((insight, i) => (
            <div key={i} className="col-lg-4 mb-lg-0 mb-4">
              <div className="card">
                {insight?.attributes?.image?.data?.attributes?.url && (
                  <div className="card-header p-0 mx-3 mt-n4 position-relative z-index-1">
                    <Link href={`/insights/${insight?.attributes?.slug}`} passHref>
                      <a className="d-block blur-shadow-image">
                        <img
                          src={insight?.attributes?.image?.data?.attributes?.url}
                          className="img-fluid border-radius-md"
                          alt="anastasia"
                          loading="lazy"
                          style={{
                            height: 210,
                            objectFit: 'cover'
                          }}
                        />
                      </a>
                    </Link>
                    <div className="colored-shadow" style={{ backgroundImage: 'url(/static/img/examples/color2.jpg' }} />
                  </div>
                )}
                <div className="card-body">
                  <span
                    className="text-uppercase text-xs font-weight-bold"
                    style={{
                      color: insight?.attributes?.categoryInsight?.data?.attributes?.color || '#000'
                    }}>
                    {insight?.attributes?.categoryInsight?.data?.attributes?.name}
                  </span>
                  <Link href={`/insights/${insight?.attributes?.slug}`} passHref>
                    <a className="card-title mt-3 h5 d-block text-darker">{insight?.attributes?.title}</a>
                  </Link>
                  <p className="card-description mb-4 line-clamp-3">
                    {insight?.attributes?.excerpt ||
                      insight?.attributes?.overview ||
                      insight?.attributes?.content?.replace(/<[^>]*>/g, '')?.substring(0, 160)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
