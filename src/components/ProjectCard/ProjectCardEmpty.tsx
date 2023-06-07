import { FC } from 'react';

import Headline from '@/components/UI/Typography/Headline/Headline';

import styles from './ProjectCard.module.css';

const ProjectCardEmpty: FC = () => {
  return (
    <li className={styles.item}>
      <div className={styles.box}>
        <div className={styles.title}>
          <Headline level="h5">Проектов пока нет</Headline>
        </div>
        <div className={styles.info}>
          <div className={styles.desc}>
            В данный момент нет проектов, но скоро мы вернемся!
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectCardEmpty;
