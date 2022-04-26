import classNames from 'classnames'
import { useRouter } from 'next/router'
import qs from 'qs'
import { FormEvent, useEffect, useMemo, useState } from 'react'
import { useEffectOnce, useUpdateEffect } from 'react-use'

import { ProductCard } from '@components/Cards/ProductCard'
import { ProductCheckbox } from '@components/Filters/ProductCheckbox'
import { useFetcher } from '@hooks/useFetcher'
import { useHeaderHeight } from '@hooks/useHeaderHeight'
import { useState as useGlobalState } from '@hookstate/core'
import { filterState } from '@states/Filters'

interface ProductListProps {
  className?: string
  title?: string
  description?: string
}

export const ProductList: React.FC<ProductListProps> = (props) => {
  const [activePlatform, setActivePlatform] = useState<number>()
  const router = useRouter()

  const params = useGlobalState(filterState)
  const filters = useGlobalState(qs.stringify(router?.query))

  const { className, title, description } = props
  const { data } = useFetcher<Component.Product[]>(
    `/products?populate=platform,category_products,customers,customers.logo,product_instance&sort[0]=createdAt:desc${
      filters?.get() ? `&${filters?.get()}` : ''
    }`
  )

  const { data: platforms } = useFetcher<Component.Platform[]>(`/platforms`)
  const headerHeight = useHeaderHeight()

  const handleFilter = (fields: string, value?: string) => {
    const pagePath = router?.query?.slug ? router?.query?.slug : ''
    if (!value) {
      delete router.query?.[fields]
      params.merge({ [fields]: undefined })
      router.push(`/${pagePath}${router.query ? `?${qs.stringify(router.query)}` : ''}`, '', { shallow: true })
      return
    }

    const filterProduct: Record<string, any> = {
      ...router.query,
      [fields]: value
    }

    params.merge({ [fields]: filterProduct })
    router.push(`/${pagePath}?${qs.stringify(filterProduct)}`, '', { shallow: true })

    return
  }

  const handleSearch = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const formData = new FormData(evt.currentTarget)
    const searchValue = formData.get('search')?.toString()
    handleFilter('_q', searchValue)
  }
  const updateParams = () => {
    // if (router?.query?.slug) {
    //   delete router?.query?.slug
    // }
    filters.set(qs.stringify({ ...router?.query }))
    return
  }

  const showHeading = useMemo(() => {
    if (title || description) return true
    return false
  }, [props])

  useEffect(() => {
    handleFilter('filters[platform][id][$eq]', activePlatform?.toString())
  }, [activePlatform])

  useUpdateEffect(() => {
    // update params each query change
    // since we use shallow, any serverside request is ignored
    updateParams()
    // statically set active tab
    if (router?.query?.['filters[platform][id][$eq]']) {
      setActivePlatform(parseInt(router?.query?.['filters[platform][id][$eq]']?.toString()))
    }
  }, [router?.query])

  useEffectOnce(() => {
    if (router.query) {
      const param: Record<string, any> = { ...router.query }
      params.merge(param)
    }
  })

  return (
    <section className={classNames(['py-5 bg-gray-100 py-lg-7 product-section', className])}>
      <div className="container">
        {showHeading && (
          <div className="row pb-6">
            <div className="col-lg-7">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-lg-3 categories-section ">
            {/* Filter Product Checkbox */}
            <ProductCheckbox />
          </div>
          <div className="col-lg-9">
            <section>
              <div className="row flex-column">
                <div>
                  <div className="nav-wrapper position-relative d-flex align-items-start">
                    <div className="filter-wrap">
                      <button
                        className="p-0 m-0 btn me-2 d-lg-none filter-menu-icon"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample">
                        <img src="/static/img/filters.svg" alt="filters" />
                      </button>
                      <div
                        key={headerHeight}
                        className="offcanvas offcanvas-start"
                        id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel"
                        aria-hidden="true"
                        style={{ visibility: 'hidden', top: headerHeight }}>
                        <div>
                          <div className="px-3 pt-3 d-flex justify-content-between align-items-center">
                            <button
                              type="button"
                              className="btn-close text-reset text-dark"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close">
                              <span className="material-icons">close</span>
                            </button>
                            <div>
                              <button type="button" className="mb-0 btn btn-outline-secondary btn-sm me-2">
                                Clear
                              </button>
                              <button type="button" className="mb-0 btn btn-primary btn-sm">
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="offcanvas-body">
                          <div className="row">
                            <div className="col-12">
                              <p className="mb-3 text-sm fw-bold">Categories</p>
                            </div>

                            <div className="col-12">
                              <div className="row">
                                <div className="col-12">
                                  <ProductCheckbox />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul
                      className="nav nav-pills nav-fill me-3 custom-tabs flex-column d-flex flex-sm-row"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical">
                      <li className="nav-item">
                        <a
                          className={classNames(['nav-link custom-tabs-links', !activePlatform ? 'active' : ''])}
                          id="v-pills-home-tab"
                          data-bs-toggle="pill"
                          href="#v-pills-home"
                          role="tab"
                          aria-controls="v-pills-home"
                          aria-selected="true"
                          onClick={() => setActivePlatform(undefined)}>
                          All Platfrom
                        </a>
                      </li>
                      {platforms?.map((platform) => (
                        <li key={platform?.id} className="nav-item">
                          <a
                            className={classNames([
                              'nav-link custom-tabs-links',
                              activePlatform == platform?.id ? 'active' : ''
                            ])}
                            id={`v-pills-${platform?.id}-tab`}
                            data-bs-toggle="pill"
                            href={`#v-pills-${platform?.id}`}
                            role="tab"
                            aria-controls={`v-pills-${platform?.id}`}
                            aria-selected="false"
                            onClick={() => setActivePlatform(platform?.id)}>
                            {platform?.attributes?.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12 text-start">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade active show"
                      id={`v-pills-${activePlatform}`}
                      role="tabpanel"
                      aria-labelledby={`v-pills-${activePlatform}-tab`}>
                      <section className="py-4">
                        <div className="container p-0">
                          <div className="row">
                            <form onSubmit={handleSearch} className="mb-4">
                              <div className="input-group is-filled position-relative">
                                <input
                                  type="text"
                                  name="search"
                                  className="px-4 bg-white shadow form-control"
                                  placeholder="Search..."
                                  defaultValue={router?.query?._q}
                                />
                                <button type="submit" className="mb-0 text-white btn bg-primary" id="button-addon1">
                                  <span className="material-icons">search</span>
                                  Search
                                </button>
                              </div>
                            </form>
                            {/* <!-- START Blogs w/ 4 cards w/ image & text & link --> */}
                            <section>
                              <div className="container p-0">
                                <div className="row home-cards">
                                  {data?.map((product) => (
                                    <ProductCard key={product?.id} data={product} />
                                  ))}
                                </div>
                              </div>
                            </section>
                            {/* <!-- END Blogs w/ 4 cards w/ image & text & link --> */}
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
