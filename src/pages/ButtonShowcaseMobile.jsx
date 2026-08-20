import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ButtonShowcaseMobile() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  Header Section (TopAppBar Shared Component)  */}
<header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-margin py-4 bg-background border-b-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-primary hover:translate-x-[2px] hover:translate-y-[2px] transition-all">arrow_back</button>
<h1 className="font-display text-display uppercase text-on-surface tracking-tighter">BUTTONS</h1>
</div>
<div className="flex items-center">
<button className="material-symbols-outlined text-primary hover:translate-x-[2px] hover:translate-y-[2px] transition-all">settings</button>
</div>
</header>
<main className="max-w-[1024px] mx-auto pt-32 px-4 space-y-16">
{/*  Hero Intro Section  */}
<section className="space-y-4">
<div className="bg-primary-container p-card-padding border-2 border-on-surface neubrutal-shadow rounded-xl">
<h2 className="font-headline-lg text-headline-lg uppercase mb-4">The Interaction Language</h2>
<p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">
                    Our buttons are built to feel tactile, physical, and immediate. Using high-contrast borders and solid shadows, they anchor the UI in a cardboard-like physical space.
                </p>
</div>
</section>
{/*  Section 1: Button Variants  */}
<section className="space-y-8">
<div className="flex items-center gap-3">
<div className="bg-primary text-on-primary w-10 h-10 rounded-full border-2 border-on-surface flex items-center justify-center font-bold">1</div>
<h3 className="font-headline-md text-headline-md uppercase">Button Variants</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Primary Variant  */}
<div className="bg-surface-container border-2 border-on-surface p-6 rounded-xl neubrutal-shadow">
<p className="font-label text-label mb-6 text-outline">PRIMARY (LIME)</p>
<button className="w-full btn-base bg-primary-fixed text-on-primary-fixed uppercase py-4 rounded-full neubrutal-shadow hover:bg-primary-hover active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                        Confirm Action
                    </button>
<p className="mt-4 font-body-sm text-body-sm italic">Used for main calls to action.</p>
</div>
{/*  Secondary Variant  */}
<div className="bg-surface-container border-2 border-on-surface p-6 rounded-xl neubrutal-shadow">
<p className="font-label text-label mb-6 text-outline">SECONDARY (WHITE)</p>
<button className="w-full btn-base bg-surface-container-lowest text-on-surface uppercase py-4 rounded-full neubrutal-shadow hover:bg-surface-2 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                        Cancel Action
                    </button>
<p className="mt-4 font-body-sm text-body-sm italic">Used for alternative options.</p>
</div>
{/*  Ghost Variant  */}
<div className="bg-surface-container border-2 border-on-surface p-6 rounded-xl neubrutal-shadow">
<p className="font-label text-label mb-6 text-outline">GHOST (OUTLINE)</p>
<button className="w-full btn-base bg-transparent text-on-surface uppercase py-4 rounded-full border-2 border-dashed hover:border-solid hover:bg-surface-container-high active:translate-x-[4px] active:translate-y-[4px]">
                        Learn More
                    </button>
<p className="mt-4 font-body-sm text-body-sm italic">Low emphasis tertiary actions.</p>
</div>
</div>
</section>
{/*  Section 2: Button Sizes  */}
<section className="space-y-8">
<div className="flex items-center gap-3">
<div className="bg-primary text-on-primary w-10 h-10 rounded-full border-2 border-on-surface flex items-center justify-center font-bold">2</div>
<h3 className="font-headline-md text-headline-md uppercase">Button Sizes</h3>
</div>
<div className="bg-surface-2 border-2 border-on-surface p-card-padding rounded-xl neubrutal-shadow flex flex-wrap items-end gap-12">
<div className="flex flex-col items-center gap-4">
<button className="btn-base bg-primary-fixed text-on-primary-fixed uppercase px-12 py-6 rounded-full neubrutal-shadow text-lg">
                        Large Button
                    </button>
<span className="font-label text-label text-outline">HEIGHT: 64PX</span>
</div>
<div className="flex flex-col items-center gap-4">
<button className="btn-base bg-primary-fixed text-on-primary-fixed uppercase px-8 py-4 rounded-full neubrutal-shadow">
                        Medium Button
                    </button>
<span className="font-label text-label text-outline">HEIGHT: 48PX</span>
</div>
<div className="flex flex-col items-center gap-4">
<button className="btn-base bg-primary-fixed text-on-primary-fixed uppercase px-6 py-2 rounded-full neubrutal-shadow text-xs">
                        Small Button
                    </button>
