'use client'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import ImagemHomemSentado from '../../assets/images/imagem-pagina-de-contato.svg'
import { Loader2, Mail, Phone, User } from 'lucide-react'

const fieldsFormSchema = z.object({
  firstName: z.string().min(1, 'O nome é obrigatório'),
  lastName: z.string().min(1, 'O último é obrigatório'),
  phone: z
    .string()
    .min(11, 'No mínimo 11 digitos')
    .max(11, 'No máximo 11 digitos'),
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório')
    .email('O endereço informado é inválido'),
  message: z.string().min(1, 'O assunto é obrigatório'),
}) // tipagem zod

type FieldsFormSchema = z.infer<typeof fieldsFormSchema> // tipagem ts inferenciada com zod

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FieldsFormSchema>({
    resolver: zodResolver(fieldsFormSchema),
  })

  function handleSubmitForm({
    firstName,
    lastName,
    email,
    phone,
    message,
  }: FieldsFormSchema) {
    console.log(firstName, lastName, phone, email, message)
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000)
    })
  }

  console.log('isSubmitting', isSubmitting)

  return (
    <div className="flex  w-full max-w-6xl  gap-24 px-3 py-28 lg:px-8">
      <section className="flex w-full flex-col gap-10 lg:flex-row">
        <article>
          <h1 className="mb-7 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200">
            Entre em contato
          </h1>
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="flex max-w-[567px] flex-col gap-2"
          >
            <div className="flex flex-col gap-2 lg:flex-row">
              <div>
                <div className="flex rounded border-2 border-slate-500 focus-within:border-slate-600 focus-within:ring-2 focus-within:ring-slate-700 dark:border-slate-300 dark:focus-within:ring-slate-400">
                  <div className="px-4 py-6">
                    <User className="size-6 text-slate-500" />
                  </div>
                  <div className="flex w-full flex-col py-4">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-slate-500"
                    >
                      Primeiro nome
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="bg-transparent text-base font-semibold text-slate-800 outline-none dark:text-slate-200"
                      {...register('firstName')}
                    />
                  </div>
                </div>
                {errors.firstName && (
                  <span className="text-sm text-red-500">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div>
                <div className="flex rounded border-2 border-slate-500 focus-within:border-slate-600 focus-within:ring-2 focus-within:ring-slate-700 dark:border-slate-300 dark:focus-within:ring-slate-400">
                  <div className="px-4 py-6">
                    <User className="size-6 text-slate-500" />
                  </div>
                  <div className="flex w-full flex-col py-4">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-slate-500"
                    >
                      Último nome
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="bg-transparent text-base font-semibold text-slate-800 outline-none dark:text-slate-200"
                      {...register('lastName')}
                    />
                  </div>
                </div>
                {errors.lastName && (
                  <span className="text-sm text-red-500">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex rounded border-2 border-slate-500 focus-within:border-slate-600 focus-within:ring-2 focus-within:ring-slate-700 dark:border-slate-300 dark:focus-within:ring-slate-400">
              <div className="px-4 py-6">
                <Mail className="size-6 text-slate-500" />
              </div>
              <div className="flex w-full flex-col py-4">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-500"
                >
                  E-mail
                </label>
                <input
                  type="text"
                  id="email"
                  className=" bg-transparent text-base font-semibold text-slate-800 outline-none dark:text-slate-200"
                  {...register('email')}
                />
              </div>
            </div>
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
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
                  type="string"
                  id="phone"
                  className=" bg-transparent text-base font-semibold text-slate-800 outline-none dark:text-slate-200"
                  {...register('phone')}
                />
              </div>
            </div>
            {errors.phone && (
              <span className="text-sm text-red-500">
                {errors.phone.message}
              </span>
            )}
            <div className="flex rounded border-2 border-slate-500 focus-within:border-slate-600 focus-within:ring-2 focus-within:ring-slate-700 dark:border-slate-300 dark:focus-within:ring-slate-400">
              <div className="flex w-full flex-col p-4">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-500"
                >
                  Descreva um resumo do porquê do contato
                </label>
                <textarea
                  id="message"
                  className="resize-none bg-transparent text-base font-semibold text-slate-800 outline-none dark:text-slate-200"
                  {...register('message')}
                ></textarea>
              </div>
            </div>
            {errors.message && (
              <span className="text-sm text-red-500">
                {errors.message.message}
              </span>
            )}
            <button
              type="submit"
              className="flex items-center justify-center rounded border-2 border-transparent bg-ocean-500 p-4 text-lg font-bold text-slate-100 outline-none hover:border-ocean-400 focus-visible:border-ocean-400 focus-visible:ring-2 focus-visible:ring-ocean-500"
            >
              {!isSubmitting && 'Enviar mensagem'}
              {isSubmitting && (
                <Loader2 className="size-6 animate-spin text-slate-50" />
              )}
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
