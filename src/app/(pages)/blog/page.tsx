import { posts } from '#site/content'
import { sortPosts } from '../../../../lib/utils'
import { PostItem } from '../components/post-item'

export default async function Blog() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published))
  const displayPosts = sortedPosts

  return (
    <div className="flex  w-full max-w-4xl flex-col   gap-24 px-8 py-28">
      <div className="flex w-full flex-col items-start justify-start">
        <h1 className="text-5xl font-bold tracking-tighter text-slate-800 dark:text-slate-200">
          Blog
        </h1>
        <div className="w-full">
          <span className="text-xl font-semibold tracking-tighter text-slate-800 dark:text-slate-200">
            Minhas últimas postagens
          </span>
          <hr className="mb-8 mt-4" />

          {displayPosts?.length > 0 ? (
            <ul className="flex w-full flex-col gap-6">
              {displayPosts.map((post) => {
                const { title, slug, date, description } = post

                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      title={title}
                      date={date}
                      description={description}
                    />
                  </li>
                )
              })}
            </ul>
          ) : (
            <span>Não encontramos nenhum post ainda...</span>
          )}
        </div>
      </div>
    </div>
  )
}
