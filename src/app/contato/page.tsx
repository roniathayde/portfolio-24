import Image from 'next/image'

import ImagemHomemSentado from '../../assets/images/imagem-pagina-de-contato.svg'
import { FormContact } from './form-contact'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato | Roni Lucas',
  description:
    'Um desenvolvedor Fullstack com enfâse no usuário em 1º lugar. Saiba mais!',
  openGraph: {
    images: ['../../assets/images/roni-lucas-imagem-destacada 1.jpg'],
  },
}

export default function Contato() {
  return (
    <div className="flex  w-full max-w-6xl  gap-24 px-3 py-28 lg:px-8">
      <section className="flex w-full flex-col gap-10 lg:flex-row">
        <article>
          <h1 className="mb-7 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200">
            Entre em contato
          </h1>

          <FormContact />
        </article>
        <article className="flex justify-center">
          <Image
            src={ImagemHomemSentado}
            alt="imagem ilustrativa de um avatar de um homem sentado mexendo no notebook ao lado de uma janela com vista para as nuvens perto de sua estante de livros"
            width={417}
            height={417}
          />
        </article>
      </section>
    </div>
  )
}
