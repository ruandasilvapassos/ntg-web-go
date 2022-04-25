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
  interface Meta {
    pagination?: {
      start?: number
      limit?: number
      page?: number
      pageSize?: number
      pageCount?: number
      total?: number
    }
  }
}
