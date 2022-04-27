import classNames from 'classnames'

import Markdown, { useComponent } from '@components/Markdown'
import { useFormatMessage } from '@hooks/useFormatMessage'

interface ProductDetailProps {
  data?: Component.Product
}
export const ProductDetail: React.FC<ProductDetailProps> = ({ data }) => {
  const f = useFormatMessage()
  return (
    <div className="row mt-8 mb-7">
      <div className="col-lg-7 col-md-9 d-flex justify-content-center flex-column">
        <div>
          {data?.attributes?.product_instance?.data?.attributes?.name && (
            <p className="m-0  fw-bolder text-gray text-sm">{data?.attributes?.product_instance?.data?.attributes?.name}</p>
          )}
          <h1 className="secondary-font fw-bold mb-0 h1-extra">{data?.attributes?.name}</h1>

          <div className="d-flex align-items-center mb-3">
            {data?.attributes?.platformRating?.map((rating, i) => (
              <div key={i} className="d-flex align-items-center">
                {rating?.rating && <span className="fw-bold text-sm ">{rating?.rating}</span>}
                <span className="material-icons text-primary mx-2">star</span>
                <span className="fw-bold text-sm">{rating?.name}</span>
                {data?.attributes?.platformRating?.length && i + 1 < data?.attributes?.platformRating?.length && (
                  <span className="mx-3 text-secondary">|</span>
                )}
              </div>
            ))}
          </div>
          <div className="mb-4">
            {data?.attributes?.description && (
              <Markdown children={data?.attributes?.description} components={useComponent.default} />
            )}
          </div>
          {data?.attributes?.productMarketplace?.map((button, i) => (
            <a
              key={i}
              href={button?.link}
              target={button?.target || '_self'}
              className={classNames(
                button?.buttonStyle === 'filled'
                  ? `btn bg-gradient-primary text-white fw-bold px-4 mb-4 me-3`
                  : `btn btn-outline-primary text-primay fw-bold px-4 mb-4`
              )}>
              {button?.text}
            </a>
          ))}
        </div>
      </div>
      <div className="col-lg-2"></div>
      <div className="col-lg-3 card-border p-0 top-companies  border border-radius-sm">
        <div className="max-height-400 overflow-y-auto">
          <p className="px-3 py-3 text-bold text-sm border-bottom-sm">{f('commons.topCompanies')}</p>
          {data?.attributes?.customers?.data?.map((customer, i) => (
            <div key={i} className="py-3 border-bottom-sm px-3">
              {customer?.attributes?.logo?.data?.attributes?.url && (
                <img src={customer?.attributes?.logo?.data?.attributes?.url} alt="logo" />
              )}
              <span className="ms-3">{customer?.attributes?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
