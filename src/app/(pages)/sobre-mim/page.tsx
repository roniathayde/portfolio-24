import Image from 'next/image'
import ImagemComMic from '@/assets/images/avatar-no-computador-falando-no-microfone 1.svg'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre mim | Roni Lucas',
  description:
    'Um pouco mais sobre meus interesses profissionais e gostos pessoais. Saiba mais!',
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
    'Sobre mim',
    'Roni Lucas',
    'Desenvolvedor',
    'Frontend',
    'Backend',
    'Fullstack',
  ],
}
export default function SobreMim() {
  return (
    <div className="flex  w-full max-w-4xl flex-col   gap-24 px-8 py-28">
      <section>
        <article className="flex  flex-col items-start gap-12 lg:flex-row">
          <div className="max-w-[400px] ">
            <h1 className="mb-7 max-w-96 text-2xl font-bold text-foreground">
              Conheça um pouco mais sobre{' '}
              <span className="mb-3  text-3xl font-semibold tracking-tight text-foreground">
                Roni Lucas
              </span>
            </h1>
            <div className="space-y-4">
              <p className="text-base font-medium  ">
                Recentemente me formei na Universidade Nove ( em DEZ2023) pela
                influência de um parênte bem próximo ser desenvolvedor, me senti
                interessado na área antes mesmo de ingressar na faculdade e foi
                assim que tive meu primeiro contato com programação.
              </p>
              <p className="text-base font-medium text-foreground">
                Sou um Desenvolvedor com foco no Frontend com vertente no
                Backend e em Design. Adoro me desafiar em layouts limpos e
                expressivos logo, o entusiasmo para criar o Frontend do layout é
                contiagiante. Me encontro atualmente desafiando minhas
                habilidades no Backend com nodeJS numa startup secondária em
                progresso e nunca pensei que me encontraria da forma como me
                encontrei em criar APIS e regras de negócio!
              </p>
              <p className="text-base font-medium text-foreground">
                Tenho experiência no desenvolvimento de sites institucionais,
                e-commerces, Landing Pages, SEO (Search Engine Optimization) e
                familiariazado com as regras do PageSpeed. Além de fazer alguns
                designs e trabalhar em melhorias e novidades para a
                equipe/empresa evoluir diáriamente e se manter atualizada no
                mercado.
              </p>
            </div>
          </div>
          <Image
            src={ImagemComMic}
            width={307}
            height={307}
            alt="imagem ilustrativa de um avatar fazendo podcast"
            className="w-full"
          />
        </article>
        <article className="mt-8  flex w-full flex-wrap justify-between  gap-6">
          <div className="min-w-[270px]">
            <header className="mb-3 font-semibold text-foreground">
              💻 Áreas de Expertise
            </header>
            <ul>
              <li className="text-base font-medium text-foreground">
                Desenvolvimento FrontEnd
              </li>
              <li className="text-base font-medium text-foreground">
                Desenvolvimento BackEnd
              </li>
              <li className="text-base font-medium text-foreground">
                Web Design
              </li>
              <li className="text-base font-medium text-foreground">
                SEO (Search Engine Optimaztion)
              </li>
            </ul>
          </div>
          <div className="min-w-[270px]">
            <header className="mb-3 font-semibold text-foreground">
              👨‍💻 Atualmente estudando
            </header>
            <ul>
              <li className="text-base font-medium text-foreground">NextJS</li>
              <li className="text-base font-medium text-foreground">NodeJS</li>
              <li className="text-base font-medium text-foreground">Docker</li>
              <li className="text-base font-medium text-foreground">
                SEO (Search Engine Optimaztion)
              </li>
            </ul>
          </div>
          <div className="min-w-[270px]">
            <header className="mb-3 font-semibold text-foreground">
              ☕ Interesses pessoais
            </header>
            <ul>
              <li className="text-base font-medium text-foreground">Luta</li>
              <li className="text-base font-medium text-foreground">
                Desenhar
              </li>
              <li className="text-base font-medium text-foreground">Futebol</li>
              <li className="text-base font-medium text-foreground">
                Inteligencia emocional e comportamental
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  )
}
