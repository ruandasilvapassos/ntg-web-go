// api.js
import Axios from 'axios'

const api = Axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

/**
 *
 * @param {Object} options
 * @param {string} options.slug The page's slug
 * @param {string} options.locale The current locale specified in router.locale
 * @param {boolean} options.preview router isPreview value
 */
export async function getPageData({ slug, locale, preview }: any) {
  const publicationState = preview ? 'preview' : 'live'

  const pagesRes = await api
    .get(`/pages?filters[slug][$eq]=${slug}&locale=${locale}&publicationState=${publicationState}&populate=*`)
    .then(({ data }) => data)

  if (pagesRes.meta?.pagination?.page == null || pagesRes.meta?.pagination?.pageCount === 0) {
    return null
  }
  return pagesRes?.data?.[0] as any
}

// Get site data from Strapi (metadata, navbar, footer...)
export async function getGlobalData(locale?: string) {
  const globalRes = await api
    .get(
      `/global?locale=${
        locale || 'en'
      }&populate=favicon,logo,metadata,footer,footer.copylinks,footer.columns,footer.columns.links,headerMenu,headerMenu.menuItems,headerMenu.menuItems.items`
    )
    .then(({ data }) => data)

  if (!globalRes?.data?.id) {
    return null
  }
  return globalRes as any
}
export default api
