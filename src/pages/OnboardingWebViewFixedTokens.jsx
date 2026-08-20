import { useState } from 'react';
import {ArrowLeft as ArrowBack} from 'lucide-react';
import TokenDisplay from '../components/TokenDisplay';
import styles from './OnboardingWebViewFixedTokens.module.css';

export default function OnboardingWebViewFixedTokens() {
  const [copiedToken, setCopiedToken] = useState(null);

  const tokens = [
    { id: 1, label: 'API Key', value: 'sk_test_51Nx...' },
    { id: 2, label: 'Public Key', value: 'pk_test_51Nx...' },
    { id: 3, label: 'Secret Key', value: 'whsec_51Nx...' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* TopAppBar */}
      <header className="w-full sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-background border-b-2 border-on-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-4">
          <button className="text-primary active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
            <ArrowBack className="w-6 h-6" />
          </button>
          <h1 className="font-headline-lg text-headline-lg font-black text-on-background">WELCOME</h1>
        </div>
        <button className="font-label text-label uppercase text-on-surface-variant hover:bg-primary-hover hover:text-on-primary transition-colors px-4 py-2 border-2 border-transparent rounded-full">
          SKIP
        </button>
      </header>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-12">
            <h2 className="font-display text-display mb-4">Mari Mulai Perjalanan Anda</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Selesaikan langkah-langkah di bawah ini untuk mengaktifkan akun Anda dan mulai menjelajahi fitur kami.
            </p>
          </div>

          {/* Onboarding Steps Widget: Desktop Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Active */}
            <div className={`bg-primary-container border-2 border-on-background ${styles.neubrutalShadow} p-8 rounded-lg flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:-translate-x-1 hover:${styles.neubrutalShadowActive}`}>
              <div className={`w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-md text-headline-md border-2 border-on-background mb-6 ${styles.neubrutalShadowActive}`}>1</div>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase">Lengkapi Profil</h3>
              <p className="font-body-md text-body-md text-on-primary-container mb-8">
                Tambahkan foto dan informasi dasar untuk membantu kami mengenal Anda lebih baik.
              </p>
              <button className="mt-auto w-full py-3 bg-on-background text-background font-label text-label uppercase border-2 border-on-background rounded-full active:scale-95 transition-transform">
                Mulai
              </button>
            </div>

            {/* Step 2: Inactive */}
            <div className={`bg-surface border-2 border-on-background ${styles.neubrutalShadow} p-8 rounded-lg flex flex-col items-center text-center opacity-80 transition-all hover:opacity-100 hover:-translate-y-1 hover:-translate-x-1 hover:${styles.neubrutalShadowActive}`}>
              <div className={`w-16 h-16 rounded-full bg-surface-container-highest text-on-background flex items-center justify-center font-headline-md text-headline-md border-2 border-on-background mb-6 ${styles.neubrutalShadowActive}`}>2</div>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase text-on-surface-variant">Verifikasi Identitas</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Keamanan adalah prioritas kami. Unggah dokumen resmi untuk verifikasi cepat.
              </p>
              <button className="mt-auto w-full py-3 bg-surface-container text-on-surface-variant font-label text-label uppercase border-2 border-on-background rounded-full cursor-not-allowed" disabled>
                Menunggu
              </button>
            </div>

            {/* Step 3: Inactive */}
            <div className={`bg-surface border-2 border-on-background ${styles.neubrutalShadow} p-8 rounded-lg flex flex-col items-center text-center opacity-80 transition-all hover:opacity-100 hover:-translate-y-1 hover:-translate-x-1 hover:${styles.neubrutalShadowActive}`}>
              <div className={`w-16 h-16 rounded-full bg-surface-container-highest text-on-background flex items-center justify-center font-headline-md text-headline-md border-2 border-on-background mb-6 ${styles.neubrutalShadowActive}`}>3</div>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase text-on-surface-variant">Pilih Paket</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Temukan paket yang sesuai dengan kebutuhan Anda dan mulai berlangganan.
              </p>
              <button className="mt-auto w-full py-3 bg-surface-container text-on-surface-variant font-label text-label uppercase border-2 border-on-background rounded-full cursor-not-allowed" disabled>
                Menunggu
              </button>
            </div>
          </div>

          {/* Web View Section */}
          <div className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-surface-2 border-2 border-on-background p-8 rounded-lg neubrutal-shadow">
            <div className="w-full md:w-1/3 h-48 overflow-hidden border-2 border-on-background rounded-lg neubrutal-shadow-active">
              <div className={styles.iframePlaceholder}>
                <span className={styles.iframePlaceholderText}>Web View Placeholder</span>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-headline-sm text-headline-sm mb-2 uppercase">Butuh Bantuan?</h4>
              <p className="font-body-md text-body-md mb-6">
                Tim dukungan kami tersedia 24/7 untuk memandu Anda melalui proses penyiapan ini.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-primary-container text-on-primary-container border-2 border-on-background rounded-full font-label text-label uppercase neubrutal-shadow-active active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
                  Chat Sekarang
                </button>
                <button className="px-6 py-2 bg-background border-2 border-on-background rounded-full font-label text-label uppercase hover:bg-secondary-container transition-all">
                  Pusat Bantuan
                </button>
              </div>
            </div>
          </div>

          {/* Token Display Section */}
          <div className="mt-16 bg-surface border-2 border-on-background p-8 rounded-lg neubrutal-shadow">
            <h3 className="font-headline-md text-headline-md mb-6 uppercase">Your API Tokens</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tokens.map((token) => (
                <TokenDisplay
                  key={token.id}
                  token={token.value}
                  label={token.label}
                  copyable
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar (Used as Footer) */}
      <footer className="mt-auto border-t-2 border-on-background bg-background shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex justify-around items-center px-4 py-3 w-full">
          <button className="flex flex-col items-center gap-1 group">
            <div className="text-on-background p-2 group-hover:bg-secondary-container transition-all">
              <span className="material-symbols-outlined" data-icon="home">home</span>
            </div>
            <span className="font-label text-[10px] uppercase text-on-surface-variant">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 group">
            <div className="text-on-background p-2 group-hover:bg-secondary-container transition-all">
              <span className="material-symbols-outlined" data-icon="explore">explore</span>
            </div>
            <span className="font-label text-[10px] uppercase text-on-surface-variant">Explore</span>
          </button>
          <button className="flex flex-col items-center gap-1 group">
            <div className="text-on-background p-2 group-hover:bg-secondary-container transition-all">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </div>
            <span className="font-label text-[10px] uppercase text-on-surface-variant">Notifications</span>
          </button>
          <button className="flex flex-col items-center gap-1 group">
            <div className="text-on-background p-2 group-hover:bg-secondary-container transition-all">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
            </div>
            <span className="font-label text-[10px] uppercase text-on-surface-variant">Settings</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
