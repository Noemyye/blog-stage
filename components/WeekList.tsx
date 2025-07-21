"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function WeekList() {
  const [fileNames, setFileNames] = useState<string[]>([])

  useEffect(() => {
    const fetchFiles = async () => {
      const res = await fetch("/api/weeks")
      const data = await res.json()
      setFileNames(data)
    }
    fetchFiles()
  }, [])

  return (
    <div className="mt-5">
      <div className="text-7xl font-bold py-10">Les posts</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-28">
        {fileNames.map((name, index) => {
          const slug = name.replace(".md", "")
          return (
            <div key={index} className="flex flex-col gap-4">
              <Link
                href={`/articles/${slug}`}
                className="block rounded-xl shadow overflow-hidden aspect-5/3 group" 
              >
                <Image
                  alt={slug}
                  width={500} 
                  height={300} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={`/img/pic${index + 1}.png`}
                />
              </Link>

              {/* Contenu temporaire, à remplacer par du contenu dynamique plus tard */}
              <div className="text-3xl text-gray-800">Titre de l'article</div>
              <div className="text-md text-rose-400">Date à insérer</div>
              <div className="text-xl text-gray-700">
                Petit extrait de l'article ou introduction (à venir si parsing de frontmatter).
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
