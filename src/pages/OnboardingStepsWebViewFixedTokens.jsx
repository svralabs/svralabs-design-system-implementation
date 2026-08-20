import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function OnboardingStepsWebViewFixedTokens() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  TopAppBar  */}
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
{/*  Onboarding Steps Widget: Desktop Horizontal Layout  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Step 1: Active  */}
<div className="bg-primary-container border-2 border-on-background neubrutal-shadow p-8 rounded-lg flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
<div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-md text-headline-md border-2 border-on-background mb-6 neubrutal-shadow-active">1</div>
<h3 className="font-headline-md text-headline-md mb-4 uppercase">Lengkapi Profil</h3>
<p className="font-body-md text-body-md text-on-primary-container mb-8">Tambahkan foto dan informasi dasar untuk membantu kami mengenal Anda lebih baik.</p>
<button className="mt-auto w-full py-3 bg-on-background text-background font-label text-label uppercase border-2 border-on-background rounded-full active:scale-95 transition-transform">Mulai</button>
</div>
{/*  Step 2: Inactive  */}
<div className="bg-surface border-2 border-on-background neubrutal-shadow p-8 rounded-lg flex flex-col items-center text-center opacity-80 transition-all hover:opacity-100 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
<div className="w-16 h-16 rounded-full bg-surface-container-highest text-on-background flex items-center justify-center font-headline-md text-headline-md border-2 border-on-background mb-6 neubrutal-shadow-active">2</div>
<h3 className="font-headline-md text-headline-md mb-4 uppercase text-on-surface-variant">Verifikasi Identitas</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">Keamanan adalah prioritas kami. Unggah dokumen resmi untuk verifikasi cepat.</p>
<button className="mt-auto w-full py-3 bg-surface-container text-on-surface-variant font-label text-label uppercase border-2 border-on-background rounded-full cursor-not-allowed" disabled="">Menunggu</button>
</div>
{/*  Step 3: Inactive  */}
<div className="bg-surface border-2 border-on-background neubrutal-shadow p-8 rounded-lg flex flex-col items-center text-center opacity-80 transition-all hover:opacity-100 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
<div className="w-16 h-16 rounded-full bg-surface-container-highest text-on-background flex items-center justify-center font-headline-md text-headline-md border-2 border-on-background mb-6 neubrutal-shadow-active">3</div>
<h3 className="font-headline-md text-headline-md mb-4 uppercase text-on-surface-variant">Pilih Paket</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">Temukan paket yang sesuai dengan kebutuhan Anda dan mulai berlangganan.</p>
<button className="mt-auto w-full py-3 bg-surface-container text-on-surface-variant font-label text-label uppercase border-2 border-on-background rounded-full cursor-not-allowed" disabled="">Menunggu</button>
</div>
</div>
<div className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-surface-2 border-2 border-on-background p-8 rounded-lg neubrutal-shadow">
<div className="w-full md:w-1/3 h-48 overflow-hidden border-2 border-on-background rounded-lg neubrutal-shadow-active">
<img alt="Team working together" className="w-full h-full object-cover" data-alt="A modern office setting with a diverse team of three creative professionals collaborating around a large wooden desk. High-contrast lighting highlights the sharp edges of the furniture, reflecting a clean neubrutalism aesthetic. The color palette features pops of primary lime green against muted earthy tones. The atmosphere is energetic and focused, with clean minimalist decor in the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZy9F_9PoGwVmPWdAEF5rMQoDhkOKqqdyglFWRllpiTNnSHITr9GAh8DvwUpo90ZEURFn7GoL-X3WrakZr5eS1SHoqqlcL6wqHDX4OFu86ADL76FCbpiNee-Ve4OXSAUvu6qheHncw3B7HPPSOQCElylntnYY-Muuf8BFaHXhYPPxCfCl3xTlhfGovd9yanIGq6KgCUjNvX5PHNnKs6aFUgEWzBszSa1jOKDqCpJy_wbvRytnpbiX5uMY4D-3pUyh3Nrn3x4UjEdI"/>
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
{/*  BottomNavBar (Used as Footer)  */}
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
<button className="flex flex-col items-center gap-1 group">
<div className="text-on-background dark:text-surface-variant p-2 group-hover:bg-secondary-container transition-all">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</div>
<span className="font-label text-[10px] uppercase text-on-surface-variant">Alerts</span>
</button>
<button className="flex flex-col items-center gap-1 group">
<div className="bg-primary-fixed text-on-primary-fixed border-2 border-on-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-full p-2">
<span className="material-symbols-outlined" data-icon="person">person</span>
</div>
<span className="font-label text-[10px] uppercase text-primary font-bold">Profile</span>
</button>
</div>
</footer>


    </div>
  );
}
