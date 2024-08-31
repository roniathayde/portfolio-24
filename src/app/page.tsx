import Image from 'next/image'
import AvatarImage from '../assets/images/avatar-on-computer.svg'
import ImageProject1 from '../assets/images/smartfix-imagem-ilustrativa-do-projeto-roni-lucas.png'
import ImageProject2 from '../assets/images/larynx-imagem-ilustrativa-do-projeto-roni-lucas.jpg'
import ImageProject3 from '../assets/images/hernia clinic imagem ilustrativa do projeto roni lucas.jpg'
import ImageProject4 from '../assets/images/grandha cosmeticos imagem ilustrativa do projeto roni lucas.png'
import ImageCourse1 from '../assets/images/rocketseat-cursos-realizados-ronilucas.png'
import ImageCourse2 from '../assets/images/programadorbr-igor-oliveira-cursos-realizados-ronilucas.jpg'
import ImageCourse3 from '../assets/images/otavio-miranda-cursos-realizados-ronilucas.png'
import ImageCourse4 from '../assets/images/servliv-cursos-realizados-ronilucas.png'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import type { Metadata } from 'next'
import Layout from './(pages)/layout'

export const metadata: Metadata = {
  title: 'Trabalhos | Roni Lucas',
  description:
    'Sites concluídos, cursos e projetos que realizei até aqui como desenvolvedor. Saiba mais!',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    images: ['https://www.ronilucas.com/opengraph-image.jpg'],
    authors: 'Roni Lucas',
    countryName: 'Brazil',
    emails: 'pontes014@gmail.com',
    firstName: 'Roni',
    lastName: 'Lucas',
    locale: 'pt-br',
  },
  twitter: {
    images: ['https://www.ronilucas.com/opengraph-image.jpg'],
    site: 'https://www.ronilucas.com',
  },
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'Trabalhos',
    'Roni Lucas',
    'Desenvolvedor',
    'Frontend',
    'Backend',
    'Fullstack',
  ],
}

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex  w-full max-w-4xl flex-col   gap-24 px-8 py-28">
          <section className="flex flex-col items-center gap-5 lg:grid lg:grid-cols-2  ">
            <article className="pt-7">
              <h1 className="mb-6 max-w-80 text-2xl font-semibold text-foreground">
                Oi, eu sou Roni, um{' '}
                <span className="  text-foreground ">software developer</span>{' '}
                com paixão no Front End
              </h1>

              <ul className="flex flex-col gap-3">
                <li className="flex flex-wrap items-center gap-1 leading-tight  text-foreground">
                  <span className="text-nowrap">
                    Desenvolvedor fullstack na
                  </span>
                  <Link
                    href="https://suryamkt.com.br"
                    target="_blank"
                    className="flex items-center font-semibold"
                  >
                    SuryaMKT <ArrowUpRight className="size-5 stroke-[3]" />
                  </Link>
                  &<span className="font-semibold">SuryaMED</span>
                </li>
                <li className="flex flex-wrap items-center gap-1 leading-tight text-foreground">
                  Formado pela
                  <Link
                    href="https://www.uninove.br"
                    target="_blank"
                    className="flex items-center font-semibold"
                  >
                    Uninove <ArrowUpRight className="size-5 stroke-[3]" />
                  </Link>
                </li>
                <li className="flex flex-wrap items-center gap-1 leading-tight text-foreground">
                  Inspirado em soluções
                  <Link
                    href="/contato"
                    className="flex items-center font-semibold"
                  >
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
          <section>
            <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-foreground lg:text-left">
              Sites concluídos
            </h2>
            <article className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-2">
              <Link
                href="https://smartfix.com.br/"
                target="_blank"
                className="flex flex-col gap-2 rounded  bg-muted p-3 "
              >
                <Image
                  src={ImageProject1}
                  alt="imagem do site smartfix desenvolvido por Roni Lucas"
                  className=" rounded"
                  width={380}
                  height={200}
                />
                <h3 className="font-bold text-foreground ">Smartfix</h3>
              </Link>
              <Link
                href="https://larynx.com.br/"
                target="_blank"
                className="flex flex-col gap-2 rounded bg-muted p-3"
              >
                <Image
                  src={ImageProject2}
                  alt="imagem do site Larynx desenvolvido por Roni Lucas"
                  className=" rounded"
                  width={380}
                  height={200}
                />
                <h3 className="font-bold text-foreground ">Larynx</h3>
              </Link>
              <Link
                href="https://herniaclinic.com.br/"
                target="_blank"
                className="flex flex-col gap-2 rounded bg-muted p-3"
              >
                <Image
                  src={ImageProject3}
                  alt="imagem do site MedguideXP desenvolvido por Roni Lucas"
                  className=" rounded"
                  width={380}
                  height={200}
                />
                <h3 className="font-bold text-foreground ">Hérnia Clinic</h3>
              </Link>
              <Link
                href="https://grandha.com.br/"
                target="_blank"
                className="flex flex-col gap-2 rounded bg-muted p-3"
              >
                <Image
                  src={ImageProject4}
                  alt="imagem do site ABCG desenvolvido por Roni Lucas"
                  className=" rounded"
                  width={380}
                  height={200}
                />
                <h3 className="font-bold text-foreground ">
                  Grandha Cosméticos
                </h3>
              </Link>
            </article>
          </section>

          <section>
            <h2 className="mb-6 text-center text-2xl  font-bold tracking-tight text-foreground lg:text-left">
              Alguns dos meus projetos
            </h2>
            <article className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-2">
              <Link
                href="https://github.com/roniathayde/feed-typescript"
                className="flex flex-col gap-2 rounded bg-muted px-5 py-4 hover:bg-muted-foreground/40 hover:transition-colors"
                target="_blank"
              >
                <h3 className="text-base font-semibold text-foreground">
                  feed
                </h3>
                <p className="text-sm font-normal text-foreground">
                  Um projeto de estudo para práticar conceitos de reactJS
                </p>
                <ArrowUpRight className="size-5 stroke-[3] dark:text-slate-200" />
              </Link>
              <Link
                href="https://github.com/roniathayde/pizzashop-web"
                className="flex flex-col gap-2 rounded bg-muted px-5 py-4 hover:bg-muted-foreground/40 hover:transition-colors"
                target="_blank"
              >
                <h3 className="text-base font-semibold text-foreground">
                  pizzashop-web
                </h3>
                <p className="text-sm font-normal text-foreground">
                  Um projeto de estudo para práticar conceitos de reactJS
                </p>
                <ArrowUpRight className="size-5 stroke-[3] dark:text-slate-200" />
              </Link>
              <Link
                href="https://github.com/roniathayde/nlx-expert-notes"
                className="flex flex-col gap-2 rounded bg-muted px-5 py-4 hover:bg-muted-foreground/40 hover:transition-colors"
                target="_blank"
              >
                <h3 className="text-base font-semibold text-foreground">
                  nlx-expert-notes
                </h3>
                <p className="text-sm font-normal text-foreground">
                  Um projeto de estudo para práticar conceitos de reactJS
                </p>
                <ArrowUpRight className="size-5 stroke-[3] dark:text-slate-200" />
              </Link>
              <Link
                href="https://github.com/roniathayde/tailwind-next"
                className="flex flex-col gap-2 rounded bg-muted px-5 py-4 hover:bg-muted-foreground/40 hover:transition-colors"
                target="_blank"
              >
                <h3 className="text-base font-semibold text-foreground">
                  tailwind-next
                </h3>
                <p className="text-sm font-normal text-foreground">
                  Um projeto de estudo para práticar conceitos de reactJS
                </p>
                <ArrowUpRight className="size-5 stroke-[3] dark:text-slate-200" />
              </Link>
            </article>
          </section>

          <section>
            <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 lg:text-left">
              Alguns cursos realizados
            </h2>
            <article className="flex flex-col items-stretch gap-6 lg:grid lg:grid-cols-2">
              <Link
                href="https://www.rocketseat.com.br/"
                target="_blank"
                className="flex gap-4 rounded bg-muted px-5 py-4 hover:bg-muted-foreground/40 hover:transition-colors"
              >
                <Image
                  src={ImageCourse1}
                  width={91}
                  height={71}
                  className="h-[71px] min-w-[91px]"
                  alt="imagem ilustrativa do curso da Rocketseat feito pelo Roni Lucas"
                />
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold text-foreground">
                    Rocketseat
                  </h3>
                  <p className="text-sm font-normal text-foreground">
                    Plataforma de conteúdo educacional tecnológico Fullstack
                  </p>
                  <ArrowUpRight className="size-5 self-end stroke-[3] dark:text-slate-200" />
                </div>
              </Link>
              <Link
                href="https://programadorbr.com/"
                target="_blank"
                className="flex gap-4 rounded bg-muted px-5 py-4 hover:bg-muted-foreground/40 hover:transition-colors"
              >
                <Image
                  src={ImageCourse2}
                  width={91}
                  height={71}
                  alt="imagem ilustrativa do curso do ProgramadorBR feito pelo Roni Lucas"
                  className="h-[71px] min-w-[91px] object-cover"
                />
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold text-foreground">
                    ProgramadorBR
                  </h3>
                  <p className="text-sm font-normal text-foreground">
                    Fullstack curso focado em JavaScript. Por Igor Oliveira
                  </p>
                  <ArrowUpRight className="size-5 self-end stroke-[3] dark:text-slate-200" />
                </div>
              </Link>
              <Link
                href="https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/"
                target="_blank"
                className="flex gap-4 rounded bg-muted px-5 py-4 hover:bg-muted-foreground/40 hover:transition-colors"
              >
                <Image
                  src={ImageCourse3}
                  width={91}
                  height={71}
                  alt="imagem ilustrativa do curso do Otavio Miranda feito pelo Roni Lucas"
                  className="h-[71px] min-w-[91px] object-cover"
                />
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold text-foreground">
                    Curso de React.Js e Next.Js (nível intermediário e avançado)
                  </h3>
                  <p className="text-sm font-normal text-foreground">
                    Conteúdo do ecossistema React com Next. Contextos, Data
                    Fetching e mais. por Otavio Miranda
                  </p>
                  <ArrowUpRight className="size-5 self-end stroke-[3] dark:text-slate-200" />
                </div>
              </Link>
              <Link
                href="https://www.udemy.com/course/javascript-completo-2018-do-iniciante-ao-mestre/"
                target="_blank"
                className="flex gap-4 rounded bg-muted px-5 py-4 hover:bg-muted-foreground/40 hover:transition-colors"
              >
                <Image
                  src={ImageCourse4}
                  width={91}
                  height={71}
                  alt="imagem ilustrativa do curso da Serliv por Daniel Tapias Morales feito pelo Roni Lucas"
                  className="h-[71px] min-w-[91px]"
                />
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold text-foreground">
                    Curso de JavaScript Completo
                  </h3>
                  <p className="text-sm font-normal text-foreground">
                    Curso de Javascript completo. Classes, funções, arrays e
                    mais. Por Daniel Tapias Morales
                  </p>
                  <ArrowUpRight className="size-5 self-end stroke-[3] dark:text-slate-200" />
                </div>
              </Link>
            </article>
          </section>
        </div>
      </Layout>
    </>
  )
}
