import ConfigProvider from 'antd/lib/config-provider'
import type { AppProps } from 'next/app'
import NavigationBar from '../components/navigation-bar/NavigationBar'
import { themeMain } from '../styles/theme'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={themeMain}>
      <section className="flex h-screen flex-col px-10">
        <NavigationBar />
        <Component {...pageProps} />
      </section>
    </ConfigProvider>
  )
}
