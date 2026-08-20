import React from 'react';
import Button from '../components/Button';

const ButtonShowcaseWebViewFinal = () => {
  const buttonVariants = [
    { variant: 'primary', label: 'Action', description: 'High emphasis for primary user actions.' },
    { variant: 'secondary', label: 'Outline', description: 'Medium emphasis for supporting tasks.' },
    { variant: 'ghost', label: 'Ghost', description: 'Low emphasis for auxiliary items.' },
    { variant: 'disabled', label: 'Disabled', description: 'Indicates an unavailable action.', disabled: true },
  ];

  const buttonSizes = [
    { size: 'large', label: 'Large (64px)', description: 'Hero Actions' },
    { size: 'medium', label: 'Medium (48px)', description: 'Standard View' },
    { size: 'small', label: 'Small (32px)', description: 'Contextual' },
  ];

  const iconProfiles = [
    { icon: 'touch_app', label: 'Touch' },
    { icon: 'mouse', label: 'Mouse' },
    { icon: 'ads_click', label: 'Click' },
    { icon: 'gesture', label: 'Gesture' },
  ];

  const statusVariants = [
    { variant: 'primary', label: 'Active', icon: 'check_circle' },
    { variant: 'secondary', label: 'Warning', icon: 'warning' },
    { variant: 'ghost', label: 'Error', icon: 'error' },
    { variant: 'disabled', label: 'Disabled', icon: 'block', disabled: true },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-margin py-4 bg-background border-b-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary cursor-pointer">arrow_back</span>
          <h1 className="font-display text-display uppercase text-on-surface">BUTTONS</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-primary font-bold font-label uppercase tracking-tighter" href="#">HOME</a>
          <a className="text-secondary font-medium font-label uppercase tracking-tighter hover:text-primary transition-colors" href="#">COMPONENTS</a>
          <a className="text-secondary font-medium font-label uppercase tracking-tighter hover:text-primary transition-colors" href="#">THEME</a>
          <a className="text-secondary font-medium font-label uppercase tracking-tighter hover:text-primary transition-colors" href="#">HELP</a>
        </nav>
        <span className="material-symbols-outlined text-primary cursor-pointer">settings</span>
      </header>

      <main className="mt-24 mb-32 max-w-6xl mx-auto px-margin">
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
              <Button variant="primary" size="medium">Explore Docs</Button>
              <Button variant="secondary" size="medium">Try Sandbox</Button>
            </div>
          </div>
          <div className="flex-1 relative h-64 w-full md:h-auto">
            <div className="absolute inset-0 bg-primary opacity-10 rounded-lg border-2 border-dashed border-on-surface"></div>
            <div className="relative grid grid-cols-2 gap-4 p-4 h-full">
              {iconProfiles.map((profile, index) => (
                <div key={index} className={`bg-${index % 2 === 0 ? 'white' : 'primary-fixed'} border-2 border-on-surface hard-shadow-sm rounded-lg flex items-center justify-center ${index % 2 === 0 ? '-rotate-3' : 'rotate-6'} hover:rotate-0 transition-transform cursor-pointer group`}>
                  <span className="material-symbols-outlined text-4xl group-hover:scale-125 transition-transform">{profile.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="md:col-span-2 space-y-8">
            <div className="bg-surface border-2 border-on-surface hard-shadow p-8 rounded-xl">
              <h3 className="font-headline-md text-headline-md uppercase mb-8 border-b-2 border-on-surface pb-4">Button Variants</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {buttonVariants.map((button, index) => (
                  <div key={index} className="space-y-4">
                    <span className="font-label uppercase text-secondary">{button.label}</span>
                    <Button variant={button.variant} size="medium" disabled={button.disabled}>
                      {button.label}
                    </Button>
                    <p className="text-caption text-secondary">{button.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-2 border-2 border-on-surface hard-shadow p-8 rounded-xl">
              <h3 className="font-headline-md text-headline-md uppercase mb-8 border-b-2 border-on-surface pb-4">Dimensions</h3>
              <div className="flex flex-wrap items-end gap-12">
                {buttonSizes.map((button, index) => (
                  <div key={index} className="flex flex-col items-center gap-4">
                    <Button variant="primary" size={button.size}>
                      {button.label}
                    </Button>
                    <span className="text-caption font-label uppercase">{button.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-8">
            <div className="bg-surface border-2 border-on-surface hard-shadow p-8 rounded-xl">
              <h3 className="font-headline-md text-headline-md uppercase mb-8 border-b-2 border-on-surface pb-4">Icon Profiles</h3>
              <div className="grid grid-cols-2 gap-4">
                {iconProfiles.map((profile, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <Button variant="primary" size="medium" icon={profile.icon}>
                      {profile.label}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-2 border-2 border-on-surface hard-shadow p-8 rounded-xl">
              <h3 className="font-headline-md text-headline-md uppercase mb-8 border-b-2 border-on-surface pb-4">Status Variants</h3>
              <div className="grid grid-cols-2 gap-4">
                {statusVariants.map((button, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <Button variant={button.variant} size="medium" icon={button.icon} disabled={button.disabled}>
                      {button.label}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ButtonShowcaseWebViewFinal;
