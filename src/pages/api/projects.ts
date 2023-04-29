import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectDirectory = path.join(process.cwd(), '_projects');
const prepareData = (fileName: string) => {
  const filePath = path.join(projectDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  return {
    id: fileName.replace(/\.md$/, ''),
    ...data,
  };
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const fileNames = fs.readdirSync(projectDirectory);
  const projects = fileNames.map(prepareData);

  res.status(200).json({ projects });
};

export default handler;
