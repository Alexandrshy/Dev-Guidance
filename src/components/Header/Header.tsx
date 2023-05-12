import { FC } from 'react';

import Navbar from '@/components/Navbar/Navbar';
import Logo from '@/components/Logo/Logo';

import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
