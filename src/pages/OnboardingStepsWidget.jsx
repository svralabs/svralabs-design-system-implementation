import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function OnboardingStepsWidget() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="w-full sticky top-0 z-50 border-b-2 border-on-background bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center px-margin py-4">
<div className="flex items-center gap-4">
<button className="active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
<span className="material-symbols-outlined text-primary" data-icon="arrow_back">arrow_back</span>
</button>
<h1 className="font-headline-sm text-headline-sm uppercase text-primary">WELCOME</h1>
</div>
<button className="font-label text-label uppercase text-on-surface-variant hover:bg-primary-hover hover:text-on-primary transition-colors px-4 py-2 border-2 border-on-background neubrutalism-shadow-sm bg-surface-container-lowest active-press">
      SKIP
    </button>
</header>

<main className="flex-grow max-w-[1024px] mx-auto w-full px-margin py-8 mb-24">

<section className="mb-12">
<h2 className="font-display text-display text-on-background mb-4">Ayo Mulai Petualanganmu!</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        Hanya butuh beberapa langkah kecil untuk memulai pengalaman luar biasa bersamamu. Ikuti langkah di bawah ini.
      </p>
</section>

<div className="space-y-6">

<div className="bg-surface-2 border-2 border-on-background neubrutalism-shadow rounded-xl p-8 transition-transform hover:-translate-y-1">
<div className="flex flex-col md:flex-row gap-6 md:items-center">
<div className="flex-shrink-0">
<div className="w-12 h-12 bg-primary-fixed border-2 border-on-background rounded-full flex items-center justify-center font-headline-sm text-headline-sm neubrutalism-shadow-sm">
              1
            </div>
</div>
<div className="flex-grow">
<h3 className="font-headline-md text-headline-md mb-2">Lengkapi Profil</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Tambahkan foto dan info dasar kamu.</p>
<button className="bg-primary-container text-on-primary-container border-2 border-on-background rounded-full px-8 py-3 font-label text-label uppercase neubrutalism-shadow-sm active-press hover:bg-primary-hover transition-colors">
              MULAI
            </button>
</div>
<div className="hidden md:block w-32 h-32 border-2 border-on-background rounded-lg bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A clean, minimalist portrait placeholder illustrating a user profile section in a neubrutalist UI design. The composition features high-contrast lighting with lime green accents and a thick black border surrounding a friendly silhouette. The background is a soft off-white surface-2 color, creating a modern and approachable onboarding feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC886VHrN6Byfiy5UlIyxdW5NA7T5edzqSDHjG_Te0lJv_BnonktkrgB7jycqaJnL9-DgCrpRlUb3borhzjP7rf2lNZSlvMaZ2nAtPKTXZuj1PfZCTuu-hpIHuTgNRPKUf5yr5jinFzzThr7JGhbV4dQBO66ZYZSXqnkgqI692S7ZXCOdtnJUSY3cMb5L7DNb_8CHZpusJwRa4oaqaSvzfZVuCcSIX_-iMoqGUiWwhkXuovJSttKjna72xr0bvG2IXWS8N90COQBzY"/>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border-2 border-on-background neubrutalism-shadow rounded-xl p-8 transition-transform hover:-translate-y-1">
<div className="flex flex-col md:flex-row gap-6 md:items-center">
<div className="flex-shrink-0">
<div className="w-12 h-12 bg-surface-container-highest border-2 border-on-background rounded-full flex items-center justify-center font-headline-sm text-headline-sm neubrutalism-shadow-sm">
              2
            </div>
</div>
<div className="flex-grow">
<h3 className="font-headline-md text-headline-md mb-2">Pilih Minat</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Beri tahu kami apa yang kamu suka.</p>
<button className="bg-surface-container-lowest text-on-background border-2 border-on-background rounded-full px-8 py-3 font-label text-label uppercase neubrutalism-shadow-sm active-press hover:bg-secondary-container transition-colors">
              PILIH
            </button>
</div>
<div className="hidden md:block w-32 h-32 border-2 border-on-background rounded-lg bg-surface-container-highest flex items-center justify-center p-2">
<div className="grid grid-cols-2 gap-1 w-full h-full">
<div className="bg-primary-fixed border border-on-background rounded-sm"></div>
<div className="bg-tertiary-fixed border border-on-background rounded-sm"></div>
<div className="bg-secondary-fixed border border-on-background rounded-sm"></div>
<div className="bg-primary-container border border-on-background rounded-sm"></div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border-2 border-on-background neubrutalism-shadow rounded-xl p-8 transition-transform hover:-translate-y-1">
<div className="flex flex-col md:flex-row gap-6 md:items-center">
<div className="flex-shrink-0">
<div className="w-12 h-12 bg-surface-container-highest border-2 border-on-background rounded-full flex items-center justify-center font-headline-sm text-headline-sm neubrutalism-shadow-sm">
              3
            </div>
</div>
<div className="flex-grow">
<h3 className="font-headline-md text-headline-md mb-2">Hubungkan Akun</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Sinkronkan dengan Google Sheets.</p>
<button className="bg-surface-container-lowest text-on-background border-2 border-on-background rounded-full px-8 py-3 font-label text-label uppercase neubrutalism-shadow-sm active-press hover:bg-secondary-container transition-colors">
              HUBUNGKAN
            </button>
</div>
<div className="hidden md:block w-32 h-32 border-2 border-on-background rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-[48px] text-on-surface-variant" data-icon="cloud_sync">cloud_sync</span>
</div>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 w-full z-50 border-t-2 border-on-background bg-background shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)] flex justify-around items-center px-4 py-3">

<a className="group flex flex-col items-center" href="#">
<div className="p-2 transition-all group-active:scale-95 text-on-background">
<span className="material-symbols-outlined" data-icon="home">home</span>
</div>
</a>

<a className="group flex flex-col items-center" href="#">
<div className="bg-primary-fixed text-on-primary-fixed border-2 border-on-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-full p-2 transition-all group-active:scale-95">
<span className="material-symbols-outlined" data-icon="explore">explore</span>
</div>
</a>

<a className="group flex flex-col items-center" href="#">
<div className="p-2 transition-all group-active:scale-95 text-on-background">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</div>
</a>

<a className="group flex flex-col items-center" href="#">
<div className="p-2 transition-all group-active:scale-95 text-on-background">
<span className="material-symbols-outlined" data-icon="person">person</span>
</div>
</a>
</nav>


    </div>
  );
}
