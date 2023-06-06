export type Project = {
  id: string;
  name: string;
  technologies: string[];
  content: string;
  type: 'completed' | 'in-progress' | 'ready';
  link: string;
};

export type ProjectCardProps = {
  project: Project;
};

export type ProjectListProps = {
  projects: Project[];
};
