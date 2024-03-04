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
      <section>
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">
          Sites concluídos
        </h2>
        <article className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 rounded bg-gray-100 p-3">
            <Image
              src={ImageProject1}
              alt="imagem do site do projeto X"
              className=" rounded"
              width={380}
              height={200}
            />
            <h3 className="font-bold text-slate-700 ">nome do projeto</h3>
          </div>
          <div className="flex flex-col gap-2 rounded bg-gray-100 p-3">
            <Image
              src={ImageProject1}
              alt="imagem do site do projeto X"
              className=" rounded"
              width={380}
              height={200}
            />
            <h3 className="font-bold text-slate-700 ">nome do projeto</h3>
          </div>
          <div className="flex flex-col gap-2 rounded bg-gray-100 p-3">
            <Image
              src={ImageProject1}
              alt="imagem do site do projeto X"
              className=" rounded"
              width={380}
              height={200}
            />
            <h3 className="font-bold text-slate-700 ">nome do projeto</h3>
          </div>
          <div className="flex flex-col gap-2 rounded bg-gray-100 p-3">
            <Image
              src={ImageProject1}
              alt="imagem do site do projeto X"
              className=" rounded"
              width={380}
              height={200}
            />
            <h3 className="font-bold text-slate-700 ">nome do projeto</h3>
          </div>
        </article>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">
          Alguns dos meus projetos
        </h2>
        <article className="grid grid-cols-2 gap-6">
          <Link
            href="https://github.com/roniathayde/feed-typescript"
            className="flex flex-col gap-2 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors"
          >
            <h3 className="text-base font-semibold text-slate-600">feed</h3>
            <p className="text-sm font-normal text-slate-600">
              Um projeto de estudo para práticar conceitos de reactJS
            </p>
            <ArrowUpRight className="size-5 stroke-[3]" />
          </Link>
          <Link
            href="https://github.com/roniathayde/feed-typescript"
            className="flex flex-col gap-2 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors"
          >
            <h3 className="text-base font-semibold text-slate-600">feed</h3>
            <p className="text-sm font-normal text-slate-600">
              Um projeto de estudo para práticar conceitos de reactJS
            </p>
            <ArrowUpRight className="size-5 stroke-[3]" />
          </Link>
          <Link
            href="https://github.com/roniathayde/feed-typescript"
            className="flex flex-col gap-2 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors"
          >
            <h3 className="text-base font-semibold text-slate-600">feed</h3>
            <p className="text-sm font-normal text-slate-600">
              Um projeto de estudo para práticar conceitos de reactJS
            </p>
            <ArrowUpRight className="size-5 stroke-[3]" />
          </Link>
          <Link
            href="https://github.com/roniathayde/feed-typescript"
            className="flex flex-col gap-2 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors"
          >
            <h3 className="text-base font-semibold text-slate-600">feed</h3>
            <p className="text-sm font-normal text-slate-600">
              Um projeto de estudo para práticar conceitos de reactJS
            </p>
            <ArrowUpRight className="size-5 stroke-[3]" />
          </Link>
        </article>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">
          Alguns cursos realizados
        </h2>
        <article className="grid grid-cols-2 gap-6">
          <Link
            href="https://www.rocketseat.com.br/"
            target="_blank"
            className="flex gap-4 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors"
          >
            <Image
              src={ImageCourse1}
              width={92}
              height={72}
              alt="imagem ilustrativa de curso X"
            />
            <div className="flex flex-col">
              <h3 className="text-base font-semibold text-slate-600">
                Rocketseat
              </h3>
              <p className="text-sm font-normal text-slate-600">
                Plataforma de conteúdo educacional tecnológico Fullstack
              </p>
              <ArrowUpRight className="size-5 self-end stroke-[3]" />
            </div>
          </Link>
          <Link
            href="https://www.rocketseat.com.br/"
            target="_blank"
            className="flex gap-4 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors"
          >
            <Image
              src={ImageCourse1}
              width={92}
              height={72}
              alt="imagem ilustrativa de curso X"
            />
            <div className="flex flex-col">
              <h3 className="text-base font-semibold text-slate-600">
                Rocketseat
              </h3>
              <p className="text-sm font-normal text-slate-600">
                Plataforma de conteúdo educacional tecnológico Fullstack
              </p>
              <ArrowUpRight className="size-5 self-end stroke-[3]" />
            </div>
          </Link>
          <Link
            href="https://www.rocketseat.com.br/"
            target="_blank"
            className="flex gap-4 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors"
          >
            <Image
              src={ImageCourse1}
              width={92}
              height={72}
              alt="imagem ilustrativa de curso X"
            />
            <div className="flex flex-col">
              <h3 className="text-base font-semibold text-slate-600">
                Rocketseat
              </h3>
              <p className="text-sm font-normal text-slate-600">
                Plataforma de conteúdo educacional tecnológico Fullstack
              </p>
              <ArrowUpRight className="size-5 self-end stroke-[3]" />
            </div>
          </Link>
          <Link
            href="https://www.rocketseat.com.br/"
            target="_blank"
            className="flex gap-4 rounded bg-gray-100 px-5 py-4 hover:bg-gray-200/50 hover:transition-colors"
          >
            <Image
              src={ImageCourse1}
              width={92}
              height={72}
              alt="imagem ilustrativa de curso X"
            />
            <div className="flex flex-col">
              <h3 className="text-base font-semibold text-slate-600">
                Rocketseat
              </h3>
              <p className="text-sm font-normal text-slate-600">
                Plataforma de conteúdo educacional tecnológico Fullstack
              </p>
              <ArrowUpRight className="size-5 self-end stroke-[3]" />
            </div>
          </Link>
        </article>
      </section>
    </>
  )
}
