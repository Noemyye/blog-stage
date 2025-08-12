"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function WeekList() {
  const [fileNames, setFileNames] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch("/api/weeks")
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json()
        setFileNames(data)
      } catch (err) {
        console.error("Erreur lors du chargement des articles:", err)
        setError("Impossible de charger les articles")
        // Données de fallback
        setFileNames(["article-1.md", "article-2.md", "article-3.md", "article-4.md"])
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
        {fileNames.map((name, index) => {
          const slug = name.replace(".md", "")
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

              <div className="text-xl md:text-2xl lg:text-3xl text-gray-800">Titre de l'article</div>
              <div className="text-sm md:text-md text-rose-300 font-bold">Date à insérer</div>
              <div className="text-base md:text-lg lg:text-xl text-gray-700">
                Petit extrait de l'article ou introduction (à venir si parsing de frontmatter).
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
