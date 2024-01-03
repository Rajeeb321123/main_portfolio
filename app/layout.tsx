import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from './components/footer'
import ThemeSwitch from './components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'
import Globe from './components/globe/globe'
import Contact from './components/contact'
// import StarsCanvas from './components/stars-canvas'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rajeeb | Personal Porfolio',
  description: 'Rajeeb is a full stack developer wiht 1 year of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}

            <div
              className='
              flex 
              items-center
              px-4
              m-auto
              max-w-[55rem]
              '
            >
              <div
                className='m-auto lg:grid lg:grid-cols-2 gap-4 mb-20 '
              >
                <Contact/>
              <div
                className='hidden lg:flex lg:items-center w-full h-full max-w-[55rem]'
                >
                <Globe/>
              </div>
              </div>
            </div>
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        {/* <StarsCanvas/> */}

      </body>
    </html>
  )
}
