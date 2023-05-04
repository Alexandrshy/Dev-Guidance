import { FC, ReactNode } from 'react';

import styles from './Headline.module.css';

type HeadlineProps = {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  style?: 'thin' | 'bold';
  children: ReactNode;
};

const Headline: FC<HeadlineProps> = ({ level, style = 'bold', children }) => {
  const Tag = level;
  const className = `${styles.headline} ${styles[style]} ${styles[level]}`;

  return <Tag className={className}>{children}</Tag>;
};

export default Headline;
