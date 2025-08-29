import Link from "next/link"
import ParticleAnimation from "./ParticleAnimation"

export default function Header() {
  return (
    <section className="sticky top-0 z-50 bg-white">
      <ParticleAnimation>
        <div className="container mx-auto flex flex-col items-center justify-between pb-3 sm:pb-4 md:pb-6 pt-3 sm:pt-4 md:pt-7 px-3 sm:px-4 md:px-8 lg:px-18 lg:flex-row">
          <Link
            href={"/"}
            className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold leading-tight tracking-tighter lg:pr-8 whitespace-nowrap"
          >
            Blog<span className="text-rose-200">.</span>
          </Link>
          <nav className="text-pretty mt-2 sm:mt-3 md:mt-5 lg:mt-0 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 text-sm sm:text-base md:text-lg lg:text-xl underline decoration-rose-200 decoration-2 md:decoration-3 underline-offset-4">
            <Link
              href="/entreprise"
              className="transition-transform duration-300 ease-in-out hover:text-rose-200 hover:scale-110 md:hover:scale-125"
            >
              Entreprise
            </Link>
            <Link
              href="/articles"
              className="transition-transform duration-300 ease-in-out hover:text-rose-200 hover:scale-110 md:hover:scale-125"
            >
              Articles
            </Link>
            <Link
              href="/articles/w-bilan"
              className="transition-transform duration-300 ease-in-out hover:text-rose-200 hover:scale-110 md:hover:scale-125"
            >
              Bilan
            </Link>
          </nav>
        </div>
      </ParticleAnimation>
    </section>
  )
}
