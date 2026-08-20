import React from 'react';
import styles from './Button.module.css';

const Button = ({ variant = 'primary', disabled = false, loading = false, children, ...props }) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClass} disabled={disabled || loading} {...props}>
      {loading && <span className={styles.spinner} />}
      {children}
    </button>
  );
};

export default Button;
