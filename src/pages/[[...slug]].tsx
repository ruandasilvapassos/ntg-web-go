import { NextPageContext } from 'next'
import { useRouter } from 'next/router'

import Sections from '@components/DynamicSections'
import { MainLayout } from '@components/Layouts'
// import { fetchAPI, getGlobalData, getPageData } from 'utils/api'
// import { getLocalizedPaths } from 'utils/localize'
import Seo from '@components/SEO'
import api, { getGlobalData, getPageData } from '@services/api'
import { getLocalizedPaths } from '@utils/lib/localize'

import NotFoundPage from './404'

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes
interface DynamicPageProps {
  sections?: any[]
  metadata?: SEO.Metadata
  preview?: 'preview' | 'live'
  pageContext: {
    locale: 'en' | 'es'
    locales: ['en' | 'es']
    defaultLocale: 'en'
    slug: string
    localizations: 'en' | 'es'
  }
  global?: any
  settings?: Component.Settings
}
const DynamicPage: React.FC<DynamicPageProps> = ({ sections, metadata, preview, settings, global }) => {
  const router = useRouter()

  // Check if the required data was provided
  if (!router.isFallback && !sections?.length) {
    return (
      <MainLayout>
        <NotFoundPage />
      </MainLayout>
    )
  }

  // Loading screen (only possible in preview mode)
  if (router.isFallback) {
    return <div className="container">Loading...</div>
  }

  // Merge default site SEO settings with page specific SEO settings
  if (metadata?.metaImage?.data == null) {
    delete metadata?.metaImage
  }
  const metadataWithDefaults = {
    ...global.attributes.metadata,
    ...metadata
  }

  return (
    <MainLayout navbarTheme={settings?.navbarStyle} metadata={global}>
      {/* Add meta tags for SEO*/}
      <Seo {...metadataWithDefaults} />
      {/* Display content sections */}
      <Sections sections={sections} preview={preview} />
    </MainLayout>
  )
}

export async function getStaticPaths(context: NextPageContext) {
  // Get all pages from Strapi
  const pages = await context.locales?.reduce(async (currentPagesPromise: any, locale: any) => {
    const currentPages = await currentPagesPromise
    const localePages = await api.get(`/pages?locale=${locale}&fields=slug,locale`).then(({ data }) => data)
    return [...currentPages, ...localePages.data]
  }, Promise.resolve([]))

  const paths = pages?.map((page) => {
    const { slug, locale } = page.attributes
    // Decompose the slug that was saved in Strapi
    const slugArray = !slug ? false : slug.split('/')

    return {
      params: { slug: slugArray },
      // Specify the locale to render
      locale
    }
  })

  return { paths, fallback: true }
}

interface StaticPropsTypes extends NextPageContext {
  params: {
    slug: string[]
  }
  preview: string
}

export async function getStaticProps(context: StaticPropsTypes) {
  const { params, locale, locales, defaultLocale, preview = null } = context

  const globalLocale = await getGlobalData(locale)

  // Fetch pages. Include drafts if preview mode is on
  const pageData = await getPageData({
    slug: (!params.slug ? [''] : params.slug).join('/'),
    locale,
    preview
  })

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} }
  }

  // We have the required page data, pass it to the page component
  const { contentSections, metadata, locale: localizations, slug, settings } = pageData.attributes

  const pageContext = {
    locale,
    locales,
    defaultLocale,
    slug,
    localizations
  }

  const localizedPaths = getLocalizedPaths(pageContext)

  return {
    props: {
      preview,
      sections: contentSections,
      metadata,
      settings,
      global: globalLocale?.data,
      pageContext: {
        ...pageContext,
        localizedPaths
      }
    }
  }
}

export default DynamicPage
