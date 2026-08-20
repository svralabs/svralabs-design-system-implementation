import React from 'react';
import Button from '../components/Button';
import styles from './ButtonShowcaseMobile.module.css';

const ButtonShowcaseMobile = () => {
  const buttonVariants = [
    {
      id: 1,
      title: 'PRIMARY (LIME)',
      variant: 'primary',
      text: 'Confirm Action',
      description: 'Used for main calls to action.'
    },
    {
      id: 2,
      title: 'SECONDARY (WHITE)',
      variant: 'secondary',
      text: 'Cancel Action',
      description: 'Used for alternative options.'
    },
    {
      id: 3,
      title: 'GHOST (OUTLINE)',
      variant: 'ghost',
      text: 'Learn More',
      description: 'Low emphasis tertiary actions.'
    }
  ];

  const buttonSizes = [
    {
      id: 1,
      size: 'large',
      text: 'Large Button',
      height: 'HEIGHT: 64PX'
    },
    {
      id: 2,
      size: 'medium',
      text: 'Medium Button',
      height: 'HEIGHT: 48PX'
    },
    {
      id: 3,
      size: 'small',
      text: 'Small Button',
      height: 'HEIGHT: 32PX'
    }
  ];

  const functionalColors = [
    {
      id: 1,
      color: 'success',
      text: 'Success',
      icon: 'check_circle'
    },
    {
      id: 2,
      color: 'warning',
      text: 'Warning',
      icon: 'warning'
    },
    {
      id: 3,
      color: 'error',
      text: 'Error Action',
      icon: 'delete_forever'
    }
  ];

  const iconButtons = [
    {
      id: 1,
      icon: 'add',
      variant: 'primary'
    },
    {
      id: 2,
      icon: 'settings',
      variant: 'secondary'
    },
    {
      id: 3,
      icon: 'delete_forever',
      variant: 'error'
    }
  ];

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
          <div className={styles.sectionTitleContainer}>
            <div className={styles.sectionNumber}>1</div>
            <h3 className={styles.sectionTitle}>Button Variants</h3>
          </div>
          <div className={styles.buttonGrid}>
            {buttonVariants.map((variant) => (
              <div key={variant.id} className={styles.buttonContainer}>
                <p className={styles.cardTitle}>{variant.title}</p>
                <Button
                  variant={variant.variant}
                  text={variant.text}
                  fullWidth
                />
                <p className={styles.buttonDescription}>{variant.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionTitleContainer}>
            <div className={styles.sectionNumber}>2</div>
            <h3 className={styles.sectionTitle}>Button Sizes</h3>
          </div>
          <div className={styles.sizeContainer}>
            {buttonSizes.map((size) => (
              <div key={size.id} className={styles.sizeItem}>
                <Button
                  variant="primary"
                  text={size.text}
                  size={size.size}
                />
                <span className={styles.sizeLabel}>{size.height}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionTitleContainer}>
            <div className={styles.sectionNumber}>3</div>
            <h3 className={styles.sectionTitle}>Functional Colors</h3>
          </div>
          <div className={styles.functionalGrid}>
            {functionalColors.map((color) => (
              <Button
                key={color.id}
                variant={color.color}
                text={color.text}
                icon={color.icon}
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionTitleContainer}>
            <div className={styles.sectionNumber}>4</div>
            <h3 className={styles.sectionTitle}>Icon Buttons</h3>
          </div>
          <div className={styles.iconGrid}>
            <div className={styles.iconCard}>
              <p className={styles.iconCardTitle}>Circular Profiles</p>
              <div className={styles.iconButtonContainer}>
                {iconButtons.map((button) => (
                  <Button
                    key={button.id}
                    variant={button.variant}
                    icon={button.icon}
                    circular
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ButtonShowcaseMobile;
