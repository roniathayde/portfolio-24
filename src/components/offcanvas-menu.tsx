import { Button } from '@/components/ui/button'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="lg:hidden" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col justify-center gap-6 py-4">
          <Link href="/">Trabalhos</Link>
          <Link href="/sobre-mim">Sobre mim</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
