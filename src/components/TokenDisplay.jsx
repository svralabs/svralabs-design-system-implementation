import React from 'react';
import styles from '../pages/OnboardingWebView.module.css';

const TokenDisplay = () => {
  const tokens = [
    { name: 'BTC', value: '0.00000000', icon: 'BTC' },
    { name: 'ETH', value: '0.00000000', icon: 'ETH' },
    { name: 'SOL', value: '0.00000000', icon: 'SOL' },
  ];

  return (
    <div className={styles.tokenDisplay}>
      {tokens.map((token) => (
        <div key={token.name} className={styles.tokenItem}>
          <div className={styles.tokenIcon}>{token.icon}</div>
          <div className={styles.tokenInfo}>
            <span className={styles.tokenName}>{token.name}</span>
            <span className={styles.tokenValue}>{token.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenDisplay;
