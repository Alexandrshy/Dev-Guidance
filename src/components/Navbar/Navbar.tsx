import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

import ButtonLink from '@/components/UI/ButtonLink/ButtonLink';

import styles from './Navbar.module.css';

const Navbar: FC = () => {
  const t = useTranslations();
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <ButtonLink
            tag="link"
            size="extra-large"
            theme="secondary"
            href={route}
            locale={otherLocale}
          >
            <span className={styles.langWrap}>
              <span className={styles.langText}>{t('lang_btn_text')}</span>
              <span className={styles.langShortText}>
                {t('lang_btn_short_text')}
              </span>
            </span>
          </ButtonLink>
        </li>
        <li className={styles.item}>
          <ButtonLink
            tag="link"
            size="extra-large"
            theme="secondary"
            href={'mailto:alexandrshy@gmail.com'}
          >
            {t('navbar_btn')}
          </ButtonLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
