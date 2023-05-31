import { FC, ReactNode } from 'react';
import Link from 'next/link';

import styles from './ButtonLink.module.css';

type LinkProps = {
  tag?: 'link';
  theme?: 'primary' | 'secondary' | 'transparency' | 'ghost';
  isTarget?: false;
  href: string;
  size?: 'medium' | 'large' | 'extra-large';
  className?: string;
  children: ReactNode;
};

type ButtonProps = {
  tag?: 'button';
  type: 'button' | 'submit' | 'reset';
  theme?: 'primary' | 'secondary' | 'transparency' | 'ghost';
  onClick?: () => void;
  size?: 'medium' | 'large' | 'extra-large';
  disabled?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonLinkProps = LinkProps | ButtonProps;

const ButtonLink: FC<ButtonLinkProps> = (props) => {
  const { children, size = 'large', className = '' } = props;

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
        className={`${styles.button} ${styles[size]} ${styles[theme]} ${className}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  } else {
    const { href, theme = 'transparency' } = props as LinkProps;
    return (
      <Link
        href={href}
        className={`${styles.link} ${styles.button} ${styles[size]} ${styles[theme]} ${className}`}
      >
        {children}
      </Link>
    );
  }
};

export default ButtonLink;
