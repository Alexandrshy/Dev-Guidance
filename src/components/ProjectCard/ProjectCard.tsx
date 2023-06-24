import { FC } from 'react';
import { useTranslations } from 'next-intl';

import type { ProjectCardProps } from '@/types/project';
import Headline from '@/components/UI/Typography/Headline/Headline';
import ButtonLink from '@/components/UI/ButtonLink/ButtonLink';
import Badge from '@/components/UI/Badge/Badge';

import styles from './ProjectCard.module.css';

const BADGE = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  'to-do': 'To Do',
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const t = useTranslations();

  return (
    <li className={styles.item}>
      <div className={styles.box}>
        <div className={styles.title}>
          <Headline level="h5">{project.name}</Headline>
        </div>
        <div className={styles.info}>
          {project.type && (
            <div className={styles.badge}>
              <Badge type={project.type}>{BADGE[project.type]}</Badge>
            </div>
          )}
          <p className={styles.tags}>
            {t('project_card_technologies')}:{' '}
            <span className={styles.additionally}>
              {project.technologies.join(', ')}
            </span>
          </p>
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </div>
        <ButtonLink
          tag="link"
          theme="secondary"
          className={styles.btn}
          href={project.link}
        >
          {t('project_card_btn')}
        </ButtonLink>
      </div>
    </li>
  );
};

export default ProjectCard;
