'use client';

import Link from 'next/link';
import Image from "next/image"
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface Section {
  content: string;
  style: string;
}

export default function BilanPage() {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    fetch('/api/bilan')
      .then(res => res.json())
      .then(data => {
        const content = data.content || '';
        const frontmatterSections = data.sections || [];

        // Split sur '---' pour chaque section
        const splitSections = content
          .split(/^---$/m)
          .map((s: string) => s.trim())
          .filter(Boolean);

        // Merge avec le style du frontmatter
        const mergedSections = splitSections.map((sectionContent: any, idx: string | number) => ({
          content: sectionContent,
          style: frontmatterSections[idx]?.style || 'blanc'
        }));

        setSections(mergedSections);
      })
      .catch(err => console.error("Erreur lors du fetch:", err));
  }, []);

  return (
    <div>
      <div className="text-2xl md:text-4xl lg:text-6xl font-bold pb-6">Bilan de stage</div>
      {sections.map((section, idx) => (
        <article
          key={idx}
          className={`px-25 prose lg:prose-xl pb-12 bg-rose-50${
            section.style === 'rose' ? 'prose-rose bg-rose-50' : 'prose-rose bg-white'
          }`}
        >
          <ReactMarkdown>{section.content}</ReactMarkdown>
        </article>
      ))}
      <div className='border mb-12'></div>

      <div >
        <div className="text-xl md:text-3xl lg:text-5xl font-bold pb-6 md:pb-10">Plus de posts</div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-28'>
           <div className="flex flex-col gap-3 md:gap-4">
              <Link href={`/articles/semaine1`} className="block rounded-xl shadow overflow-hidden aspect-[5/3] group">
                <Image
                  alt='Semaine 1'
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={`/img/pic1.png`}
                />
              </Link>

              <div className="text-xl md:text-2xl lg:text-3xl text-gray-800">Titre de l'article</div>
              <div className="text-sm md:text-md text-rose-300 font-bold">Date à insérer</div>
              <div className="text-base md:text-lg lg:text-xl text-gray-700">
                Petit extrait de l'article ou introduction (à venir si parsing de frontmatter).
              </div>
            </div>
             <div className="flex flex-col gap-3 md:gap-4">
              <Link href={`/articles/semaine2`} className="block rounded-xl shadow overflow-hidden aspect-[5/3] group">
                <Image
                  alt='Semaine 2'
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={`/img/pic2.png`}
                />
              </Link>

              <div className="text-xl md:text-2xl lg:text-3xl text-gray-800">Titre de l'article</div>
              <div className="text-sm md:text-md text-rose-300 font-bold">Date à insérer</div>
              <div className="text-base md:text-lg lg:text-xl text-gray-700">
                Petit extrait de l'article ou introduction (à venir si parsing de frontmatter).
              </div>
            </div>
        </div>


      </div>
    </div>
  );
}
