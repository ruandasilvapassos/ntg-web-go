import CountUp from 'react-countup'

interface HeroStatsProps {
  data: {
    title: string
    overview?: string
    Stats?: {
      number?: string
      title?: string
      description?: string
      plus?: boolean
    }[]
  }
}

export const HeroStats: React.FC<HeroStatsProps> = ({ data }) => {
  const { title, overview, Stats: stats } = data
  return (
    <section className="py-5 py-lg-7 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            {title && <h2>Global Presence</h2>}
            {overview && (
              <p>
                With offices in four countries, and having completed projects in many locations around the world, we have the
                global presence and experience necessary to ...
              </p>
            )}
          </div>
        </div>
        <div className="row justify-content-center text-center mt-3">
          {stats?.map((stat, i) => (
            <div key={i} className="col-md-3">
              <span>
                <CountUp
                  end={parseInt(stat?.number || '0') || 0}
                  className="text-gradient text-primary text-6xl"
                  style={{ fontWeight: 'bold' }}
                />
                {stat?.plus && <span className="text-6xl text-primary">+</span>}
              </span>
              {stat?.title && <h5>{stat?.title}</h5>}
              {stat?.description && <p>{stat?.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
