import React from 'react';
import styles from './Button.module.css';

const Button = ({ variant = 'primary', disabled = false, loading = false, onClick, children }) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    disabled ? styles.disabled : '',
    loading ? styles.loading : '',
  ].join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && <span className={styles.spinner} />}
      {children}
    </button>
  );
};

export default Button;
