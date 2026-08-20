import React, { useState } from 'react';
import StepIndicator from '../components/StepIndicator';
import ProgressBar from '../components/ProgressBar';
import styles from './OnboardingStepsWidget.module.css';

const steps = [
  {
    id: 1,
    title: 'Lengkapi Profil',
    description: 'Tambahkan foto dan info dasar kamu.',
    buttonText: 'MULAI',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC886VHrN6Byfiy5UlIyxdW5NA7T5edzqSDHjG_Te0lJv_BnonktkrgB7jycqaJnL9-DgCrpRlUb3borhzjP7rf2lNZSlvMaZ2nAtPKTXZuj1PfZCTuu-hpIHuTgNRPKUf5yr5jinFzzThr7JGhbV4dQBO66ZYZSXqnkgqI692S7ZXCOdtnJUSY3cMb5L7DNb_8CHZpusJwRa4oaqaSvzfZVuCcSIX_-iMoqGUiWwhkXuovJSttKjna72xr0bvG2IXWS8N90COQBzY',
    imageAlt: 'A clean, minimalist portrait placeholder illustrating a user profile section in a neubrutalist UI design.'
  },
  {
    id: 2,
    title: 'Pilih Minat',
    description: 'Beri tahu kami apa yang kamu suka.',
    buttonText: 'PILIH',
    image: null
  },
  {
    id: 3,
    title: 'Hubungkan Akun',
    description: 'Sinkronkan dengan Google Sheets.',
    buttonText: 'HUBUNGKAN',
    image: null
  }
];

export default function OnboardingStepsWidget() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSkip = () => {
    // Handle skip logic
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className={styles.topAppBar}>
        <div className="flex items-center gap-4">
          <button className="active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
            <span className="material-symbols-outlined text-primary" data-icon="arrow_back">arrow_back</span>
          </button>
          <h1 className="font-headline-sm text-headline-sm uppercase text-primary">WELCOME</h1>
        </div>
        <button onClick={handleSkip} className={styles.skipButton}>
          SKIP
        </button>
      </header>

      <main className="flex-grow max-w-[1024px] mx-auto w-full px-margin py-8 mb-24">
        <section className="mb-12">
          <h2 className="font-display text-display text-on-background mb-4">Ayo Mulai Petualanganmu!</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Hanya butuh beberapa langkah kecil untuk memulai pengalaman luar biasa bersamamu. Ikuti langkah di bawah ini.
          </p>
        </section>

        <ProgressBar progress={(currentStep / steps.length) * 100} />

        <div className="space-y-6 mt-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`${styles.stepCard} ${currentStep === step.id ? styles.active : ''}`}
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-center">
                <div className="flex-shrink-0">
                  <StepIndicator stepNumber={step.id} isActive={currentStep === step.id} />
                </div>
                <div className="flex-grow">
                  <h3 className="font-headline-md text-headline-md mb-2">{step.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">{step.description}</p>
                  <button
                    onClick={handleNextStep}
                    className={`${styles.stepButton} ${currentStep === step.id ? styles.active : ''}`}
                  >
                    {step.buttonText}
                  </button>
                </div>
                {step.image && (
                  <div className={`${styles.stepImage} hidden md:flex`}>
                    <img src={step.image} alt={step.imageAlt} />
                  </div>
                )}
                {!step.image && step.id === 2 && (
                  <div className={`${styles.stepImage} hidden md:flex p-2`}>
                    <div className="grid grid-cols-2 gap-1 w-full h-full">
                      <div className="bg-primary-fixed border border-on-background rounded-sm"></div>
                      <div className="bg-tertiary-fixed border border-on-background rounded-sm"></div>
                      <div className="bg-secondary-fixed border border-on-background rounded-sm"></div>
                      <div className="bg-primary-container border border-on-background rounded-sm"></div>
                    </div>
                  </div>
                )}
                {!step.image && step.id === 3 && (
                  <div className={`${styles.stepImage} hidden md:flex`}>
                    <span className="material-symbols-outlined text-[48px] text-on-surface-variant" data-icon="cloud_sync">cloud_sync</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <nav className={styles.bottomNavBar}>
        <a href="#" className={styles.navItem}>
          <div className="p-2 transition-all group-active:scale-95 text-on-background">
            <span className="material-symbols-outlined" data-icon="home">home</span>
          </div>
        </a>
        <a href="#" className={`${styles.navItem} ${styles.active}`}>
          <div className="p-2 transition-all group-active:scale-95">
            <span className="material-symbols-outlined" data-icon="explore">explore</span>
          </div>
        </a>
        <a href="#" className={styles.navItem}>
          <div className="p-2 transition-all group-active:scale-95 text-on-background">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </div>
        </a>
      </nav>
    </div>
  );
}
