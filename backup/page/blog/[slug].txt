import { NextSeo } from 'next-seo'

import { MainLayout } from '@components/Layouts/MainLayout'
import { BlogPost } from '@components/PageChunk/BlogPost/Post'
import routes from '@src/config/routes'
import { extendSEO } from '@src/config/seo'

import type { NextLayoutComponentType } from 'next'
const AboutPage: NextLayoutComponentType = () => {
  return (
    <div className="home-page">
      <NextSeo {...extendSEO(routes.en.home.seo)} />
      <BlogPost />
    </div>
  )
}

AboutPage.getLayout = function getLayout(page) {
  return <MainLayout children={page} navbarTheme="light" />
}

export default AboutPage
