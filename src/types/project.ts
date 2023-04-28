export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
};

export type ProjectCardProps = {
  project: Project;
};

export type ProjectListProps = {
  projects: Project[];
};
