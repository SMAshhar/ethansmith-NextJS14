import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import { usePathname } from 'next/navigation'

//components
import Nav from '@/components/Nav/nav'
import Header from '@/components/Header/header'
import TopLeftImg from '@/components/TopLeftImage/topleftimage'
import Transition from '@/components/Transition/transition'


const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800',]

})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`page text-white bg-slate-900 bg-blend-color-dodge bg-cover bg-no-repeat ${sora.variable} font-sora relative `}>

      <body className={sora.className}>
        <TopLeftImg />
        <Nav />
        <Header />
        <Transition />
        {children}
      </body>
    </html>
  )
}
