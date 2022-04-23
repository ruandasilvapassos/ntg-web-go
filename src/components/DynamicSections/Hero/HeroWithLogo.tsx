interface HeroWithLogoProps {
  data: {
    title: string
    overview?: string
    item?: {
      title?: string
    }[]
    images?: {
      data?: Strapi.MediaData[]
    }
  }
}
export const HeroWithLogo: React.FC<HeroWithLogoProps> = ({ data }) => {
  const { title, overview, item: items, images } = data
  return (
    <div className="py-lg-7 py-5">
      <div className="container">
        <div className="row align-items-center mb-7">
          <div className="col-lg-6 col-md-12 mb-5">
            {title && <h2 className="mt-2 mb-4"> How we thrive</h2>}
            {overview?.split('\n')?.map((v, i) => (
              <p key={i} className="mb-2">
                {v}
              </p>
            ))}
            <div className="row">
              {items?.map((item, i) => (
                <div key={i} className="col-6 mb-1">
                  <div className="d-flex align-items-center">
                    <span className="material-icons text-success me-2">done</span>
                    <p className="mb-0">{item?.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-12 col-lg-6">
            <div className="row justify-content-end">
              {images?.data?.[0]?.attributes?.url && (
                <div className="col-3 mb-4">
                  <div className="d-block avatar avatar-lg rounded-circle shadow-sm p-3 mt-n3 ms-5">
                    <img className="avatar-img" src={images?.data?.[0]?.attributes?.url} alt="Image Description" />
                  </div>
                </div>
              )}

              {images?.data?.[1]?.attributes?.url && (
                <div className="col-4 mb-4">
                  <div className="d-block avatar avatar-xl rounded-circle shadow-sm p-4 mx-auto mt-5">
                    <img className="avatar-img" src={images?.data?.[1]?.attributes?.url} alt="Image Description" />
                  </div>
                </div>
              )}

              {images?.data?.[2]?.attributes?.url && (
                <div className="col-4 mb-4">
                  <div className="d-block avatar avatar-xl rounded-circle shadow-sm p-4 ms-auto">
                    <img className="avatar-img" src={images?.data?.[2]?.attributes?.url} alt="Image Description" />
                  </div>
                </div>
              )}
            </div>

            <div className="row">
              {images?.data?.[3]?.attributes?.url && (
                <div className="col-3 offset-1 my-4">
                  <div className="d-block avatar avatar-xl rounded-circle shadow-sm p-4 ms-auto">
                    <img className="avatar-img" src={images?.data?.[3]?.attributes?.url} alt="Image Description" />
                  </div>
                </div>
              )}

              {images?.data?.[4]?.attributes?.url && (
                <div className="col-3 offset-2 my-4">
                  <div className="d-block avatar avatar-xl rounded-circle shadow-sm p-4 ms-auto">
                    <img className="avatar-img" src={images?.data?.[4]?.attributes?.url} alt="Image Description" />
                  </div>
                </div>
              )}
            </div>
            {/* <!-- End Row --> */}

            <div className="row">
              {images?.data?.[5]?.attributes?.url && (
                <div className="col-6">
                  <div className="d-block avatar avatar-lg rounded-circle shadow-sm p-3 ms-auto">
                    <img className="avatar-img" src={images?.data?.[5]?.attributes?.url} alt="Image Description" />
                  </div>
                </div>
              )}
              {images?.data?.[6]?.attributes?.url && (
                <div className="col-6 mt-6">
                  <div className="d-block avatar avatar-xl rounded-circle shadow-sm p-4 ms-auto">
                    <img className="avatar-img" src={images?.data?.[6]?.attributes?.url} alt="Image Description" />
                  </div>
                </div>
              )}
            </div>
            {/* <!-- End Row --> */}
          </div>
        </div>
      </div>
    </div>
  )
}
