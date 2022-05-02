import { useRouter } from 'next/router'
import qs from 'qs'
import { useEffect, useMemo, useState } from 'react'

import { useFetcher } from '@hooks/useFetcher'
import { useState as useGlobalState } from '@hookstate/core'
import { objectToQuery } from '@utils/index'

// import { filterState } from '@states/Filters'

export const ProductCheckbox: React.FC = () => {
  const { data } = useFetcher<Component.CategoryProduct[]>(`/category-products?sort[0]=name`)
  const filter = useGlobalState<any>({})
  const [categories, setCategories] = useState<string[]>()
  const router = useRouter()

  const filters = useMemo(() => {
    const os = data?.filter((v) => v.attributes?.isOperatingSystem)
    const filter = data?.filter((v) => !v.attributes?.isOperatingSystem)
    return { os, filter }
  }, [data])

  const handleFilter = (value: string) => {
    const pagePath = router?.query?.slug ? router?.query?.slug : ''
    // const currentQuery = qs.stringify(params.get())
    let currentQuery = {}

    if (router?.query?.['products']) {
      currentQuery = { ...currentQuery, products: router?.query?.['products'] }
    }
    if (qs.parse(value)) {
      currentQuery = { ...currentQuery, ...qs.parse(value) }
    }
    if (router?.query?.search) {
      currentQuery = { ...currentQuery, search: router?.query?.search }
    }
    router.push(`/${pagePath}?${currentQuery ? `${objectToQuery(currentQuery)}` : ''}`, '', {
      shallow: true
    })
    return
  }

  const handleCheckbox = (evt: any) => {
    const value = evt.target?.value
    const checked = evt.target?.checked

    filter.merge({ [value]: checked })

    const filterize = Object.keys(filter.get())
      .map((key) => (filter.get()?.[key] ? `category=${key}` : null))
      ?.filter(Boolean)
      ?.join('&')
      ?.replace('&&', '&')
    let filterParsed
    if (typeof qs.parse(filterize)?.category === 'string') {
      filterParsed = qs.parse(filterize)?.category?.toString()
    } else if (typeof qs.parse(filterize)?.category === 'object') {
      filterParsed = (qs.parse(filterize)?.category as any)?.join(',')
    }
    if (filterParsed) {
      filterParsed = `category=${filterParsed}`
    }
    handleFilter(filterParsed)
  }

  useEffect(() => {
    const category = router?.query?.category
    if (category) {
      setCategories(router?.query?.category?.toString()?.split(','))
      const cats = category
        ?.toString()
        ?.split(',')
        ?.map((v) => ({
          [v]: true
        }))
        ?.reduce(function (result, item) {
          const key = Object.keys(item)[0] //first property: a, b, c
          result[key] = item[key]
          return result
        }, {})
      filter.merge(cats)
    }
  }, [router?.query?.category])
  return (
    <div>
      <div className="OsWrap border-bottom">
        {filters?.os?.map((os) => (
          <label key={os.id} className="d-block is-filled">
            <input
              onChange={handleCheckbox}
              type="checkbox"
              name="category_product"
              defaultValue={os?.id}
              defaultChecked={categories?.includes(os?.id?.toString())}
            />
            <span className="mx-1">{os?.attributes?.name}</span>
          </label>
        ))}
      </div>
      <div className="mt-3">
        {/* <label className="mb-3 d-block">
          <input onChange={handleCheckbox} type="checkbox" name="category_product" defaultValue="" />
          <span className="mx-1">All</span>
        </label> */}
        {filters?.filter?.map((filter) => (
          <label key={filter?.id} className="mb-3 d-block">
            <input
              onClick={handleCheckbox}
              type="checkbox"
              name="category_product"
              defaultValue={filter?.id}
              defaultChecked={categories?.includes(filter?.id?.toString())}
            />
            <span className="mx-1">{filter?.attributes?.name}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
