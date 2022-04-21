import { BlogContent } from './Content'
import { RelatedPost } from './RelatedPost'
import { SocialShare } from './SocialShare'
import { BlogThumbnail } from './Thumbnail'

export const BlogPost = () => {
  return (
    <article>
      <BlogThumbnail />
      <div className="card card-body shadow-0 mx-3 mx-md-4 mt-n6">
        <BlogContent />
        <RelatedPost />
        <SocialShare />
      </div>
    </article>
  )
}
