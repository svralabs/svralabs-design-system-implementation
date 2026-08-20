import React from 'react';
import Button from '../components/Button';

const ButtonShowcaseWebView = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-background border-b-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
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

      <main className="mt-24 mb-32 max-w-6xl mx-auto px-8">
        <section className="mb-12 rounded-xl bg-primary-container border-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-on-surface text-primary-fixed px-4 py-1 rounded-full border-2 border-on-surface font-label uppercase tracking-widest text-caption">
              Core Design Pillar
            </div>
            <h2 className="font-display text-display text-on-primary-container leading-tight">THE INTERACTION LANGUAGE</h2>
            <p className="font-body-lg text-on-primary-container max-w-md">
              Our buttons are tactical, high-contrast objects designed for physical clarity. In a world of flat UI, we embrace the depth of clickability.
            </p>
            <div className="flex gap-4">
              <Button variant="primary" onClick={handleClick}>Explore Docs</Button>
              <Button variant="secondary" onClick={handleClick}>Try Sandbox</Button>
            </div>
          </div>
          <div className="flex-1 relative h-64 w-full md:h-auto">
            <div className="absolute inset-0 bg-primary opacity-10 rounded-lg border-2 border-dashed border-on-surface"></div>
            <div className="relative grid grid-cols-2 gap-4 p-4 h-full">
              <div className="bg-white border-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform cursor-pointer group">
                <span className="material-symbols-outlined text-4xl group-hover:scale-125 transition-transform" data-icon="touch_app">touch_app</span>
              </div>
              <div className="bg-primary-fixed border-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg flex items-center justify-center rotate-6 hover:rotate-0 transition-transform cursor-pointer group">
                <span className="material-symbols-outlined text-4xl group-hover:scale-125 transition-transform" data-icon="mouse">mouse</span>
              </div>
              <div className="bg-on-surface text-white border-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg flex items-center justify-center -rotate-6 hover:rotate-0 transition-transform cursor-pointer group">
                <span className="material-symbols-outlined text-4xl group-hover:scale-125 transition-transform" data-icon="ads_click">ads_click</span>
              </div>
              <div className="bg-surface-2 border-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg flex items-center justify-center rotate-3 hover:rotate-0 transition-transform cursor-pointer group">
                <span className="material-symbols-outlined text-4xl group-hover:scale-125 transition-transform" data-icon="gesture">gesture</span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="md:col-span-2 space-y-8">
            <div className="bg-surface border-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-8 rounded-xl">
              <h3 className="font-headline-md text-headline-md uppercase mb-8 border-b-2 border-on-surface pb-4">Button Variants</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <span className="font-label uppercase text-secondary">Primary</span>
                  <Button variant="primary" onClick={handleClick}>Action</Button>
                  <p className="text-caption text-secondary">High emphasis for primary user actions.</p>
                </div>
                <div className="space-y-4">
                  <span className="font-label uppercase text-secondary">Secondary</span>
                  <Button variant="secondary" onClick={handleClick}>Outline</Button>
                  <p className="text-caption text-secondary">Medium emphasis for supporting tasks.</p>
                </div>
                <div className="space-y-4">
                  <span className="font-label uppercase text-secondary">Ghost</span>
                  <Button variant="ghost" onClick={handleClick}>Ghost</Button>
                  <p className="text-caption text-secondary">Low emphasis for auxiliary items.</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-2 border-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-8 rounded-xl">
              <h3 className="font-headline-md text-headline-md uppercase mb-8 border-b-2 border-on-surface pb-4">Dimensions</h3>
              <div className="flex flex-wrap items-end gap-12">
                <div className="flex flex-col items-center gap-4">
                  <Button variant="primary" onClick={handleClick} style={{ padding: '1.5rem 3rem' }}>Large (64px)</Button>
                  <span className="text-caption font-label uppercase">Hero Actions</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Button variant="primary" onClick={handleClick} style={{ padding: '1rem 2rem' }}>Medium (48px)</Button>
                  <span className="text-caption font-label uppercase">Standard View</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Button variant="primary" onClick={handleClick} style={{ padding: '0.5rem 1.5rem' }}>Small (32px)</Button>
                  <span className="text-caption font-label uppercase">Contextual</span>
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-8">
            <div className="bg-surface border-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-8 rounded-xl">
              <h3 className="font-headline-md text-headline-md uppercase mb-8 border-b-2 border-on-surface pb-4">Icon Profiles</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Button variant="primary" onClick={handleClick}>
                    <span className="material-symbols-outlined mr-2">favorite</span>
                    Like
                  </Button>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Button variant="secondary" onClick={handleClick}>
                    <span className="material-symbols-outlined mr-2">share</span>
                    Share
                  </Button>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Button variant="ghost" onClick={handleClick}>
                    <span className="material-symbols-outlined mr-2">bookmark</span>
                    Save
                  </Button>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Button variant="primary" onClick={handleClick} disabled>
                    <span className="material-symbols-outlined mr-2">lock</span>
                    Disabled
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-surface-2 border-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-8 rounded-xl">
              <h3 className="font-headline-md text-headline-md uppercase mb-8 border-b-2 border-on-surface pb-4">Status</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Button variant="primary" onClick={handleClick} loading>
                    Loading
                  </Button>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Button variant="secondary" onClick={handleClick} disabled>
                    Disabled
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ButtonShowcaseWebView;
