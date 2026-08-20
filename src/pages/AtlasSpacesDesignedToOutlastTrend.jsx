import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AtlasSpacesDesignedToOutlastTrend() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<main className="min-h-screen" style={{"backgroundColor": "var(--color-bg)"}}>

<div className="w-full h-screen flex items-center justify-center p-3 md:p-5">

<section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center group">


<img alt="Modern building corner with dark glass windows" className="absolute inset-0 w-full h-full object-cover object-center z-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY9j-qkt3jxDAWreIOqfRau1e5qiyvY1X2QJJrDesnbJW8363INHAy3pgt-6k3f3IG899HImhA15HjziDjsnyCt4UBrrcdGNldYWF4BkOjEAO4GvZssh0prOnjqxmYXJEI3Vki6Yh3h8ShHGQ7F--wmNXW35onNIoQGpbhFRxpJpaEqtXK9J6A1YMiru8NjLwOF9sK2gLKoWyVV-wKY_ykAld2gXA4hSnulS-DOLmAWJLrBXIlUkJ8pQ"/>
<div className="absolute inset-0 z-[5]" style={{"background": "linear-gradient(200deg, rgba(10,10,9,0.75) 0%, rgba(10,10,9,0.4) 50%, rgba(10,10,9,0.82) 100%)"}}></div>

<div className="relative z-10 w-full h-full flex flex-col items-center">

<nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full" data-purpose="primary-navigation">
<span className="text-2xl" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)", "letterSpacing": "0.08em"}}>ATLAS</span>
<ul className="hidden md:flex items-center gap-8 text-sm" style={{"color": "rgba(237,234,227,0.8)"}}>
<li className="cursor-pointer hover:opacity-70 transition-opacity">Projects</li>
<li className="cursor-pointer hover:opacity-70 transition-opacity">Studio</li>
<li className="cursor-pointer hover:opacity-70 transition-opacity">Contact</li>
</ul>
<button className="btn-hover flex items-center rounded-full pl-4 pr-2 py-1.5 gap-2 text-sm" style={{"backgroundColor": "var(--color-accent)", "color": "#1C1808"}}>
<span>Enquire</span>
<div className="p-1 rounded-full flex items-center justify-center" style={{"backgroundColor": "rgba(28,24,8,0.15)"}}>
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>
</div>
</button>
</nav>


<div className="w-full flex flex-col items-center pt-10 px-6 text-center max-w-3xl" data-purpose="hero-copy">

<div className="anim-badge flex items-center gap-2 px-4 py-2 rounded-full mb-4 w-fit" style={{"backgroundColor": "var(--color-card-glass)", "backdropFilter": "blur(10px)", "border": "1px solid var(--color-border)"}}>
<i className="w-4 h-4" data-lucide="triangle" style={{"color": "var(--color-accent)"}}></i>
<span className="text-sm" style={{"color": "var(--color-heading)"}}>Portfolio 2026</span>
</div>
<h1 className="anim-h1 text-4xl sm:text-5xl md:text-6xl lg:text-[78px] mb-3 tracking-tight leading-[1.05]" style={{"fontFamily": "var(--font-display)", "fontWeight": "400", "color": "var(--color-heading)"}}>
              Spaces designed to<br className="hidden sm:block"/> outlast trend
            </h1>
<p className="anim-p text-sm sm:text-base md:text-lg leading-relaxed max-w-xl" style={{"color": "var(--color-text)"}}>
              A studio working across residential, civic and commercial architecture — built on proportion, material honesty and light.
            </p>
</div>


<div className="anim-left absolute bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] flex flex-col gap-2 lg:gap-3 min-w-[150px] w-fit" data-purpose="portfolio-status" style={{"backgroundColor": "var(--color-card-glass)", "backdropFilter": "blur(20px)", "border": "1px solid var(--color-border)"}}>
<div className="flex flex-col">
<span className="text-2xl md:text-3xl tracking-tight" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)"}}>48</span>
<span className="text-[10px] md:text-[12px] uppercase tracking-wider" style={{"color": "rgba(237,234,227,0.5)"}}>Completed Works</span>
</div>
<button className="btn-hover flex items-center rounded-full pl-1.5 pr-4 py-1.5 gap-2 self-start" style={{"backgroundColor": "var(--color-heading)", "color": "#1C1808"}}>
<div className="p-1 rounded-full flex items-center justify-center" style={{"backgroundColor": "rgba(28,24,8,0.1)"}}>
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>
</div>
<span className="text-sm">View portfolio</span>
</button>
</div>



<div className="anim-corner absolute top-0 right-0 p-3 pb-5 pl-8 sm:p-4 sm:pb-6 sm:pl-10 md:p-6 md:pb-8 md:pl-14 rounded-bl-[1.5rem] sm:rounded-bl-[2rem] md:rounded-bl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6" data-purpose="latest-work-widget" style={{"backgroundColor": "var(--color-bg)"}}>

<div className="absolute -bottom-[1.5rem] sm:-bottom-[2rem] md:-bottom-[3.5rem] right-0 w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
<svg fill="none" height="100%" viewbox="0 0 56 56" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M56 0V56C56 25.0721 30.9279 0 0 0H56Z" fill="var(--color-bg)"></path>
</svg>
</div>

<div className="absolute top-0 -left-[1.5rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
<svg fill="none" height="100%" viewbox="0 0 56 56" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M56 0H0C30.9279 0 56 25.0721 56 56V0Z" fill="var(--color-bg)"></path>
</svg>
</div>
<div className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center" style={{"backgroundColor": "rgba(201,162,39,0.1)", "border": "1px solid rgba(201,162,39,0.3)"}}>
<i data-lucide="arrow-up-right" style={{"color": "var(--color-accent)"}}></i>
</div>
<div className="flex flex-col">
<span className="text-[16px] md:text-[20px]" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)"}}>Latest work</span>
<div className="flex items-center gap-1 cursor-pointer transition-colors" style={{"color": "rgba(237,234,227,0.5)"}}>
<span className="text-[12px] md:text-[15px]">Meridian House</span>
<i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</div>
</div>
</div>

</div>
</section>
</div>
</main>




    </div>
  );
}
