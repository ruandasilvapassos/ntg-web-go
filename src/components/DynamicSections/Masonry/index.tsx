interface MasonrySectionProps {
  data: {
    title: string
    overview?: string
    images?: {
      data?: Strapi.MediaData[]
    }
  }
}
export const MasonrySection: React.FC<MasonrySectionProps> = ({ data }) => {
  const { overview, title, images } = data
  return (
    <section className="py-lg-7 py-5  bg-gray-200">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5">
            {/* <!-- <span className="badge badge-primary mb-2">Co-working</span> --> */}
            {title && <h2>Our company culture </h2>}
            {overview && (
              <p>
                If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the
                short term (pain avoidance is creating an illusion of equality).
              </p>
            )}
          </div>
        </div>
        <div className="row min-vh-25">
          {images?.data?.[0] && (
            <div className="col-sm-4 col-5 mb-sm-0 mb-3">
              <div
                style={{ backgroundImage: `url(${images?.data?.[0]?.attributes?.url})`, backgroundPosition: 'center' }}
                className="w-100 h-100 border-radius-lg shadow bg-cover"></div>
            </div>
          )}
          {images?.data?.[1] && (
            <div className="col-sm-3 col-7 mb-sm-0 mb-3">
              <div
                style={{ backgroundImage: `url(${images?.data?.[1]?.attributes?.url})`, backgroundPosition: 'center' }}
                className="w-100 h-100 border-radius-lg bg-cover"></div>
            </div>
          )}
          {images?.data?.[2] && (
            <div className="col-sm-5 mb-sm-0 mb-3">
              <div
                style={{ backgroundImage: `url(${images?.data?.[2]?.attributes?.url})`, backgroundPosition: 'center' }}
                className="w-100 h-100 border-radius-lg shadow bg-cover"></div>
            </div>
          )}
        </div>
        <div className="row min-vh-25 mt-4">
          {images?.data?.[3] && (
            <div className="col-sm-3 col-7 mb-sm-0 mb-3">
              <div
                style={{ backgroundImage: `url(${images?.data?.[3]?.attributes?.url})`, backgroundPosition: 'center' }}
                className="w-100 h-100 border-radius-lg shadow bg-cover"></div>
            </div>
          )}
          {images?.data?.[4] && (
            <div className="col-sm-5 col-5 mb-sm-0 mb-3">
              <div
                style={{ backgroundImage: `url(${images?.data?.[4]?.attributes?.url})`, backgroundPosition: 'center' }}
                className="w-100 h-100 border-radius-lg shadow bg-cover"></div>
            </div>
          )}
          {images?.data?.[5] && (
            <div className="col-sm-4 mb-sm-0 mb-3">
              <div
                style={{ backgroundImage: `url(${data?.images?.data?.[5]?.attributes?.url})`, backgroundPosition: 'center' }}
                className="w-100 h-100 border-radius-lg shadow bg-cover"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
