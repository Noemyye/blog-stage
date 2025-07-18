import Link from "next/link"

export default function Header() {
  return (
    <section
      className="sticky top-0 z-50 bg-white"
    >
      <div className="container mx-auto flex flex-col items-center justify-between py-4 px-6 lg:flex-row">
        <h1 className="text-balance text-6xl font-bold leading-tight tracking-tighter lg:pr-8 lg:text-8xl whitespace-nowrap">
          Blog<span className="text-rose-200">.</span>
        </h1>
        <nav className="text-pretty mt-5 flex flex-wrap justify-center gap-10 text-xl underline decoration-rose-200 decoration-3 underline-offset-4 lg:mt-0">
          <Link
            href="/entreprise"
            className="transition-transform duration-300 ease-in-out hover:text-rose-200 hover:scale-125"
          >
            Entreprise
          </Link>
          <Link
            href="/articles"
            className="transition-transform duration-300 ease-in-out hover:text-rose-200 hover:scale-125"
          >
            Articles
          </Link>
          <Link
            href="/bilan"
            className="transition-transform duration-300 ease-in-out hover:text-rose-200 hover:scale-125"
          >
            Bilan
          </Link>
        </nav>
      </div>
    </section>
  )
}
