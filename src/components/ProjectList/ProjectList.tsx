import { FC } from 'react';

import ProjectCard from '@/components/ProjectCard/ProjectCard';
import type { ProjectListProps } from '@/types/project';

const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
