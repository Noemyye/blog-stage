import Link from "next/link"

export default function Header() {


    return (
        <section className="mt-16 mb-16 flex flex-col items-center lg:mb-12 lg:flex-row lg:justify-between top-0 sticky">
            <h1 className="text-balance text-6xl font-bold leading-tight tracking-tighter lg:pr-8 lg:text-8xl">
                Blog<span className="text-rose-200">.</span>
            </h1>
            <div className="text-pretty mt-5 text-center text-xl flex gap-20 underline decoration-rose-200 decoration-3 underline-offset-4">
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
            </div>
        </section>
    )
}