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
    fetch('/api/w-bilan')
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
    <div className="px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pb-4 sm:pb-6 md:pb-8 lg:pb-10 bg-gradient-to-r from-rose-100 to-pink-100 p-6 sm:p-8 rounded-xl border-l-4 border-rose-400 shadow-lg">
        Bilan de stage
      </div>
      
      <div className="space-y-8 sm:space-y-12">
        {sections.map((section, idx) => (
          <article
            key={idx}
            className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
              section.style === 'rose' 
                ? 'bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200' 
                : 'bg-white border border-gray-200'
            }`}
          >
            {/* Decorative top border */}
            <div className={`h-1 w-full ${
              section.style === 'rose' 
                ? 'bg-gradient-to-r from-rose-400 to-pink-400' 
                : 'bg-gradient-to-r from-gray-300 to-gray-400'
            }`}></div>
            
            <div className="p-6 sm:p-8 lg:p-10">
              <div className={`prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none ${
                section.style === 'rose' ? 'prose-rose' : 'prose-gray'
              }`}>
                <ReactMarkdown>{section.content}</ReactMarkdown>
              </div>
            </div>
            
            {/* Decorative bottom accent */}
            <div className={`h-0.5 w-full opacity-30 ${
              section.style === 'rose' 
                ? 'bg-gradient-to-r from-rose-300 to-pink-300' 
                : 'bg-gradient-to-r from-gray-200 to-gray-300'
            }`}></div>
          </article>
        ))}
      </div>
      
      <div className="mt-12 sm:mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
      </div>
    </div>
  );
}
