interface QuoteProps {
  data?: {
    message?: string
    name?: string
    position?: string
    avatar?: Strapi.Media
    backgroundColor?: string
  }
}
export const Quote: React.FC<QuoteProps> = ({ data }) => {
  return (
    <section className="py-lg-7 py-5 bg-white career-quote">
      <div className="container">
        <div
          className="quote-box"
          style={{
            backgroundColor: data?.backgroundColor || '#FCDFDE'
          }}>
          <div className="row">
            {data?.avatar?.data?.attributes?.url && (
              <div className="col-lg-2">
                <div className="mb-2">
                  <img alt="" src={data?.avatar?.data?.attributes?.url} />
                </div>
              </div>
            )}
            <div className="col-lg-10">
              {data?.message && <p className="lead fw-bold text-dark mb-4">{data?.message}</p>}
              <p className="text-mute fw-bold mb-0">
                {data?.name}, <br />
                {data?.position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
