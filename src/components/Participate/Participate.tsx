import { FC } from 'react';

import Wrapper from '@/components/Wrapper/Wrapper';
import Headline from '@/components/UI/Typography/Headline/Headline';
import ButtonLink from '@/components/UI/ButtonLink/ButtonLink';

import styles from './Participate.module.css';

const Participate: FC = () => {
  return (
    <section className={styles.box}>
      <Wrapper>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <div className={styles.h2}>
              <Headline level="h2">Предложить свой проект!</Headline>
            </div>
            <div className={styles.h5}>
              <Headline level="h5" style="thin">
                У вас есть отличная идея проекта?
              </Headline>
            </div>
            <div className={styles.btn}>
              <ButtonLink
                tag="link"
                size="extra-large"
                theme="secondary"
                href="https://github.com/Alexandrshy/Dev-Guidance/issues/new?assignees=Alexandrshy&labels=project&projects=&template=request-to-create-a-project.md&title="
              >
                Предложить проект
              </ButtonLink>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Participate;
