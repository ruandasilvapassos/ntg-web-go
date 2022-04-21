import { NextSeo } from 'next-seo'

import { ConnectCTA } from '@components/CTAs/ConnectCTA'
import { MainLayout } from '@components/Layouts/MainLayout'
import { FeaturedProduct, ProductList } from '@components/Section'
import routes from '@src/config/routes'
import { extendSEO } from '@src/config/seo'

import type { NextLayoutComponentType } from 'next'

const ProductListPage: NextLayoutComponentType = () => {
  return (
    <div className="product-page">
      <NextSeo {...extendSEO(routes.en.product.seo)} />
      {/* Explore More section */}
      <ProductList
        title="Ntegral Products"
        description="Find the right products to enable technology transformation across your enterprise and run mission-critical processes efficiently and securely – today and as your business needs evolve."
        className="py-lg-7 pt-lg-10"
      />
      {/* Featured Product section */}
      <FeaturedProduct />
      <ConnectCTA />
    </div>
  )
}

ProductListPage.getLayout = function getLayout(page) {
  return <MainLayout children={page} />
}

export default ProductListPage
