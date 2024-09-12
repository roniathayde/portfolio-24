import Image from 'next/image'
import AvatarImage from '@/assets/images/avatar-on-computer.svg'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import Layout from './(pages)/layout'
import { ProjectCompleted } from '@/components/project-completed'

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex w-full  max-w-4xl  flex-col   gap-24 px-8 py-28">
          <section className="flex flex-col items-center gap-5 lg:grid lg:grid-cols-2  ">
            <article className="pt-7">
              <h1 className="mb-6 max-w-80 text-2xl font-semibold text-foreground">
                Oi, eu sou Roni! <br />
                um{' '}
                <span className="font-bold italic text-foreground">
                  Desenvolvedor
                </span>{' '}
                com paixão em soluções web
              </h1>

              <ul className="flex flex-col gap-3">
                <li className="flex flex-wrap items-center gap-1 leading-tight  text-foreground">
                  <span className="text-nowrap">Desenvolvedor Fullstack</span>
                </li>
                <li className="flex flex-wrap items-center gap-1 leading-tight text-foreground">
                  Formado em Desenvolvimento de Sistemas pela
                  <Link
                    href="https://www.uninove.br"
                    target="_blank"
                    className="flex items-center font-semibold"
                  >
                    Uninove <ArrowUpRight className="size-5 stroke-[3]" />
                  </Link>
                </li>
                <li className="flex flex-wrap items-center gap-1 leading-tight text-foreground">
                  Especialista na construção de sites
                </li>
                <li className="flex flex-wrap items-center gap-1 leading-tight text-foreground">
                  Especialista na construção de Layouts
                </li>
                <li className="flex flex-wrap items-center gap-1 leading-tight text-foreground">
                  Construi sites que hoje batem 10.000+ visitas diarias
                </li>
                <li className="flex flex-wrap items-center gap-1 leading-tight text-foreground">
                  2+ anos na área
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
              Alguns projetos concluídos
            </h2>
            <ProjectCompleted />
          </section>

          <section>
            <h2 className="mb-6 text-center text-2xl  font-bold tracking-tight text-foreground lg:text-left">
              Sua experiência em 1º lugar!
            </h2>
            <article className="">
              <Accordion
                className="flex flex-col items-start gap-6 lg:grid lg:grid-cols-2"
                type="single"
                collapsible
              >
                <AccordionItem value="item-0">
                  <AccordionTrigger>Proposta personalizada</AccordionTrigger>
                  <AccordionContent>
                    Sua empresa é única, e por isso, a proposta que nós
                    oferecemos para você também é. Afinal, nosso intuito é
                    promover o crescimento e destaque do seu negócio na
                    internet, mas respeitando aquilo que você precisa. Ou seja,
                    não trabalhamos com tabelas ou sistemas fixos, porque
                    entendemos que para alcançar aquilo que o cliente precisa
                    devemos ser flexíveis, dinâmicos e adaptáveis, para
                    chegarmos ao ponto ideal para cada um deles. Então, aqui
                    você terá um atendimento personalizado, nós escutamos o que
                    você tem a dizer, estudamos o que sua empresa precisa e
                    traçamos estratégias de acordo com as metas e objetivos que
                    você tem para ela. Dessa maneira conseguimos fazer o
                    planejamento adequado para o seu tipo de negócio, seguindo
                    as características particulares da sua empresa e que
                    respeite o seu orçamento, estando dentro da margem de
                    investimento pretendido.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Desenvolvimento de sites</AccordionTrigger>
                  <AccordionContent>
                    É fundamental para todo negócio que quer se manter
                    competitivo no mercado estar na internet. Frente a isso, nos
                    últimos anos surgiram diversas ferramentas e plataformas
                    para criação de sites, porém, seguindo um padrão
                    pré-definido. Mas o seu negócio não pode ser mais do mesmo.
                    Ele precisa de identidade e ela deve estar expressa também
                    no site. Afinal, as pessoas vão associar esse espaço ao seu
                    nome, sua marca e seus produtos. É por isso que você precisa
                    de uma agência de marketing digital como nós, pois nos
                    comprometemos com o desenvolvimento de sites totalmente
                    personalizados, realmente fieis ao seu negócio. Com nosso
                    suporte seu site vai representar o seu negócio e aumentar
                    suas vendas, afinal:
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>SEO - Otimização do site?</AccordionTrigger>
                  <AccordionContent>
                    Para ser influente e conquistar mercado também na internet
                    não basta estar nela, é preciso que seu público saiba que
                    você está ali e consiga te encontrar. Para isso é que são
                    utilizadas as técnicas de otimização SEO. Somos uma agência
                    de marketing digital que trabalha com estratégias eficazes
                    para que seu site tenha destaque no segmento em que você
                    atua. Assim, ele será identificado como relevante pelos
                    sites de busca e facilmente as pessoas vão te achar. O que
                    faz com que você se torne referência.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Layouts personalizados</AccordionTrigger>
                  <AccordionContent>
                    Você não terá a desagradável surpresa de encontrar outro
                    site igual ao seu na internet, com apenas alguns detalhes
                    diferentes. Ele será único, como seu negócio deve ser, para
                    que seus clientes antigos reconheçam sua marca e ela seja
                    atrativa para os clientes em potencial. Suas cores, o design
                    que combina com seu negócio, a sua logomarca e a linguagem
                    que seu público entende. Tudo para que seu site seja uma
                    extensão do seu negócio e faça a sua marca se fortalecer no
                    mercado e ganhar destaque.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Para todos os dispositivos
                  </AccordionTrigger>
                  <AccordionContent>
                    Sites responsivos são fundamentais atualmente, afinal, mais
                    da metade dos acessos à internet no Brasil é realizado por
                    meio de aparelhos móveis, como os celulares. Para alguns
                    segmentos, esse número chega a atingir os 80% do total.
                    Sendo assim, é importante que o seu site esteja adaptado
                    para ser visualizado sem problemas nesse tipo de aparelho
                    também. Tanto em computadores como tablets e smartphones,
                    seja em formato vertical ou paisagem, o layout será
                    agradável para o usuário, tornando a experiência da
                    navegação muito mais dinâmica e intuitiva.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Manutenção do site</AccordionTrigger>
                  <AccordionContent>
                    Os sites precisam de atualizações regulares, verificações de
                    segurança, otimização de desempenho e solução de problemas
                    regulares. Então, se você investiu em um site, por que não
                    confiar no seu investimento com pessoas que conhecem ele por
                    dentro e por fora? Deixe os profissionais manterem e
                    protegerem seu site.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Postagem e engajamento</AccordionTrigger>
                  <AccordionContent>
                    Para conquistar público e ter sucesso com uma loja física,
                    não basta abrir as portas e esperar as pessoas entrarem. É
                    preciso realizar um trabalho de divulgação para se tornar
                    conhecido. E com o seu negócio na internet acontece o mesmo.
                    Não basta criar um site e pronto. Afinal, existem milhões e
                    milhões de sites, visíveis 24 horas por dia para todo mundo.
                    Então, como se destacar entre tantos? Ora, com estratégias
                    de marketing. Um profissional responsável vai te ajudar a
                    aparecer na internet, ficar visível para que as pessoas
                    possam te encontrar, conhecer o seu diferencial, interagir
                    com sua marca e consumir seu produto ou serviços.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </article>
          </section>
        </div>
      </Layout>
    </>
  )
}
