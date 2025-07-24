'use client'
import { FaGithub, FaIdCardAlt, FaMousePointer, FaReact, FaRegWindowRestore, FaRoute, FaSlack, FaTerminal } from "react-icons/fa";
import Image from "next/image"
import { BsCalendar2Week } from "react-icons/bs";
import { GrNetwork, GrUbuntu } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAsana, SiGooglemeet, SiNextdotjs, SiPrisma, SiShadcnui } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { MdWork } from "react-icons/md";
import { FaCubesStacked } from "react-icons/fa6";
import { GiPalmTree } from "react-icons/gi";

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
    <div className="flex flex-col gap-10">
      <div className="text-7xl font-bold">Présentation de l'entreprise</div>

      <section className="flex justify-between">
        <Image
          src="/img/logo-haryon.svg"
          alt="Logo Haryon"
          width={600}
          height={150}
          className="bg-[#111A23] rounded-xl p-6"
        />

        <ul className="space-y-3 text-lg leading-relaxed">
          <li><strong>Nom complet :</strong> Haryon (anciennement Knock Knock)</li>
          <li><strong>Création :</strong> 2020</li>
          <li><strong>Statut :</strong> Start-up, SAS, basée à Bordeaux</li>
          <li><strong>Effectif :</strong> Moins de 10 personnes</li>
          <li><strong>Mission :</strong> Plateforme d’automatisation de tests d’intrusion (pentests)</li>
          <li><strong>Clients :</strong> Équipes cybersécurité, MSSP, RSSI</li>
          <li><strong>Particularité :</strong> Solution <em>no-code</em>, <em>on-premise</em>, pensée pour l’environnement critique</li>
        </ul>
      </section>

       <section>
        <h2 className="text-3xl font-semibold text-rose-300 mb-4 flex items-center gap-2"><BsCalendar2Week /> Organisation interne</h2>

        <div className="space-y-6 text-lg">
          <div>
            <h3 className="font-semibold flex items-center gap-2"><FaTerminal /> Les pôles :</h3>
            <ul className="list-disc pl-6">
              <li>Développement Fullstack</li>
              <li>Développement Cyber</li>
              <li>UX/UI Design</li>
              <li>CTO / CEO / RH</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold flex items-center gap-2"><FaRegWindowRestore /> Méthodes de travail :</h3>
            <ul className="list-disc pl-6">
              <li>Travail en <strong>Sprint</strong> de 3 semaines</li>
              <li>Réunions : daily meetings, weekly, sprint review</li>
              <li>Code review, pair programming, feedback continu</li>
              <li>Suivi RH avec points réguliers pendant le stage</li>
              <li>Outils :</li>
              <li className="flex items-center gap-2 "> <SiAsana /><FaSlack /><VscVscodeInsiders /><FaGithub/><SiGooglemeet /></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section>
        <h2 className="text-3xl font-semibold text-rose-300 mb-4 flex gap-2 items-center"><FaIdCardAlt /> L'équipe</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-rose-200">
            <thead>
              <tr className="bg-rose-100 text-rose-300">
                <th className="px-4 py-2 text-left">Nom</th>
                <th className="px-4 py-2 text-left">Rôle</th>
                <th className="px-4 py-2 text-left">Statut</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {equipe.map(([nom, role, statut], i) => (
                <tr key={i} className="even:bg-rose-50">
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
      <section>
        <h2 className="text-3xl font-semibold text-rose-300 mb-4 flex gap-2 items-center">
          <FaMousePointer /> Mon environnement de travail
        </h2>
        <ul className="list-disc text-xl pl-6 space-y-2">
          <li className="flex gap-2 items-center">
            <FaRoute className="size-6" /> Bureau à la cité du numérique, Bègles (2 Rue Marc Sangnier)
          </li>
          <li className="flex gap-2 items-center">
            <MdWork className="size-6"/> Télétravail ponctuel possible selon les jours
          </li>
          <li className="flex gap-2 items-center">
            <GrUbuntu className="size-6" /> Environnement de développement sous Linux (Ubuntu)
          </li>
          <li className="flex gap-2 items-center">
            <VscVscodeInsiders className="size-6" /> PC de bureau configuré avec outils pro (VSCode, Git, Slack...)
          </li>
          <li className="flex gap-2 items-center">
            <FaCubesStacked className="size-6" /> Stack utilisée :
          </li>
          <ul className="pl-8 space-y-1 list-none">
            <li className="flex gap-2 items-center">
              <FaReact /> React
            </li>
            <li className="flex gap-2 items-center">
              <SiNextdotjs /> Next.js
            </li>
            <li className="flex gap-2 items-center">
              <SiPrisma /> Prisma
            </li>
            <li className="flex gap-2 items-center">
              <GrNetwork /> tRPC
            </li>
            <li className="flex gap-2 items-center">
              <RiTailwindCssFill /> Tailwind CSS
            </li>
            <li className="flex gap-2 items-center">
              <SiShadcnui /> shadcn/ui
            </li>
            <li className="flex gap-2 items-center">
              <GrNetwork /> WebSocket
            </li>
            <li className="flex gap-2 items-center">
              <GiPalmTree /> TanStack Table
            </li>
          </ul>
        </ul>
      </section>

    </div>
  )
}
