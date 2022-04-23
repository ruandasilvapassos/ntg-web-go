interface BasicHeroProps {
  data: {
    title: string
    overview?: string
    image?: Strapi.Media
  }
}
export const BasicHero: React.FC<BasicHeroProps> = ({ data }) => {
  const { title, overview, image } = data
  return (
    <section className="py-4 bg-gray-200">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-md-0 mb-4">
            {title && <h3 className="text-dark mb-0">{title}</h3>}
            {overview?.split('\n')?.map((v, i) => (
              <p key={i} className="my-4">
                {v}
              </p>
            ))}
          </div>
          {image?.data?.attributes?.url && (
            <div className="col-md-6">
              <div className="card p-0 border-radius-lg">
                <div className="blur-shadow-image">
                  <img
                    src={image?.data?.attributes?.url}
                    alt="img-blur-shadow-blog-2"
                    className="img-fluid border-radius-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
