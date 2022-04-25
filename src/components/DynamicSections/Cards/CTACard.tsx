import { ProcessCard } from '@components/Cards/ProcessCard'

interface CTACardProps {
  data: {
    title: string
    overview?: string
    item?: Component.Card[]
  }
}
export const CTACard: React.FC<CTACardProps> = ({ data }) => {
  const { title, overview, item: items } = data
  return (
    <section className="py-5 bg-gray-200 py-lg-7">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2>{title}</h2>
            {overview && <p>{overview}</p>}
          </div>
        </div>
        <div className="mt-6 row home-cards">
          {items?.map((item, i) => (
            <ProcessCard
              key={i}
              title={item?.title}
              description={item?.overview}
              icon={item?.image?.data?.attributes?.url}
              buttonText={item?.buttonText}
              buttonUrl={item?.buttonUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
