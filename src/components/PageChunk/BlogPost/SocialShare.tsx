import { useEffect, useState } from 'react'

export const SocialShare: React.FC = () => {
  const [url, setUrl] = useState<string>()
  useEffect(() => {
    setUrl(window.location.href)
  }, [])
  return (
    <div className="py-lg-5 py-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="mb-1">Thank you for your support!</h4>
            <p className="lead mb-0">Delivering the best products</p>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-4 d-lg-flex align-items-center justify-content-end">
            <a href={`http://twitter.com/share?text=${url}`} className="btn btn-twitter mb-lg-0 mb-2 me-2" target="_blank">
              <i className="fab fa-twitter me-1" aria-hidden="true"></i> Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
              className="btn btn-facebook mb-lg-0 mb-2 me-2"
              target="_blank">
              <i className="fab fa-facebook-square me-1" aria-hidden="true"></i> Facebook
            </a>
            <a
              href={`https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=${url}&posttype=link`}
              className="btn btn-tumblr mb-lg-0 mb-2 me-2"
              target="_blank">
              <i className="fab fa-tumblr me-1" aria-hidden="true"></i> Tumblr
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
              className="btn mb-lg-0 mb-2 text-white"
              target="_blank"
              style={{
                backgroundColor: '#0a66c2'
              }}>
              <i className="fab fa-linkedin me-1" aria-hidden="true"></i> Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
