import { posts } from '#site/content'
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

export async function GenerateStaticParams(): Promise<
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
    <article className="container py-6 ">
      <h1>{post.title}</h1>
      {post.description ? <p>{post.description}</p> : null}
      <hr className="my-4" />
    </article>
  )
}
