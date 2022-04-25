import { NextSeo } from 'next-seo'

import Sections from '@components/DynamicSections'
import { MainLayout } from '@components/Layouts/MainLayout'
import { JobDetailSection } from '@components/PageChunk/CareerDetail'
import api from '@services/api'
import routes from '@src/config/routes'
import { extendSEO } from '@src/config/seo'

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
  contentSections?: any
}

interface CareerDetailPageProps {
  data?: {
    id: number
    attributes?: Career
  }
}
const CareerDetailPage: NextLayoutComponentType<CareerDetailPageProps> = ({ data }) => {
  return (
    <div className="career-page">
      <NextSeo {...extendSEO(routes.en.product.seo)} />
      <JobDetailSection data={data?.attributes} />
      <Sections sections={data?.attributes?.contentSections} />
    </div>
  )
}

CareerDetailPage.getLayout = function getLayout(page) {
  return <MainLayout children={page} />
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = ctx?.query
  const positionCode = query?.positionCode?.toString()

  const data = await api
    .get(`/careers?filters[positionCode][$eq]=${positionCode}&populate=*&resPopulate=contentSection`)
    .then(({ data }) => data?.data?.[0])
    .catch(() => null)

  return {
    props: {
      positionCode,
      data
    }
  }
}
export default CareerDetailPage
