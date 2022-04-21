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
    }
  }
}

export default routes
