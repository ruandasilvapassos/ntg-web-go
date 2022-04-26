declare namespace Component {
  interface Link {
    id: number
    url?: string
    title?: string
    target?: '_self' | '_blank' | '_parent' | '_top'
    text?: string
  }
  interface ButtonWithStyle {
    id: number
    link?: string
    text?: string
    buttonStyle?: 'filled' | 'nonFilled'
    target?: '_self' | '_blank' | '_parent' | '_top'
  }
  interface Button {
    id: number
    text?: string
    link?: string
    class?: string
    type?: 'button' | 'reset' | 'submit'
  }
  interface Logo {
    id: string
    title?: string
    image?: Strapi.Media
  }
  interface Settings {
    navbarStyle?: 'light' | 'dark'
  }
  interface Card {
    id: number
    title?: string
    overview?: string
    buttonText?: string
    buttonUrl?: string
    image?: Strapi.Media
  }
  interface ContentTable {
    id: number
    title?: string
    content?: string
  }
  interface PlatformTable {
    name?: string
    rating?: number
  }
  interface Customers {
    name?: string
    logo?: Strapi.Media
    website?: string
  }
  interface CategoryProduct {
    id: number
    attributes?: {
      name?: string
      isOperatingSystem?: boolean
    }
  }
  interface Product {
    id: number
    attributes?: {
      name: string
      slug: string
      summary?: string
      description?: string
      startPrice?: string
      featuredProduct?: boolean
      contentTable?: Component.ContentTable[]
      platformRating?: Component.PlatformTable[]
      productMarketplace?: Component.ButtonWithStyle[]
      customers?: {
        data?: {
          id: number
          attributes?: Component.Customers
        }[]
      }
      service?: {
        data?: {
          id: number
          attributes?: Service
        }
      }
      product_instance?: {
        data?: {
          id: number
          attributes?: {
            name?: string
          }
        }
      }
      metadata?: SEO.Metadata
      contentSections?: any
    }
  }
  interface Platform {
    id: number
    attributes?: {
      name?: string
      logo?: Strapi.Media
    }
  }
  interface JobType {
    name?: string
    createdAt: Date | string
  }
  interface Career {
    id: string
    attributes?: {
      contentSection?: {
        content?: string
        description?: string
        id: number
        title?: string
      }[]
      createdAt: Date | string
      description?: string
      position?: string
      positionCode?: string
      publishedAt?: Date | string
      typeJob?: {
        data?: {
          id: number
          attributes?: JobType
        }
      }
    }
  }
  interface CategoryInsight {
    id: number
    attributes?: {
      color?: string
      name?: string
      popular?: boolean
    }
  }
  interface Insight {
    content?: string
    createdAt: Date | string
    excerpt?: string
    image?: Strapi.Media
    overview?: string
    publishedAt?: Date | string
    slug?: string
    title?: string
    updatedAt?: string
    categoryInsight?: {
      data?: CategoryInsight
    }
    relatedInsights?: {
      data: Insight[]
    }
    author?: {
      data?: {
        id: number
        attributes?: {
          name?: string
          photo?: Strapi.Media
        }
      }
    }
  }
  interface InsightResponse {
    id: string
    attributes?: Insight
  }
  interface Service {
    createdAt: Date | string
    description?: string
    logo?: Strapi.Media
    publishedAt?: Date | string
    title: string
    updatedAt?: Date | string
    link?: Link
  }
  interface ServiceResponse {
    id: string
    attributes?: Service
  }
}
