import Link from "next/link"

export default function Header() {


    return (
        <div className="flex justify-content-space-between items-center">
            <div className="p-4">
                <h1>Blog.</h1>
            </div>
            
            <div>
                <Link href={"/entreprise"}>Entreprise</Link>
                <Link href={"/articles"}>Articles</Link>
                <Link href={"/bilan"}>Bilan</Link>
            </div>
        </div>
    )
}