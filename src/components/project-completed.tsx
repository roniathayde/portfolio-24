import { Link as LinkLucide } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import ImageProject1 from '@/assets/images/smartfix-imagem-ilustrativa-do-projeto-roni-lucas.png'
import ImageProject2 from '@/assets/images/larynx-imagem-ilustrativa-do-projeto-roni-lucas.jpg'
import ImageProject3 from '@/assets/images/hernia clinic imagem ilustrativa do projeto roni lucas.jpg'
import ImageProject4 from '@/assets/images/grandha cosmeticos imagem ilustrativa do projeto roni lucas.png'

export function ProjectCompleted() {
  return (
    <>
      <article className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-2">
        <HoverCard>
          <HoverCardTrigger>
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
          </HoverCardTrigger>
          <HoverCardContent
            align="start"
            className="flex flex-col items-start justify-start"
          >
            <h3>Smartfix</h3>
            <span className="text-xs">
              Travas Antifurto para Rodas e Estepes
            </span>

            <Link
              className="mt-3 flex items-center justify-center gap-2 underline"
              href="https://smartfix.com.br/"
            >
              Veja mais
              <LinkLucide className="size-4" />
            </Link>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
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
          </HoverCardTrigger>
          <HoverCardContent
            align="start"
            className="flex flex-col items-start justify-start"
          >
            <h3>Larynx</h3>
            <span className="text-xs">
              Cuidamos da sua saúde da Cabeça e Pescoço
            </span>

            <Link
              className="mt-3 flex items-center justify-center gap-2 underline"
              href="https://larynx.com.br/"
            >
              Veja mais
              <LinkLucide className="size-4" />
            </Link>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
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
          </HoverCardTrigger>
          <HoverCardContent
            align="start"
            className="flex flex-col items-start justify-start"
          >
            <h3>Hérnia Clinic</h3>
            <span className="text-xs">
              Cirurgias de Hérnia com Tecnologia Tobótica de Ponta
            </span>

            <Link
              className="mt-3 flex items-center justify-center gap-2 underline"
              href="https://herniaclinic.com.br/"
            >
              Veja mais
              <LinkLucide className="size-4" />
            </Link>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
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
              <h3 className="font-bold text-foreground ">Grandha Cosméticos</h3>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent
            align="start"
            className="flex flex-col items-start justify-start"
          >
            <h3>Grandha Cosméticos</h3>
            <span className="text-xs">Professional Hair Care</span>

            <Link
              className="mt-3 flex items-center justify-center gap-2 underline"
              href="https://grandha.com.br"
            >
              Veja mais
              <LinkLucide className="size-4" />
            </Link>
          </HoverCardContent>
        </HoverCard>
      </article>
    </>
  )
}
