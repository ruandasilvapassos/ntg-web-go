export interface StrapiMedia {
  id: number | string
  alternativeText?: string
  caption?: string
  createdAt?: Date | string
  ext?: string
  formats?: Record<string, string>
  hash?: string
  height?: number
  mime?: string
  name?: string
  previewUrl?: string
  provider?: string
  provider_metadata?: string
  size?: number
  updatedAt?: Date | string
  url?: string
  width?: number
}

type UploaderFn = (file: File) => Promise<StrapiMedia | null>

export class Uploader {
  private url: string

  constructor() {
    this.url = `${process.env.API_URL || 'http://localhost:1337/api'}/upload`
  }

  private uploader: UploaderFn = async (file) => {
    const formData = new FormData()
    formData.append('files', file)
    return await fetch(this.url, {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((data) => data?.[0])
      .catch(() => null)
  }

  /**
   * Upload single file
   * @param {File} file - Single file
   * @param callback - Define callback when upload is complete, return null if error
   * @returns callback
   */
  public async upload(file: File, callback?: (res?: StrapiMedia | null) => void) {
    if (!file) return
    const files = Array.isArray(file) ? (file as File[])?.[0] : file
    await this.uploader(files)
      .then((data) => callback && callback(data))
      .catch(() => callback && callback(null))
  }

  /**
   * Upload multiple files at once
   * @param {File[]} files - Array of files
   * @param callback - Define callback when upload is complete, return null if error
   * @returns Promise<callback>
   */
  public async bulkUpload(files: FileList | File[], callback?: (res?: (StrapiMedia | null)[] | null) => void) {
    if (!files) return
    const promises = []
    for (let index = 0; index < files.length; index++) {
      const file = Array.isArray(files) ? files[index] : files?.item(index)
      if (file && typeof file === 'object') {
        promises.push(this.uploader(file))
      } else {
        promises.push(null)
      }
    }
    await Promise.all(promises)
      .then((results) => {
        if (results?.length === 0) {
          callback && callback(null)
          return
        }
        callback && callback(results)
      })
      .catch(() => {
        callback && callback(null)
      })
  }
}
