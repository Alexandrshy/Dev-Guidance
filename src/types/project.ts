export type Project = {
  id: string;
  name: string;
  technologies: string[];
  content: string;
  type: 'completed' | 'in-progress' | 'to-do';
  link: string;
  lang: 'ru' | 'en';
};

export type ProjectCardProps = {
  project: Project;
};

export type ProjectListProps = {
  projects: Project[];
};
