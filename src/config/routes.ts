import { defaultSEO, extendSEO } from './seo'

const routes = {
  en: {
    home: {
      label: 'Home',
      path: '/',
      seo: extendSEO({
        ...defaultSEO.en,
        title: 'Ntegral | Home'
      })
    },
    product: {
      label: 'Product',
      path: '/',
      seo: extendSEO({
        ...defaultSEO.en,
        title: 'Ntegral | Product'
      })
    }
  },
  es: {
    home: {
      label: 'Casa',
      path: '/',
      seo: extendSEO({
        ...defaultSEO.en,
        title: 'Ntegral | Casa'
      })
    },
    product: {
      label: 'Home',
      path: '/',
      seo: extendSEO({
        ...defaultSEO.en,
        title: 'Ntegral | Home'
      })
    }
  }
}

export default routes
