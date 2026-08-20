import React from 'react';
import styles from './Button.module.css';

const Button = ({ variant = 'primary', size = 'medium', disabled = false, children, icon, ...props }) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''}`;

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
