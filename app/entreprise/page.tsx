'use client'
import { FaIdCardAlt, FaMousePointer, FaRegWindowRestore, FaRoute, FaTerminal } from "react-icons/fa";
import Image from "next/image"
import { BsCalendar2Week } from "react-icons/bs";
import { GrUbuntu } from "react-icons/gr";
import { VscVscodeInsiders } from "react-icons/vsc";
import { MdRocket, MdSecurity, MdWork } from "react-icons/md";
import { FaCubesStacked } from "react-icons/fa6";
import TechStack from "@/components/TeckStack";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
    const equipe = [           
                ["Arthur Duchet‑Suchaux", "CEO – Cofondateur", "Employé"],
                ["Léo Dupouy", "CTO – Cofondateur", "Employé"],
                ["Antoine Sanson", "Technical Lead Fullstack", "Employé"],
                ["Robin Zmuda", "Technical Lead Cyber", "Employé"],
                ["Mickael Desclaux-Arramond", "Dev Fullstack", "Alternant"],
                ["Sangmin Shim", "Dev Fullstack", "Alternant"],
                ["Nathan Vacher", "Dev Cyber", "Alternant"],
                ["Hugo Cot", "Dev Cyber", "Alternant"],
                ["Yani Madebos", "UX Designer", "Alternant"],
              ]
  return (
    <div className="flex flex-col gap-20">
      <div className="text-5xl font-bold">Présentation de l'entreprise</div>

      <section className="flex gap-15 h-60">
        <Image
          src="/img/logo-haryon.svg"
          alt="Logo Haryon"
          width={600}
          height={240}
          className="bg-[#111A23] rounded-xl p-6"
        />

        <ul className="space-y-3 text-lg leading-relaxed">
          <li><strong className="rounded-full px-3 py-1 bg-teal-500/40">Nom complet :</strong> Haryon (anciennement Knock Knock)</li>
          <li><strong className="rounded-full px-3 py-1 bg-teal-500/40">Création :</strong> 2020</li>
          <li><strong className="rounded-full px-3 py-1 bg-teal-500/40">Statut :</strong> Start-up, SAS, basée à Bordeaux</li>
          <li><strong className="rounded-full px-3 py-1 bg-teal-500/40">Effectif :</strong> Moins de 10 personnes</li>
          <li><strong className="rounded-full px-3 py-1 bg-teal-500/40">Clients :</strong> Équipes cybersécurité, MSSP, RSSI</li>
          <li><strong className="rounded-full px-3 py-1 bg-teal-500/40">Localisation :</strong>{" "}
          <a
            href="https://www.google.com/maps/place/Cit%C3%A9+Num%C3%A9rique/@44.8130463,-0.5540888,17z/data=!3m1!4b1!4m6!3m5!1s0xd552657f96df915:0x7df72cfff31ae12f!8m2!3d44.8130463!4d-0.5540888!16s%2Fg%2F11b633y8gl?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            La cité du Numérique, Bègles (2 Rue Marc Sangnier)
          </a>
          </li>
        </ul>
      </section>

      <Card className="shadow-lg gap-5 border border-slate-200 text-center">
        <CardHeader className="flex justify-center">
          <CardTitle className="bg-teal-100 p-4 rounded-full">
            <MdSecurity className="text-4xl text-teal-500" />
          </CardTitle>
        </CardHeader>
        <CardTitle className="text-3xl font-bold text-slate-800">Mission de l'entreprise</CardTitle>
        <CardDescription className="bg-gradient-to-r from-teal-500 to-teal-300 text-white rounded-xl p-8 ">
          <p className="text-2xl font-semibold italic transition-all duration-200 hover:scale-105">"Pentesters skills in Defenders hands"</p>
        </CardDescription>
        <CardContent className="text-md text-slate-600 leading-relaxed max-w-4xl mx-auto">
          Donner aux défenseurs les moyens les plus avancés issus de la cyber offensive, en leur permettant de
          bénéficier en continu des compétences, des techniques et de la R&D des pentesters humains.
        </CardContent>
      </Card>
    
      <Card className="bg-gradient-to-r from-teal-50 to-cyan-50  border border-teal-300">
        <div className="flex items-center justify-center transition-all duration-200 hover:scale-105">
          <div className="bg-teal-100 p-4 rounded-full mr-4">
            <MdRocket className="text-4xl text-teal-500" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800">Leur solution</h2>
        </div>
        <p className="text-lg text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
          Une plateforme on-premise d'orchestration et d'automatisation de tests d'intrusion, qui relie les
          savoir-faire des pentesters aux besoins opérationnels des défenseurs.
        </p>
      </Card>

        <Card>
            <CardHeader className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <BsCalendar2Week className="text-teal-500" />
              Organisation interne
            </CardHeader>

            <CardContent className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <FaTerminal className="text-teal-500" /> Les pôles
                </h3>
                <ul className="space-y-3">
                  {["Développement Fullstack", "Développement Cyber", "UX/UI Design", "CTO / CEO / RH"].map(
                    (pole, index) => (
                      <li key={index} className="flex items-center gap-3 text-slate-700">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        {pole}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <FaRegWindowRestore className="text-teal-500" /> Méthodes de travail
                </h3>
                <ul className="space-y-3">
                  {[
                    "Travail en Sprint de 3 semaines",
                    "Réunions : daily meetings, weekly, sprint review",
                    "Code review, pair programming, feedback continu",
                    "Suivi RH avec points réguliers pendant le stage",
                  ].map((method, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
        </Card>

      {/* Équipe */}
      <section>
        <div className="flex items-center mb-4">
          <div className="bg-teal-100 p-3 rounded-full mr-4">
            <FaIdCardAlt className="text-3xl text-teal-500" />
          </div>
          <h2 className="text-3xl font-semibold text-slate-800">L'équipe</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-teal-300">
            <thead>
              <tr className="bg-teal-100 text-slate-700">
                <th className="px-4 py-2 text-left">Nom</th>
                <th className="px-4 py-2 text-left">Rôle</th>
                <th className="px-4 py-2 text-left">Statut</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {equipe.map(([nom, role, statut], i) => (
                <tr key={i} className="even:bg-teal-50">
                  <td className="px-4 py-2">{nom}</td>
                  <td className="px-4 py-2">{role}</td>
                  <td className="px-4 py-2">{statut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Environnement de travail */}
      <Card className="shadow-lg border border-slate-200">
            <CardHeader className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <FaMousePointer className="text-teal-500" /> Environnement de travail
            </CardHeader>

            <CardContent className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: FaRoute, text: `Bureau à 
                ${<a
                  href="https://www.google.com/maps/place/Cit%C3%A9+Num%C3%A9rique/@44.8130463,-0.5540888,17z/data=!3m1!4b1!4m6!3m5!1s0xd552657f96df915:0x7df72cfff31ae12f!8m2!3d44.8130463!4d-0.5540888!16s%2Fg%2F11b633y8gl?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                La cité du Numérique, Bègles (2 Rue Marc Sangnier)
                </a>}` },
                { icon: MdWork, text: "Télétravail ponctuel possible selon les jours" },
                { icon: GrUbuntu, text: "Environnement de développement sous Linux (Ubuntu)" },
                { icon: VscVscodeInsiders, text: "PC de bureau configuré avec outils pro (VSCode, Git, Slack...)" },
              ].map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 flex items-center gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0 transition-all duration-200 hover:scale-115">
                    <item.icon className="text-xl text-teal-500" />
                  </div>
                  <p className="text-slate-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </CardContent>
        </Card>

      <section>
        <div className="flex items-center mb-4">
          <div className="bg-teal-100 p-3 rounded-full mr-4">
            <FaCubesStacked className="text-3xl text-teal-500" />
          </div>
          <h2 className="text-3xl font-semibold text-slate-800">Stack technique</h2>
        </div>
        <TechStack />
      </section>

    </div>
  )
}
