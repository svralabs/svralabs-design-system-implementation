import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, X, Search, Bell, User, Calendar, Settings, Heart, Star } from 'lucide-react';
import StepIndicator from '../components/StepIndicator';
import WebView from '../components/WebView';

const steps = [
  { id: 1, title: 'Lengkapi Profil', description: 'Tambahkan foto dan informasi dasar untuk membantu kami mengenal Anda lebih baik.', status: 'active' },
  { id: 2, title: 'Verifikasi Identitas', description: 'Keamanan adalah prioritas kami. Unggah dokumen resmi untuk verifikasi cepat.', status: 'inactive' },
  { id: 3, title: 'Pilih Paket', description: 'Temukan paket yang sesuai dengan kebutuhan Anda dan mulai berlangganan.', status: 'inactive' },
];

const tokens = [
  { id: 1, name: 'API Key', value: 'sk_1234567890abcdef1234567890abcdef' },
  { id: 2, name: 'Secret Key', value: 'sk_abcdef1234567890abcdef1234567890' },
];

export default function OnboardingStepsWebViewFixedTokens() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-on-background">
      <header className="w-full sticky top-0 z-50 flex justify-between items-center px-margin py-4 w-full bg-background dark:bg-on-background border-b-2 border-on-background dark:border-surface-variant shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-primary dark:text-primary-fixed active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all" data-icon="arrow_back">
            <ArrowLeft size={24} />
          </button>
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
          <StepIndicator steps={steps} currentStep={currentStep} />
          <div className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-surface-2 border-2 border-on-background p-8 rounded-lg neubrutal-shadow">
            <div className="w-full md:w-1/3 h-48 overflow-hidden border-2 border-on-background rounded-lg neubrutal-shadow-active">
              <WebView src="https://example.com" title="Embedded Content" />
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
          <div className="mt-16 bg-surface-2 border-2 border-on-background p-8 rounded-lg neubrutal-shadow">
            <h3 className="font-headline-md text-headline-md mb-4 uppercase">Fixed Tokens</h3>
            <div className="space-y-4">
              {tokens.map((token) => (
                <div key={token.id} className="flex items-center justify-between bg-surface border-2 border-on-background p-4 rounded-lg neubrutal-shadow-active">
                  <div>
                    <h4 className="font-headline-sm text-headline-sm">{token.name}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">{token.value}</p>
                  </div>
                  <button
                    onClick={() => handleCopyToClipboard(token.value)}
                    className="px-4 py-2 bg-primary-container text-on-primary-container border-2 border-on-background rounded-full font-label text-label uppercase neubrutal-shadow-active active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-auto border-t-2 border-on-background dark:border-surface-variant bg-background dark:bg-on-background shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex justify-around items-center px-4 py-3 w-full">
          <button className="flex flex-col items-center gap-1 group">
            <div className="text-on-background dark:text-surface-variant p-2 group-hover:bg-secondary-container transition-all">
              <span className="material-symbols-outlined" data-icon="home">
                <Home size={24} />
              </span>
            </div>
            <span className="font-label text-[10px] uppercase text-on-surface-variant">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 group">
            <div className="text-on-background dark:text-surface-variant p-2 group-hover:bg-secondary-container transition-all">
              <span className="material-symbols-outlined" data-icon="explore">
                <Compass size={24} />
              </span>
            </div>
            <span className="font-label text-[10px] uppercase text-on-surface-variant">Explore</span>
          </button>
          <button className="flex flex-col items-center gap-1 group">
            <div className="text-on-background dark:text-surface-variant p-2 group-hover:bg-secondary-container transition-all">
              <span className="material-symbols-outlined" data-icon="notifications">
                <Bell size={24} />
              </span>
            </div>
            <span className="font-label text-[10px] uppercase text-on-surface-variant">Notifications</span>
          </button>
          <button className="flex flex-col items-center gap-1 group">
            <div className="text-on-background dark:text-surface-variant p-2 group-hover:bg-secondary-container transition-all">
              <span className="material-symbols-outlined" data-icon="person">
                <User size={24} />
              </span>
            </div>
            <span className="font-label text-[10px] uppercase text-on-surface-variant">Profile</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
