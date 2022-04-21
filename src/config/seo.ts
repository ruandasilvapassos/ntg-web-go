export const baseUrl = process.env.BASE_URL

export const defaultSEO = {
  en: {
    title: 'Ntegral',
    openGraph: {
      type: 'website',
      locale: 'id',
      url: baseUrl,
      site_name: 'Ntegral',
      images: [
        {
          url: `${baseUrl}/static/img/favicon.png`,
          alt: 'Ntegral'
        }
      ]
    }
  },
  es: {
    title: 'Ntegral',
    openGraph: {
      type: 'website',
      locale: 'es',
      url: baseUrl,
      site_name: 'Ntegral',
      images: [
        {
          url: `${baseUrl}/static/img/favicon.png`,
          alt: 'Ntegral'
        }
      ]
    }
  }
}

export interface SEOProps {
  title?: string
  description?: string
  image?: {
    url?: string
    alt?: string
  }[]
  url?: string
}

export function extendSEO(options: SEOProps, locale: 'es' | 'en' = 'en') {
  return {
    ...defaultSEO[locale],
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO[locale].openGraph,
      ...options.image,
      url: `${baseUrl}/${options.url}`
    }
  }
}
