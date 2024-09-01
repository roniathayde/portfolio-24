import Link from 'next/link'
import { ModeToggle } from './theme/theme-toggle'

import { SheetDemo } from './offcanvas-menu'

export function Header() {
  return (
    <header className="z-1 sticky top-0 border-b bg-background">
      <div className="ml-auto mr-auto flex max-w-screen-xl items-center justify-between px-8 py-9">
        <Link
          href="/"
          className="text-xl font-bold leading-tight tracking-tight text-foreground md:text-3xl"
        >
          Roni Lucas
        </Link>
        <nav className="flex items-center  gap-2 lg:gap-8">
          <Link
            href="/"
            className="hidden font-medium text-foreground lg:flex lg:items-center"
          >
            Trabalhos
          </Link>
          <Link
            href="/sobre-mim"
            className="hidden font-medium text-foreground lg:flex lg:items-center"
          >
            Sobre mim
          </Link>
          <Link
            href="/contato"
            className="hidden font-medium text-foreground lg:flex lg:items-center"
          >
            Contato
          </Link>
          <Link
            href="/blog"
            className="hidden font-medium text-foreground lg:flex lg:items-center"
          >
            Blog
          </Link>
          <SheetDemo />
          <div className="flex ">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
