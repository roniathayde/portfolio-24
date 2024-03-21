import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'
import * as React from 'react'

interface VercelInviteUserEmailProps {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
  text?: string
}

export const WebsiteFormMessage = ({
  firstName = '',
  lastName = '',
  email = '',
  phone = '',
  message = '',
}: VercelInviteUserEmailProps) => {
  const previewText = `Boas vindas ${firstName}!`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Mensagem enviada
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Primeiro nome: {firstName},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Último nome: {lastName},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              E-mail: {email},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Celular: {phone},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Mensagem: {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

// firstName = '',
// lastName = '',
// email = '',
// phone = '',
// message = '',
// text = '',
export default WebsiteFormMessage
