import { FC } from 'react';
import Link from 'next/link';

import Wrapper from '@/components/Wrapper/Wrapper';

import styles from './Footer.module.css';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Wrapper>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span>
              Хотите принять участие в проекте или нашли ошибку? <br />
              <Link href="https://github.com/Alexandrshy/Dev-Guidance">
                GitHub репозиторий проекта
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
