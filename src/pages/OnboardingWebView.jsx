import React from 'react';
import TokenDisplay from '../components/TokenDisplay';
import styles from './OnboardingWebView.module.css';

const OnboardingWebView = () => {
  return (
    <div className={styles.container}>
      <header className={styles.topAppBar}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className={styles.title}>WELCOME</h1>
        </div>
        <button className={styles.skipButton}>SKIP</button>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.textSection}>
            <h2 className={styles.mainHeading}>Mari Mulai Perjalanan Anda</h2>
            <p className={styles.subHeading}>
              Selesaikan langkah-langkah di bawah ini untuk mengaktifkan akun Anda dan mulai menjelajahi fitur kami.
            </p>
          </div>

          <div className={styles.onboardingSteps}>
            <div className={styles.stepCardActive}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Lengkapi Profil</h3>
              <p className={styles.stepDescription}>
                Tambahkan foto dan informasi dasar untuk membantu kami mengenal Anda lebih baik.
              </p>
              <button className={styles.stepButton}>Mulai</button>
            </div>

            <div className={styles.stepCardInactive}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Verifikasi Identitas</h3>
              <p className={styles.stepDescription}>
                Keamanan adalah prioritas kami. Unggah dokumen resmi untuk verifikasi cepat.
              </p>
              <button className={styles.stepButtonInactive} disabled>Menunggu</button>
            </div>

            <div className={styles.stepCardInactive}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Pilih Paket</h3>
              <p className={styles.stepDescription}>
                Temukan paket yang sesuai dengan kebutuhan Anda dan mulai berlangganan.
              </p>
              <button className={styles.stepButtonInactive} disabled>Menunggu</button>
            </div>
          </div>

          <div className={styles.supportSection}>
            <div className={styles.supportImage}>
              <img
                alt="Team working together"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZy9F_9PoGwVmPWdAEF5rMQoDhkOKqqdyglFWRllpiTNnSHITr9GAh8DvwUpo90ZEURFn7GoL-X3WrakZr5eS1SHoqqlcL6wqHDX4OFu86ADL76FCbpiNee-Ve4OXSAUvu6qheHncw3B7HPPSOQCElylntnYY-Muuf8BFaHXhYPPxCfCl3xTlhfGovd9yanIGq6KgCUjNvX5PHNnKs6aFUgEWzBszSa1jOKDqCpJy_wbvRytnpbiX5uMY4D-3pUyh3Nrn3x4UjEdI"
              />
            </div>
            <div className={styles.supportContent}>
              <h4 className={styles.supportHeading}>Butuh Bantuan?</h4>
              <p className={styles.supportText}>
                Tim dukungan kami tersedia 24/7 untuk memandu Anda melalui proses penyiapan ini.
              </p>
              <div className={styles.supportButtons}>
                <button className={styles.chatButton}>Chat Sekarang</button>
                <button className={styles.helpButton}>Pusat Bantuan</button>
              </div>
            </div>
          </div>

          <TokenDisplay />
        </div>
      </main>

      <footer className={styles.bottomNavBar}>
        <button className={styles.navButton}>
          <div className={styles.navIcon}>
            <span className="material-symbols-outlined">home</span>
          </div>
          <span className={styles.navLabel}>Home</span>
        </button>
        <button className={styles.navButton}>
          <div className={styles.navIcon}>
            <span className="material-symbols-outlined">explore</span>
          </div>
          <span className={styles.navLabel}>Explore</span>
        </button>
        <button className={styles.navButton}>
          <div className={styles.navIcon}>
            <span className="material-symbols-outlined">notifications</span>
          </div>
          <span className={styles.navLabel}>Notifications</span>
        </button>
        <button className={styles.navButton}>
          <div className={styles.navIcon}>
            <span className="material-symbols-outlined">person</span>
          </div>
          <span className={styles.navLabel}>Profile</span>
        </button>
      </footer>
    </div>
  );
};

export default OnboardingWebView;
