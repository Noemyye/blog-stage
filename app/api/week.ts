import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    const files = fs.readdirSync(dataDir);
    const mdFiles = files.filter((file) => file.endsWith('.md'));
    res.status(200).json(mdFiles);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la lecture du dossier.' });
  }
}
