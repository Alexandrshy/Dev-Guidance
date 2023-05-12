import { FC } from 'react';

import ButtonLink from '@/components/UI/ButtonLink/ButtonLink';

import styles from './Navbar.module.css';

const Navbar: FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <ButtonLink
            tag="button"
            type="button"
            size="extra-large"
            theme="secondary"
          >
            Join
          </ButtonLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
