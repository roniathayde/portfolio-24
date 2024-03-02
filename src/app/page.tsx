import Image from 'next/image'
import AvatarImage from '../assets/images/avatar-on-computer.svg'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 gap-5 ">
        <article className="pt-7">
          <h1 className="mb-6 max-w-80 text-2xl font-semibold text-slate-700">
            Oi, eu sou Roni, um{' '}
            <span className="  bg-gradient-to-l from-[#9CC2FF] via-[#547AFF] to-[#263789] bg-clip-text  text-transparent ">
              software developer
            </span>{' '}
            com paixão no Front End
          </h1>

          <ul>
            <li className="flex items-center gap-1">
              Desenvolvedor fullstack na
              <Link
                href="https://suryamkt.com.br"
                target="_blank"
                className="flex items-center font-semibold"
              >
                SuryaMKT <ArrowUpRight className="size-5 stroke-[3]" />
              </Link>
            </li>
            <li className="flex items-center gap-1">
              Formado pela
              <Link
                href="https://www.uninove.br"
                target="_blank"
                className="flex items-center font-semibold"
              >
                Uninove <ArrowUpRight className="size-5 stroke-[3]" />
              </Link>
            </li>
            <li className="flex items-center gap-1">
              Inspirado em soluções
              <Link href="/contato" className="flex items-center font-semibold">
                inovadoras
                <ArrowUpRight className="size-5 stroke-[3]" />
              </Link>
            </li>
          </ul>
        </article>
        <article>
          <Image
            src={AvatarImage}
            width={380}
            height={362}
            alt="imagem ilustrativa de um avatar mexendo no computador"
          />
        </article>
      </section>
    </>
  )
}
