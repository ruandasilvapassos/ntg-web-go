import Link from 'next/link'

interface HeroSquareImageProps {
  data: {
    title?: string
    overview?: string
    button?: Component.Button
    background?: Strapi.Media
    backgroundColor?: string
    images: {
      data: Strapi.MediaData[]
    }
    verticalHeight?: number
  }
}
export const HeroSquareImage: React.FC<HeroSquareImageProps> = ({ data }) => {
  const { title, overview, button, background, backgroundColor, images, verticalHeight } = data
  return (
    // <!-- section -->
    <section
      className="position-relative overflow-hidden mt-5"
      style={{
        maxHeight: verticalHeight || 525 + 'px',
        background: backgroundColor || 'linear-gradient(195deg, #42424a 0%, #191919 100%)'
      }}>
      {background?.data?.attributes?.url && (
        <img src={background?.data?.attributes?.url} alt="pattern-lines" className="position-absolute opacity-1 w-100" />
      )}
      <div className="container py-lg-4 py-2">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center flex-column">
            <div className="py-7">
              <div className="container">
                {title && <h2 className="text-white mb-0">{title}</h2>}
                {overview && <p className="text-white opacity-8 mb-1">{overview}</p>}
                <hr className="text-white horizontal opacity-6 mb-4 mt-2 w-25 text-start" />
                {button && (
                  <div>
                    <div className="py-5">
                      <Link href={button?.link || '#!'} passHref>
                        <a className="btn bg-gradient-primary text-white fw-bold px-4 mb-4">{button?.text}</a>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center flex-column d-sm-none d-md-none d-lg-flex d-xl-flex">
            <div className="row justify-content-center d-none d-md-flex">
              {images?.data?.[0]?.attributes?.url && (
                <div className="col-3 mb-4">
                  <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 mt-n4 ms-8 fadeIn2 fadeInBottom">
                    <img src={images?.data?.[0]?.attributes?.url} alt="Logo Image" />
                  </div>
                </div>
              )}
              {images?.data?.[1]?.attributes?.url && (
                <div className="col-4 mb-4">
                  <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-8 mt-n6 fadeIn1 fadeInBottom">
                    <img src={images?.data?.[1]?.attributes?.url} alt="Logo Image" />
                  </div>
                </div>
              )}
              {images?.data?.[2]?.attributes?.url && (
                <div className="col-4 mb-4">
                  <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-6 mt-2 fadeIn3 fadeInBottom">
                    <img src={images?.data?.[2]?.attributes?.url} alt="Logo Image" />
                  </div>
                </div>
              )}
            </div>
            <div className="row justify-content-end d-none d-md-flex">
              {images?.data?.[3]?.attributes?.url && (
                <div className="col-4 my-4">
                  <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-4 fadeIn1 fadeInBottom">
                    <img className="avatar-img" src={images?.data?.[3]?.attributes?.url} alt="Logo Image" />
                  </div>
                </div>
              )}
              {images?.data?.[4]?.attributes?.url && (
                <div className="col-3 my-4">
                  <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 me-auto fadeIn1 fadeInBottom">
                    <img className="avatar-img" src={images?.data?.[4]?.attributes?.url} alt="Logo Image" />
                  </div>
                </div>
              )}
              {images?.data?.[5]?.attributes?.url && (
                <div className="col-3 my-4">
                  <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 fadeIn3 fadeInBottom ms-3 mt-3">
                    <img className="avatar-img" src={images?.data?.[5]?.attributes?.url} alt="Logo Image" />
                  </div>
                </div>
              )}
            </div>
            <div className="row d-none d-md-flex">
              {images?.data?.[6]?.attributes?.url && (
                <div className="col-6">
                  {/* <!-- Logo --> */}
                  <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-auto mt-5 fadeIn2 fadeInBottom">
                    <img className="avatar-img" src={images?.data?.[6]?.attributes?.url} alt="Logo Image" />
                  </div>
                  {/* <!-- End Logo --> */}
                </div>
              )}
              {images?.data?.[7]?.attributes?.url && (
                <div className="col-6 mt-6">
                  {/* <!-- Logo --> */}
                  <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 mx-auto mt-n3 fadeIn3 fadeInBottom">
                    <img className="avatar-img" src={images?.data?.[7]?.attributes?.url} alt="Logo Image" />
                  </div>
                  {/* <!-- End Logo --> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
