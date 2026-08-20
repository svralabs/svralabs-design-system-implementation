import React from 'react';
import Button from '../components/Button';
import styles from './ButtonShowcaseMobile.module.css';

const buttonVariants = [
  {
    label: 'PRIMARY (LIME)',
    text: 'Confirm Action',
    variant: 'primary',
    description: 'Used for main calls to action.'
  },
  {
    label: 'SECONDARY (WHITE)',
    text: 'Cancel Action',
    variant: 'secondary',
    description: 'Used for alternative options.'
  },
  {
    label: 'GHOST (OUTLINE)',
    text: 'Learn More',
    variant: 'ghost',
    description: 'Low emphasis tertiary actions.'
  }
];

const buttonSizes = [
  {
    text: 'Large Button',
    size: 'large',
    height: 'HEIGHT: 64PX'
  },
  {
    text: 'Medium Button',
    size: 'medium',
    height: 'HEIGHT: 48PX'
  },
  {
    text: 'Small Button',
    size: 'small',
    height: 'HEIGHT: 32PX'
  }
];

const functionalColors = [
  {
    text: 'Success',
    color: 'success',
    icon: 'check_circle'
  },
  {
    text: 'Warning',
    color: 'warning',
    icon: 'warning'
  },
  {
    text: 'Error Action',
    color: 'error',
    icon: 'delete_forever'
  }
];

const iconButtons = [
  {
    icon: 'add',
    color: 'primary-container'
  },
  {
    icon: 'settings',
    color: 'surface-container-lowest'
  },
  {
    icon: 'favorite',
    color: 'error-container'
  }
];

export default function ButtonShowcaseMobile() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-primary hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            arrow_back
          </button>
          <h1 className={styles.headerTitle}>BUTTONS</h1>
        </div>
        <div className="flex items-center">
          <button className="material-symbols-outlined text-primary hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            settings
          </button>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.card}>
            <h2 className="font-headline-lg text-headline-lg uppercase mb-4">The Interaction Language</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">
              Our buttons are built to feel tactile, physical, and immediate. Using high-contrast borders and solid shadows, they anchor the UI in a cardboard-like physical space.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>1</div>
            <h3 className={styles.sectionTitle}>Button Variants</h3>
          </div>
          <div className={styles.buttonGrid}>
            {buttonVariants.map((variant, index) => (
              <div key={index} className={styles.card}>
                <p className={styles.cardTitle}>{variant.label}</p>
                <Button
                  text={variant.text}
                  variant={variant.variant}
                  className="w-full"
                />
                <p className={styles.buttonDescription}>{variant.description}</p>
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
                  text={size.text}
                  size={size.size}
                  variant="primary"
                />
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
          <div className={styles.buttonGrid}>
            {functionalColors.map((color, index) => (
              <Button
                key={index}
                text={color.text}
                color={color.color}
                icon={color.icon}
                className="w-full"
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>4</div>
            <h3 className={styles.sectionTitle}>Icon Buttons</h3>
          </div>
          <div className={styles.iconButtonGrid}>
            <div className={styles.iconButtonContainer}>
              <p className={styles.iconButtonTitle}>Circular Profiles</p>
              <div className={styles.iconButtonGroup}>
                {iconButtons.map((button, index) => (
                  <Button
                    key={index}
                    icon={button.icon}
                    color={button.color}
                    circular
                    size="large"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
