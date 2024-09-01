'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

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

export function FormContact() {
  const [emailSendSuccefully, setEmailSendSuccefully] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FieldsFormSchema>({
    resolver: zodResolver(fieldsFormSchema),
  })

  async function handleSubmitForm({
    firstName,
    lastName,
    email,
    phone,
    message,
  }: FieldsFormSchema) {
    const data = {
      firstName,
      lastName,
      email,
      phone,
      message,
    }

    const response = await fetch('https://www.ronilucas.com/api/form', {
      method: 'POST',
      body: JSON.stringify(data),
    })

    if (response.ok) {
      setEmailSendSuccefully(true)
    }
  }

  return (
    <>
      {emailSendSuccefully && (
        <span className="mb-2 block text-sm font-medium text-green-400">
          E-mail enviado com sucesso! Aguarde que entraremos em contato!
        </span>
      )}
      {Object.keys(errors).length > 0 && (
        <span className="text-xs font-bold text-destructive">
          ocorreu um erro tente novamente ou entre em contato por{' '}
          <i>pontes014@gmail.com</i>
        </span>
      )}
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex max-w-[567px] flex-col gap-2"
      >
        <div className="flex flex-col gap-2 lg:flex-row">
          <div className=" w-full  items-center gap-1.5">
            <Label htmlFor="firstName">Primeiro nome</Label>
            <Input
              type="text"
              id="firstName"
              placeholder="Insira o primeiro nome"
              {...register('firstName')}
            />
          </div>
          <div className=" w-full  items-center gap-1.5">
            <Label htmlFor="lastName">Último nome</Label>
            <Input
              type="text"
              id="lastName"
              placeholder="Insira último nome"
              {...register('lastName')}
            />
          </div>
        </div>
        <div className=" w-full  items-center gap-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            id="email"
            placeholder="Insira seu e-mail"
            {...register('email')}
          />
        </div>

        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor="phone">Celular </Label>
          <Input
            type="phone"
            id="phone"
            placeholder="Insira seu celular"
            {...register('phone')}
          />
        </div>

        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor="message">
            Descreva um resumo do porquê do contato
          </Label>
          <Textarea
            id="message"
            placeholder="Descreva o motivo do contato"
            {...register('message')}
          />
        </div>

        <Button disabled={isSubmitting} variant={'default'}>
          Enviar mensagem
        </Button>
      </form>
    </>
  )
}
