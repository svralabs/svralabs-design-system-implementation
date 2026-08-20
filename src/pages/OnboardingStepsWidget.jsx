import React from 'react';
import StepIndicator from '../components/StepIndicator';
import styles from './OnboardingStepsWidget.module.css';

const OnboardingStepsWidget = () => {
  const steps = [
    {
      title: 'Lengkapi Profil',
      description: 'Tambahkan foto dan info dasar kamu.',
      buttonText: 'MULAI',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC886VHrN6Byfiy5UlIyxdW5NA7T5edzqSDHjG_Te0lJv_BnonktkrgB7jycqaJnL9-DgCrpRlUb3borhzjP7rf2lNZSlvMaZ2nAtPKTXZuj1PfZCTuu-hpIHuTgNRPKUf5yr5jinFzzThr7JGhbV4dQBO66ZYZSXqnkgqI692S7ZXCOdtnJUSY3cMb5L7DNb_8CHZpusJwRa4oaqaSvzfZVuCcSIX_-iMoqGUiWwhkXuovJSttKjna72xr0bvG2IXWS8N90COQBzY',
      imageAlt: 'A clean, minimalist portrait placeholder illustrating a user profile section in a neubrutalist UI design.'
    },
    {
      title: 'Pilih Minat',
      description: 'Beri tahu kami apa yang kamu suka.',
      buttonText: 'PILIH',
      icon: 'grid_view'
    },
    {
      title: 'Hubungkan Akun',
      description: 'Sinkronkan dengan Google Sheets.',
      buttonText: 'HUBUNGKAN',
      icon: 'cloud_sync'
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.topAppBar}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className={styles.pageTitle}>WELCOME</h1>
        </div>
        <button className={styles.skipButton}>SKIP</button>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <h2 className={styles.heroTitle}>Ayo Mulai Petualanganmu!</h2>
          <p className={styles.heroDescription}>
            Hanya butuh beberapa langkah kecil untuk memulai pengalaman luar biasa bersamamu. Ikuti langkah di bawah ini.
          </p>
        </section>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.stepCard} ${
                index === 0 ? styles.highlightedStep : ''
              }`}
            >
              <div className={styles.stepContent}>
                <div className={styles.stepNumberContainer}>
                  <div className={`${styles.stepNumber} ${
                    index === 0 ? styles.primaryStepNumber : ''
                  }`}>
                    {index + 1}
                  </div>
                </div>
                <div className={styles.stepDetails}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  <button className={`${styles.stepButton} ${
                    index === 0 ? styles.primaryButton : ''
                  }`}>
                    {step.buttonText}
                  </button>
                </div>
                {step.image && (
                  <div className={styles.stepImageContainer}>
                    <img
                      className={styles.stepImage}
                      src={step.image}
                      alt={step.imageAlt}
                    />
                  </div>
                )}
                {step.icon && (
                  <div className={styles.stepIconContainer}>
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <nav className={styles.bottomNavBar}>
        <a href="#" className={styles.navItem}>
          <div className={styles.navIcon}>
            <span className="material-symbols-outlined">home</span>
          </div>
        </a>
        <a href="#" className={styles.navItem}>
          <div className={`${styles.navIcon} ${styles.activeNavIcon}`}>
            <span className="material-symbols-outlined">explore</span>
          </div>
        </a>
        <a href="#" className={styles.navItem}>
          <div className={styles.navIcon}>
            <span className="material-symbols-outlined">notifications</span>
          </div>
        </a>
        <a href="#" className={styles.navItem}>
          <div className={styles.navIcon}>
            <span className="material-symbols-outlined">account_circle</span>
          </div>
        </a>
      </nav>
    </div>
  );
};

export default OnboardingStepsWidget;
