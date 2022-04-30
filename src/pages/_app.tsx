import '@styles/index.scss'
import '@shared/styles/vendor/nucleo/nucleo-icons.css'
import '@shared/styles/vendor/nucleo/nucleo-svg.css'

import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { identity, pickBy } from 'lodash'
import App from 'next/app'
import dynamic from 'next/dynamic'
import Error from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect, useMemo, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { IntlProvider } from 'react-intl'
import { useCookie } from 'react-use'
import { SWRConfig } from 'swr'

import { CookieBlock } from '@components/Modals/CookieBlock'
import api, { getGlobalData } from '@services/api'
import EN from '@shared/locales/out/en.json'
import ES from '@shared/locales/out/es.json'

import type { AppContext, AppLayoutProps } from 'next/app'
dayjs.extend(relativeTime)

const LoadingPage: any = dynamic(
  () => {
    return import('@components/PageLoading')
  },
  { ssr: false }
)

const _APP = ({ Component, pageProps }: AppLayoutProps) => {
  const [shortLocale] = pageProps?.locale ? pageProps?.locale.split('-') : ['en']
  const metadata = pageProps?.metadata
  const globalMeta = pageProps?.globalMeta

  const metadataWithDefaults = {
    ...pickBy(globalMeta?.data?.attributes?.metadata, identity),
    ...pickBy(metadata, identity)
  }

  const { locale, pathname, events } = useRouter()
  const [value, updateCookie] = useCookie('agree-cookie')
  const [showCookie, setShowCookie] = useState(false)

  const Components: any = Component
  const getLayout = Component.getLayout ?? ((page) => page)

  useEffect(() => {
    // create a dom to force script to re-fetch each page change
    // it fix nav pills issue on product list
    const script = document.createElement('script')
    script.src = '/static/js/material-kit-pro.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      script.src = ''
      document.body.appendChild(script)
      api.defaults.params = {}
    }
  }, [pathname])

  const handleRouteChange = (url: string) => {
    if (typeof window?.gtag !== 'undefined' && metadataWithDefaults?.gtagID) {
      window.gtag('config', metadataWithDefaults?.gtagID, {
        page_path: url
      })
    }
  }

  useEffect(() => {
    events.on('routeChangeComplete', handleRouteChange)
    return () => {
      events.off('routeChangeComplete', handleRouteChange)
    }
  }, [events])

  useEffect(() => {
    if (api) {
      api.defaults.params = {}
      api.defaults.params['locale'] = locale || 'en'
    }
  }, [locale])

  const messages: Record<string, any> = useMemo(() => {
    switch (shortLocale) {
      case 'es':
        return ES
      case 'en':
        return EN
      default:
        return EN
    }
  }, [shortLocale])

  const handleUseCookie = (accept?: boolean) => {
    if (accept) {
      updateCookie('1')
    } else {
      updateCookie('0')
    }
  }

  useEffect(() => {
    if (value) {
      setShowCookie(false)
    } else {
      setShowCookie(true)
    }
  }, [value])
  return (
    <IntlProvider locale={shortLocale} messages={messages} onError={() => <Error statusCode={500} />}>
      <Head>
        <link rel="icon" type="image/ico" href="/static/icons/logo.ico"></link>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/img/apple-icon.png" />
        <link rel="icon" type="image/png" href="/static/img/favicon.png" />
        <title>Ntegral</title>
        <meta name="robots" content="index, follow" />
      </Head>
      {/* define google tag, throw nothing if its empty */}
      {metadataWithDefaults?.gtagID && (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${metadataWithDefaults?.gtagID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${metadataWithDefaults?.gtagID}');`}
          </Script>
        </>
      )}
      <Script src="/static/js/core/popper.min.js" />
      <Script src="/static/js/core/bootstrap.min.js" />
      <Script src="https://kit.fontawesome.com/42d5adcbca.js" />

      <SWRConfig
        value={{
          revalidateOnFocus: false
        }}>
        <LoadingPage />
        {getLayout(<Components {...pageProps} />)}
      </SWRConfig>
      <Toaster />
      {showCookie && (
        <CookieBlock state={showCookie} handleUseCookie={handleUseCookie} onClose={() => setShowCookie(false)} />
      )}
    </IntlProvider>
  )
}

_APP.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  const locale = appContext.ctx?.locale
  const query = appContext?.ctx?.query
  const slug = query?.slug?.toString()

  const globalMeta = await getGlobalData(locale)

  const metadata = await api
    .get(`/pages?filters[slug][$eq]=${slug || ''}&locale=${locale}&populate=metadata`)
    .then(({ data }) => data?.data?.[0])
    .catch(() => null)

  return { pageProps: { ...appProps.pageProps, metadata, globalMeta, locale } }
}

export default _APP
