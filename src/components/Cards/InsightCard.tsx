interface InsightCardProps {
  title?: string
  description?: string
  category?: string
  author?: string
  created_at?: Date | string
  thumbnail?: string
  trending?: boolean
  categoryColor?: string
}

export const InsightCard: React.FC<InsightCardProps> = (props) => {
  const { title, description, author, created_at, thumbnail, trending, category, categoryColor } = props
  return (
    <div className="card card-plain card-blog mb-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card-header-image">
            {thumbnail && (
              <a href="#pablito">
                <img className="img border-radius-lg shadow-lg" src={thumbnail} />
              </a>
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
          <h4 className="card-title">
            <a href="#pablo">{title}</a>
          </h4>
          <p className="card-description">{description}</p>
          <p className="author">
            <b>{author}</b>, {created_at}
          </p>
        </div>
      </div>
    </div>
  )
}
