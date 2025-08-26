import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';
import matter from "gray-matter";

export type Post = {
  slug: string
  title: string
  date: string
  description: string
}


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".md"));
    const posts = files.map((file) => {
      const fullPath = path.join(dataDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
  
      return {
        slug: file.replace(".md", ""),
        title: data.title,
        date: data.date,
        description: data.description,
      };
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error('Erreur lecture dossier:', error);
    res.status(500).json({ error: 'Erreur lecture dossier.' });
  }
}
