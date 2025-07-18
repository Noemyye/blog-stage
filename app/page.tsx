import Image from "next/image";
import WeekList from '@/components/WeekList';

export default function Home() {
  return (
    <div className="flex gap-8 flex-col px-7">
      <Image alt="Bureau" className=" h-auto rounded-sm shadow-lg hover:shadow-xl/15 transition-shadow duration-300 ease-in-out" width={1500} height={700} src={"/img/bureau.png"}></Image>
      <WeekList/>
    </div>
  );
}