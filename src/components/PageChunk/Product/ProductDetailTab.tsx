import classNames from 'classnames'
import { useEffect, useState } from 'react'

import Markdown, { useComponent } from '@components/Markdown'

interface ProductDetailTabProps {
  data?: Component.Product
}
export const ProductDetailTab: React.FC<ProductDetailTabProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<number>()

  useEffect(() => {
    if (data) {
      setActiveTab(data?.attributes?.contentTable?.[0]?.id)
    }
  }, [data])
  return (
    <div className="row flex-column py-2">
      <div className="col-lg-8">
        <div className="nav-wrapper position-relative">
          <ul
            className="nav nav-pills nav-fill p-1 me-3 custom-tabs d-flex flex-sm-row flex-column"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical">
            {data?.attributes?.contentTable?.map((table, i) => (
              <li key={i} className="nav-item">
                <a
                  className="nav-link active custom-tabs-links"
                  id={`#product-${table?.id}-tab`}
                  data-bs-toggle="pill"
                  href={`#product-${table?.id}`}
                  role="tab"
                  aria-controls={`#product-${table?.id}`}
                  aria-selected="true"
                  onClick={() => setActiveTab(table?.id)}>
                  {table?.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-lg-12 text-start">
        <div className="tab-content" id="v-pills-tabContent">
          {data?.attributes?.contentTable?.map((table, i) => (
            <div
              key={i}
              className={classNames(['tab-pane fade', activeTab === table?.id ? 'show active' : ''])}
              id={`product-${table?.id}`}
              role="tabpanel"
              aria-labelledby={`product-${table?.id}-tab`}>
              <div className="mt-4">
                <Markdown children={table?.content} components={useComponent.product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
