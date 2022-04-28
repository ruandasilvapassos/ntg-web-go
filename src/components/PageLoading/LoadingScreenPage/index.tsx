export const LoadingScreenPage: React.FC = () => {
  return (
    <section className="py-lg-7 py-5 bg-gray-100 product-section">
      <div className="container my-auto">
        <div className="row pt-7 pb-5 mt-3">
          <div className="col-lg-12 m-auto text-center d-flex" style={{ minHeight: '10vh', justifyContent: 'center' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid">
              <circle
                cx="50"
                cy="50"
                fill="none"
                stroke="#ba1a18"
                strokeWidth="10"
                r="35"
                strokeDasharray="164.93361431346415 56.97787143782138">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  dur="1s"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                />
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
