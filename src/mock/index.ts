import type { Project, ProjectListProps } from '@/types/project';

export const PROJECT_MOCK: Project = {
  id: '100',
  name: 'Learn How to Pre-render Pages',
  technologies: ['TypeScript', 'React'],
  content: '<h1>Venenatis cras sed</h1>>',
  type: 'completed',
  link: '/',
};

export const PROJECTS_MOCK: ProjectListProps = { projects: [PROJECT_MOCK] };
