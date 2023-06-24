import { FC, ReactNode } from 'react';

import styles from './Badge.module.css';

type BadgeType = {
  type: 'completed' | 'in-progress' | 'to-do';
  children: ReactNode;
};

const Badge: FC<BadgeType> = ({ children, type }) => {
  return <span className={`${styles.item} ${styles[type]}`}>{children}</span>;
};

export default Badge;
