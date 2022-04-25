import classNames from 'classnames'
import dayjs from 'dayjs'
import { useState } from 'react'

import { InsightCard } from '@components/Cards/InsightCard'
import { useFetcher } from '@hooks/useFetcher'

interface NewsWithCategoryListProps {
  title?: string
}

export const NewsWithCategoryList: React.FC<NewsWithCategoryListProps> = ({ title }) => {
  const [selectedCategory, setSelectedCategory] = useState<number>()
  // const [pageIndex, setPageIndex] = useState<number>(1)

  const { data: categories } = useFetcher<Component.CategoryInsight[]>(`/category-insights`)

  const { data } = useFetcher<Component.InsightResponse[]>(
    `/insights?populate=image,categoryInsight,author,author.photo${
      selectedCategory ? `&filters[categoryInsight][id][$eq]=${selectedCategory}` : ''
    }`
  )
  return (
    <section className="py-lg-7 py-5 news-category">
      <div className="container">
        {title && <h2 className="text-dark mb-5">{title}</h2>}

        <div className="mb-4">
          <span
            onClick={() => setSelectedCategory(undefined)}
            className={classNames([
              'badge text-capitalize text-sm mb-2 cursor-pointer text-dark',
              !selectedCategory ? 'badge-primary' : ''
            ])}>
            All Categories
          </span>
          {categories?.map((category, i) => (
            <span
              key={i}
              onClick={() => setSelectedCategory(category?.id)}
              className={classNames([
                'badge text-dark text-capitalize text-sm  mb-2 cursor-pointer',
                selectedCategory === category?.id ? 'badge-primary' : ''
              ])}>
              {category?.attributes?.name}
            </span>
          ))}
        </div>

        {data?.map((insight, i) => (
          <InsightCard
            key={i}
            title={insight?.attributes?.title}
            description={
              insight?.attributes?.excerpt ||
              insight?.attributes?.overview ||
              insight?.attributes?.content?.replace(/<[^>]*>/g, '')?.substring(0, 160)
            }
            category={insight?.attributes?.categoryInsight?.data?.attributes?.name}
            categoryColor={insight?.attributes?.categoryInsight?.data?.attributes?.color}
            trending={insight?.attributes?.categoryInsight?.data?.attributes?.popular}
            thumbnail={insight?.attributes?.image?.data?.attributes?.url}
            created_at={dayjs(insight?.attributes?.createdAt).fromNow()}
            author={insight?.attributes?.author?.data?.attributes?.name}
          />
        ))}
        {/* <div className="text-center pt-3">
          {meta?.pagination?.page && meta?.pagination?.total && meta?.pagination?.page < meta?.pagination?.total && (
            <button
              onClick={() => setPageIndex(pageIndex + 1)}
              className="btn bg-gradient-primary text-white fw-bold px-4 mb-4">
              Load more insights
            </button>
          )}
        </div> */}
      </div>
    </section>
  )
}
