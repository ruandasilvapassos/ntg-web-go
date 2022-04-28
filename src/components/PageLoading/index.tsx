import Router from 'next/router'
import NProgress from 'nprogress'

let timer: ReturnType<typeof setTimeout>
let activeRequests = 0
let timedout: ReturnType<typeof setTimeout>
const delay = 250

function load() {
  timer = setTimeout(function () {
    NProgress.start()
  }, delay) // only show progress bar if it takes longer than the delay
}

function stop() {
  if (activeRequests > 0) {
    return
  }
  clearTimeout(timer)
  clearTimeout(timedout)
  NProgress.done()
}

Router.events.on('routeChangeStart', load)
// Router.events.on('ro')
Router.events.on('routeChangeComplete', stop)
Router.events.on('routeChangeError', stop)

const originalFetch = window.fetch

window.fetch = async function (...args) {
  // if (activeRequests === 0) {
  //   load()
  //   console.log('kesini gak')
  // }
  activeRequests++
  try {
    const response = await originalFetch(...args)
    return response
  } catch (error) {
    return Promise.reject(error)
  } finally {
    activeRequests -= 1
    if (activeRequests === 0) {
      stop()
    }
  }
}

export default function LoadingPage() {
  return null
}
