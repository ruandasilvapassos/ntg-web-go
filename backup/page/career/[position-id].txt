import { NextSeo } from 'next-seo'

import { MainLayout } from '@components/Layouts/MainLayout'
import { Footnote, JobDetailSection } from '@components/PageChunk/CareerDetail'
import { BlockQuote } from '@components/Testimonials'
import routes from '@src/config/routes'
import { extendSEO } from '@src/config/seo'

import type { NextLayoutComponentType } from 'next'
const CareerDetailPage: NextLayoutComponentType = () => {
  return (
    <div className="career-page">
      <NextSeo {...extendSEO(routes.en.product.seo)} />
      <JobDetailSection />
      <BlockQuote />
      <Footnote />
    </div>
  )
}

CareerDetailPage.getLayout = function getLayout(page) {
  return <MainLayout children={page} />
}

export default CareerDetailPage
