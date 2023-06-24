import { FC } from 'react';
import { useTranslations } from 'next-intl';

import Wrapper from '@/components/Wrapper/Wrapper';
import Headline from '@/components/UI/Typography/Headline/Headline';
import ButtonLink from '@/components/UI/ButtonLink/ButtonLink';

import styles from './Participate.module.css';

const Participate: FC = () => {
  const t = useTranslations();

  return (
    <section className={styles.box}>
      <Wrapper>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <div className={styles.h2}>
              <Headline level="h2">{t('participate_title')}!</Headline>
            </div>
            <div className={styles.h5}>
              <Headline level="h5" style="thin">
                {t('participate_text')}
              </Headline>
            </div>
            <div className={styles.elements}>
              <ButtonLink
                tag="link"
                size="extra-large"
                theme="secondary"
                href="https://github.com/Alexandrshy/Dev-Guidance/issues/new?assignees=Alexandrshy&labels=project&projects=&template=request-to-create-a-project.md&title="
                className={styles.btn}
              >
                {t('participate_btn')}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Participate;
