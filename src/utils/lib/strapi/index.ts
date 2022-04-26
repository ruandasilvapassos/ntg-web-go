import { StrapiMedia, Uploader } from './uploader'

type Upload = (file: File, callback?: (res?: StrapiMedia | null) => void) => Promise<void>
type BulkUpload = (file: FileList | File[], callback?: (res?: (StrapiMedia | null)[] | null) => void) => Promise<void>

interface BaseInterface {
  upload: Upload
  bulkUpload: BulkUpload
}

class Base implements BaseInterface {
  /**
   * Upload single file
   * @param file - Single file
   * @param callback - Define callback when upload is complete, return null if error
   * @returns callback
   */
  upload: Upload = async (file, callback) => {
    const uploader = new Uploader()
    return await uploader.upload(file, callback)
  }
  /**
   * Upload multiple files at once
   * @param files - Array of files
   * @param callback - Define callback when upload is complete, return null if error
   * @returns Promise<callback>
   */
  bulkUpload: BulkUpload = async (files, callback) => {
    const uploader = new Uploader()
    return await uploader.bulkUpload(files, callback)
  }
}

export const Strapi = new Base()
