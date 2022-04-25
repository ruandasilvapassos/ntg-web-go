import { AxiosRequestConfig } from 'axios'
import useSWR from 'swr'

import { fetcher } from '@services/fetcher'

type UseFetcher = <T>(
  url: string | null,
  params?: AxiosRequestConfig
) => { data: T; isLoading: boolean; isError: any; mutate?: any; count?: number; meta?: Strapi.Meta }

export const useFetcher: UseFetcher = (url, params) => {
  const { data, error, mutate } = useSWR(typeof url === 'string' ? [url, params] : null, fetcher)
  return {
    data: data?.data,
    meta: data?.meta,
    count: data?.count,
    mutate,
    isLoading: !error && !data,
    isError: error
  }
}

export const useCustomFetcher: UseFetcher = (url, params) => {
  const { data, error, mutate } = useSWR(typeof url === 'string' ? [url, params] : null, fetcher)
  return {
    data: data,
    mutate,
    isLoading: !error && !data,
    isError: error
  }
}
