import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Menu } from 'lucide-react'
import { ThemeToggle } from './theme/theme-toggle'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export function Header() {
  const [statusModalMenu, setStatusModalMenu] = useState(false)

  return (
    <header className="z-1 sticky top-0 border-b bg-gray-50 dark:bg-slate-800">
      <div className="ml-auto mr-auto flex max-w-screen-xl justify-between px-8 py-9">
        <span className="text-3xl font-bold tracking-tight text-slate-700 dark:text-slate-200">
          Roni Lucas
        </span>
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="hidden font-medium text-slate-700 dark:text-slate-200 lg:flex lg:items-center"
          >
            Trabalhos
          </Link>
          <Link
            href="/sobre-mim"
            className="hidden font-medium text-slate-700 dark:text-slate-200 lg:flex lg:items-center"
          >
            Sobre mim
          </Link>
          <Link
            href="/contato"
            className="hidden font-medium text-slate-700 dark:text-slate-200 lg:flex lg:items-center"
          >
            Contato
          </Link>

          <DropdownMenu.Root
            open={statusModalMenu}
            onOpenChange={setStatusModalMenu}
          >
            <DropdownMenu.Trigger asChild>
              <button className=" rounded p-1 hover:bg-slate-100 dark:hover:bg-slate-700 lg:hidden">
                <span className="sr-only">Menu</span>
                <Menu className="size-6  stroke-2 text-slate-700 dark:text-slate-300" />
              </button>
            </DropdownMenu.Trigger>
            <AnimatePresence>
              {statusModalMenu && (
                <DropdownMenu.Portal forceMount>
                  <div>
                    <motion.div
                      className="flex flex-col"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <DropdownMenu.Content
                        align="end"
                        className=" flex flex-col gap-1 rounded border bg-slate-200 p-1 dark:border-slate-600 dark:bg-slate-800"
                      >
                        <DropdownMenu.Item
                          asChild
                          className="rounded p-2 outline-none transition-colors hover:bg-slate-300 dark:text-slate-200 dark:hover:bg-slate-600"
                        >
                          <Link href="/">Trabalhos</Link>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item
                          asChild
                          className="rounded p-2 outline-none transition-colors hover:bg-slate-300 dark:text-slate-200 dark:hover:bg-slate-600"
                        >
                          <Link href="/sobre-mim">Sobre mim</Link>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item
                          asChild
                          className="rounded p-2 outline-none transition-colors hover:bg-slate-300 dark:text-slate-200 dark:hover:bg-slate-600"
                        >
                          <Link href="/contato">Contato</Link>
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </motion.div>
                  </div>
                </DropdownMenu.Portal>
              )}
            </AnimatePresence>
          </DropdownMenu.Root>

          <div className="flex ">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
