import { NewsCard } from '@components/Cards/NewsCard'
import { useFetcher } from '@hooks/useFetcher'

interface NewsListProps {
  title?: string
}
export const NewsList: React.FC<NewsListProps> = ({ title }) => {
  const { data } = useFetcher<Component.InsightResponse[]>(
    `/insights?populate=image,categoryInsight&pagination[limit]=4&sort[0]=createdAt:desc`
  )
  return (
    <section className="py-lg-7 py-5 news-wrapper">
      <div className="container">
        <div className="row">
          {title && <h2 className="text-dark mb-5">{title}</h2>}
          {data?.map((news, i) => (
            <NewsCard
              key={i}
              title={news?.attributes?.title || ''}
              thumbnail={news?.attributes?.image?.data?.attributes?.url}
              slug={news?.attributes?.slug}
              description={
                news?.attributes?.excerpt ||
                news?.attributes?.overview ||
                news?.attributes?.content?.replace(/<[^>]*>/g, '')?.substr(0, 160)
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
