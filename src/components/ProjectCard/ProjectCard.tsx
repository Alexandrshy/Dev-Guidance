import { FC } from 'react';

import type { ProjectCardProps } from '@/types/project';

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <li>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>Technologies: {project.technologies.join(', ')}</p>
    </li>
  );
};

export default ProjectCard;
