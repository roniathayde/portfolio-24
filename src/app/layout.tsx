import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/header'
import { Footer } from './components/footer'

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
    <html lang="pt-br" className="">
      <body className={`bg-gray-50 ${inter.className}`}>
        <Header />
        <main className="flex  justify-center">
          <div className="w-full max-w-4xl px-8 py-28">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
