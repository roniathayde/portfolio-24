import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Roni Lucas | Desenvolvedor Fullstack',
  description: 'Desenvolvedor Fullstack com experiência em frontend e backend.',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    images: ['https://www.ronilucas.com/opengraph-image.jpg'],
    authors: 'Roni Lucas',
    countryName: 'Brazil',
    emails: 'pontes014@gmail.com',
    firstName: 'Roni',
    lastName: 'Lucas',
    locale: 'pt-br',
  },
  twitter: {
    images: ['https://www.ronilucas.com/opengraph-image.jpg'],
    site: 'https://www.ronilucas.com',
  },
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['Desenvolvedor', 'Roni Lucas', 'Frontend', 'Backend', 'Fullstack'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="pt-br" className="">
        <body className={`  bg-background ${inter.className}`}>{children}</body>
      </html>
      <Analytics />
    </>
  )
}
