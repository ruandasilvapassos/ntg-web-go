interface BlogThumbnailProps {
  title?: string
  image?: Strapi.Media
  overview?: string
}
export const BlogThumbnail: React.FC<BlogThumbnailProps> = ({ title, image, overview }) => {
  return (
    <header>
      <div className="page-header min-vh-85" style={{ backgroundImage: `url(${image?.data?.attributes?.url})` }}>
        <span className="mask bg-gradient-dark opacity-4"></span>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex justify-content-center flex-column">
              {title && <h1 className="text-white mb-0">{title}</h1>}
              {overview && <p className="lead pe-sm-5 me-sm-5 text-white opacity-8">{overview}</p>}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
