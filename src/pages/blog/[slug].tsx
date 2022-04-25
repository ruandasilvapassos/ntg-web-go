import { NextSeo } from 'next-seo'

import { MainLayout } from '@components/Layouts/MainLayout'
import { BlogPost } from '@components/PageChunk/BlogPost/Post'
import api from '@services/api'
import routes from '@src/config/routes'
import { extendSEO } from '@src/config/seo'

import type { GetServerSidePropsContext, NextLayoutComponentType } from 'next'

interface BlogPageProps {
  data?: any
}
const BlogPage: NextLayoutComponentType<BlogPageProps> = ({ data }) => {
  return (
    <div className="home-page">
      <NextSeo {...extendSEO(routes.en.home.seo)} />
      <BlogPost data={data?.attributes} />
    </div>
  )
}

BlogPage.getLayout = function getLayout(page) {
  return <MainLayout children={page} navbarTheme="light" />
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = ctx?.query
  const slug = query?.slug?.toString()

  const data = await api
    .get(
      `/insights?filters[slug][$eq]=${slug}&populate=categoryInsight,relatedInsights,image,relatedInsights.image,relatedInsights.categoryInsight`
    )
    .then(({ data }) => data?.data?.[0])
    .catch(() => null)

  return {
    props: {
      slug,
      data: data || null
    }
  }
}

export default BlogPage
