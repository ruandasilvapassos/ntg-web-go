import Link from 'next/link'

interface InsightCardProps {
  title?: string
  slug?: string
  description?: string
  category?: string
  author?: string
  created_at?: Date | string
  thumbnail?: string
  trending?: boolean
  categoryColor?: string
}

export const InsightCard: React.FC<InsightCardProps> = (props) => {
  const { title, description, author, created_at, thumbnail, trending, category, categoryColor, slug } = props
  return (
    <div className="card card-plain card-blog mb-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card-header-image">
            {thumbnail && (
              <Link href={`/blog/${slug}`} passHref>
                <a>
                  <img className="img border-radius-lg shadow-lg" src={thumbnail} />
                </a>
              </Link>
            )}
            <div
              className="colored-shadow"
              style={{ backgroundImage: 'url(/static/img/examples/card-blog4.jpg)', opacity: 1 }}
            />
          </div>
        </div>
        <div className="col-md-8">
          <h6 className="card-category" style={{ color: categoryColor }}>
            {trending && <i className="material-icons">trending_up</i>}
            {category}
          </h6>
          <Link href={`/blog/${slug}`} passHref>
            <a>
              <h4 className="card-title">{title}</h4>
            </a>
          </Link>
          <p className="card-description">{description}</p>
          <p className="author">
            <b>{author}</b>
            {author && ','} {created_at}
          </p>
        </div>
      </div>
    </div>
  )
}
