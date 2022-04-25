import { BlogContent } from './Content'
import { RelatedPost } from './RelatedPost'
import { SocialShare } from './SocialShare'
import { BlogThumbnail } from './Thumbnail'

interface BlogPostProps {
  data?: Component.Insight
}
export const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  return (
    <article>
      <BlogThumbnail title={data?.title} image={data?.image} overview={data?.overview} />
      <div className="card card-body shadow-0 mx-3 mx-md-4 mt-n6">
        <BlogContent data={data} />
        <RelatedPost insights={data?.relatedInsights?.data as any} />
        <SocialShare />
      </div>
    </article>
  )
}
