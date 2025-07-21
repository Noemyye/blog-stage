'use client'

import Image from "next/image"

export default function Page() {
    const equipe = [           
                ["Arthur Duchet‑Suchaux", "CEO – Cofondateur", "Employé"],
                ["Léo Dupouy", "CTO – Cofondateur", "Employé"],
                ["Antoine Sanson", "Technical Lead Fullstack", "Employé"],
                ["Robin Zmuda", "Technical Lead Cyber", "Employé"],
                ["Mickael Desclaux-Arramond", "Dev Fullstack", "Alternant"],
                ["Sangmin Shim", "Dev Fullstack", "Alternant"],
                ["Nathan V", "Dev Cyber", "Alternant"],
                ["Hugo Cot", "Dev Cyber", "Alternant"],
                ["Yani Madebos", "UX Designer", "Alternant"],
                ["Moi", "Dev Fullstack", "Stagiaire"],
              ]
  return (
    <div className="flex flex-col gap-15">
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
        <h2 className="text-3xl font-semibold text-rose-300 mb-4">🧑‍💻 Organisation interne</h2>

        <div className="space-y-6 text-lg">
          <div>
            <h3 className="font-semibold">📦 Les pôles :</h3>
            <ul className="list-disc pl-6">
              <li>Développement Fullstack</li>
              <li>Développement Cyber</li>
              <li>UX/UI Design</li>
              <li>CTO / CEO / RH</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">📁 Méthodes de travail :</h3>
            <ul className="list-disc pl-6">
              <li>Travail en <strong>Sprint</strong> de 3 semaines</li>
              <li>Réunions : daily meetings, weekly, sprint review</li>
              <li>Code review, pair programming, feedback continu</li>
              <li>Suivi RH avec points réguliers pendant le stage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section>
        <h2 className="text-3xl font-semibold text-rose-300 mb-4">👥 L'équipe</h2>

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
        <h2 className="text-3xl font-semibold text-rose-300 mb-4">🧑‍🔧 Mon environnement de travail</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Bureau à Bordeaux avec une ambiance bienveillante</li>
          <li>Télétravail ponctuel possible selon les jours</li>
          <li>Environnement de développement sous Linux (Ubuntu)</li>
          <li>PC de bureau configuré avec outils pro (VSCode, Git, zsh...)</li>
          <li>Stack utilisée : <strong>React, Next.js, Prisma, tRPC, Tailwind CSS, shadcn/ui, WebSocket</strong></li>
        </ul>
      </section>
    </div>
  )
}
