export const OurProcess: React.FC = () => {
  return (
    <section className="py-5 bg-gray-200 py-lg-7">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2>Our Process</h2>
            <p>
              Find the right products to enable technology transformation across your enterprise and run mission-critical
              processes efficiently and securely – today and as your business needs evolve.
            </p>
          </div>
        </div>
        <div className="mt-6 row home-cards">
          <div className="col-lg-3 col-md-6 card-col">
            <div className="p-2 pt-4 mb-4 card rounded-4 mh-350">
              <div className="pt-1 pb-2 card-body">
                {/* <!-- <img alt="" src="/assets/images/phone.svg" className="w-10" /> --> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M21.4503 16.3503C21.2056 16.0897 20.3417 15.3191 18.7535 14.2995C17.1537 13.2711 15.9739 12.6299 15.6354 12.4803C15.6056 12.4671 15.5727 12.4622 15.5404 12.4663C15.508 12.4703 15.4773 12.4831 15.4517 12.5033C14.9065 12.9284 13.9887 13.7094 13.9395 13.7516C13.6217 14.0239 13.6217 14.0239 13.3615 13.9391C12.904 13.7891 11.4828 13.0344 10.2443 11.7931C9.0059 10.5519 8.2123 9.09547 8.0623 8.63844C7.97652 8.37782 7.97652 8.37782 8.2498 8.06001C8.29199 8.01079 9.0734 7.09297 9.49855 6.54829C9.51872 6.52264 9.53151 6.49198 9.53556 6.4596C9.5396 6.42723 9.53475 6.39436 9.52152 6.36454C9.37199 6.02563 8.73074 4.84625 7.7023 3.24641C6.68137 1.65875 5.91168 0.794845 5.65106 0.550157C5.62714 0.527588 5.59758 0.511888 5.56549 0.504711C5.5334 0.497534 5.49996 0.499145 5.46871 0.509376C4.55768 0.822447 3.67868 1.22192 2.84371 1.70235C2.03766 2.17092 1.27454 2.70973 0.563246 3.3125C0.538416 3.33361 0.519801 3.36108 0.509396 3.39197C0.498991 3.42285 0.497189 3.45598 0.504184 3.48781C0.602152 3.94438 1.07043 5.85032 2.52356 8.49032C4.00621 11.1847 5.03371 12.5652 7.21105 14.735C9.3884 16.9049 10.8125 17.9942 13.5096 19.4769C16.1496 20.93 18.0565 21.3988 18.5121 21.4958C18.544 21.5027 18.5772 21.5009 18.6082 21.4905C18.6391 21.4801 18.6667 21.4615 18.6879 21.4367C19.2906 20.7255 19.8292 19.9623 20.2976 19.1563C20.7779 18.3212 21.1774 17.4423 21.4906 16.5313C21.5006 16.5002 21.5021 16.4671 21.4951 16.4353C21.488 16.4035 21.4725 16.3742 21.4503 16.3503Z"
                    fill="#BA1A18"></path>
                </svg>
                <h4 className="my-3 font-weight-bolder">Talk directly to us</h4>
                <p className="fw-regular ">Speak over chat or request a call back.</p>
              </div>
              <div className="p-3 card-footer mt-90">
                <button className="p-2 mb-0 text-white btn bg-primary btn-block w-100" type="button">
                  Request a call
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 card-col">
            <div className="p-2 pt-4 mb-4 card rounded-4 mh-350">
              <div className="pt-1 pb-2 card-body">
                {/* <!-- <img alt="" src="/assets/images/shakehands.svg" className="w-10" /> --> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 24" fill="none">
                  <path
                    d="M22.8758 8.96002H15.7505V11.3905C15.7505 13.1555 14.4811 14.7649 12.7247 14.9416C10.7048 15.1446 9.00032 13.5628 9.00032 11.5845V5.92777L7.85137 6.61811C5.77521 7.86803 4.50204 10.1129 4.50204 12.5406L0.751918 14.7105C0.0370508 15.1206 -0.215145 16.0406 0.201119 16.7553L3.95124 23.251C4.36727 23.9657 5.28722 24.2117 6.00209 23.8016L10.8491 21.0014H17.2525C18.9049 21.0014 20.2526 19.654 20.2526 18.0019C21.4953 18.0019 22.5026 16.9948 22.5026 15.7523V13.5014H22.8777C23.4988 13.5014 24.0027 12.9975 24.0027 12.3766V10.127C24.0008 9.50367 23.4992 8.96002 22.8758 8.96002ZM29.7994 7.24471L26.0517 0.749046C25.6356 0.0343353 24.7157 -0.211713 24.0008 0.198367L19.1538 2.99863H16.2207C14.4464 2.99863 12.7083 3.49588 11.2002 4.43414C10.7676 4.70925 10.5004 5.18728 10.5004 5.70281V11.6267C10.5004 12.6639 11.3385 13.5014 12.3754 13.5014C13.4128 13.5014 14.2505 12.6634 14.2505 11.6267V7.4603H22.8758C24.3257 7.4603 25.5009 8.63524 25.5009 10.0848V11.4205L29.251 9.25293C29.9682 8.88035 30.212 7.96177 29.7994 7.24471Z"
                    fill="#BA1A18"></path>
                </svg>
                <h4 className="my-3 font-weight-bolder">Locate a partner</h4>
                <p className="fs-16 fw-regular ">Choose your preferred cloud service provider.</p>
              </div>
              <div className="p-3 card-footer mt-90">
                <button className="p-2 mb-0 text-white btn bg-primary btn-block w-100" type="button">
                  Partner Locator
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 card-col">
            <div className="p-2 pt-4 mb-4 card rounded-4 mh-350">
              <div className="pt-1 pb-2 card-body">
                {/* <!-- <img alt="" src="/assets/images/marketplace.svg" className="w-10" /> --> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 20" fill="none">
                  <path
                    d="M6.34755 6.7L7.29675 0.4H2.35995L0.297151 5.8C0.233551 5.992 0.199951 6.1912 0.199951 6.4C0.199951 7.7248 1.57995 8.8 3.28515 8.8C4.85715 8.8 6.15675 7.8832 6.34755 6.7ZM11 8.8C12.7039 8.8 14.0852 7.7248 14.0852 6.4C14.0852 6.3508 14.0816 6.3016 14.0792 6.2548L13.4684 0.4H8.53155L7.91955 6.25C7.91671 6.29995 7.91511 6.34997 7.91475 6.4C7.91475 7.7248 9.29595 8.8 11 8.8ZM17 10.0552V14.8H4.99995V10.0624C4.47435 10.252 3.89595 10.36 3.28515 10.36C3.05115 10.36 2.82435 10.3324 2.59995 10.3012V17.92C2.59995 18.844 3.35475 19.6 4.27755 19.6H17.7199C18.644 19.6 19.4 18.8428 19.4 17.92V10.3024C19.1731 10.3372 18.9442 10.3569 18.7148 10.3612C18.1296 10.3606 17.5492 10.257 17 10.0552ZM21.704 5.8L19.6388 0.4H14.7032L15.6512 6.6904C15.836 7.8784 17.1356 8.8 18.7148 8.8C20.4188 8.8 21.7999 7.7248 21.7999 6.4C21.7999 6.1912 21.7663 5.992 21.704 5.8Z"
                    fill="#BA1A18"></path>
                </svg>
                <h4 className="my-3 font-weight-bolder">Find us on Marketplaces</h4>
                <p className="fw-regular ">Speak over chat or request a call back.</p>
              </div>
              <div className="p-3 card-footer mt-90">
                <button className="p-2 mb-0 text-white btn bg-primary btn-block w-100" type="button">
                  Cloud Providers
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 card-col">
            <div className="p-2 pt-4 mb-4 card rounded-4 mh-350">
              <div className="pt-1 pb-2 card-body">
                {/* <!-- <img alt="" src="/assets/images/buyonline.svg" className="w-10" /> --> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 17" fill="none">
                  <path
                    d="M19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V15C0 15.5304 0.210714 16.0391 0.585786 16.4142C0.960859 16.7893 1.46957 17 2 17H18C18.5304 17 19.0391 16.7893 19.4142 16.4142C19.7893 16.0391 20 15.5304 20 15V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0ZM10 9C6.691 9 4 6.309 4 3H6C6 5.206 7.794 7 10 7C12.206 7 14 5.206 14 3H16C16 6.309 13.309 9 10 9Z"
                    fill="#BA1A18"></path>
                </svg>
                <h4 className="my-3 font-weight-bolder">Buy Online</h4>
                <p className="fw-regular ">Speak over chat or request a call back.</p>
              </div>
              <div className="p-3 card-footer mt-90">
                <button className="p-2 mb-0 text-white btn bg-primary btn-block w-100" type="button">
                  Buy Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
