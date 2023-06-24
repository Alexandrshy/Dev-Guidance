import { FC } from 'react';
import { useTranslations } from 'next-intl';

import ButtonLink from '@/components/UI/ButtonLink/ButtonLink';
import Headline from '@/components/UI/Typography/Headline/Headline';
import HeroSectionImg from '@/components/HeroSection/HeroSectionImg';
import Wrapper from '@/components/Wrapper/Wrapper';

import styles from './HeroSection.module.css';

type HeroSectionType = {
  onClick: () => void;
};

const HeroSection: FC<HeroSectionType> = ({ onClick }) => {
  const t = useTranslations();

  return (
    <Wrapper>
      <section className={styles.wrapper}>
        <div className={styles.text}>
          <div className={styles.h1}>
            <Headline level="h1">{t('hero_section_title')}</Headline>
          </div>
          <div className={styles.h2}>
            <Headline level="h6" style="thin">
              {t('hero_section_text')}
            </Headline>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <ButtonLink
                tag="button"
                type="button"
                size="extra-large"
                onClick={onClick}
              >
                {t('hero_section_btn')}
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
