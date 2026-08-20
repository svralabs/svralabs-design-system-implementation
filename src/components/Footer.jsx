import React from 'react';
import styles from './Footer.module.css';

const footerLinks = [
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms of Service', path: '/terms' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-links']}>
        {footerLinks.map((link) => (
          <a key={link.name} href={link.path} className={styles['footer-link']}>
            {link.name}
          </a>
        ))}
      </div>
      <p className={styles.copyright}>© 2023 SVRALABS. All rights reserved.</p>
    </footer>
  );
}
