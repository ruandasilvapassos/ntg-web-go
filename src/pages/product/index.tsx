import { NextSeo } from 'next-seo'

import { ConnectCTA } from '@components/CTAs/ConnectCTA'
import { MainLayout } from '@components/Layouts/MainLayout'
import { FeaturedProduct, ProductList } from '@components/Section'
import routes from '@src/config/routes'
import { extendSEO } from '@src/config/seo'

import type { NextLayoutComponentType } from 'next'

const ProductListPage: NextLayoutComponentType = () => {
  return (
    <div className="home-page">
      <NextSeo {...extendSEO(routes.en.home.seo)} />
      {/* Explore More section */}
      <ProductList />
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
