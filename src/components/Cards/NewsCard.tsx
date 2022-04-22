interface NewsCardProps {
  title: string
  thumbnail?: string
  description?: string
}
export const NewsCard: React.FC<NewsCardProps> = (props) => {
  const { title, thumbnail, description } = props
  return (
    <div className="col-lg-6">
      <div className="d-flex align-items-center mb-4">
        <div className="news-section-img me-3">{thumbnail && <img src={thumbnail} className="shadow-lg" />}</div>
        <div>
          <h4 className="max-width-385">{title}</h4>
          {description && <p className="mb-0 fs-6 fw-bolder text-gray">{description}</p>}
        </div>
      </div>
    </div>
  )
}
