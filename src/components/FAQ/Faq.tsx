import { FC } from 'react';

import Answer from '@/components/FAQ/Answer';
import Headline from '@/components/UI/Typography/Headline/Headline';
import Wrapper from '@/components/Wrapper/Wrapper';

import styles from './Faq.module.css';

const LIST = [
  {
    id: 1,
    title: 'Кто может внести свой вклад?',
    ans: 'Участвовать может любой, кто заинтересован в изучении frontend-разработки. Вы можете предложить новый проект, присоединиться к существующему или участвовать в сеансах парного программирования.',
  },
  {
    id: 2,
    title: 'Как я могу внести свой вклад?',
    ans: 'Вы можете внести свой вклад, предложив новый проект, присоединившись к существующему или участвовав в сеансах парного программирования. Ознакомьтесь со списком проектов, чтобы начать.',
  },
  {
    id: 3,
    title: 'Должен ли я знать определенный технологический стек для участия?',
    ans: 'Хотя наличие некоторых знаний в необходимом технологическом стеке будет полезно, это не обязательно. Идея состоит в том, чтобы учиться по мере вашего участия. Каждый проект имеет перечень необходимых технологий, поэтому вы можете присоединиться к проектам, которые соответствуют вашим целям.',
  },
];

const FAQ: FC = () => {
  return (
    <section className={styles.box}>
      <Wrapper>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <Headline level="h2">Как это работает?</Headline>
          </div>
          <div className={styles.question}>
            <ul className={styles.list}>
              {LIST.map(({ id, title, ans }) => (
                <Answer key={id} title={title} ans={ans} />
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default FAQ;
