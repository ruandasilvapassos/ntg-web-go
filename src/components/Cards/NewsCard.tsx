import Link from 'next/link'

interface NewsCardProps {
  title: string
  thumbnail?: string
  description?: string
  slug?: string
}
export const NewsCard: React.FC<NewsCardProps> = (props) => {
  const { title, thumbnail, description, slug } = props

  return (
    <Link href={`/blog/${slug}`} passHref>
      <a className="col-lg-6">
        <div className="d-flex align-items-center mb-4">
          <div
            className="news-section-img me-3"
            style={{
              maxWidth: '10rem'
            }}>
            {thumbnail && (
              <img
                src={thumbnail}
                className="shadow-lg"
                style={{
                  minHeight: '10rem',
                  objectFit: 'cover',
                  borderRadius: '5px'
                }}
              />
            )}
          </div>
          <div>
            <h4 className="max-width-385">{title}</h4>
            {description && <p className="mb-0 fs-6 fw-bolder text-gray">{description}</p>}
          </div>
        </div>
      </a>
    </Link>
  )
}
