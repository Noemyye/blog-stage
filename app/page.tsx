import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="top-0 sticky w-">
      <p className="f">Blog.</p>

      <Link href={"/entreprise"} />
    </div>
  );
}
