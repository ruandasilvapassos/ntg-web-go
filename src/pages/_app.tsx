import '@styles/index.scss'
import '@shared/styles/vendor/nucleo/nucleo-icons.css'
import '@shared/styles/vendor/nucleo/nucleo-svg.css'

import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import App from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useCookie } from 'react-use'

import { CookieBlock } from '@components/Modals/CookieBlock'
import api from '@services/api'

import type { AppContext, AppLayoutProps } from 'next/app'
dayjs.extend(relativeTime)

const _APP = ({ Component, pageProps }: AppLayoutProps) => {
  const { pathname } = useRouter()
  const [value, updateCookie] = useCookie('agree-cookie')
  const [showCookie, setShowCookie] = useState(false)

  const getLayout = Component.getLayout ?? ((page) => page)

  if (api) {
    api.defaults.params = {}
    api.defaults.params['locale'] = pageProps?.locale || 'en'
  }
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
    <>
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

      {getLayout(<Component {...pageProps} />)}
      <Toaster />
      {showCookie && (
        <CookieBlock state={showCookie} handleUseCookie={handleUseCookie} onClose={() => setShowCookie(false)} />
      )}
    </>
  )
}

_APP.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  const locale = appContext.ctx?.locale
  return { pageProps: { ...appProps.pageProps, locale } }
}

export default _APP
