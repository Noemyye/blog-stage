import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Image alt="Bureau" className="w-full h-auto rounded-sm shadow-lg hover:shadow-xl/15 transition-shadow duration-300 ease-in-out" width={1400} height={700} src={"/img/bureau.png"}></Image>
    </div>
  );
}
  