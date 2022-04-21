export const SocialShare: React.FC = () => {
  return (
    <div className="py-lg-5 py-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="mb-1">Thank you for your support!</h4>
            <p className="lead mb-0">Delivering the best products</p>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-4 d-lg-flex align-items-center justify-content-end">
            <a href="#!" className="btn btn-twitter mb-lg-0 mb-2 me-2">
              <i className="fab fa-twitter me-1" aria-hidden="true"></i> Twitter
            </a>
            <a href="#!" className="btn btn-facebook mb-lg-0 mb-2 me-2">
              <i className="fab fa-facebook-square me-1" aria-hidden="true"></i> Facebook
            </a>
            <a href="#!" className="btn btn-tumblr mb-lg-0 mb-2 me-2">
              <i className="fab fa-tumblr me-1" aria-hidden="true"></i> Tumblr
            </a>
            <a href="#!" className="btn btn-dribbble mb-lg-0 mb-2">
              <i className="fab fa-dribbble me-1" aria-hidden="true"></i> Dribbble
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
