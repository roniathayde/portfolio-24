'use client'

import { Button } from '@/components/ui/button'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function SheetDemo() {
  const [modalStatus, setModalStatus] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Fecha o modal quando o caminho mudar
    setModalStatus(false)
  }, [pathname]) // Reage às mudanças no pathname

  return (
    <Sheet
      onOpenChange={() => setModalStatus((prev) => !prev)}
      open={modalStatus}
    >
      <SheetTrigger asChild>
        <Button aria-label="Menu" className="lg:hidden" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col justify-center gap-6 py-4">
          <Link href="/">Início</Link>
          <Link href="/sobre-mim">Sobre mim</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
