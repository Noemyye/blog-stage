"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

type Post = {
  slug: string
  title?: string
  date?: string
  description?: string
}

export default function WeekList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch("/api/weeks")
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data: Post[] = await res.json()
        setPosts(data)
      } catch (err) {
        console.error("Erreur lors du chargement des articles:", err)
        setError("Impossible de charger les articles")
        // Données de fallback
        setPosts([
          { slug: "article-1", title: "Article 1", date: "", description: "" },
          { slug: "article-2", title: "Article 2", date: "", description: "" },
          { slug: "article-3", title: "Article 3", date: "", description: "" },
          { slug: "article-4", title: "Article 4", date: "", description: "" },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchFiles()
  }, [])

  if (loading) {
    return (
      <div>
        <div className="text-3xl md:text-5xl lg:text-7xl font-bold pb-6 md:pb-10">Les posts</div>
        <div className="text-center py-8">Chargement des articles...</div>
      </div>
    )
  }

  return (
    <div>
      <div className="text-3xl md:text-5xl lg:text-7xl font-bold pb-6 md:pb-10">Les posts</div>
      {error && <div className="text-rose-500 text-sm mb-4">{error} - Affichage des articles par défaut</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-28">
        {posts.map((post, index) => {
          const slug = post.slug
          return (
            <div key={index} className="flex flex-col gap-3 md:gap-4">
              <Link href={`/articles/${slug}`} className="block rounded-xl shadow overflow-hidden aspect-[5/3] group">
                <Image
                  alt={slug}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={`/img/pic${index + 1}.png`}
                />
              </Link>

              <div className="text-xl md:text-2xl lg:text-3xl text-gray-800">{post.title ?? `Article ${index + 1}`}</div>
              {post.date && <div className="text-sm md:text-md text-rose-300 font-bold">{post.date}</div>}
              {post.description && (
                <div className="text-base md:text-lg lg:text-xl text-gray-700">{post.description}</div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}