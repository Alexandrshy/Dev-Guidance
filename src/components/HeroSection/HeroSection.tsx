import { FC } from 'react';

import ButtonLink from '@/components/UI/ButtonLink/ButtonLink';
import Headline from '@/components/UI/Typography/Headline/Headline';
import HeroSectionImg from '@/components/HeroSection/HeroSectionImg';
import Wrapper from '@/components/Wrapper/Wrapper';

import styles from './HeroSection.module.css';

const HeroSection: FC = () => {
  return (
    <Wrapper>
      <section className={styles.wrapper}>
        <div className={styles.text}>
          <div className={styles.h1}>
            <Headline level="h1">
              Присоединяйтесь, учитесь и создавайте вместе!
            </Headline>
          </div>
          <div className={styles.h2}>
            <Headline level="h6" style="thin">
              Совместное изучение Frontend-разработки с помощью реальных
              проектов. Присоединяйтесь к существующему проекту или предложите
              свой собственный!
            </Headline>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <ButtonLink tag="button" type="button" size="extra-large">
                Присоединиться к проекту
              </ButtonLink>
            </li>
          </ul>
        </div>
        <div className={styles.icon}>
          <HeroSectionImg />
        </div>
      </section>
    </Wrapper>
  );
};

export default HeroSection;
