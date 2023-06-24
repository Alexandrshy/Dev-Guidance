import { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import Wrapper from '@/components/Wrapper/Wrapper';

import styles from './Footer.module.css';

const Footer: FC = () => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Wrapper>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span>
              {t('footer_text')} <br />
              <Link href="https://github.com/Alexandrshy/Dev-Guidance">
                {t('footer_link')}
              </Link>
            </span>
          </li>
          <li className={styles.item}>
            <span>© {currentYear}</span>
          </li>
        </ul>
      </Wrapper>
    </footer>
  );
};

export default Footer;
