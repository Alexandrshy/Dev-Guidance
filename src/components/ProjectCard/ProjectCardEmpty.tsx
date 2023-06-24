import { FC } from 'react';
import { useTranslations } from 'next-intl';

import Headline from '@/components/UI/Typography/Headline/Headline';

import styles from './ProjectCard.module.css';

const ProjectCardEmpty: FC = () => {
  const t = useTranslations();

  return (
    <li className={styles.item}>
      <div className={styles.box}>
        <div className={styles.title}>
          <Headline level="h5">{t('project_card_empty_title')}</Headline>
        </div>
        <div className={styles.info}>
          <p className={styles.desc}>{t('project_card_empty_text')}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectCardEmpty;
