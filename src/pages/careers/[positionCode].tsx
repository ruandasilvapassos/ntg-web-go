import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Sections from '@components/DynamicSections'
import { MainLayout } from '@components/Layouts/MainLayout'
import { JobDetailSection } from '@components/PageChunk/CareerDetail'
import SEO from '@components/SEO'
import api, { getGlobalData } from '@services/api'

import type { GetServerSidePropsContext, NextLayoutComponentType } from 'next'
export interface Career {
  position?: string
  description?: string
  createdAt: Date | string
  updatedAt?: Date | string
  publishedAt?: Date | string
  positionCode: string
  contentSection?: {
    id: number
    title?: string
    content?: string
    description?: string
  }[]
  metadata?: SEO.Metadata
  contentSections?: any
}

interface CareerDetailPageProps {
  global?: any
  data?: {
    id: number
    attributes?: Career
  }
}
const CareerDetailPage: NextLayoutComponentType<CareerDetailPageProps> = ({ data, global }) => {
  const router = useRouter()

  const metadataWithDefaults = {
    ...global?.attributes?.metadata,
    ...data?.attributes?.metadata
  }

  const handleRouteChange = (url: string) => {
    if (typeof window?.gtag !== 'undefined' && metadataWithDefaults?.gtagID) {
      window.gtag('config', metadataWithDefaults?.gtagID, {
        page_path: url
      })
    }
  }

  useEffect(() => {
    router?.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router?.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router?.events])
  return (
    <MainLayout metadata={global}>
      <Head>
        {global?.attributes?.favicon?.data?.attributes?.url && (
          <link rel="icon" type="image/png" href={global?.attributes?.favicon?.data?.attributes?.url} />
        )}
      </Head>
      <div className="career-page">
        <SEO {...metadataWithDefaults} />
        <JobDetailSection data={data?.attributes} />
        <Sections sections={data?.attributes?.contentSections} />
      </div>
    </MainLayout>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = ctx?.query
  const positionCode = query?.positionCode?.toString()

  const { locale } = ctx

  const globalLocale = await getGlobalData(locale)

  const data = await api
    .get(`/careers?filters[positionCode][$eq]=${positionCode}&populate=*&resPopulate=contentSection`)
    .then(({ data }) => data?.data?.[0])
    .catch(() => null)

  return {
    props: {
      positionCode,
      global: globalLocale?.data,
      data
    }
  }
}
export default CareerDetailPage
