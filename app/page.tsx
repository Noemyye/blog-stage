import Image from "next/image"
import WeekList from "@/components/WeekList"

export default function Home() {
  return (
    <div className="flex gap-4 md:gap-8 flex-col">
      <Image
        alt="Bureau"
        className="h-auto rounded-sm shadow-lg hover:shadow-xl/15 transition-shadow duration-300 ease-in-out w-full"
        width={1500}
        height={700}
        src={"/img/bureau.png"}
      />

      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0 pt-6 md:pt-10 pb-8 md:pb-12">
        <div className="text-3xl md:text-5xl lg:text-7xl font-medium text-balance hover:underline">Qui suis-je ?</div>
        <div className="lg:w-96 xl:w-150">
          <div className="text-base md:text-lg mb-4 md:mb-5">
            Duis sint tempor nostrud deserunt duis commodo aute est non ut elit anim ea. Cillum quis reprehenderit
            tempor velit ipsum qui culpa consequat anim.
          </div>
          <div className="flex gap-3 md:gap-4 text-sm md:text-md font-bold items-center">
            <Image
              alt="Photo de profil"
              className="bg-cover w-10 md:w-[50px] rounded-full"
              width={60}
              height={60}
              src={"/img/profil.png"}
            />
            Noémie Dublanc
          </div>
        </div>
      </div>

      <WeekList />
    </div>
  )
}
