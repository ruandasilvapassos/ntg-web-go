import { useRouter } from 'next/router'
import qs from 'qs'
import { ChangeEvent, useMemo } from 'react'

import { useFetcher } from '@hooks/useFetcher'
import { useState } from '@hookstate/core'
import { objectToQuery } from '@utils/index'

// import { filterState } from '@states/Filters'

export const ProductCheckbox: React.FC = () => {
  const { data } = useFetcher<Component.CategoryProduct[]>(`/category-products`)
  const filter = useState<any>({})
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
    if (router?.query?._q) {
      currentQuery = { ...currentQuery, _q: router?.query?._q }
    }
    if (router?.query?.['filters[platform][id][$eq]']) {
      currentQuery = { ...currentQuery, 'filters[platform][id][$eq]': router?.query?.['filters[platform][id][$eq]'] }
    }

    router.push(`/${pagePath}?${value ? value : ''}${currentQuery ? `&${qs.stringify(currentQuery)}` : ''}`, '', {
      shallow: true
    })
    return
  }

  const handleCheckbox = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target?.value
    const checked = evt.target?.checked

    filter.merge({ ...filter.get(), [value]: checked })

    const filterize = Object.keys(filter.get())
      .map((key) => (filter.get()?.[key] ? `filters[category_products][id][$in]=${key}` : null))
      ?.filter(Boolean)
      ?.join('&')
      ?.replace('&&', '&')
    handleFilter(filterize)
  }
  return (
    <div>
      <div className="OsWrap border-bottom">
        {filters?.os?.map((os) => (
          <label key={os.id} className="d-block is-filled">
            <input onChange={handleCheckbox} type="checkbox" name="category_product" defaultValue={os?.id} />
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
            <input onChange={handleCheckbox} type="checkbox" name="category_product" defaultValue={filter?.id} />
            <span className="mx-1">{filter?.attributes?.name}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
