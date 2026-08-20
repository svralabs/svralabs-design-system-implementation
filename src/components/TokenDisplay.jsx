import React from 'react';
import styles from './TokenDisplay.module.css';

export default function TokenDisplay({ tokens }) {
  return (
    <div className={styles.tokenContainer}>
      {tokens.map((token, index) => (
        <div key={index} className={styles.tokenItem}>
          <img src={token.icon} alt={token.symbol} className={styles.tokenIcon} />
          <div className={styles.tokenInfo}>
            <span className={styles.tokenSymbol}>{token.symbol}</span>
            <span className={styles.tokenValue}>{token.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
