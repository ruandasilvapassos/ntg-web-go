import { MainLayout } from '@components/Layouts/MainLayout'
import { BlogPost } from '@components/PageChunk/BlogPost/Post'
import SEO from '@components/SEO'
import api, { getGlobalData } from '@services/api'

import type { GetServerSidePropsContext, NextLayoutComponentType } from 'next'
interface BlogPageProps {
  data?: any
  global?: any
}
const BlogPage: NextLayoutComponentType<BlogPageProps> = ({ data, global }) => {
  const metadataWithDefaults = {
    ...global?.attributes?.metadata,
    ...data?.attributes?.metadata
  }
  return (
    <MainLayout navbarTheme="light" metadata={global}>
      <div className="home-page">
        <SEO {...metadataWithDefaults} />
        <BlogPost data={data?.attributes} />
      </div>
    </MainLayout>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = ctx?.query
  const slug = query?.slug?.toString()

  const { locale } = ctx

  const globalLocale = await getGlobalData(locale)

  const data = await api
    .get(
      `/insights?filters[slug][$eq]=${slug}&populate=categoryInsight,relatedInsights,image,relatedInsights.image,relatedInsights.categoryInsight,metadata`
    )
    .then(({ data }) => data?.data?.[0])
    .catch(() => null)

  return {
    props: {
      slug,
      global: globalLocale?.data,
      data: data || null
    }
  }
}

export default BlogPage
