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
    <div className="mt-5">
      <ul className="flex flex-wrap gap-4">
        {fileNames.map((name, index) => {
          const slug = name.replace('.md', '');
          const formatted = slug.replace(/semaine(\d+)/i, (_, n) => `Semaine ${n}`);

          return (
            <li
              key={index}
              className="w-[calc(25%-1rem)] aspect-square"
            >
              <Link
                href={`/weeks/${slug}`}
                className="block w-full h-full text-center bg-rose-100 hover:bg-rose-200 text-rose-900 font-semibold rounded-xl shadow transition duration-200 flex items-center justify-center"
              >
                {formatted}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WeekList;
