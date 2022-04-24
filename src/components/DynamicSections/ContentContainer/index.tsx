import Markdown, { useComponent } from '@components/Markdown'

interface ContentContainerProps {
  data: {
    title?: string
    overview?: string
    content?: string
  }
}
export const ContentContainer: React.FC<ContentContainerProps> = ({ data }) => {
  console.log(data)
  return (
    <section className="pt-3 pt-md-3 pb-md-3 pt-lg-7 bg-gray-200">
      <div className="container">
        <div className="col-12 mx-auto pb-5">
          <div className="card shadow-lg">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div className="bg-gradient-primary shadow-dark border-radius-lg p-4">
                {data?.title && <h3 className="text-white mb-0">{data?.title}</h3>}
                {data?.overview && <p className="text-white opacity-8 mb-0">{data?.overview}</p>}
              </div>
            </div>
            <div className="card-body p-5 pt-4">
              <Markdown children={data?.content} components={useComponent.default} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
