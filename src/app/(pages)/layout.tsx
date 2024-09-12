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
            <section className="flex flex-col items-center pb-5">
              <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 lg:text-left">
                Agende um bate papo sem compromisso para saber mais
              </h2>
              <article className="flex flex-col items-stretch ">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/pontes014/30min?hide_gdpr_banner=1"
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
                <script
                  type="text/javascript"
                  src="https://assets.calendly.com/assets/external/widget.js"
                  async
                ></script>
                <span className="text-center text-xs">ou</span>
                <Button asChild variant={'outline'}>
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
