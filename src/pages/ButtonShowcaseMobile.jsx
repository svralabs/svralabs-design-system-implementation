import React from 'react';
import Button from '../components/Button';
import styles from './ButtonShowcaseMobile.module.css';

const buttonVariants = [
  {
    label: 'PRIMARY (LIME)',
    description: 'Used for main calls to action.',
    props: {
      variant: 'primary',
      children: 'Confirm Action',
      className: styles.button
    }
  },
  {
    label: 'SECONDARY (WHITE)',
    description: 'Used for alternative options.',
    props: {
      variant: 'secondary',
      children: 'Cancel Action',
      className: styles.button
    }
  },
  {
    label: 'GHOST (OUTLINE)',
    description: 'Low emphasis tertiary actions.',
    props: {
      variant: 'ghost',
      children: 'Learn More',
      className: styles.button
    }
  }
];

const buttonSizes = [
  {
    label: 'Large Button',
    size: 'HEIGHT: 64PX',
    props: {
      variant: 'primary',
      size: 'large',
      children: 'Large Button',
      className: styles.button
    }
  },
  {
    label: 'Medium Button',
    size: 'HEIGHT: 48PX',
    props: {
      variant: 'primary',
      size: 'medium',
      children: 'Medium Button',
      className: styles.button
    }
  },
  {
    label: 'Small Button',
    size: 'HEIGHT: 32PX',
    props: {
      variant: 'primary',
      size: 'small',
      children: 'Small Button',
      className: styles.button
    }
  }
];

const functionalColors = [
  {
    label: 'Success',
    icon: 'check_circle',
    props: {
      variant: 'success',
      children: 'Success',
      icon: 'check_circle',
      className: styles.functionalButton
    }
  },
  {
    label: 'Warning',
    icon: 'warning',
    props: {
      variant: 'warning',
      children: 'Warning',
      icon: 'warning',
      className: styles.functionalButton
    }
  },
  {
    label: 'Error Action',
    icon: 'delete_forever',
    props: {
      variant: 'error',
      children: 'Error Action',
      icon: 'delete_forever',
      className: styles.functionalButton
    }
  }
];

const iconButtons = [
  {
    icon: 'add',
    props: {
      variant: 'icon',
      icon: 'add',
      className: styles.iconButton
    }
  },
  {
    icon: 'settings',
    props: {
      variant: 'icon',
      icon: 'settings',
      className: styles.iconButton
    }
  },
  {
    icon: 'delete_forever',
    props: {
      variant: 'icon',
      icon: 'delete_forever',
      className: styles.iconButton
    }
  }
];

export default function ButtonShowcaseMobile() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.iconButton}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className={styles.headerTitle}>BUTTONS</h1>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.iconButton}>
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.heroSection}>
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
                <p className={styles.label}>{variant.label}</p>
                <Button {...variant.props} />
                <p className={styles.description}>{variant.description}</p>
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
                <Button {...size.props} />
                <span className={styles.sizeLabel}>{size.size}</span>
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
              <Button key={index} {...color.props} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNumber}>4</div>
            <h3 className={styles.sectionTitle}>Icon Buttons</h3>
          </div>
          <div className={styles.iconGrid}>
            <div className={styles.iconCard}>
              <p className={styles.iconLabel}>Circular Profiles</p>
              <div className={styles.iconContainer}>
                {iconButtons.map((button, index) => (
                  <Button key={index} {...button.props} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
