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
          { slug: "semaine1", title: "Semaine 1", date: "", description: "" },
          { slug: "semaine2", title: "Semaine 2", date: "", description: "" },
          { slug: "semaine3", title: "Semaine 3", date: "", description: "" },
          { slug: "w-bilan", title: "Bilan", date: "", description: "" },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchFiles()
  }, [])

  const formatSlug = (slug: string) => {
    if (slug === 'w-bilan') {
      return 'Bilan'
    }
    return slug.replace(/semaine(\d+)/i, (_, n) => `Semaine ${n}`)
  }

  const getLink = (slug: string) => {
    return `/articles/${slug}`
  }

  const getImageSrc = (slug: string) => {
    // Map each week to its corresponding image using semaine naming
    const imageMap: { [key: string]: string } = {
      'semaine1': '/img/semaine1.png',
      'semaine2': '/img/semaine2.png', 
      'semaine3': '/img/semaine3.png',
      'semaine4': '/img/semaine4.png',
      'semaine5-6': '/img/semaine5-6.png',
      'semaine7': '/img/semaine7.png',
      'semaine8': '/img/semaine8.png',
      'semaine9': '/img/semaine9.png',
      'semaine10': '/img/semaine10.png',
      'w-bilan': '/img/bilan.jpg'
    }
    
    return imageMap[slug] || '/img/semaine1.png' // fallback image
  }

  if (loading) {
    return (
      <div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pb-4 sm:pb-6 md:pb-8 lg:pb-10">Les posts</div>
        <div className="text-center py-8 text-sm sm:text-base">Chargement des articles...</div>
      </div>
    )
  }

  return (
    <div>
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pb-4 sm:pb-6 md:pb-8 lg:pb-10">Les posts</div>
      {error && <div className="text-rose-500 text-xs sm:text-sm mb-4">{error} - Affichage des articles par défaut</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-28">
        {posts.map((post, index) => {
          const slug = post.slug
          return (
            <div key={index} className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <Link href={getLink(slug)} className="block rounded-xl shadow overflow-hidden aspect-[5/3] group">
                <Image
                  alt={formatSlug(slug)}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={getImageSrc(slug)}
                />
              </Link>

              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800">{post.title ?? formatSlug(slug)}</div>
              {post.date && <div className="text-xs sm:text-sm md:text-base text-rose-300 font-bold">{post.date}</div>}
              {post.description && (
                <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">{post.description}</div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}