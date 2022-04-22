import { InsightCard } from '@components/Cards/InsightCard'

const Insights = [
  {
    title: 'Autodesk looks to future of 3D printing with Project Esche',
    description: `Like so many organizations these days, Autodesk is a company in transition. It was until recently a
    traditional boxed software company selling licenses. Today, it’s moving to a subscription model. Yet its own
    business model disruption is only part of the story — Yet its own business model disruption is only part of
    the story`,
    author: 'Mike Butcher',
    created_at: '2 days ago',
    thumbnail: '/static/img/examples/blog5.jpg',
    category: 'Blockchain',
    categoryColor: '#1A73E8'
  },
  {
    title: '6 insights into the French Fashion landscape',
    description: `Like so many organizations these days, Autodesk is a company in transition. It was until recently a
    traditional boxed software company selling licenses. Today, it’s moving to a subscription model. Yet its own
    business model disruption is only part of the story — Yet its own business model disruption is only part of
    the story`,
    author: 'Mike Butcher',
    created_at: '2 days ago',
    thumbnail: '/static/img/examples/blog6.jpg',
    category: 'Technology',
    categoryColor: '#F44335',
    trending: true
  },
  {
    title: 'Lyft launching cross-platform service this week',
    description: `Like so many organizations these days, Autodesk is a company in transition. It was until recently a
    traditional boxed software company selling licenses. Today, it’s moving to a subscription model. Yet its own
    business model disruption is only part of the story — Yet its own business model disruption is only part of
    the story`,
    author: 'Mike Butcher',
    created_at: '2 days ago',
    thumbnail: '/static/img/examples/blog7.jpg',
    category: 'Healthcare',
    categoryColor: '#4CAF50'
  },
  {
    title: 'Autodesk looks to future of 3D printing with Project Esche',
    description: `Like so many organizations these days, Autodesk is a company in transition. It was until recently a
    traditional boxed software company selling licenses. Today, it’s moving to a subscription model. Yet its own
    business model disruption is only part of the story — Yet its own business model disruption is only part of
    the story`,
    author: 'Mike Butcher',
    created_at: '2 days ago',
    thumbnail: '/static/img/examples/blog5.jpg',
    category: 'Blockchain',
    categoryColor: '#1A73E8'
  },
  {
    title: '6 insights into the French Fashion landscape',
    description: `Like so many organizations these days, Autodesk is a company in transition. It was until recently a
    traditional boxed software company selling licenses. Today, it’s moving to a subscription model. Yet its own
    business model disruption is only part of the story — Yet its own business model disruption is only part of
    the story`,
    author: 'Mike Butcher',
    created_at: '2 days ago',
    thumbnail: '/static/img/examples/blog6.jpg',
    category: 'Technology',
    categoryColor: '#F44335',
    trending: true
  }
]
export const InsightCategories: React.FC = () => {
  return (
    <section className="py-lg-7 py-5 news-category">
      <div className="container">
        <h2 className="text-dark mb-5">Categories</h2>

        <div className="mb-4">
          <span className="badge badge-primary text-capitalize text-sm mb-2 cursor-pointer">All Categories</span>
          <span className="badge text-dark text-capitalize text-sm  mb-2 cursor-pointer">Blockchain</span>
          <span className="badge text-dark text-capitalize text-sm  mb-2 cursor-pointer">Technology</span>
          <span className="badge text-dark text-capitalize text-sm  mb-2 cursor-pointer">Healthcare</span>
        </div>

        {Insights?.map((insight, i) => {
          return <InsightCard key={i} {...insight} />
        })}
        <div className="text-center pt-3">
          <a href="#" className="btn bg-gradient-primary text-white   fw-bold px-4 mb-4">
            Load more insights
          </a>
        </div>
      </div>
    </section>
  )
}
