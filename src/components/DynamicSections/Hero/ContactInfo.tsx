interface ContactInfoProps {
  data?: {
    item?: {
      icon?: string
      iconColor?: string
      title?: string
      description?: string
    }[]
  }
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ data }) => {
  return (
    <section className="py-lg-7 py-5">
      <div className="container">
        <div className="row">
          {data?.item?.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-4 position-relative ms-lg-auto">
              <div className="p-3 text-center border-right-after">
                <i
                  className="material-icons text-5xl mb-3"
                  style={{
                    color: item?.iconColor
                  }}>
                  {item?.icon}
                </i>
                <h6 className="mb-0">{item?.title}</h6>
                <p className="text-dark font-weight-normal">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
