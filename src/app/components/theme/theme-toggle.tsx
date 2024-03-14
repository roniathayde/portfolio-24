import { Laptop, Moon, Sun } from 'lucide-react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { useTheme } from './theme-provider'

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="relative flex size-9 items-center justify-center rounded-md border-2 border-slate-200 dark:border-slate-600">
          <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-slate-500" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          align="end"
          sideOffset={4}
          className="flex flex-col gap-3 rounded bg-slate-50 px-4 py-4 dark:bg-slate-600"
        >
          <DropdownMenu.Item
            className="flex cursor-pointer items-center  gap-1 py-0.5 outline-none dark:text-slate-200"
            onClick={() => setTheme('light')}
          >
            <Sun className="size-4" />
            Light
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="h-0.5 bg-slate-200 dark:bg-slate-500" />
          <DropdownMenu.Item
            className="flex cursor-pointer items-center  gap-1 py-0.5 outline-none dark:text-slate-200 "
            onClick={() => setTheme('dark')}
          >
            <Moon className="size-4" />
            Dark
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="h-0.5 bg-slate-200 dark:bg-slate-500" />
          <DropdownMenu.Item
            className="flex cursor-pointer items-center  gap-1 py-0.5 outline-none dark:text-slate-200"
            onClick={() => setTheme('system')}
          >
            <Laptop className="size-4" />
            System
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
