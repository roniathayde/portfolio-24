'use client'
import Image from 'next/image'
import AvatarImage from '../assets/images/avatar-on-computer.svg'
import ImageProject1 from '../assets/images/project-image-1.png'
import ImageCourse1 from '../assets/images/course-1.png'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div className="flex  w-full max-w-4xl flex-col   gap-24 px-8 py-28">
        <section className="flex flex-col items-center gap-5 lg:grid lg:grid-cols-2  ">
          <article className="pt-7">
            <h1 className="mb-6 max-w-80 text-2xl font-semibold text-slate-700 dark:text-slate-200">
              Oi, eu sou Roni, um{' '}
              <span className="  bg-gradient-to-l from-[#9CC2FF] via-[#547AFF] to-[#263789] bg-clip-text  text-transparent ">
                software developer
              </span>{' '}
              com paixão no Front End
            </h1>

            <ul>
              <li className="flex items-center gap-1 dark:text-slate-200">
                Desenvolvedor fullstack na
                <Link
                  href="https://suryamkt.com.br"
                  target="_blank"
                  className="flex items-center font-semibold"
                >
                  SuryaMKT <ArrowUpRight className="size-5 stroke-[3]" />
                </Link>
              </li>
              <li className="flex items-center gap-1 dark:text-slate-200">
                Formado pela
                <Link
                  href="https://www.uninove.br"
                  target="_blank"
                  className="flex items-center font-semibold"
                >
                  Uninove <ArrowUpRight className="size-5 stroke-[3]" />
                </Link>
              </li>
              <li className="flex items-center gap-1 dark:text-slate-200">
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
          <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 lg:text-left">
            Sites concluídos
          </h2>
          <article className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-2">
            <div className="flex flex-col gap-2 rounded bg-gray-100 p-3 dark:bg-slate-700">
              <Image
                src={ImageProject1}
                alt="imagem do site do projeto X"
                className=" rounded"
                width={380}
                height={200}
              />
              <h3 className="font-bold text-slate-700 dark:text-slate-200 ">
                nome do projeto
              </h3>
            </div>
            <div className="flex flex-col gap-2 rounded bg-gray-100 p-3 dark:bg-slate-700">
              <Image
                src={ImageProject1}
                alt="imagem do site do projeto X"
                className=" rounded"
                width={380}
                height={200}
              />
              <h3 className="font-bold text-slate-700 dark:text-slate-200 ">
                nome do projeto
              </h3>
            </div>
            <div className="flex flex-col gap-2 rounded bg-gray-100 p-3 dark:bg-slate-700">
              <Image
                src={ImageProject1}
                alt="imagem do site do projeto X"
                className=" rounded"
                width={380}
                height={200}
              />
              <h3 className="font-bold text-slate-700 dark:text-slate-200 ">
                nome do projeto
              </h3>
            </div>
            <div className="flex flex-col gap-2 rounded bg-gray-100 p-3 dark:bg-slate-700">
              <Image
                src={ImageProject1}
                alt="imagem do site do projeto X"
                className=" rounded"
                width={380}
                height={200}
              />
              <h3 className="font-bold text-slate-700 dark:text-slate-200 ">
                nome do projeto
              </h3>
            </div>
          </article>
        </section>

        <section>
          <h2 className="mb-6 text-center text-2xl  font-bold tracking-tight text-slate-900 dark:text-slate-200 lg:text-left">
            Alguns dos meus projetos
          </h2>
          <article className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-2">
            <Link
              href="https://github.com/roniathayde/feed-typescript"
              className="flex flex-col gap-2 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors dark:bg-slate-700"
            >
              <h3 className="text-base font-semibold text-slate-600 dark:text-slate-200">
                feed
              </h3>
              <p className="text-sm font-normal text-slate-600 dark:text-slate-200">
                Um projeto de estudo para práticar conceitos de reactJS
              </p>
              <ArrowUpRight className="size-5 stroke-[3] dark:text-slate-200" />
            </Link>
            <Link
              href="https://github.com/roniathayde/feed-typescript"
              className="flex flex-col gap-2 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors dark:bg-slate-700"
            >
              <h3 className="text-base font-semibold text-slate-600 dark:text-slate-200">
                feed
              </h3>
              <p className="text-sm font-normal text-slate-600 dark:text-slate-200">
                Um projeto de estudo para práticar conceitos de reactJS
              </p>
              <ArrowUpRight className="size-5 stroke-[3] dark:text-slate-200" />
            </Link>
            <Link
              href="https://github.com/roniathayde/feed-typescript"
              className="flex flex-col gap-2 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors dark:bg-slate-700"
            >
              <h3 className="text-base font-semibold text-slate-600 dark:text-slate-200">
                feed
              </h3>
              <p className="text-sm font-normal text-slate-600 dark:text-slate-200">
                Um projeto de estudo para práticar conceitos de reactJS
              </p>
              <ArrowUpRight className="size-5 stroke-[3] dark:text-slate-200" />
            </Link>
            <Link
              href="https://github.com/roniathayde/feed-typescript"
              className="flex flex-col gap-2 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors dark:bg-slate-700"
            >
              <h3 className="text-base font-semibold text-slate-600 dark:text-slate-200">
                feed
              </h3>
              <p className="text-sm font-normal text-slate-600 dark:text-slate-200">
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
          <article className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-2">
            <Link
              href="https://www.rocketseat.com.br/"
              target="_blank"
              className="flex gap-4 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors dark:bg-slate-700"
            >
              <Image
                src={ImageCourse1}
                width={92}
                height={72}
                className="min-w-[92px]"
                alt="imagem ilustrativa de curso X"
              />
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-slate-600 dark:text-slate-200">
                  Rocketseat
                </h3>
                <p className="text-sm font-normal text-slate-600 dark:text-slate-200">
                  Plataforma de conteúdo educacional tecnológico Fullstack
                </p>
                <ArrowUpRight className="size-5 self-end stroke-[3] dark:text-slate-200" />
              </div>
            </Link>
            <Link
              href="https://www.rocketseat.com.br/"
              target="_blank"
              className="flex gap-4 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors dark:bg-slate-700"
            >
              <Image
                src={ImageCourse1}
                width={92}
                height={72}
                alt="imagem ilustrativa de curso X"
                className="min-w-[92px]"
              />
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-slate-600 dark:text-slate-200">
                  Rocketseat
                </h3>
                <p className="text-sm font-normal text-slate-600 dark:text-slate-200">
                  Plataforma de conteúdo educacional tecnológico Fullstack
                </p>
                <ArrowUpRight className="size-5 self-end stroke-[3] dark:text-slate-200" />
              </div>
            </Link>
            <Link
              href="https://www.rocketseat.com.br/"
              target="_blank"
              className="flex gap-4 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors dark:bg-slate-700"
            >
              <Image
                src={ImageCourse1}
                width={92}
                height={72}
                alt="imagem ilustrativa de curso X"
                className="min-w-[92px]"
              />
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-slate-600 dark:text-slate-200">
                  Rocketseat
                </h3>
                <p className="text-sm font-normal text-slate-600 dark:text-slate-200">
                  Plataforma de conteúdo educacional tecnológico Fullstack
                </p>
                <ArrowUpRight className="size-5 self-end stroke-[3] dark:text-slate-200" />
              </div>
            </Link>
            <Link
              href="https://www.rocketseat.com.br/"
              target="_blank"
              className="flex gap-4 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors dark:bg-slate-700"
            >
              <Image
                src={ImageCourse1}
                width={92}
                height={72}
                alt="imagem ilustrativa de curso X"
                className="min-w-[92px]"
              />
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-slate-600 dark:text-slate-200">
                  Rocketseat
                </h3>
                <p className="text-sm font-normal text-slate-600 dark:text-slate-200">
                  Plataforma de conteúdo educacional tecnológico Fullstack
                </p>
                <ArrowUpRight className="size-5 self-end stroke-[3] dark:text-slate-200" />
              </div>
            </Link>
          </article>
        </section>
      </div>
    </>
  )
}
