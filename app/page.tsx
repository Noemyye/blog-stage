import Image from "next/image";
import WeekList from '@/components/WeekList';

export default function Home() {
  return (
    <div className="flex gap-8 flex-col">
      <Image alt="Bureau" className="h-auto rounded-sm shadow-lg hover:shadow-xl/15 transition-shadow duration-300 ease-in-out" width={1500} height={700} src={"/img/bureau.png"}/>
      
      <div className="flex justify-between py-8">
        <div className="text-7xl font-medium text-balance hover:underline">Qui suis-je ?</div>
        <div className="w-150">
          <div className="text-lg mb-5">J’ai 19 ans et je suis passionnée par le développement web, surtout le front-end.
          J’aime créer des interfaces modernes, fluides et esthétiques, en travaillant autant sur l’ergonomie que sur le design. 
          Egalement apprendre de nouvelles technologies et trouver des solutions élégantes pour améliorer l’expérience utilisateur.</div>
          <div className="flex gap-4 text-md font-bold items-center"> <Image alt="Photo de profil" className="bg-cover w-[50px] rounded-4xl" width={60} height={60} src={"/img/profil.png"}/> Noémie Dublanc</div>
        </div>
      </div>

      <WeekList/>
      
    </div>
  );
}