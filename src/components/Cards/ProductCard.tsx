import Link from 'next/link'

import Markdown, { useComponent } from '@components/Markdown'

interface ProductCardProps {
  data?: Component.Product
}
export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="mb-4 col-lg-6 col-sm-6 card-col">
      <div className="card-shadow d-flex h-100">
        <div className="p-0 card card-body text-start card-shadow d-grid">
          <div className="p-4">
            <h4 className="mb-2 text-dark">{data?.attributes?.name}</h4>
            <div>
              {data?.attributes?.product_instance?.data?.attributes?.name && (
                <p className="mb-2 fw-bold">{data?.attributes?.product_instance?.data?.attributes?.name}</p>
              )}
              <Markdown
                components={useComponent?.content}
                children={
                  data?.attributes?.summary || data?.attributes?.description?.replace(/<[^>]*>/g, '')?.substring(0, 160)
                }
              />
              {data?.attributes?.customers?.data && data?.attributes?.customers?.data?.length > 0 && (
                <div className="mt-5 align-items-center">
                  <h6 className="mb-3">Companies using this product</h6>
                  <div className="row align-items-center">
                    {data?.attributes?.customers?.data?.map((company) => (
                      <div key={company?.id} className="col-md-2 col-3">
                        <img src={company?.attributes?.logo?.data?.attributes?.url} alt="logo" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="p-4 plans bg-custom">
            {data?.attributes?.startPrice && <h6>Software Plan Starts at</h6>}
            <div className="d-flex justify-content-between align-items-center">
              {data?.attributes?.startPrice && <h5 className="mb-0 text-md">{data?.attributes?.startPrice}</h5>}
              <Link href={`/products/${data?.attributes?.slug}`} passHref>
                <a className="mt-3 text-xs btn btn-sm btn-outline-primary">Learn more</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
