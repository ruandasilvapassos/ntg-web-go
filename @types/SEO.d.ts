declare namespace SEO {
  interface Metadata {
    id: number
    canonicalURL?: string
    keywords?: string
    metaDescription?: string
    metaImage?: Strapi.Media
    metaRobots?: string
    metaSocial?: {
      id: number
      description?: string
      socialNetwork?: 'Facebook' | 'Twitter' | 'Linkedin'
      title?: string
    }
    metaTitle: 'Homepage'
    metaViewport: null
    structuredData: null
  }
}
