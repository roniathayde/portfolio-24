import Image from 'next/image'
import ImagemHomemSentado from '../../assets/images/imagem-pagina-de-contato.svg'
import { Mail, Phone, User } from 'lucide-react'

export default function Contato() {
  return (
    <div className="flex  w-full max-w-6xl  gap-24 px-3 py-28 lg:px-8">
      <section className="flex w-full flex-col gap-10 lg:flex-row">
        <article>
          <h1 className="mb-7 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200">
            Entre em contato
          </h1>
          <form className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 lg:flex-row">
              <div className="flex rounded border-2 border-slate-500 focus-within:border-slate-600 focus-within:ring-2 focus-within:ring-slate-700 dark:border-slate-300 dark:focus-within:ring-slate-400">
                <div className="px-4 py-6">
                  <User className="size-6 text-slate-500" />
                </div>
                <div className="flex w-full flex-col py-4">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium text-slate-500"
                  >
                    Primeiro nome
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="bg-transparent text-base font-semibold text-slate-800 outline-none dark:text-slate-200"
                  />
                </div>
              </div>
              <div className="flex rounded border-2 border-slate-500 focus-within:border-slate-600 focus-within:ring-2 focus-within:ring-slate-700 dark:border-slate-300 dark:focus-within:ring-slate-400">
                <div className="px-4 py-6">
                  <User className="size-6 text-slate-500" />
                </div>
                <div className="flex w-full flex-col py-4">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium text-slate-500"
                  >
                    Último nome
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="bg-transparent text-base font-semibold text-slate-800 outline-none dark:text-slate-200"
                  />
                </div>
              </div>
            </div>
            <div className="flex rounded border-2 border-slate-500 focus-within:border-slate-600 focus-within:ring-2 focus-within:ring-slate-700 dark:border-slate-300 dark:focus-within:ring-slate-400">
              <div className="px-4 py-6">
                <Mail className="size-6 text-slate-500" />
              </div>
              <div className="flex w-full flex-col py-4">
                <label
                  htmlFor="e-mail"
                  className="text-sm font-medium text-slate-500"
                >
                  E-mail
                </label>
                <input
                  type="text"
                  name="e-mail"
                  id="e-mail"
                  className=" bg-transparent text-base font-semibold text-slate-800 outline-none dark:text-slate-200"
                />
              </div>
            </div>
            <div className="flex rounded border-2 border-slate-500 focus-within:border-slate-600 focus-within:ring-2 focus-within:ring-slate-700 dark:border-slate-300 dark:focus-within:ring-slate-400">
              <div className="px-4 py-6">
                <Phone className="size-6 text-slate-500" />
              </div>
              <div className="flex w-full flex-col py-4">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-slate-500"
                >
                  Celular
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className=" bg-transparent text-base font-semibold text-slate-800 outline-none dark:text-slate-200"
                />
              </div>
            </div>
            <div className="flex rounded border-2 border-slate-500 focus-within:border-slate-600 focus-within:ring-2 focus-within:ring-slate-700 dark:border-slate-300 dark:focus-within:ring-slate-400">
              <div className="flex w-full flex-col p-4">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-slate-500"
                >
                  Descreva um resumo do porquê do contato
                </label>
                <textarea
                  name="phone"
                  id="phone"
                  className="resize-none bg-transparent text-base font-semibold text-slate-800 outline-none dark:text-slate-200"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="rounded border-2 border-transparent bg-ocean-500 p-4 text-lg font-bold text-slate-100 outline-none hover:border-ocean-400 focus-visible:border-ocean-400 focus-visible:ring-2 focus-visible:ring-ocean-500"
            >
              Enviar mensagem
            </button>
          </form>
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
