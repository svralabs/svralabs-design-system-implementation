import React from 'react';
import styles from '../pages/OnboardingStepsWidget.module.css';

export default function ProgressBar({ progress }) {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
    </div>
  );
}
