import Link from "next/link"
import Image from "next/image"
import type { Post } from "@/pages/api/weeks";

// Server-side data fetching
async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/weeks`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  return res.json()
}

export default async function WeekList() {
  const posts = await getPosts()

  return (
    <div className="mt-5">
      <div className="text-7xl font-bold py-10">Les posts</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-28">
        {posts.map(({ slug, title, date, description }, index) => (
          <div key={slug} className="flex flex-col gap-4">
            <Link
              href={`/articles/${slug}`}
              className="block rounded-xl shadow overflow-hidden aspect-5/3 group" 
            >
              <Image
                alt={title}
                width={500} 
                height={300} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                src="/img/pic1.png"
              />
            </Link>

            <div className="text-3xl text-gray-800">{title}</div>
            <div className="text-md text-rose-400">{date}</div>
            <div className="text-xl text-gray-700">{description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}