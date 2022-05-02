import Link from 'next/link'

import Markdown, { useComponent } from '@components/Markdown'
import { useFetcher } from '@hooks/useFetcher'

interface FeaturedProductProps {
  title?: string
  description?: string
  button?: Component.Link
}
export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ title, description, button }) => {
  const { data } = useFetcher<Component.Product[]>(
    `/products?populate=platform,category_products,service,service.logo,product_instance&filters[featuredProduct][$eq]=true&pagination[limit]=3`
  )

  return (
    <section className="py-5 bg-gray-200 py-lg-7">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </div>
          {button && (
            <div className="col-lg-5 text-end d-flex flex-column justify-content-center">
              <Link href={button?.url || '#!'} passHref>
                <a
                  type="button"
                  title={button?.title}
                  className="mt-2 mb-0 btn bg-gradient-primary ms-lg-auto me-lg-0 me-auto mt-lg-0">
                  {button?.text}
                </a>
              </Link>
            </div>
          )}
        </div>
        <div className="row">
          {data?.map((product, i) => (
            <div key={i} className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="mt-5 card">
                <div className="pt-4 card-body">
                  {product?.attributes?.service?.data?.attributes?.logo?.data?.attributes?.url && (
                    <img
                      className="mb-3"
                      src={product?.attributes?.service?.data?.attributes?.logo?.data?.attributes?.url}
                      alt="logo"
                      style={{ height: '32px', objectFit: 'contain' }}
                    />
                  )}
                  <Link href={button?.url || '#!'} passHref>
                    <a>
                      <h4
                        style={{
                          minHeight: '84px'
                        }}>
                        {product?.attributes?.name}
                      </h4>
                    </a>
                  </Link>
                  {product?.attributes?.product_instance?.data?.attributes?.name && (
                    <p className="mb-2 fw-bold">{product?.attributes?.product_instance?.data?.attributes?.name}</p>
                  )}
                  <div className="mb-3" style={{ minHeight: '5rem' }}>
                    <Markdown
                      components={useComponent?.content}
                      children={
                        product?.attributes?.summary ||
                        product?.attributes?.description?.replace(/<[^>]*>/g, '')?.substring(0, 160)
                      }
                    />
                  </div>
                  <Link href={`/products/${product?.attributes?.slug}`} passHref>
                    <a type="button" className="mb-0 btn bg-gradient-primary w-100">
                      View Product
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
