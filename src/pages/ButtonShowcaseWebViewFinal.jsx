import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ButtonShowcaseWebViewFinal() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-margin py-4 bg-background border-b-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary cursor-pointer" data-icon="arrow_back">arrow_back</span>
<h1 className="font-display text-display uppercase text-on-surface">BUTTONS</h1>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-primary font-bold font-label uppercase tracking-tighter" href="#">HOME</a>
<a className="text-secondary font-medium font-label uppercase tracking-tighter hover:text-primary transition-colors" href="#">COMPONENTS</a>
<a className="text-secondary font-medium font-label uppercase tracking-tighter hover:text-primary transition-colors" href="#">THEME</a>
<a className="text-secondary font-medium font-label uppercase tracking-tighter hover:text-primary transition-colors" href="#">HELP</a>
</nav>
<span className="material-symbols-outlined text-primary cursor-pointer" data-icon="settings">settings</span>
</header>
<main className="mt-24 mb-32 max-w-6xl mx-auto px-margin">
{/*  1. The Interaction Language (Hero Section)  */}
<section className="mb-12 rounded-xl bg-primary-container border-2 border-on-surface hard-shadow p-margin flex flex-col md:flex-row items-center gap-12 overflow-hidden">
<div className="flex-1 space-y-6">
<div className="inline-block bg-on-surface text-primary-fixed px-4 py-1 rounded-full border-2 border-on-surface font-label uppercase tracking-widest text-caption">
                    Core Design Pillar
                </div>
<h2 className="font-display text-display text-on-primary-container leading-tight">THE INTERACTION LANGUAGE</h2>
<p className="font-body-lg text-on-primary-container max-w-md">
                    Our buttons are tactical, high-contrast objects designed for physical clarity. In a world of flat UI, we embrace the depth of clickability.
                </p>
<div className="flex gap-4">
<button className="bg-on-surface text-background px-8 py-4 rounded-full border-2 border-on-surface font-label uppercase tracking-widest hard-shadow-sm neubrutal-hover transition-all">Explore Docs</button>
<button className="bg-surface-bright text-on-surface px-8 py-4 rounded-full border-2 border-on-surface font-label uppercase tracking-widest hard-shadow-sm neubrutal-hover transition-all">Try Sandbox</button>
</div>
</div>
<div className="flex-1 relative h-64 w-full md:h-auto">
<div className="absolute inset-0 bg-primary opacity-10 rounded-lg border-2 border-dashed border-on-surface"></div>
<div className="relative grid grid-cols-2 gap-4 p-4 h-full">
<div className="bg-white border-2 border-on-surface hard-shadow-sm rounded-lg flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform cursor-pointer group">
<span className="material-symbols-outlined text-4xl group-hover:scale-125 transition-transform" data-icon="touch_app">touch_app</span>
</div>
<div className="bg-primary-fixed border-2 border-on-surface hard-shadow-sm rounded-lg flex items-center justify-center rotate-6 hover:rotate-0 transition-transform cursor-pointer group">
<span className="material-symbols-outlined text-4xl group-hover:scale-125 transition-transform" data-icon="mouse">mouse</span>
</div>
<div className="bg-on-surface text-white border-2 border-on-surface hard-shadow-sm rounded-lg flex items-center justify-center -rotate-6 hover:rotate-0 transition-transform cursor-pointer group">
<span className="material-symbols-outlined text-4xl group-hover:scale-125 transition-transform" data-icon="ads_click">ads_click</span>
</div>
<div className="bg-surface-2 border-2 border-on-surface hard-shadow-sm rounded-lg flex items-center justify-center rotate-3 hover:rotate-0 transition-transform cursor-pointer group">
<span className="material-symbols-outlined text-4xl group-hover:scale-125 transition-transform" data-icon="gesture">gesture</span>
</div>
</div>
</div>
</section>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  2. Button Variants  */}
<section className="md:col-span-2 space-y-8">
<div className="bg-surface border-2 border-on-surface hard-shadow p-8 rounded-xl">
<h3 className="font-headline-md text-headline-md uppercase mb-8 border-b-2 border-on-surface pb-4">Button Variants</h3>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
<div className="space-y-4">
<span className="font-label uppercase text-secondary">Primary</span>
<button className="w-full bg-primary-container text-on-primary-container py-4 rounded-full border-2 border-on-surface hard-shadow-sm neubrutal-hover font-label uppercase">Action</button>
<p className="text-caption text-secondary">High emphasis for primary user actions.</p>
</div>
<div className="space-y-4">
<span className="font-label uppercase text-secondary">Secondary</span>
<button className="w-full bg-surface-bright text-on-surface py-4 rounded-full border-2 border-on-surface hard-shadow-sm neubrutal-hover font-label uppercase">Outline</button>
<p className="text-caption text-secondary">Medium emphasis for supporting tasks.</p>
</div>
<div className="space-y-4">
<span className="font-label uppercase text-secondary">Ghost</span>
<button className="w-full bg-transparent text-on-surface py-4 rounded-full border-2 border-transparent hover:border-on-surface transition-all font-label uppercase">Ghost</button>
<p className="text-caption text-secondary">Low emphasis for auxiliary items.</p>
</div>
</div>
</div>
{/*  3. Dimensions  */}
<div className="bg-surface-2 border-2 border-on-surface hard-shadow p-8 rounded-xl">
<h3 className="font-headline-md text-headline-md uppercase mb-8 border-b-2 border-on-surface pb-4">Dimensions</h3>
<div className="flex flex-wrap items-end gap-12">
<div className="flex flex-col items-center gap-4">
<button className="bg-primary-container text-on-primary-container px-12 py-6 rounded-full border-2 border-on-surface hard-shadow-sm neubrutal-hover font-label uppercase">Large (64px)</button>
<span className="text-caption font-label uppercase">Hero Actions</span>
</div>
<div className="flex flex-col items-center gap-4">
<button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full border-2 border-on-surface hard-shadow-sm neubrutal-hover font-label uppercase">Medium (48px)</button>
<span className="text-caption font-label uppercase">Standard View</span>
</div>
<div className="flex flex-col items-center gap-4">
<button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full border-2 border-on-surface hard-shadow-sm neubrutal-hover font-label uppercase">Small (32px)</button>
<span className="text-caption font-label uppercase">Contextual</span>
</div>
</div>
</div>
</section>
{/*  5. Icon Profiles & Status  */}
<aside className="space-y-8">
{/*  Icon Profiles  */}
<div className="bg-surface border-2 border-on-surface hard-shadow p-8 rounded-xl">
<h3 className="font-headline-md text-headline-md uppercase mb-8 border-b-2 border-on-surface pb-4">Icon Profiles</h3>
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col items-center gap-2">
<button className="w-16 h-16 rounded-full border-2 border-on-surface bg-surface-bright hard-shadow-sm flex items-center justify-center neubrutal-hover">
<span className="material-symbols-outlined text-2xl" data-icon="add">add</span>
</button>
<span className="font-label uppercase text-caption">Circular</span>
</div>
<div className="flex flex-col items-center gap-2">
<button className="w-16 h-16 rounded-lg border-2 border-on-surface bg-surface-bright hard-shadow-sm flex items-center justify-center neubrutal-hover">
<span className="material-symbols-outlined text-2xl" data-icon="share">share</span>
</button>
<span className="font-label uppercase text-caption">Square</span>
</div>
</div>
</div>
{/*  4. System Status  */}
<div className="bg-surface border-2 border-on-surface hard-shadow p-8 rounded-xl">
<h3 className="font-headline-md text-headline-md uppercase mb-8 border-b-2 border-on-surface pb-4">System Status</h3>
<div className="space-y-4">
<button className="w-full bg-primary-subtle text-primary py-4 rounded-full border-2 border-on-surface hard-shadow-sm flex items-center justify-center gap-2 font-label uppercase">
<span className="material-symbols-outlined" data-icon="check_circle" data-weight="fill">check_circle</span> Success
                        </button>
