import React, { useState, useEffect } from 'react';
import CopyButton from '../components/CopyButton';
import styles from './OnboardingWebViewFixedTokens.module.css';

const mockTokens = [
  { id: 1, value: 'abc123def456ghi789jkl012mno345pqr678stu901vwx234yz' },
  { id: 2, value: '123abc456def789ghi012jkl345mno678pqr901stu234vwx567yz' },
  { id: 3, value: 'def456ghi789jkl012mno345abc123pqr678stu901vwx234yz' }
];

export default function OnboardingWebViewFixedTokens() {
  const [selectedToken, setSelectedToken] = useState(mockTokens[0]);
  const [isWebViewLoaded, setIsWebViewLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWebViewLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleTokenChange = (token) => {
    setSelectedToken(token);
    setIsWebViewLoaded(false);
    const timer = setTimeout(() => {
      setIsWebViewLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className={styles.topAppBar}>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-primary active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
            arrow_back
          </button>
          <h1 className="font-headline-lg text-headline-lg font-black text-on-background">WELCOME</h1>
        </div>
        <button className={styles.skipButton}>SKIP</button>
      </header>

      <main className={styles.mainContent}>
        <div className="max-w-5xl w-full">
          <div className="text-center mb-12">
            <h2 className="font-display text-display mb-4">Mari Mulai Perjalanan Anda</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Selesaikan langkah-langkah di bawah ini untuk mengaktifkan akun Anda dan mulai menjelajahi fitur kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-container border-2 border-on-background neubrutal-shadow p-8 rounded-lg flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-md text-headline-md border-2 border-on-background mb-6 neubrutal-shadow-active">1</div>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase">Lengkapi Profil</h3>
              <p className="font-body-md text-body-md text-on-primary-container mb-8">Tambahkan foto dan informasi dasar untuk membantu kami mengenal Anda lebih baik.</p>
              <button className="mt-auto w-full py-3 bg-on-background text-background font-label text-label uppercase border-2 border-on-background rounded-full active:scale-95 transition-transform">Mulai</button>
            </div>

            <div className="bg-surface border-2 border-on-background neubrutal-shadow p-8 rounded-lg flex flex-col items-center text-center opacity-80 transition-all hover:opacity-100 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-16 h-16 rounded-full bg-surface-container-highest text-on-background flex items-center justify-center font-headline-md text-headline-md border-2 border-on-background mb-6 neubrutal-shadow-active">2</div>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase text-on-surface-variant">Verifikasi Identitas</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">Keamanan adalah prioritas kami. Unggah dokumen resmi untuk verifikasi cepat.</p>
              <button className="mt-auto w-full py-3 bg-surface-container text-on-surface-variant font-label text-label uppercase border-2 border-on-background rounded-full cursor-not-allowed" disabled>Menunggu</button>
            </div>

            <div className="bg-surface border-2 border-on-background neubrutal-shadow p-8 rounded-lg flex flex-col items-center text-center opacity-80 transition-all hover:opacity-100 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-16 h-16 rounded-full bg-surface-container-highest text-on-background flex items-center justify-center font-headline-md text-headline-md border-2 border-on-background mb-6 neubrutal-shadow-active">3</div>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase text-on-surface-variant">Pilih Paket</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">Temukan paket yang sesuai dengan kebutuhan Anda dan mulai berlangganan.</p>
              <button className="mt-auto w-full py-3 bg-surface-container text-on-surface-variant font-label text-label uppercase border-2 border-on-background rounded-full cursor-not-allowed" disabled>Menunggu</button>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-surface-2 border-2 border-on-background p-8 rounded-lg neubrutal-shadow">
            <div className="w-full md:w-1/3 h-48 overflow-hidden border-2 border-on-background rounded-lg neubrutal-shadow-active">
              <img
                alt="Team working together"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZy9F_9PoGwVmPWdAEF5rMQoDhkOKqqdyglFWRllpiTNnSHITr9GAh8DvwUpo90ZEURFn7GoL-X3WrakZr5eS1SHoqqlcL6wqHDX4OFu86ADL76FCbpiNee-Ve4OXSAUvu6qheHncw3B7HPPSOQCElylntnYY-Muuf8BFaHXhYPPxCfCl3xTlhfGovd9yanIGq6KgCUjNvX5PHNnKs6aFUgEWzBszSa1jOKDqCpJy_wbvRytnpbiX5uMY4D-3pUyh3Nrn3x4UjEdI"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-headline-sm text-headline-sm mb-2 uppercase">Butuh Bantuan?</h4>
              <p className="font-body-md text-body-md mb-6">Tim dukungan kami tersedia 24/7 untuk memandu Anda melalui proses penyiapan ini.</p>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-primary-container text-on-primary-container border-2 border-on-background rounded-full font-label text-label uppercase neubrutal-shadow-active active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">Chat Sekarang</button>
                <button className="px-6 py-2 bg-background border-2 border-on-background rounded-full font-label text-label uppercase hover:bg-secondary-container transition-all">Pusat Bantuan</button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-headline-md text-headline-md mb-4 uppercase">Token Anda</h3>
            <div className="flex flex-wrap gap-4 mb-8">
              {mockTokens.map((token) => (
                <button
                  key={token.id}
                  onClick={() => handleTokenChange(token)}
                  className={`px-4 py-2 border-2 rounded-full font-label text-label uppercase ${selectedToken.id === token.id ? 'bg-primary-container text-on-primary-container border-on-background' : 'bg-surface text-on-surface border-on-background'}`}
                >
                  Token {token.id}
                </button>
              ))}
            </div>

            <div className={styles.tokenContainer}>
              <div className={styles.tokenText}>{selectedToken.value}</div>
              <div className="mt-4 flex justify-center">
                <CopyButton text={selectedToken.value} />
              </div>
            </div>

            <div className={styles.webViewContainer}>
              {isWebViewLoaded ? (
                <iframe
                  title="Token Display"
                  srcDoc={`<html><body style="font-family: monospace; font-size: 16px; text-align: center; padding: 20px;">${selectedToken.value}</body></html>`}
                  sandbox="allow-scripts allow-same-origin"
                  className="w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-on-background"></div>
                </div>
              )}
            </div>

            {!isWebViewLoaded && (
              <p className={styles.errorMessage}>Gagal memuat tampilan web. Silakan coba lagi.</p>
            )}
          </div>
        </div>
      </main>

      <footer className={styles.bottomNavBar}>
        <div className="flex justify-around items-center px-4 py-3 w-full">
          <button className={styles.navButton}>
            <div className={styles.navIcon}>
              <span className="material-symbols-outlined">home</span>
            </div>
            <span className={styles.navText}>Home</span>
          </button>
          <button className={styles.navButton}>
            <div className={styles.navIcon}>
              <span className="material-symbols-outlined">explore</span>
            </div>
            <span className={styles.navText}>Explore</span>
          </button>
          <button className={styles.navButton}>
            <div className={styles.navIcon}>
              <span className="material-symbols-outlined">notifications</span>
            </div>
            <span className={styles.navText}>Notifications</span>
          </button>
          <button className={styles.navButton}>
            <div className={styles.navIcon}>
              <span className="material-symbols-outlined">person</span>
            </div>
            <span className={styles.navText}>Profile</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
