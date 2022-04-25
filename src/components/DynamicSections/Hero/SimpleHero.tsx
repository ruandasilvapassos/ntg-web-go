interface SimpleHeroProps {
  data?: {
    title?: string
    overview?: string
  }
}
export const SimpleHero: React.FC<SimpleHeroProps> = ({ data }) => {
  return (
    <section className="pt-4 pt-lg-7 pb-4 pb-lg-7 bg-white career-quote">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-7">
            {data?.title && <h2 className="h2 text-dark mb-4">{data?.title}</h2>}
            {data?.overview && <p className="font-weight-normal mb-2">{data?.overview}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
