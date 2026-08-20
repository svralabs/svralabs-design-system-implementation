import React from 'react';
import styles from '../pages/OnboardingStepsWidget.module.css';

export default function StepIndicator({ stepNumber, isActive }) {
  return (
    <div className={`${styles.stepIndicator} ${isActive ? styles.active : ''}`}>
      {stepNumber}
    </div>
  );
}
