interface SimpleHeroWithImageProps {
  data: {
    title: string
    overview?: string
    image?: Strapi.Media
  }
}

export const SimpleHeroWithImage: React.FC<SimpleHeroWithImageProps> = ({ data }) => {
  const { title, overview, image } = data
  return (
    <section className="py-5 py-lg-7 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            {title && <h2>Global Presence</h2>}
            {overview && (
              <p>
                With offices in four countries, and having completed projects in many locations around the world, we have the
                global presence and experience necessary to ...
              </p>
            )}
          </div>
        </div>
        {image?.data?.attributes?.url && (
          <div className="text-center">
            <img src={image?.data?.attributes?.url} alt="" />
          </div>
        )}
      </div>
    </section>
  )
}
