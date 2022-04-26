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
  const metadataWithDefaults = {
    ...global?.attributes?.metadata,
    ...data?.attributes?.metadata
  }

  return (
    <MainLayout metadata={global}>
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
      `/products?filters[slug][$eq]=${slug}&populate=*&resPopulate=contentTable,platformRating,productMarketplace,metadata,customers,customers.logo`
    )
    .then(({ data }) => data?.data?.[0])
    .catch(() => null)
  console.log(data)
  return {
    props: {
      slug,
      global: globalLocale?.data,
      data: data || null
    }
  }
}
export default ProductDetailPage
