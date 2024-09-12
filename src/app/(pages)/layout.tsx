import { CalendlyView } from '@/components/calendly-view'
import { Footer } from '@/components/footer'

import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
            <section className="flex w-full flex-col items-center pb-5">
              <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 lg:text-left">
                Agende um bate papo sem compromisso para saber mais
              </h2>
              <article className="flex w-full flex-col items-center ">
                <CalendlyView />
                <span className="text-center text-xs">ou</span>
                <Button asChild variant={'outline'} className="max-w-56">
                  <Link
                    target="_blank"
                    href={'https://calendly.com/pontes014/30min'}
                  >
                    Clique aqui
                  </Link>
                </Button>
              </article>
            </section>
          </div>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}
