import React from 'react';
import styles from './ButtonShowcaseMobile.module.css';
import Button from '../components/Button';

const buttonVariants = [
  {
    label: 'PRIMARY (LIME)',
    variant: 'primary',
    text: 'Confirm Action',
    description: 'Used for main calls to action.',
  },
  {
    label: 'SECONDARY (WHITE)',
    variant: 'secondary',
    text: 'Cancel Action',
    description: 'Used for alternative options.',
  },
  {
    label: 'GHOST (OUTLINE)',
    variant: 'ghost',
    text: 'Learn More',
    description: 'Low emphasis tertiary actions.',
  },
];

const buttonSizes = [
  {
    size: 'large',
    text: 'Large Button',
    height: 'HEIGHT: 64PX',
  },
  {
    size: 'medium',
    text: 'Medium Button',
    height: 'HEIGHT: 48PX',
  },
  {
    size: 'small',
    text: 'Small Button',
    height: 'HEIGHT: 32PX',
  },
];

const functionalColors = [
  {
    color: 'success',
    icon: 'check_circle',
    text: 'Success',
  },
  {
    color: 'warning',
    icon: 'warning',
    text: 'Warning',
  },
  {
    color: 'error',
    icon: 'delete_forever',
    text: 'Error Action',
  },
];

const iconButtons = [
  {
    icon: 'add',
    color: 'primary-container',
  },
  {
    icon: 'settings',
    color: 'surface-container-lowest',
  },
  {
    icon: 'favorite',
    color: 'error-container',
  },
];

export default function ButtonShowcaseMobile() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.iconButton}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className={styles.title}>BUTTONS</h1>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.iconButton}>
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.heroCard}>
            <h2 className={styles.heroTitle}>The Interaction Language</h2>
            <p className={styles.heroText}>
              Our buttons are built to feel tactile, physical, and immediate. Using high-contrast borders and solid shadows, they anchor the UI in a cardboard-like physical space.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>1</div>
            <h3 className={styles.sectionTitle}>Button Variants</h3>
          </div>
          <div className={styles.grid}>
            {buttonVariants.map((variant, index) => (
              <div key={index} className={styles.card}>
                <p className={styles.cardLabel}>{variant.label}</p>
                <Button
                  variant={variant.variant}
                  className={styles.button}
                >
                  {variant.text}
                </Button>
                <p className={styles.cardDescription}>{variant.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>2</div>
            <h3 className={styles.sectionTitle}>Button Sizes</h3>
          </div>
          <div className={styles.sizeContainer}>
            {buttonSizes.map((size, index) => (
              <div key={index} className={styles.sizeItem}>
                <Button
                  size={size.size}
                  className={styles.sizeButton}
                >
                  {size.text}
                </Button>
                <span className={styles.sizeLabel}>{size.height}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>3</div>
            <h3 className={styles.sectionTitle}>Functional Colors</h3>
          </div>
          <div className={styles.functionalGrid}>
            {functionalColors.map((color, index) => (
              <Button
                key={index}
                color={color.color}
                className={styles.functionalButton}
              >
                <span className="material-symbols-outlined">{color.icon}</span>
                {color.text}
              </Button>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>4</div>
            <h3 className={styles.sectionTitle}>Icon Buttons</h3>
          </div>
          <div className={styles.iconGrid}>
            {iconButtons.map((button, index) => (
              <Button
                key={index}
                color={button.color}
                className={styles.iconButton}
              >
                <span className="material-symbols-outlined">{button.icon}</span>
              </Button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
