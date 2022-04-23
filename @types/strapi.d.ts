declare namespace Strapi {
  interface Media {
    data: {
      id: string | number
      attributes: {
        alternativeText?: string
        mime: string
        url: string
        formats: Record<string, any>
      }
    }
  }
}
