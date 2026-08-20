import React from 'react';
import Button from '../components/Button';
import styles from './ButtonShowcaseWebView.module.css';

const ButtonShowcaseWebView = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className="material-symbols-outlined">arrow_back</span>
          <h1>BUTTONS</h1>
        </div>
        <nav className={styles.nav}>
          <a href="#">HOME</a>
          <a href="#">COMPONENTS</a>
          <a href="#">THEME</a>
          <a href="#">HELP</a>
        </nav>
        <span className="material-symbols-outlined">settings</span>
      </header>

      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>Core Design Pillar</div>
            <h2>THE INTERACTION LANGUAGE</h2>
            <p>
              Our buttons are tactical, high-contrast objects designed for physical clarity. In a world of flat UI, we embrace the depth of clickability.
            </p>
            <div className={styles.heroButtons}>
              <Button variant="primary" size="large">Explore Docs</Button>
              <Button variant="secondary" size="large">Try Sandbox</Button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.visualOverlay}></div>
            <div className={styles.visualGrid}>
              <div className={styles.visualCard}>
                <span className="material-symbols-outlined">touch_app</span>
              </div>
              <div className={styles.visualCard}>
                <span className="material-symbols-outlined">mouse</span>
              </div>
              <div className={styles.visualCard}>
                <span className="material-symbols-outlined">ads_click</span>
              </div>
              <div className={styles.visualCard}>
                <span className="material-symbols-outlined">gesture</span>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.contentGrid}>
          <section className={styles.variantsSection}>
            <div className={styles.card}>
              <h3>Button Variants</h3>
              <div className={styles.variantsGrid}>
                <div className={styles.variantItem}>
                  <span>Primary</span>
                  <Button variant="primary">Action</Button>
                  <p>High emphasis for primary user actions.</p>
                </div>
                <div className={styles.variantItem}>
                  <span>Secondary</span>
                  <Button variant="secondary">Outline</Button>
                  <p>Medium emphasis for supporting tasks.</p>
                </div>
                <div className={styles.variantItem}>
                  <span>Ghost</span>
                  <Button variant="ghost">Ghost</Button>
                  <p>Low emphasis for auxiliary items.</p>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <h3>Dimensions</h3>
              <div className={styles.dimensionsContainer}>
                <div className={styles.dimensionItem}>
                  <Button variant="primary" size="large">Large (64px)</Button>
                  <span>Hero Actions</span>
                </div>
                <div className={styles.dimensionItem}>
                  <Button variant="primary" size="medium">Medium (48px)</Button>
                  <span>Standard View</span>
                </div>
                <div className={styles.dimensionItem}>
                  <Button variant="primary" size="small">Small (32px)</Button>
                  <span>Contextual</span>
                </div>
              </div>
            </div>
          </section>

          <aside className={styles.sidebar}>
            <div className={styles.card}>
              <h3>Icon Profiles</h3>
              <div className={styles.iconGrid}>
                <div className={styles.iconItem}>
                  <Button variant="primary" size="small">
                    <span className="material-symbols-outlined">add</span>
                  </Button>
                  <span>Create</span>
                </div>
                <div className={styles.iconItem}>
                  <Button variant="secondary" size="small">
                    <span className="material-symbols-outlined">edit</span>
                  </Button>
                  <span>Edit</span>
                </div>
                <div className={styles.iconItem}>
                  <Button variant="danger" size="small">
                    <span className="material-symbols-outlined">delete</span>
                  </Button>
                  <span>Delete</span>
                </div>
                <div className={styles.iconItem}>
                  <Button variant="ghost" size="small">
                    <span className="material-symbols-outlined">info</span>
                  </Button>
                  <span>Info</span>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <h3>Status</h3>
              <div className={styles.statusGrid}>
                <div className={styles.statusItem}>
                  <Button variant="primary" disabled>Disabled</Button>
                  <span>Inactive state</span>
                </div>
                <div className={styles.statusItem}>
                  <Button variant="primary" size="medium">Loading</Button>
                  <span>Processing state</span>
                </div>
                <div className={styles.statusItem}>
                  <Button variant="primary" size="medium">Success</Button>
                  <span>Completed state</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ButtonShowcaseWebView;
