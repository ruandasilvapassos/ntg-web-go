import { BlogContent } from './Content'
import { RelatedPost } from './RelatedPost'
import { SocialShare } from './SocialShare'
import { BlogThumbnail } from './Thumbnail'

interface CategoryInsight {
  id: number
  attributes?: {
    color?: string
    name?: string
    popular?: boolean
  }
}

export interface Insight {
  title?: string
  image?: Strapi.Media
  overview?: string
  content?: string
  excerpt?: string
  slug: string
  categoryInsight?: {
    data?: CategoryInsight
  }
  relatedInsights?: {
    data: Insight[]
  }
}
interface BlogPostProps {
  data?: Insight
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
