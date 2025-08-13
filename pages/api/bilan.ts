import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'data', 'bilan.md');

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    res.status(200).json({ content: fileContents });
  } catch (error) {
    res.status(404).json({ error: 'Fichier introuvable' });
  }
}
