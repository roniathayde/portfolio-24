import WebsiteFormMessage from '@/email-templates/form-email'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.EMAIL_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json()

    const data = await resend.emails.send({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
      to: ['pontes014@gmail.com'],
      subject: 'Novo e-mail do website',
      react: WebsiteFormMessage({
        firstName,
        lastName,
        email,
        phone,
        message,
      }),
    })

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
