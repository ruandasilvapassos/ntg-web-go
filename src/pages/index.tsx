import { NextSeo } from 'next-seo'

import { ConnectCTA } from '@components/CTAs/ConnectCTA'
import { MainLayout } from '@components/Layouts/MainLayout'
import * as Section from '@components/PageChunk/Homepage'
import { FeaturedProduct, ProductList, WhyUs } from '@components/Section'
import routes from '@src/config/routes'
import { extendSEO } from '@src/config/seo'

import type { NextLayoutComponentType } from 'next'
const LandingPage: NextLayoutComponentType = () => {
  return (
    <div className="home-page">
      <NextSeo {...extendSEO(routes.en.home.seo)} />
      <Section.MainHero />
      {/* Home Section */}
      <Section.OurValues />
      {/* Featured Product section */}
      <FeaturedProduct />
      {/* Product List section */}
      <ProductList
        title="Explore More Products"
        description="Find the right products to enable technology transformation across your enterprise and run mission-critical
              processes efficiently and securely – today and as your business needs evolve."
      />
      {/* Our Process section */}
      <Section.OurProcess />
      {/* Why use our Products section */}
      <WhyUs />
      {/* Testimonials list section */}
      <Section.Testimonies />
      {/* Logo clouds section */}
      <Section.LogoClouds />
      {/* Global presence section */}
      <Section.GlobalPresence />
      {/* Global presence section */}
      <ConnectCTA />
    </div>
  )
}

LandingPage.getLayout = function getLayout(page) {
  return <MainLayout children={page} />
}

export default LandingPage
