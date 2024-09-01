import { posts } from '#site/content'
import { MDXContent } from '@/components/mdx-components'
import { notFound } from 'next/navigation'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug.join('/')
  const post = posts.find((post) => post.slugAsParams === slug)

  return post
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <div className="flex  w-full max-w-4xl flex-col   gap-24 px-8 py-28">
      <div className="flex w-full flex-col items-start justify-start">
        <h1 className="text-4xl font-bold tracking-tighter">{post.title}</h1>
        {post.description ? <p>{post.description}</p> : null}
        <div className="my-4 h-0.5 w-full rounded-full bg-muted" />
        <MDXContent code={post.body} />
      </div>
    </div>
  )
}
