import React from 'react';
import styles from './Card.module.css';

export default function Card({ children, padding = 'md', shadow = 'md' }) {
  return (
    <div className={`${styles.card} ${styles[`padding-${padding}`]} ${styles[`shadow-${shadow}`]}`}>
      {children}
    </div>
  );
}
