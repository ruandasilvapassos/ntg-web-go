import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Sections from '@components/DynamicSections'
import { MainLayout } from '@components/Layouts/MainLayout'
import { ProductDetail, ProductDetailTab } from '@components/PageChunk/Product'
import SEO from '@components/SEO'
import api, { getGlobalData } from '@services/api'

import type { GetServerSidePropsContext, NextLayoutComponentType } from 'next'
interface ProductDetailPageProps {
  data?: Component.Product
  global?: any
}
const ProductDetailPage: NextLayoutComponentType<ProductDetailPageProps> = ({ data, global }) => {
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
      <div className="product-page">
        <SEO {...metadataWithDefaults} />
        {/* Product detail section */}
        <section className="py-lg-7 py-5 bg-gray-100">
          <div className="container">
            <ProductDetail data={data} />
            <ProductDetailTab data={data} />
          </div>
        </section>
        <Sections sections={data?.attributes?.contentSections} />
      </div>
    </MainLayout>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = ctx?.query
  const slug = query?.slug?.toString()
  const { locale } = ctx

  const globalLocale = await getGlobalData(locale)

  const data = await api
    .get(
      `/products?filters[slug][$eq]=${slug}&populate=*&resPopulate=contentTable,platformRating,productMarketplace,metadata,customers,customers.logo,product_instance`
    )
    .then(({ data }) => data?.data?.[0])
    .catch(() => null)
  // console.log(data)
  return {
    props: {
      slug,
      global: globalLocale?.data,
      data: data || null
    }
  }
}
export default ProductDetailPage
