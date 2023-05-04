import { FC, ReactNode } from 'react';
import Link from 'next/link';

import styles from './ButtonLink.module.css';

type LinkProps = {
  tag?: 'link';
  href: string;
  size?: 'medium' | 'large' | 'extra-large';
  children: ReactNode;
};

type ButtonProps = {
  tag?: 'button';
  type: 'button' | 'submit' | 'reset';
  theme?: 'primary' | 'secondary' | 'transparency' | 'ghost';
  onClick?: () => void;
  size?: 'medium' | 'large' | 'extra-large';
  disabled?: boolean;
  children: ReactNode;
};

type ButtonLinkProps = LinkProps | ButtonProps;

const ButtonLink: FC<ButtonLinkProps> = (props) => {
  const { children, size = 'large' } = props;

  if (props.tag === 'button') {
    const {
      type,
      onClick,
      disabled = false,
      theme = 'primary',
    } = props as ButtonProps;
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${styles.button} ${styles[size]} ${styles[theme]}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  } else {
    const { href } = props as LinkProps;
    return (
      <Link href={href} className={`${styles.link} ${styles[size]}`}>
        {children}
      </Link>
    );
  }
};

export default ButtonLink;
