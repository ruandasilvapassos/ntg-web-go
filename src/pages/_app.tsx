import '@styles/index.scss'
import '@shared/styles/vendor/nucleo/nucleo-icons.css'
import '@shared/styles/vendor/nucleo/nucleo-svg.css'

import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'

import type { AppLayoutProps } from 'next/app'

import type { NextWebVitalsMetric } from 'next/app'

const CONSOLE_STYLE = {
  ok: ['color: #fff'].join(';'),
  warn: ['color: #ff0000'].join(';')
}

/**
 * Measuring performance
 * you can disable if it's not necessary
 * @param metric NextWebVitalsMetric
 */
export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  // disable it in production
  if (process.env.NODE_ENV === 'production') return
  const VALUE: number = parseFloat((metric.value / 1000).toFixed(3))
  const STYLE: string = VALUE > 3 ? CONSOLE_STYLE.warn : CONSOLE_STYLE.ok

  switch (metric.name) {
    case 'Next.js-hydration':
      // Length of time it takes for the page to start and finish hydrating (in ms)
      console.info(`%cFirst load render finish in: ${VALUE}s`, STYLE)
      break
    case 'Next.js-render':
      // Length of time it takes for a page to finish render after a route change (in ms)
      console.info(`%cFinish rendering in: ${VALUE}s`, STYLE)
      break
    default:
      break
  }
}

const _APP = ({ Component, pageProps }: AppLayoutProps) => {
  const { pathname } = useRouter()
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
    }
  }, [pathname])

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
    </>
  )
}

export default _APP
