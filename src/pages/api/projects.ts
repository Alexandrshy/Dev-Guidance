import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { markdownToHtml } from '@/libs/markdownToHtml';

const projectDirectory = path.join(process.cwd(), '_projects');
const prepareData = async (fileName: string) => {
  const filePath = path.join(projectDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    id: fileName.replace(/\.md$/, ''),
    ...data,
    content: await markdownToHtml(content),
  };
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const fileNames = fs.readdirSync(projectDirectory);
  const projects = await Promise.all(fileNames.map(prepareData));

  res.status(200).json({ projects });
};

export default handler;
