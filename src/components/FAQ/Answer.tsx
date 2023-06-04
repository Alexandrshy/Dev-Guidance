import { FC } from 'react';

import styles from './Answer.module.css';

type AnswerProps = {
  title: string;
  ans: string;
};

const Answer: FC<AnswerProps> = ({ title, ans }) => {
  return (
    <li className={styles.item}>
      <p className={styles.titleBtn}>{title}</p>
      <p className={styles.ans}>{ans}</p>
    </li>
  );
};

export default Answer;
