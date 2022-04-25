import { NextSeo } from 'next-seo'

import { MainLayout } from '@components/Layouts/MainLayout'
import { ContactForm, ContactHero } from '@components/PageChunk/Contact'
import routes from '@src/config/routes'
import { extendSEO } from '@src/config/seo'

import type { NextLayoutComponentType } from 'next'
const ContactPage: NextLayoutComponentType = () => {
  return (
    <div className="product-page">
      <NextSeo {...extendSEO(routes.en.product.seo)} />
      <ContactHero />
      <ContactForm />
    </div>
  )
}

ContactPage.getLayout = function getLayout(page) {
  return <MainLayout children={page} navbarTheme="light" />
}

export default ContactPage
