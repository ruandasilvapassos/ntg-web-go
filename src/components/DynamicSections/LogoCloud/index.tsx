interface LogoCloudsProps {
  data?: {
    title?: string
    sectionBackground?: string
    logo?: {
      image?: Strapi.Media
      title: string
    }[]
  }
}

export const LogoClouds: React.FC<LogoCloudsProps> = ({ data }) => {
  return (
    <div
      className="py-5 py-lg-6"
      style={{
        backgroundColor: data?.sectionBackground || '#f0f2f5'
      }}>
      <div className="container">
        {data?.title && (
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <h3 className="font-weight-bolder">{data?.title}</h3>
            </div>
          </div>
        )}
        <div className="mt-4 row">
          {data?.logo?.map((logo, i) => (
            <div key={i} className="px-4 mb-4 col-lg-2 col-md-4 col-6">
              <img
                className="w-100 opacity-9"
                src={logo?.image?.data?.attributes?.url}
                alt={logo?.image?.data?.attributes?.alternativeText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
