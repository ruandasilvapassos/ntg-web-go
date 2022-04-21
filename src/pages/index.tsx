import { NextSeo } from 'next-seo'

import { MainLayout } from '@components/Layouts/MainLayout'
import * as Section from '@components/PageChunk/Homepage'
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
      <Section.FeaturedProduct />
      {/* Explore More section */}
      <Section.ExploreMore />
      {/* Our Process section */}
      <Section.OurProcess />
      {/* Why use our Products section */}
      <Section.WhyUs />
      {/* Testimonials list section */}
      <Section.Testimonies />
      {/* Logo clouds section */}
      <Section.LogoClouds />
      {/* Global presence section */}
      <Section.GlobalPresence />
      {/* Global presence section */}
      <Section.ConnectCTA />
    </div>
  )
}

LandingPage.getLayout = function getLayout(page) {
  return <MainLayout children={page} />
}

export default LandingPage
