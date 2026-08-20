import React from 'react';
import TokenDisplay from '../components/TokenDisplay';
import styles from './OnboardingWebView.module.css';

const mockTokens = [
  { symbol: 'BTC', value: '0.5', icon: 'https://example.com/btc-icon.png' },
  { symbol: 'ETH', value: '2.3', icon: 'https://example.com/eth-icon.png' },
  { symbol: 'SOL', value: '10.7', icon: 'https://example.com/sol-icon.png' },
];

export default function OnboardingWebView() {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-on-background">
      <header className="w-full sticky top-0 z-50 flex justify-between items-center px-margin py-4 w-full bg-background dark:bg-on-background border-b-2 border-on-background dark:border-surface-variant shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-primary dark:text-primary-fixed active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all" data-icon="arrow_back">arrow_back</button>
          <h1 className="font-headline-lg text-headline-lg font-black text-on-background dark:text-surface">WELCOME</h1>
        </div>
        <button className="font-label text-label uppercase text-on-surface-variant hover:bg-primary-hover hover:text-on-primary transition-colors px-4 py-2 border-2 border-transparent rounded-full">SKIP</button>
      </header>
      <main className="flex-grow flex items-center justify-center p-margin">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-12">
            <h2 className="font-display text-display mb-4">Mari Mulai Perjalanan Anda</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Selesaikan langkah-langkah di bawah ini untuk mengaktifkan akun Anda dan mulai menjelajahi fitur kami.</p>
          </div>
          <div className={styles.webViewContainer}>
            <iframe
              className={styles.webView}
              src="https://example.com/token-display"
              title="Token Display"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
          <TokenDisplay tokens={mockTokens} />
          <div className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-surface-2 border-2 border-on-background p-8 rounded-lg neubrutal-shadow">
            <div className="w-full md:w-1/3 h-48 overflow-hidden border-2 border-on-background rounded-lg neubrutal-shadow-active">
              <img alt="Team working together" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZy9F_9PoGwVmPWdAEF5rMQoDhkOKqqdyglFWRllpiTNnSHITr9GAh8DvwUpo90ZEURFn7GoL-X3WrakZr5eS1SHoqqlcL6wqHDX4OFu86ADL76FCbpiNee-Ve4OXSAUvu6qheHncw3B7HPPSOQCElylntnYY-Muuf8BFaHXhYPPxCfCl3xTlhfGovd9yanIGq6KgCUjNvX5PHNnKs6aFUgEWzBszSa1jOKDqCpJy_wbvRytnpbiX5uMY4D-3pUyh3Nrn3x4UjEdI" />
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
        </div>
      </main>
      <footer className="mt-auto border-t-2 border-on-background dark:border-surface-variant bg-background dark:bg-on-background shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex justify-around items-center px-4 py-3 w-full">
          <button className="flex flex-col items-center gap-1 group">
            <div className="text-on-background dark:text-surface-variant p-2 group-hover:bg-secondary-container transition-all">
              <span className="material-symbols-outlined" data-icon="home">home</span>
            </div>
            <span className="font-label text-[10px] uppercase text-on-surface-variant">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 group">
            <div className="text-on-background dark:text-surface-variant p-2 group-hover:bg-secondary-container transition-all">
              <span className="material-symbols-outlined" data-icon="explore">explore</span>
            </div>
            <span className="font-label text-[10px] uppercase text-on-surface-variant">Explore</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
