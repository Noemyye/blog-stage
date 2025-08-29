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

// Custom sorting function to order posts correctly
function sortPosts(posts: Post[]): Post[] {
  return posts.sort((a, b) => {
    // Extract numbers from semaine slugs
    const aMatch = a.slug.match(/semaine(\d+)/);
    const bMatch = b.slug.match(/semaine(\d+)/);
    
    // If both are semaine posts, sort by number
    if (aMatch && bMatch) {
      const aNum = parseInt(aMatch[1]);
      const bNum = parseInt(bMatch[1]);
      return aNum - bNum;
    }
    
    // If only a is semaine, a comes first
    if (aMatch && !bMatch) {
      return -1;
    }
    
    // If only b is semaine, b comes first
    if (!aMatch && bMatch) {
      return 1;
    }
    
    // If neither is semaine, sort alphabetically
    return a.slug.localeCompare(b.slug);
  });
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
    
    // Sort posts in the correct order
    const sortedPosts = sortPosts(posts);
    
    res.status(200).json(sortedPosts);
  } catch (error) {
    console.error('Erreur lecture dossier:', error);
    res.status(500).json({ error: 'Erreur lecture dossier.' });
  }
}
