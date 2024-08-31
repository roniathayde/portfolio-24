import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="pt-br" className="">
        <body
          className={` bg-background max-h-screen overflow-hidden ${inter.className}`}
        >
          {children}
        </body>
      </html>
      <Analytics />
    </>
  )
}
