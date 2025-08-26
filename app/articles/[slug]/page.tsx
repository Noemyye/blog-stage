import { getArticleBySlug, getAllArticleSlugs } from '@/lib/getArticles'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return notFound()

  return (
    <article className="prose mx-auto p-8">
      <h1>{article.frontmatter.title}</h1>
      <p className="text-sm text-gray-500">{article.frontmatter.date}</p>
      <MDXRemote source={article.content} />
    </article>
  )
}
