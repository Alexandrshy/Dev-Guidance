import { FC } from 'react';

import ButtonLink from '@/components/UI/ButtonLink/ButtonLink';

import styles from './Navbar.module.css';

const Navbar: FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <ButtonLink
            tag="link"
            size="extra-large"
            theme="secondary"
            href={'mailto:alexandrshy@gmail.com'}
          >
            Обсудить
          </ButtonLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
