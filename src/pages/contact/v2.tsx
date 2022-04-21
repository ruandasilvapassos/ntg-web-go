import { NextSeo } from 'next-seo'

import { HelpCTA } from '@components/CTAs'
import { MainLayout } from '@components/Layouts/MainLayout'
import { ContactV2Form, ContactV2Hero } from '@components/PageChunk/Contact'
import routes from '@src/config/routes'
import { extendSEO } from '@src/config/seo'

import type { NextLayoutComponentType } from 'next'

const ContactPageV2: NextLayoutComponentType = () => {
  return (
    <div className="product-page">
      <NextSeo {...extendSEO(routes.en.product.seo)} />
      <ContactV2Hero />
      <HelpCTA />
      <ContactV2Form />
    </div>
  )
}

ContactPageV2.getLayout = function getLayout(page) {
  return <MainLayout children={page} navbarTheme="light" />
}

export default ContactPageV2
