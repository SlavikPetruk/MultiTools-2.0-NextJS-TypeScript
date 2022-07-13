import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <header>
        <Header />
      </header>

      <div className="app-wrapper">
        
          <Component {...pageProps} />
        
      </div>

      <footer className="footer">
        Petruk Yaroslav 2022
      </footer>
      
    </>
  )
}

export default MyApp
