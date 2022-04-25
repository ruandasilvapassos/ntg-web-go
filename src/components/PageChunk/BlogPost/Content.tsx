import Markdown, { useComponent } from '@components/Markdown'

interface BlogContentProps {
  data?: Component.Insight
}
export const BlogContent: React.FC<BlogContentProps> = ({ data }) => {
  return (
    <section className="py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ms-auto me-auto">
            <div>
              <h6
                className="card-category"
                style={{
                  color: data?.categoryInsight?.data?.attributes?.color
                }}>
                {data?.categoryInsight?.data?.attributes?.popular && <i className="material-icons">trending_up</i>}{' '}
                {data?.categoryInsight?.data?.attributes?.name}
              </h6>
            </div>
            <Markdown children={data?.content} components={useComponent.default} />
          </div>
        </div>
      </div>
      <div className="container pt-7">
        <hr className="border" />
      </div>
    </section>
  )
}
