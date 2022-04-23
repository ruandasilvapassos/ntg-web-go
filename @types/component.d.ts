declare namespace Component {
  interface Link {
    id: number
    url?: string
    title?: string
    target?: '_self' | '_blank' | '_parent' | '_top'
    text?: string
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
    description?: string
    buttonText?: string
    buttonUrl?: string
    image?: Strapi.Media
  }
}
