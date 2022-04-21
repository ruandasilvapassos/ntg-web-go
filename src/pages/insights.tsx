import { NextSeo } from 'next-seo'

import { ApplyNow } from '@components/CTAs'
import { MainLayout } from '@components/Layouts/MainLayout'
import { FeaturedNews, InsightCategories, NewsList } from '@components/PageChunk/Insights'
import routes from '@src/config/routes'
import { extendSEO } from '@src/config/seo'

import type { NextLayoutComponentType } from 'next'
const InsightPage: NextLayoutComponentType = () => {
  return (
    <div className="insights-page">
      <NextSeo {...extendSEO(routes.en.home.seo)} />
      <FeaturedNews />
      <NewsList />
      <InsightCategories />
      <ApplyNow />
    </div>
  )
}

InsightPage.getLayout = function getLayout(page) {
  return <MainLayout children={page} />
}

export default InsightPage
