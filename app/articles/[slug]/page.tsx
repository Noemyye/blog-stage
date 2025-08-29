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
    <article className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl mx-auto p-4 sm:p-6 md:p-8 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">{article.frontmatter.title}</h1>
      <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-6 sm:mb-8">{article.frontmatter.date}</p>
      <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none">
        <MDXRemote source={article.content} />
      </div>
    </article>
  )
}
