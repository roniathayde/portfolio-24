import Link from 'next/link'

export function Header() {
  return (
    <header className="z-1 sticky top-0 border-b bg-gray-50">
      <div className="ml-auto mr-auto flex max-w-screen-xl justify-between px-8 py-9">
        <span className="text-3xl font-bold tracking-tight text-slate-700">
          Roni Lucas
        </span>
        <nav className="flex gap-8">
          <Link href="/" className="font-medium text-slate-700">
            Trabalhos
          </Link>
          <Link href="/sobre-mim" className="font-medium text-slate-700">
            Sobre mim
          </Link>
          <Link href="/contato" className="font-medium text-slate-700">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}
