import type { Project } from '@/types/project';

export const PROJECT_MOCK: Project = {
  id: '100',
  name: 'Learn How to Pre-render Pages',
  technologies: ['TypeScript', 'React'],
  content: '<h1>Venenatis cras sed</h1>>',
  type: 'completed',
  link: '/',
  lang: 'ru',
};

export const PROJECTS_MOCK: Project[] = [PROJECT_MOCK];
