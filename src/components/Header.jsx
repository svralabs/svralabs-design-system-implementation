import React from 'react';
import styles from './Header.module.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className="material-symbols-outlined">code</span>
        <span className={styles['logo-text']}>SVRALABS</span>
      </div>
      <nav className={styles['nav-links']}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.path} className={styles['nav-link']}>
            {link.name}
          </a>
        ))}
      </nav>
      <button className={styles['menu-button']}>
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}
