import Link from 'next/link'

interface ProcessCardProps {
  title?: string
  description?: string
  icon?: JSX.Element
  buttonText?: string
  buttonUrl?: string
}

export const ProcessCard: React.FC<ProcessCardProps> = (props) => {
  const { title, description, icon, buttonText, buttonUrl } = props
  return (
    <div className="col-lg-3 col-md-6 card-col">
      <div className="p-2 pt-4 mb-4 card rounded-4 mh-350">
        <div className="pt-1 pb-2 card-body">
          {icon && icon}
          <h4 className="my-3 font-weight-bolder">{title}</h4>
          {description && <p className="fw-regular ">{description}</p>}
        </div>
        <div className="p-3 card-footer mt-90">
          {buttonText && (
            <Link href={buttonUrl || '#!'}>
              <a className="p-2 mb-0 text-white btn bg-primary btn-block w-100" type="button">
                {buttonText}
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
