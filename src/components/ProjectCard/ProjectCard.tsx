import { FC } from 'react';

import Headline from '@/components/UI/Typography/Headline/Headline';
import type { ProjectCardProps } from '@/types/project';

import styles from './ProjectCard.module.css';
import ButtonLink from '@/components/UI/ButtonLink/ButtonLink';
import Badge from '@/components/UI/Badge/Badge';

const BADGE = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  ready: 'Ready',
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <li className={styles.item}>
      <div className={styles.box}>
        <div className={styles.title}>
          <Headline level="h5">{project.name}</Headline>
        </div>
        <div className={styles.info}>
          <div className={styles.badge}>
            <Badge type={project.type}>{BADGE[project.type]}</Badge>
          </div>
          <p className={styles.tags}>
            Technologies:{' '}
            <span className={styles.additionally}>
              {project.technologies.join(', ')}
            </span>
          </p>
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
        <ButtonLink
          tag="button"
          type="button"
          theme="secondary"
          className={styles.btn}
        >
          Присеоединиться
        </ButtonLink>
      </div>
    </li>
  );
};

export default ProjectCard;
