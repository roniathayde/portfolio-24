import { Footer } from '@/components/footer'

import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme/theme-provider'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <main className="flex w-full flex-col items-center  justify-center   ">
          <div className="flex w-full flex-col items-center justify-center">
            {children}
          </div>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}
