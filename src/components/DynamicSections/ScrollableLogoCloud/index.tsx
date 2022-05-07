import Slider from 'react-slick'

const ReactSlider: any = Slider

interface ScrollableLogoCloudsProps {
  data?: {
    title?: string
    sectionBackgroundColor?: string
    logo?: {
      image?: Strapi.Media
      title: string
    }[]
  }
}

const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
  ]
}

export const ScrollableLogoClouds: React.FC<ScrollableLogoCloudsProps> = ({ data }) => {
  return (
    <div
      className="py-5 py-lg-6"
      style={{
        backgroundColor: data?.sectionBackgroundColor || '#f0f2f5'
      }}>
      <div className="container">
        {data?.title && (
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <h3 className="font-weight-bolder">{data?.title}</h3>
            </div>
          </div>
        )}
        <ReactSlider className="mt-4" {...sliderSettings}>
          {data?.logo?.map((logo, i) => (
            <div
              key={i}
              className="px-4"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <img
                className="w-100 opacity-9"
                src={logo?.image?.data?.attributes?.url}
                alt={logo?.image?.data?.attributes?.alternativeText}
                style={{
                  height: '52px',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
        </ReactSlider>
      </div>
    </div>
  )
}
