import './globals.css'

import { Analytics } from "@vercel/analytics/next"

import type { Metadata } from 'next';

import { Syne } from 'next/font/google';
const syne = Syne({ subsets: ['latin'] , weight: ['700']});
 
//import header
import Header from '../components/header';

// import footer 
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: 'HDeveloper - Web Development',
  description: 'Portfolio website to show my skills and experience with Web Development'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={syne.className}>
      <link href="https://fonts.googleapis.com/css2?family=Archivo&display=swap" rel="stylesheet" />
        <Header />
        {children }
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
