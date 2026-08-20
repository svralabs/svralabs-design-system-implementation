import React from 'react';
import Button from '../components/Button';

const buttonVariants = [
  {
    label: 'PRIMARY (LIME)',
    bgColor: 'bg-primary-fixed',
    textColor: 'text-on-primary-fixed',
    text: 'Confirm Action',
    description: 'Used for main calls to action.'
  },
  {
    label: 'SECONDARY (WHITE)',
    bgColor: 'bg-surface-container-lowest',
    textColor: 'text-on-surface',
    text: 'Cancel Action',
    description: 'Used for alternative options.'
  },
  {
    label: 'GHOST (OUTLINE)',
    bgColor: 'bg-transparent',
    textColor: 'text-on-surface',
    text: 'Learn More',
    description: 'Low emphasis tertiary actions.'
  }
];

const buttonSizes = [
  {
    size: 'Large',
    height: 'HEIGHT: 64PX',
    className: 'px-12 py-6 text-lg'
  },
  {
    size: 'Medium',
    height: 'HEIGHT: 48PX',
    className: 'px-8 py-4'
  },
  {
    size: 'Small',
    height: 'HEIGHT: 32PX',
    className: 'px-6 py-2 text-xs'
  }
];

const functionalColors = [
  {
    bgColor: 'bg-[#a3d741]',
    textColor: 'text-on-primary-fixed',
    icon: 'check_circle',
    text: 'Success'
  },
  {
    bgColor: 'bg-tertiary-fixed',
    textColor: 'text-on-tertiary-fixed',
    icon: 'warning',
    text: 'Warning'
  },
  {
    bgColor: 'bg-error',
    textColor: 'text-on-error',
    icon: 'delete_forever',
    text: 'Error Action'
  }
];

const iconButtons = [
  { icon: 'add', bgColor: 'bg-primary-container' },
  { icon: 'settings', bgColor: 'bg-surface-container-lowest' },
  { icon: 'favorite', bgColor: 'bg-error-container' }
];

export default function ButtonShowcaseMobile() {
  return (
    <div className="min-h-screen bg-background">
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
        <section className="space-y-4">
          <div className="bg-primary-container p-card-padding border-2 border-on-surface neubrutal-shadow rounded-xl">
            <h2 className="font-headline-lg text-headline-lg uppercase mb-4">The Interaction Language</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">
              Our buttons are built to feel tactile, physical, and immediate. Using high-contrast borders and solid shadows, they anchor the UI in a cardboard-like physical space.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-on-primary w-10 h-10 rounded-full border-2 border-on-surface flex items-center justify-center font-bold">1</div>
            <h3 className="font-headline-md text-headline-md uppercase">Button Variants</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buttonVariants.map((variant, index) => (
              <div key={index} className="bg-surface-container border-2 border-on-surface p-6 rounded-xl neubrutal-shadow">
                <p className="font-label text-label mb-6 text-outline">{variant.label}</p>
                <Button
                  className={`w-full btn-base ${variant.bgColor} ${variant.textColor} uppercase py-4 rounded-full neubrutal-shadow`}
                  onClick={() => {}}
                >
                  {variant.text}
                </Button>
                <p className="mt-4 font-body-sm text-body-sm italic">{variant.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-on-primary w-10 h-10 rounded-full border-2 border-on-surface flex items-center justify-center font-bold">2</div>
            <h3 className="font-headline-md text-headline-md uppercase">Button Sizes</h3>
          </div>
          <div className="bg-surface-2 border-2 border-on-surface p-card-padding rounded-xl neubrutal-shadow flex flex-wrap items-end gap-12">
            {buttonSizes.map((size, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <Button
                  className={`btn-base bg-primary-fixed text-on-primary-fixed uppercase rounded-full neubrutal-shadow ${size.className}`}
                  onClick={() => {}}
                >
                  {size.size} Button
                </Button>
                <span className="font-label text-label text-outline">{size.height}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-on-primary w-10 h-10 rounded-full border-2 border-on-surface flex items-center justify-center font-bold">3</div>
            <h3 className="font-headline-md text-headline-md uppercase">Functional Colors</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {functionalColors.map((color, index) => (
              <Button
                key={index}
                className={`btn-base ${color.bgColor} ${color.textColor} uppercase py-4 px-6 rounded-lg neubrutal-shadow flex gap-2`}
                onClick={() => {}}
              >
                <span className="material-symbols-outlined">{color.icon}</span>
                {color.text}
              </Button>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-on-primary w-10 h-10 rounded-full border-2 border-on-surface flex items-center justify-center font-bold">4</div>
            <h3 className="font-headline-md text-headline-md uppercase">Icon Buttons</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container border-2 border-on-surface p-8 rounded-xl neubrutal-shadow flex flex-col items-center gap-6">
              <p className="font-label text-label uppercase">Circular Profiles</p>
              <div className="flex gap-6">
                {iconButtons.map((button, index) => (
                  <Button
                    key={index}
                    className={`w-16 h-16 btn-base rounded-full ${button.bgColor} neubrutal-shadow`}
                    onClick={() => {}}
                  >
                    <span className="material-symbols-outlined text-3xl">{button.icon}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
