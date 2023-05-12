import { FC } from 'react';
import Link from 'next/link';

import styles from './Logo.module.css';

const Logo: FC = () => {
  return (
    <Link href="/" className={styles.logo}>
      DevGuid
    </Link>
  );
};

export default Logo;
