import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex  justify-center border-t ">
      <div className="flex w-full max-w-screen-xl flex-col gap-5 px-8 py-10 lg:flex-row">
        <div className="flex-1 ">
          <span className="text-3xl font-bold tracking-tight text-slate-700">
            Roni Lucas
          </span>
        </div>
        <div className="flex flex-1 flex-col">
          <span className="mb-3 bg-gradient-to-l from-[#9CC2FF] via-[#547AFF] to-[#263789] bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
            Bom te ver aqui!
          </span>
          <span className="mb-2 text-sm font-medium text-slate-500">
            pontes014@gmail.com
          </span>
          <span className="mb-2 text-sm font-medium text-slate-500">
            Feito com amor &#169; por Roni Lucas
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-0">
          <span className="mb-3 text-xl font-semibold text-slate-700">
            Conteúdo
          </span>
          <Link href="/" className="mb-2 text-sm font-medium text-slate-500">
            Trabalhos
          </Link>
          <Link href="/" className="mb-2 text-sm font-medium text-slate-500">
            Sobre mim
          </Link>
          <Link href="/" className="mb-2 text-sm font-medium text-slate-500">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  )
}
