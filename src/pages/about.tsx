import { NextSeo } from 'next-seo'

import { ConnectCTA } from '@components/CTAs/ConnectCTA'
import { MainLayout } from '@components/Layouts/MainLayout'
import { AboutHero, CompanyCulture, Thrive, UsDifferent } from '@components/PageChunk/About'
import * as Section from '@components/PageChunk/Homepage'
import routes from '@src/config/routes'
import { extendSEO } from '@src/config/seo'

import type { NextLayoutComponentType } from 'next'

const AboutPage: NextLayoutComponentType = () => {
  return (
    <div className="home-page">
      <NextSeo {...extendSEO(routes.en.home.seo)} />
      {/* Hero/Header section */}
      <AboutHero />
      {/* Company culture section */}
      <CompanyCulture />
      {/* How we thrive section */}
      <Thrive />
      {/* What makes us different section */}
      <UsDifferent />
      {/* Logo clouds section */}
      <Section.LogoClouds title="Our Enterprise Partners" />
      {/* Global presence section */}
      <ConnectCTA />
    </div>
  )
}

AboutPage.getLayout = function getLayout(page) {
  return <MainLayout children={page} navbarTheme="light" />
}

export default AboutPage
