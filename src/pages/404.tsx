import Link from 'next/link'

import { MainLayout } from '@components/Layouts/MainLayout'
import SEO from '@components/SEO'
import { getGlobalData } from '@services/api'

import type { GetServerSidePropsContext, NextLayoutComponentType } from 'next'

const NotFoundPage: NextLayoutComponentType = ({ global }: any) => {
  return (
    <MainLayout metadata={global}>
      <SEO {...global?.attributes?.metadata} />
      <section className="py-lg-7 py-5 bg-gray-100 product-section">
        <div className="container my-auto">
          <div className="row pt-7 pb-5 mt-3">
            <div className="col-lg-12 m-auto text-center">
              <h1 className="display-1 text-bolder text-dark">Error 404</h1>
              <h2 className="text-dark">Something went wrong</h2>
              <p className="lead text-dark">We suggest you to go to the homepage while we solve this issue.</p>
              <Link href="/" passHref>
                <a type="button" className="btn btn-primary mt-4">
                  Go to Homepage
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = ctx?.query
  const slug = query?.slug?.toString()
  const { locale } = ctx

  const globalLocale = await getGlobalData(locale)
  console.log(globalLocale)
  return {
    props: {
      slug,
      global: globalLocale?.data
    }
  }
}

export default NotFoundPage
