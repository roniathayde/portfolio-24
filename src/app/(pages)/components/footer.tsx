import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex  justify-center border-t ">
      <div className="flex w-full max-w-screen-xl flex-col gap-5 px-8 py-10 lg:flex-row">
        <div className="flex-1 ">
          <span className="text-3xl font-bold tracking-tight text-foreground">
            Roni Lucas
          </span>
        </div>
        <div className="flex flex-1 flex-col">
          <span className="mb-3  text-3xl font-semibold tracking-tight text-foreground ">
            Bom te ver aqui!
          </span>
          <span className="mb-2 text-sm font-medium text-foreground">
            pontes014@gmail.com
          </span>
          <span className="mb-2 text-sm font-medium text-foreground">
            Feito com amor &#169; por Roni Lucas
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-0">
          <span className="mb-3 text-xl font-semibold text-foreground">
            Conteúdo
          </span>
          <Link href="/" className="mb-2 text-sm font-medium text-foreground">
            Trabalhos
          </Link>
          <Link href="/" className="mb-2 text-sm font-medium text-foreground">
            Sobre mim
          </Link>
          <Link href="/" className="mb-2 text-sm font-medium text-foreground">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  )
}
