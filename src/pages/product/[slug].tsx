import { NextSeo } from 'next-seo'

import { ConnectCTA } from '@components/CTAs/ConnectCTA'
import { MainLayout } from '@components/Layouts/MainLayout'
import { BlockQuote, ProductDetail, ProductDetailTab } from '@components/PageChunk/Product'
import { FeaturedProduct } from '@components/Section'
import routes from '@src/config/routes'
import { extendSEO } from '@src/config/seo'

import type { NextLayoutComponentType } from 'next'
const ProductDetailPage: NextLayoutComponentType = () => {
  return (
    <div className="product-page">
      <NextSeo {...extendSEO(routes.en.home.seo)} />
      {/* Product detail section */}
      <section className="py-lg-7 py-5 bg-gray-100">
        <div className="container">
          <ProductDetail />
          <ProductDetailTab />
        </div>
      </section>
      {/* Product testimonial / blockquote section */}
      <BlockQuote />
      {/* Featured Product section */}
      <FeaturedProduct />
      {/* CTA Section */}
      <ConnectCTA />
    </div>
  )
}

ProductDetailPage.getLayout = function getLayout(page) {
  return <MainLayout children={page} />
}

export default ProductDetailPage
