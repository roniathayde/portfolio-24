'use client'

import { Footer } from './components/footer'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import { Header } from './components/header'

export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className="flex  max-h-screen items-center overflow-hidden  ">
        <ScrollArea.Root className="w-full justify-center " type="hover">
          <ScrollArea.Viewport className="flex max-h-screen flex-col items-center overflow-y-scroll   px-14 py-7 ">
            <div className="flex  justify-center">
              <div className="flex  w-full max-w-4xl flex-col   gap-24 px-8 py-28">
                {children}
              </div>
            </div>
          </ScrollArea.Viewport>

          <ScrollArea.Scrollbar
            className=" flex  w-1 translate-y-1.5  flex-col bg-[#3d3d5a]"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="relative rounded-lg bg-[#9CC2FF] " />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </main>
      <Footer />
    </>
  )
}
