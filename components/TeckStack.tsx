'use client'

import { Card } from "@/components/ui/card"
import {
  FaReact,
  FaGithub,
  FaSlack,
} from "react-icons/fa"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiPrisma,
  SiAsana,
  SiGooglemeet,
} from "react-icons/si"
import { GrNetwork, GrUbuntu } from "react-icons/gr";
import { VscVscodeInsiders } from "react-icons/vsc";
import { GiPalmTree } from "react-icons/gi"

const techStack = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "shadcn/ui", icon: <SiShadcnui /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "tRPC", icon: <GrNetwork /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "WebSocket", icon: <GrNetwork /> },
    ],
  },
  {
    category: "Outils & Environnement",
    skills: [
      { name: "VSCode", icon: <VscVscodeInsiders /> },
      { name: "Git", icon: <FaGithub/> },
      { name: "Slack", icon: <FaSlack /> },
      { name: "Ubuntu", icon: <GrUbuntu /> },
      { name: "Asana", icon: <SiAsana />},
      { name: "GoogleMeet", icon: <SiGooglemeet />}
    ],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {techStack.map((tech) => (
        <Card key={tech.category} className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map(({ name, icon }) => (
              <span
                key={name}
                className="inline-flex items-center gap-1 sm:gap-2 rounded-md bg-teal-300/20 px-2 py-1 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-teal-400/30 transition-all duration-200 hover:scale-105"
              >
                {icon} {name}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
