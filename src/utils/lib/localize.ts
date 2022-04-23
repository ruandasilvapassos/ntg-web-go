import api from '@services/api'

export async function getLocalizedPage(targetLocale: string, pageContext: any) {
  const localization = pageContext.localizations.data.find(
    (localization: any) => localization.attributes.locale === targetLocale
  )
  const localePage = await api.get(`/pages/${localization.id}`).then(({ data }) => data)
  return localePage
}

export function localizePath(page: any) {
  const { locale, defaultLocale, slug } = page

  if (locale === defaultLocale) {
    // The default locale is not prefixed
    return `/${slug}`
  }

  // The slug should have a localePrefix
  return `/${locale}/${slug}`
}

export function getLocalizedPaths(page: any) {
  const paths = page.locales.map((locale: string) => {
    return {
      locale: locale,
      href: localizePath({ ...page, locale })
    }
  })

  return paths
}
