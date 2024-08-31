import { Calendar } from 'lucide-react'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
export interface PostItemInterface {
  slug: string
  title: string
  description?: string
  date: string
}

export function PostItem({
  date,
  slug,
  title,
  description,
}: PostItemInterface) {
  return (
    <article className="flex flex-col gap-2  border-b px-1 py-3 transition-colors hover:bg-slate-700">
      <h2 className="text-2xl font-bold tracking-tight text-slate-800  dark:text-slate-200">
        <Link href={slug}>{title}</Link>
      </h2>
      <div className="max-w-none text-slate-800 dark:text-slate-300">
        {description}
      </div>
      <div className="flex items-center justify-between">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="flex items-center  gap-1 text-sm font-medium text-slate-800 dark:text-slate-200">
            <Calendar className="size-4" />
            <time dateTime={date}>
              {formatDistanceToNow(date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </time>
          </dd>
        </dl>
        <Link
          href={slug}
          className="rounded p-1 text-sm font-bold text-slate-800 dark:bg-slate-200"
        >
          Leia mais
        </Link>
      </div>
    </article>
  )
}
