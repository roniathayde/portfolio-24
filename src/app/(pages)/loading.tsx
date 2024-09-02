import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="flex w-full max-w-[800px] flex-col space-y-3 py-28">
      <Skeleton className="h-[40px] w-full rounded-xl" />
      <Skeleton className="h-[25px] w-full rounded-xl" />
      <Skeleton className="mt-4 h-[20px] w-full rounded-xl" />
      <Skeleton className="h-[20px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        {Array.from({ length: 20 }).map((ske, index) => (
          <Skeleton key={index} className="h-[20px] w-full" />
        ))}
      </div>
    </div>
  )
}
