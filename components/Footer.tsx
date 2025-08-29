"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaGithub, FaGitlab, FaLinkedinIn
} from "react-icons/fa"
import type { Post } from "@/pages/api/weeks";

export default function Footer() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/weeks")
      const data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  const formatSlug = (slug: string) => {
    if (slug === 'w-bilan') {
      return 'Bilan'
    }
    return slug.replace(/semaine(\d+)/i, (_, n) => `Semaine ${n}`)
  }

  const getLink = (slug: string) => {
    if (slug === 'w-bilan') {
      return '/bilan'
    }
    return `/articles/${slug}`
  }

  return (
    <footer className="bg-zinc-900 text-white py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 mt-6 sm:mt-8 md:mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm">
        <div>
          <h3 className="font-bold text-rose-300 mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Entreprise</h3>
          <ul className="space-y-1 sm:space-y-2">
            <li>
              <Link href="#" className="hover:underline text-xs sm:text-sm">
                L'équipe
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline text-xs sm:text-sm">
                Environnement
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline text-xs sm:text-sm">
                Mon intervention
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline text-xs sm:text-sm">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-rose-300 mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Articles</h3>
          <ul className="space-y-1 sm:space-y-2">
            {posts.map(({ slug }, index) => (
              <li key={slug}>
                <Link href={getLink(slug)} className="hover:underline text-xs sm:text-sm">
                  {formatSlug(slug)}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="font-bold text-rose-300 mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Follow Me</h3>
          <div className="flex gap-3 sm:gap-4">
            <Link href="https://www.linkedin.com/in/no%C3%A9mie-dublanc/"><FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5 hover:text-rose-300" /></Link>
            <Link href="https://github.com/Noemyye"><FaGithub className="w-4 h-4 sm:w-5 sm:h-5 hover:text-rose-300"/></Link>
            <Link href="https://gitlab.com/noemie.dblc"><FaGitlab className="w-4 h-4 sm:w-5 sm:h-5 hover:text-rose-300"/></Link>
            <a
              href="/CV-noemie-dublanc.png"
              download
              className="hover:underline text-xs sm:text-sm md:text-base font-bold text-white hover:text-rose-300"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
