import React from 'react';
import styles from '../pages/OnboardingStepsWidget.module.css';

export default function StepIndicator({ currentStep, totalSteps, labels }) {
  return (
    <div className={styles.stepIndicatorContainer}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div key={index} className={styles.stepItem}>
          <div
            className={`${styles.stepCircle} ${
              index + 1 === currentStep ? styles.activeStep : ''
            }`}
          >
            {index + 1}
          </div>
          {labels && labels[index] && (
            <span className={styles.stepLabel}>{labels[index]}</span>
          )}
        </div>
      ))}
    </div>
  );
}
