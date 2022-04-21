interface LogoCloudsProps {
  title?: string
  backgroundColor?: string
}

export const LogoClouds: React.FC<LogoCloudsProps> = ({ title, backgroundColor = '#f0f2f5' }) => {
  return (
    <div
      className="py-5 py-lg-6"
      style={{
        backgroundColor
      }}>
      <div className="container">
        {title && (
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <h3 className="font-weight-bolder">{title}</h3>
            </div>
          </div>
        )}
        <div className="mt-4 row">
          <div className="px-4 mb-4 col-lg-2 col-md-4 col-6">
            <img className="w-100 opacity-9" src="/static/img/l1.svg" alt="logo" />
          </div>
          <div className="px-4 mb-4 col-lg-2 col-md-4 col-6">
            <img className="w-100 opacity-9" src="/static/img/l2.svg" alt="logo" />
          </div>
          <div className="px-4 mb-4 col-lg-2 col-md-4 col-6">
            <img className="w-100 opacity-9" src="/static/img/l3.svg" alt="logo" />
          </div>
          <div className="px-4 mb-4 col-lg-2 col-md-4 col-6">
            <img className="w-100 opacity-9" src="/static/img/l4.svg" alt="logo" />
          </div>
          <div className="px-4 mb-4 col-lg-2 col-md-4 col-6">
            <img className="w-100 opacity-9" src="/static/img/l1.svg" alt="logo" />
          </div>
          <div className="px-4 mb-4 col-lg-2 col-md-4 col-6">
            <img className="w-100 opacity-9" src="/static/img/l3.svg" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  )
}