<button className="w-full bg-tertiary-container text-on-tertiary-container py-4 rounded-full border-2 border-on-surface hard-shadow-sm flex items-center justify-center gap-2 font-label uppercase">
<span className="material-symbols-outlined" data-icon="warning" data-weight="fill">warning</span> Warning
                        </button>
<button className="w-full bg-error-container text-error py-4 rounded-full border-2 border-on-surface hard-shadow-sm flex items-center justify-center gap-2 font-label uppercase">
<span className="material-symbols-outlined" data-icon="error" data-weight="fill">error</span> Critical
                        </button>
</div>
</div>
</aside>
</div>
{/*  6. Physical Experience Section  */}
<section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-inverse-surface text-inverse-on-surface rounded-xl border-2 border-on-surface hard-shadow overflow-hidden">
<div className="p-12 space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary-fixed border-2 border-on-surface flex items-center justify-center text-on-primary-fixed font-bold">01</div>
<h3 className="font-display text-headline-lg uppercase text-primary-fixed">Tactile Precision</h3>
</div>
<p className="font-body-lg opacity-80">
                    Inspired by high-end mechanical switches, our UI components respond with visual "click" depth. Every interaction should feel like pressing a physical key, providing users with absolute confirmation of intent.
                </p>
<div className="pt-4">
<button className="bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-full border-2 border-on-surface hard-shadow-sm neubrutal-hover font-label uppercase">Learn More</button>
</div>
</div>
<div className="h-full min-h-[400px]">
<img alt="Mechanical keyboard closeup" className="w-full h-full object-cover grayscale brightness-75 contrast-125" data-alt="A macro close-up of a high-end mechanical keyboard with custom artisan keycaps. The lighting is moody and dramatic with sharp shadows, highlighting the physical texture and depth of the switches. The color palette consists of deep charcoals and pops of lime green to match the neubrutalist UI theme. The photograph captures the essence of tactile response and engineering precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgTR-uBElJfg4GKGB8GcKl9f2EdIlTerWHWLQZbfOTc7xPwMa27Sy09cV-vr_dR_ZhYsKJWL79hlggD_C9zwVUrolCVC22i6AM0p972IxZGL9YV5QJYFC3U1cHUTzwxKQP34CNpkIn_FHdAG4T-nLBG_ObH7zWXaMIVqPHg2S3YanDBKmwMhZA63TQjE7hbyXpH-EV5PO2N1Yl7UeSNBAYTcmo2F3fGJZ6FzCjEXES09hVIODjQF1pNH_Kqon1-qdK_-U9zUp3r7E"/>
</div>
</section>
</main>
{/*  BottomNavBar (Visible on mobile as per rules, hidden on desktop)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-background border-t-2 border-on-surface shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]">
<div className="flex flex-col items-center justify-center text-on-surface">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-label text-label uppercase">HOME</span>
</div>
<div className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-full px-4 py-1 border-2 border-on-surface">
<span className="material-symbols-outlined" data-icon="extension">extension</span>
<span className="font-label text-label uppercase">COMPONENTS</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface">
<span className="material-symbols-outlined" data-icon="palette">palette</span>
<span className="font-label text-label uppercase">THEME</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-label text-label uppercase">HELP</span>
</div>
</nav>


    </div>
  );
}
