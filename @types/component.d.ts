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
      metadata?: SEO.Metadata
      contentSections?: any
    }
  }
}
