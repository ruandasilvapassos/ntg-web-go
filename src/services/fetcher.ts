import { AxiosRequestConfig } from 'axios'

import api from '@services/api'

export const fetcher = (url: string | null, locale?: 'id' | 'en' | 'disabled', config?: AxiosRequestConfig) => {
  if (typeof url !== 'string' || !url || url === '') return null
  let editedConfig = config
  // define locale, remove if its disabled
  if (locale && locale !== 'disabled') {
    editedConfig = {
      ...config,
      params: {
        locale
      }
    }
  }
  if (locale === 'disabled') {
    delete api.defaults.params?.locale
  }
  return api
    .get(url, editedConfig)
    .then((res) => {
      return res.data
    })
    .catch(() => null)
}
