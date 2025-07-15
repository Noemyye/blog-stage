"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const WeekList: React.FC = () => {
  const [fileNames, setFileNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const res = await fetch('/api/weeks');
      const data = await res.json();
      setFileNames(data);
    };

    fetchFiles();
  }, []);

  return (
    <section className="mt-6 mb-16 flex flex-col items-center lg:mb-12 lg:flex-row lg:justify-between top-0 sticky">
      <div className="text-pretty mt-5 text-center text-xl flex gap-20 underline decoration-rose-200 decoration-3 underline-offset-4">
        <ul>
          {fileNames.map((name, index) => (
            <li key={index}>
              <Link href={`/weeks/${name.replace('.md', '')}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WeekList;
