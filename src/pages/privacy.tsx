import { NextSeo } from 'next-seo'

import { MainLayout } from '@components/Layouts/MainLayout'
import routes from '@src/config/routes'
import { extendSEO } from '@src/config/seo'

import type { NextLayoutComponentType } from 'next'

const PrivacyPage: NextLayoutComponentType = () => {
  return (
    <div className="privacy-page">
      <NextSeo {...extendSEO(routes.en.home.seo)} />
      <header>
        <div className="page-header min-vh-50" style={{ backgroundImage: 'url(/static/img/bg10.jpg)' }}>
          <span className="mask bg-gradient-dark opacity-4"></span>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 text-white text-left">
                <h1 className="text-white">Privacy Policy</h1>
                <p>
                  Thank you for choosing to be part of our community at Ntegral, Inc. ("Company", "we", "us", or "our"). We
                  are committed to protecting your personal information and your right to privacy. If you have any questions
                  or concerns about our policy, or our practices with regards to your personal information, please contact us
                  at hello@ntegral.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="pt-3 pt-md-3 pb-md-3 pt-lg-7 bg-gray-200">
        <div className="container">
          <div className="col-12 mx-auto pb-5">
            <div className="card shadow-lg">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                <div className="bg-gradient-primary shadow-dark border-radius-lg p-4">
                  <h3 className="text-white mb-0">Privacy &amp; Policy</h3>
                  <p className="text-white opacity-8 mb-0">Last modified: Sept 01 2021</p>
                </div>
              </div>
              <div className="card-body p-5 pt-0">
                <h5 className="mt-5 mb-3">Introduction</h5>
                At Creative Tim, accessible <a href="https://www.creative-tim.com/">here</a>, one of our main priorities is
                the privacy of our visitors. This Privacy Policy document contains types of information that is collected and
                recorded by Website Name and how we use it.
                <br />
                <br />
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to
                contact us through email at hello@creative-tim.com
                <br />
                <br />
                This privacy policy applies only to our online activities and is valid for visitors to our website with
                regards to the information that they shared and/or collect in{' '}
                <a href="https://www.creative-tim.com/">Creative Tim</a>. This policy is not applicable to any information
                collected offline or via channels other than this website.
                <h5 className="mt-5 mb-3">Managing Your Information</h5>
                <p>
                  Unless otherwise stated, Creative Tim and/or its licensors own the intellectual property rights for all
                  material on Creative Tim. All intellectual property rights are reserved. You may access this from Creative
                  Tim for your own personal use subjected to restrictions set in these terms and conditions.
                </p>
                <p>You must not:</p>
                <ul>
                  <li>Republish material from Creative Tim</li>
                  <li>Sell, rent or sub-license material from Creative Tim</li>
                  <li>Reproduce, duplicate or copy material from Creative Tim</li>
                  <li>Redistribute content from Creative Tim</li>
                </ul>
                <p>
                  This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the{' '}
                  <a href="https://www.creative-tim.com">Terms And Conditions Generator</a> and the{' '}
                  <a href="https://www.creative-tim.com">Privacy Policy Generator</a>.
                </p>
                <p>
                  Parts of this website offer an opportunity for users to post and exchange opinions and information in
                  certain areas of the website. Creative Tim does not filter, edit, publish or review Comments prior to their
                  presence on the website. Comments do not reflect the views and opinions of Creative Tim,its agents and/or
                  affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the
                  extent permitted by applicable laws, Creative Tim shall not be liable for the Comments or for any
                  liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or
                  appearance of the Comments on this website.
                </p>
                <p>
                  Creative Tim reserves the right to monitor all Comments and to remove any Comments which can be considered
                  inappropriate, offensive or causes breach of these Terms and Conditions.
                </p>
                <h5 className="mt-5 mb-3">Security</h5>
                We shall not be hold responsible for any content that appears on your Website. You agree to protect and
                defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may
                be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the
                infringement or other violation of, any third party rights.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

PrivacyPage.getLayout = function getLayout(page) {
  return <MainLayout children={page} navbarTheme="light" />
}

export default PrivacyPage
