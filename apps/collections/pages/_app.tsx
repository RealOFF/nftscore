import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { Layout } from '../components/layout'
import './styles.css'

function CustomApp({ Component, pageProps }: AppProps) {

useEffect(() => {
  document.documentElement.classList.add('dark')
}, [])

  return (
    <>
      <Head>
        <title>Welcome to collections!</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default CustomApp
