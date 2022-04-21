export const Thrive: React.FC = () => {
  return (
    <div className="py-lg-7 py-5">
      <div className="container">
        <div className="row align-items-center mb-7">
          <div className="col-lg-6 col-md-12 mb-5">
            <h2 className="mt-2 mb-4"> How we thrive</h2>
            <p className="mb-2">
              ‘We want to thrive, both at work and in our personal lives. There is a ‘shared understanding of the common
              threads that help us be our best, and s we continue o nvest i them, we continue to grow
            </p>
            <p className="mb-3">
              These arethe values that drive our daly decision, develop our relationships, and uide our srategy:
            </p>
            <div className="row">
              <div className="col-6 mb-1">
                <div className="d-flex align-items-center">
                  <span className="material-icons text-success me-2">done</span>
                  <p className="mb-0">Be sincere</p>
                </div>
              </div>

              <div className="col-6 mb-1">
                <div className="d-flex align-items-center">
                  <span className="material-icons text-success me-2">done</span>
                  <p className="mb-0">Take intelligent risks</p>
                </div>
              </div>
              <div className="col-6 mb-1">
                <div className="d-flex align-items-center">
                  <span className="material-icons text-success me-2">done</span>
                  <p className="mb-0">Stronger together</p>
                </div>
              </div>
              <div className="col-6 mb-1">
                <div className="d-flex align-items-center">
                  <span className="material-icons text-success me-2">done</span>
                  <p className="mb-0">Keep it simple</p>
                </div>
              </div>
              <div className="col-6 mb-1">
                <div className="d-flex align-items-center">
                  <span className="material-icons text-success me-2">done</span>
                  <p className="mb-0">Expect extraordinary</p>
                </div>
              </div>
              <div className="col-6 mb-1">
                <div className="d-flex align-items-center">
                  <span className="material-icons text-success me-2">done</span>
                  <p className="mb-0">Pause and play</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-6">
            <div className="row justify-content-end">
              <div className="col-3 mb-4">
                {/* <!-- Logo --> */}
                <div className="d-block avatar avatar-lg rounded-circle shadow-sm p-3 mt-n3 ms-5">
                  <img className="avatar-img" src="/static/img/brands/asana-icon.svg" alt="Image Description" />
                </div>
                {/* <!-- End Logo --> */}
              </div>
              {/* <!-- End Col --> */}

              <div className="col-4 mb-4">
                {/* <!-- Logo -->/ */}
                <div className="d-block avatar avatar-xl rounded-circle shadow-sm p-4 mx-auto mt-5">
                  <img className="avatar-img" src="/static/img/brands/dropbox-icon.svg" alt="Image Description" />
                </div>
                {/* <!-- End Logo --> */}
              </div>
              {/* <!-- End Col --> */}

              <div className="col-4 mb-4">
                {/* <!-- Logo --> */}
                <div className="d-block avatar avatar-xl rounded-circle shadow-sm p-4 ms-auto">
                  <img className="avatar-img" src="/static/img/brands/google-icon.svg" alt="Image Description" />
                </div>
                {/* <!-- End Logo --> */}
              </div>
              {/* <!-- End Col --> */}
            </div>
            {/* <!-- End Row --> */}

            <div className="row">
              <div className="col-3 offset-1 my-4">
                {/* <!-- Logo --> */}
                <div className="d-block avatar avatar-xl rounded-circle shadow-sm p-4 ms-auto">
                  <img className="avatar-img" src="/static/img/brands/jira-icon.svg" alt="Image Description" />
                </div>
                {/* <!-- End Logo --> */}
              </div>
              {/* <!-- End Col --> */}

              <div className="col-3 offset-2 my-4">
                {/* <!-- Logo --> */}
                <div className="d-block avatar avatar-xl rounded-circle shadow-sm p-4 ms-auto">
                  <img className="avatar-img" src="/static/img/brands/slack-icon.svg" alt="Image Description" />
                </div>
                {/* <!-- End Logo --> */}
              </div>
              {/* <!-- End Col --> */}
            </div>
            {/* <!-- End Row --> */}

            <div className="row">
              <div className="col-6">
                {/* <!-- Logo --> */}
                <div className="d-block avatar avatar-lg rounded-circle shadow-sm p-3 ms-auto">
                  <img className="avatar-img" src="/static/img/brands/google-adz-icon.svg" alt="Image Description" />
                </div>
                {/* <!-- End Logo --> */}
              </div>
              {/* <!-- End Col --> */}

              <div className="col-6 mt-6">
                {/* <!-- Logo --> */}
                <div className="d-block avatar avatar-xl rounded-circle shadow-sm p-4 ms-auto">
                  <img className="avatar-img" src="/static/img/brands/behance-icon.svg" alt="Image Description" />
                </div>
                {/* <!-- End Logo --> */}
              </div>
              {/* <!-- End Col --> */}
            </div>
            {/* <!-- End Row --> */}
          </div>
        </div>
      </div>
    </div>
  )
}
