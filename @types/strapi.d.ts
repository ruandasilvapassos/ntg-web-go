declare namespace Strapi {
  interface MediaAttributes {
    alternativeText?: string
    mime: string
    url: string
    formats: Record<string, any>
  }
  interface MediaData {
    id: string | number
    attributes: MediaAttributes
  }
  interface Media {
    data: MediaData
  }
}