<span className="font-label text-label text-outline">HEIGHT: 32PX</span>
</div>
</div>
</section>
{/*  Section 3: Functional Colors  */}
<section className="space-y-8">
<div className="flex items-center gap-3">
<div className="bg-primary text-on-primary w-10 h-10 rounded-full border-2 border-on-surface flex items-center justify-center font-bold">3</div>
<h3 className="font-headline-md text-headline-md uppercase">Functional Colors</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
{/*  Success  */}
<button className="btn-base bg-[#a3d741] text-on-primary-fixed uppercase py-4 px-6 rounded-lg neubrutal-shadow flex gap-2">
<span className="material-symbols-outlined">check_circle</span>
                    Success
                </button>
{/*  Warning  */}
<button className="btn-base bg-tertiary-fixed text-on-tertiary-fixed uppercase py-4 px-6 rounded-lg neubrutal-shadow flex gap-2">
<span className="material-symbols-outlined">warning</span>
                    Warning
                </button>
{/*  Error  */}
<button className="btn-base bg-error text-on-error uppercase py-4 px-6 rounded-lg neubrutal-shadow flex gap-2">
<span className="material-symbols-outlined">delete_forever</span>
                    Error Action
                </button>
</div>
</section>
{/*  Section 4: Icon Buttons  */}
<section className="space-y-8">
<div className="flex items-center gap-3">
<div className="bg-primary text-on-primary w-10 h-10 rounded-full border-2 border-on-surface flex items-center justify-center font-bold">4</div>
<h3 className="font-headline-md text-headline-md uppercase">Icon Buttons</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/*  Circular Icon Buttons  */}
<div className="bg-surface-container border-2 border-on-surface p-8 rounded-xl neubrutal-shadow flex flex-col items-center gap-6">
<p className="font-label text-label uppercase">Circular Profiles</p>
<div className="flex gap-6">
<button className="w-16 h-16 btn-base rounded-full bg-primary-container neubrutal-shadow">
<span className="material-symbols-outlined text-3xl">add</span>
</button>
<button className="w-16 h-16 btn-base rounded-full bg-surface-container-lowest neubrutal-shadow">
<span className="material-symbols-outlined text-3xl">settings</span>
</button>
<button className="w-16 h-16 btn-base rounded-full bg-error-container neubrutal-shadow">
<span className="material-symbols-outlined text-3xl">delete</span>
</button>
</div>
</div>
{/*  Square Icon Buttons  */}
<div className="bg-surface-container border-2 border-on-surface p-8 rounded-xl neubrutal-shadow flex flex-col items-center gap-6">
<p className="font-label text-label uppercase">Square Profiles</p>
<div className="flex gap-6">
<button className="w-16 h-16 btn-base rounded-lg bg-primary-container neubrutal-shadow">
<span className="material-symbols-outlined text-3xl">share</span>
</button>
<button className="w-16 h-16 btn-base rounded-lg bg-surface-container-lowest neubrutal-shadow">
<span className="material-symbols-outlined text-3xl">favorite</span>
</button>
<button className="w-16 h-16 btn-base rounded-lg bg-tertiary-container neubrutal-shadow">
<span className="material-symbols-outlined text-3xl">download</span>
</button>
</div>
</div>
</div>
</section>
{/*  Visual Aesthetic Showcase (Image)  */}
<section className="mt-12">
<div className="relative w-full h-[300px] border-2 border-on-surface neubrutal-shadow rounded-xl overflow-hidden">
<img className="w-full h-full object-cover grayscale contrast-125" data-alt="A bold neubrutalist digital composition featuring thick black geometric borders, heavy drop shadows, and high contrast abstract shapes. The lighting is harsh and direct, emphasizing the flat, graphic quality of the elements. The color palette is restricted to lime green, deep blacks, and off-white backgrounds, creating a raw and energetic visual style inspired by modern design tools and physical cardboard layers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGhd5Z6iB3jZOS_3olHd_qHV1HN1U9xgkiR1yAAL3OjiMEf_a_1l9B-WG0N9PNJKoIITfEnMdFwQCYBjSPK4nw2irBSuiPf6MsMuZTI4kyN0c8PCG_2d2jJ0ThC44ZvaZoIJl9ObkgCge2SQDXCQKAYjfuRUzdXOeDcBeLptnb_ZBnRfqAI5B39qV-jZX37vNRSYQ21q3KucrMkf8WoBDd0qZNLj5qqfw0vrSgXiJAnUM0HCNtV93cw1_LMo_BlKJPmdybXjj5eGA"/>
<div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div className="absolute bottom-6 left-6">
<span className="bg-on-surface text-background px-4 py-2 font-display text-headline-sm uppercase border-2 border-on-surface">Design System V.1</span>
</div>
</div>
</section>
</main>
{/*  Bottom Navigation Bar (Shared Component)  */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-background border-t-2 border-on-surface shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]">
<a className="flex flex-col items-center justify-center text-on-surface hover:bg-surface-2 transition-colors px-4 py-1" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-label text-label uppercase">HOME</span>
</a>
<a className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-full px-4 py-1 border-2 border-on-surface" href="#">
<span className="material-symbols-outlined">extension</span>
<span className="font-label text-label uppercase">COMPONENTS</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface hover:bg-surface-2 transition-colors px-4 py-1" href="#">
<span className="material-symbols-outlined">palette</span>
<span className="font-label text-label uppercase">THEME</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface hover:bg-surface-2 transition-colors px-4 py-1" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-label text-label uppercase">HELP</span>
</a>
</nav>


    </div>
  );
}
