"use client"
import { FaIdCardAlt, FaMousePointer, FaRegWindowRestore, FaRoute, FaTerminal } from "react-icons/fa"
import Image from "next/image"
import { BsCalendar2Week } from "react-icons/bs"
import { GrUbuntu } from "react-icons/gr"
import { VscVscodeInsiders } from "react-icons/vsc"
import { MdRocket, MdSecurity, MdWork } from "react-icons/md"
import { FaCubesStacked } from "react-icons/fa6"
import TechStack from "@/components/TeckStack"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
    <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Titre principal avec animation d'entrée */}
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in-up opacity-0 animation-delay-200">
        Présentation de l'entreprise
      </div>

      {/* Section présentation avec animations staggered */}
      <section className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-15 min-h-60 animate-fade-in-up opacity-0 animation-delay-400">
          <Image
            src="/img/logo-haryon.svg"
            alt="Logo Haryon"
            width={600}
            height={240}
            className="bg-[#111A23] rounded-xl p-4 sm:p-6 shadow-lg "
          />

        <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg leading-relaxed">
          {[
            { label: "Nom complet :", value: "Haryon (anciennement Knock Knock)" },
            { label: "Création :", value: "2020" },
            { label: "Effectif :", value: "Moins de 10 personnes" },
            { label: "Clients :", value: "Équipes cybersécurité, MSSP, RSSI" },
            {
              label: "Localisation :",
              value: (
                <a
                  href="https://www.google.com/maps/place/Cit%C3%A9+Num%C3%A9rique/@44.8130463,-0.5540888,17z/data=!3m1!4b1!4m6!3m5!1s0xd552657f96df915:0x7df72cfff31ae12f!8m2!3d44.8130463!4d-0.5540888!16s%2Fg%2F11b633y8gl?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-teal-600 transition-colors duration-200"
                >
                  La cité du Numérique, Bègles (2 Rue Marc Sangnier)
                </a>
              ),
            },
            { label: "Durée du stage :", value: "10 semaines (350h)" },
          ].map((item, index) => (
            <li
              key={index}
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <strong className="rounded-full px-2 sm:px-3 py-1 bg-teal-500/40 hover:bg-teal-500/60 transition-all duration-200 hover:scale-105 text-sm sm:text-base">
                {item.label}
              </strong>{" "}
              <span className="text-sm sm:text-base">{item.value}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Mission de l'entreprise avec animation de pulsation */}
      <Card className="shadow-lg gap-3 sm:gap-5 border border-slate-200 text-center animate-fade-in-up opacity-0 animation-delay-800 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <CardHeader className="flex justify-center">
          <CardTitle className="bg-teal-100 p-3 sm:p-4 rounded-full animate-pulse-slow hover:animate-spin-slow transition-all duration-300">
            <MdSecurity className="text-2xl sm:text-3xl md:text-4xl text-teal-500" />
          </CardTitle>
        </CardHeader>
        <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 animate-fade-in opacity-0 animation-delay-1000">
          Mission de l'entreprise
        </CardTitle>
        <CardDescription className="bg-gradient-to-r from-teal-600 to-teal-300 text-white rounded-xl p-4 sm:p-6 md:p-8 animate-gradient-x">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold italic transition-all duration-300 hover:scale-110">
            "Pentesters skills in Defenders hands"
          </p>
        </CardDescription>
        <CardContent className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto animate-fade-in opacity-0 animation-delay-1200">
          Donner aux défenseurs les moyens les plus avancés issus de la cyber offensive, en leur permettant de
          bénéficier en continu des compétences, des techniques et de la R&D des pentesters humains.
        </CardContent>
      </Card>

      {/* Solution avec animation de rebond */}
      <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-300 animate-fade-in-up opacity-0 animation-delay-1400 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="bg-teal-100 p-3 sm:p-4 rounded-full animate-bounce-slow hover:animate-spin transition-all duration-300">
            <MdRocket className="text-2xl sm:text-3xl md:text-4xl text-teal-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">Leur solution</h2>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed text-center max-w-4xl mx-auto animate-fade-in opacity-0 animation-delay-1600 mt-4">
          Une plateforme on-premise d'orchestration et d'automatisation de tests d'intrusion, qui relie les savoir-faire
          des pentesters aux besoins opérationnels des défenseurs.
        </p>
      </Card>

      {/* Organisation interne avec animations staggered */}
      <Card className="animate-fade-in-up opacity-0 animation-delay-1800 hover:shadow-lg transition-all duration-500">
        <CardHeader className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 flex items-center gap-2 sm:gap-3">
          <BsCalendar2Week className="text-teal-500 animate-pulse hover:animate-spin transition-all duration-300" />
          Organisation interne
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-slate-50 rounded-xl p-4 sm:p-6 transform transition-all duration-500 hover:scale-105 hover:bg-slate-100 animate-slide-in-left opacity-0 animation-delay-2000">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
              <FaTerminal className="text-teal-500 animate-pulse" /> Les pôles
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {["Développement Fullstack", "Développement Cyber", "UX/UI Design", "CTO / CEO / RH"].map(
                (pole, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-slate-700 animate-slide-in-right opacity-0 hover:translate-x-2 transition-all duration-300"
                    style={{ animationDelay: `${2200 + index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    {pole}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 sm:p-6 transform transition-all duration-500 hover:scale-105 hover:bg-slate-100 animate-slide-in-right opacity-0 animation-delay-2000">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
              <FaRegWindowRestore className="text-teal-500 animate-pulse" /> Méthodes de travail
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Travail en Sprint de 3 semaines",
                "Réunions : daily meetings, weekly, sprint review",
                "Code review, pair programming, feedback continu",
                "Suivi RH avec points réguliers pendant le stage",
              ].map((method, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-slate-700 animate-slide-in-left opacity-0 hover:translate-x-2 transition-all duration-300"
                  style={{ animationDelay: `${2600 + index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  {method}
                </li>
              ))}
            </ul>            
          </div>
        </CardContent>
      </Card>

      {/* Équipe avec animation de tableau */}
      <section className="animate-fade-in-up opacity-0 animation-delay-3000">
        <div className="flex flex-col sm:flex-row items-center mb-4 gap-2 sm:gap-4">
          <div className="bg-teal-100 p-2 sm:p-3 rounded-full animate-bounce-slow hover:animate-spin transition-all duration-300">
            <FaIdCardAlt className="text-2xl sm:text-3xl text-teal-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800">L'équipe</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-teal-300 shadow-lg rounded-lg overflow-hidden text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="bg-teal-100 text-slate-700">
                <th className="px-2 sm:px-4 py-2 text-left">Nom</th>
                <th className="px-2 sm:px-4 py-2 text-left">Rôle</th>
                <th className="px-2 sm:px-4 py-2 text-left">Statut</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {equipe.map(([nom, role, statut], i) => (
                <tr
                  key={i}
                  className="even:bg-teal-50 hover:bg-teal-100 transition-all duration-300 transform animate-fade-in opacity-0"
                  style={{ animationDelay: `${3200 + i * 50}ms` }}
                >
                  <td className="px-2 sm:px-4 py-2">{nom}</td>
                  <td className="px-2 sm:px-4 py-2">{role}</td>
                  <td className="px-2 sm:px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        statut === "Employé" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Environnement de travail avec animations de cartes */}
      <Card className="shadow-lg border border-slate-200 animate-fade-in-up opacity-0 animation-delay-3800 hover:shadow-2xl transition-all duration-500">
        <CardHeader className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 flex items-center gap-2 sm:gap-3">
          <FaMousePointer className="text-teal-500 animate-pulse hover:animate-bounce transition-all duration-300" />
          Environnement de travail
        </CardHeader>

        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              icon: FaRoute,
              text: (
                <>
                  Bureau à{" "}
                  <a
                    href="https://www.google.com/maps/place/Cit%C3%A9+Num%C3%A9rique/@44.8130463,-0.5540888,17z/data=!3m1!4b1!4m6!3m5!1s0xd552657f96df915:0x7df72cfff31ae12f!8m2!3d44.8130463!4d-0.5540888!16s%2Fg%2F11b633y8gl?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-teal-600 transition-colors duration-200"
                  >
                    La cité du Numérique, Bègles (2 Rue Marc Sangnier)
                  </a>
                </>
              ),
            },
            { icon: MdWork, text: "Télétravail ponctuel possible selon les jours" },
            { icon: GrUbuntu, text: "Environnement de développement sous Linux (Ubuntu)" },
            { icon: VscVscodeInsiders, text: "PC de bureau configuré avec outils pro (VSCode, Git, Slack...)" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 transform transition-all duration-500 hover:shadow-lg animate-slide-in-up opacity-0"
              style={{ animationDelay: `${4000 + index * 150}ms` }}
            >
              <div className="bg-teal-100 p-2 sm:p-3 rounded-lg flex-shrink-0 transition-all duration-300 hover:scale-115 hover:rotate-12 hover:bg-teal-200">
                <item.icon className="text-lg sm:text-xl text-teal-500" />
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Stack technique avec animation finale */}
      <section className="animate-fade-in-up opacity-0 animation-delay-4600">
        <div className="flex flex-col sm:flex-row items-center mb-4 gap-2 sm:gap-4">
          <div className="bg-teal-100 p-2 sm:p-3 rounded-full">
            <FaCubesStacked className="text-2xl sm:text-3xl text-teal-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800">Stack technique</h2>
        </div>
        <div className="animate-fade-in opacity-0 animation-delay-4800">
          <TechStack />
        </div>
      </section>
    </div>
  )
}
