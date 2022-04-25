import { NextSeo } from 'next-seo'

import { ConnectCTA } from '@components/CTAs'
import { MainLayout } from '@components/Layouts/MainLayout'
import { LogoClouds } from '@components/PageChunk/Homepage'
import { OurService, ServicesHero } from '@components/PageChunk/Services'
import { FeaturedProduct } from '@components/Section'
import { BlockQuote } from '@components/Testimonials'
import routes from '@src/config/routes'
import { extendSEO } from '@src/config/seo'

import type { NextLayoutComponentType } from 'next'
const ServicesPage: NextLayoutComponentType = () => {
  return (
    <div className="privacy-page">
      <NextSeo {...extendSEO(routes.en.home.seo)} />
      <ServicesHero />
      <OurService />
      <LogoClouds title="Our Partners" backgroundColor="#fff" />
      <FeaturedProduct />
      <BlockQuote />
      <ConnectCTA />
    </div>
  )
}

ServicesPage.getLayout = function getLayout(page) {
  return <MainLayout children={page} navbarTheme="light" />
}

export default ServicesPage
