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

  return (
    <footer className="bg-zinc-900 text-white py-8 md:py-12 px-4 md:px-6 mt-8 md:mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-sm">
        <div>
          <h3 className="font-bold text-rose-300 mb-3 md:mb-4">Entreprise</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                L'équipe
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Environnement
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Mon intervention
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-rose-300 mb-4">Articles</h3>
          <ul className="space-y-2">
            {posts.map(({ slug }, index) => {
              const formatted = slug.replace(/semaine(\d+)/i, (_, n) => `Semaine ${n}`)
              return (
                <li key={slug}>
                  <Link href={`/articles/${slug}`} className="hover:underline">
                    {formatted}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>


        <div>
          <h3 className="font-bold text-rose-300 mb-4">Follow Me</h3>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/no%C3%A9mie-dublanc/"><FaLinkedinIn className="w-5 h-5 hover:text-rose-300" /></Link>
            <Link href="https://github.com/Noemyye"><FaGithub className="w-5 h-5 hover:text-rose-300"/></Link>
            <Link href="https://gitlab.com/noemie.dblc"><FaGitlab className="w-5 h-5 hover:text-rose-300"/></Link>
            <a
              href="/CV-noemie-dublanc.png"
              download
              className="hover:underline text-base md:text-lg font-bold text-white hover:text-rose-300"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
