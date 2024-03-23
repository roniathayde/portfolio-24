import type { Metadata } from 'next'

import './globals.css'
import { Layout } from './_layout'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trabalhos | Roni Lucas',
  description: 'Um projeto criado com muito amor por Roni Lucas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="pt-br" className="">
        <body
          className={` max-h-screen overflow-hidden bg-gray-50 dark:bg-slate-800 ${inter.className}`}
        >
          <Layout>{children}</Layout>
        </body>
      </html>
      <Analytics />
    </>
  )
}
