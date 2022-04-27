import '@styles/index.scss'
import '@shared/styles/vendor/nucleo/nucleo-icons.css'
import '@shared/styles/vendor/nucleo/nucleo-svg.css'

import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import App from 'next/app'
import Error from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect, useMemo, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { IntlProvider } from 'react-intl'
import { useCookie } from 'react-use'

import { CookieBlock } from '@components/Modals/CookieBlock'
import api from '@services/api'
import EN from '@shared/locales/out/en.json'
import ES from '@shared/locales/out/es.json'

import type { AppContext, AppLayoutProps } from 'next/app'
dayjs.extend(relativeTime)

const _APP = ({ Component, pageProps }: AppLayoutProps) => {
  const [shortLocale] = pageProps?.locale ? pageProps?.locale.split('-') : ['en']
  const { locale, pathname } = useRouter()
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
      <Script src="/static/js/core/popper.min.js" />
      <Script src="/static/js/core/bootstrap.min.js" />
      <Script src="https://kit.fontawesome.com/42d5adcbca.js" />

      {getLayout(<Components {...pageProps} />)}
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
  return { pageProps: { ...appProps.pageProps, locale } }
}

export default _APP
