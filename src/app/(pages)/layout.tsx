'use client'

import { Footer } from './components/footer'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import { Header } from './components/header'
import { ThemeProvider } from './components/theme/theme-provider'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <ScrollArea.Root className="w-full justify-center " type="hover">
          <ScrollArea.Viewport className="flex max-h-screen flex-col items-center overflow-y-scroll    ">
            <Header />
            <main className="flex w-full   justify-center   ">
              <div className="flex w-full justify-center">{children}</div>
            </main>
            <Footer />
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className=" flex  w-1 translate-y-1.5  flex-col bg-slate-600"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="relative rounded-lg bg-[#9CC2FF] " />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </ThemeProvider>
    </>
  )
}
