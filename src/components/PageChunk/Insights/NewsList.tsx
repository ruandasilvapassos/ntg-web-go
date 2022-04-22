import { NewsCard } from '@components/Cards/NewsCard'

const NewsLists = [
  {
    title: 'React Native vs. Native Apps: Which is better & why?',
    description: 'February 22, 2022',
    thumbnail: '/static/img/person.png'
  },
  {
    title: 'React Native vs. Native Apps: Which is better & why?',
    description: 'February 22, 2022',
    thumbnail: '/static/img/gaming.png'
  },
  {
    title: 'React Native vs. Native Apps: Which is better & why?',
    description: 'February 22, 2022',
    thumbnail: '/static/img/person.png'
  },
  {
    title: 'React Native vs. Native Apps: Which is better & why?',
    description: 'February 22, 2022',
    thumbnail: '/static/img/gaming.png'
  }
]
export const NewsList: React.FC = () => {
  return (
    <section className="py-lg-7 py-5 news-wrapper">
      <div className="container">
        <div className="row">
          <h2 className="text-dark mb-5">Latest news</h2>
          {NewsLists?.map((news, i) => (
            <NewsCard key={i} {...news} />
          ))}
        </div>
      </div>
    </section>
  )
}
