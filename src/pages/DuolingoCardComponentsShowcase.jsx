import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DuolingoCardComponentsShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<aside className="h-full w-64 fixed left-0 top-0 border-r-2 border-border-color bg-surface-container-lowest dark:bg-inverse-surface flex flex-col p-md gap-sm">
<div className="mb-xl">
<h1 className="font-headline-xl text-headline-xl font-black text-primary dark:text-primary-fixed">Analytics</h1>
</div>
<nav className="flex flex-col gap-sm">
<div className="flex items-center gap-md text-gray-text hover:bg-surface-variant rounded-xl px-md py-sm transition-all duration-200">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-headline-md text-headline-md">Home</span>
</div>
<div className="flex items-center gap-md bg-secondary-container text-on-secondary-container rounded-xl px-md py-sm border-b-4 border-secondary transition-all duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
<span className="font-headline-md text-headline-md">Showcase</span>
</div>
<div className="flex items-center gap-md text-gray-text hover:bg-surface-variant rounded-xl px-md py-sm transition-all duration-200">
<span className="material-symbols-outlined" data-icon="workspace_premium">workspace_premium</span>
<span className="font-headline-md text-headline-md">Stats</span>
</div>
<div className="flex items-center gap-md text-gray-text hover:bg-surface-variant rounded-xl px-md py-sm transition-all duration-200">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
<span className="font-headline-md text-headline-md">Shop</span>
</div>
</nav>
<div className="mt-auto flex items-center gap-md p-sm border-t-2 border-border-color pt-md">
<img className="w-12 h-12 rounded-full border-2 border-border-color" data-alt="Close up profile avatar of a friendly 3D cartoon style character with bright green eyes and a warm smile, set against a vibrant yellow circle background. The character wears a modern blue hoodie, fitting the energetic and approachable Duolingo design aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_RpjbG6wpNffq8Glb-9wX0UKOlNS86w3qWp_CrNb8FtvebrQqNJc-Fd1ShCB-KaK6rsvBHgVaMBKZbAYN_EbgWhQbgQVJd4WsoLK5Lx6rcQNS1fi1TSjIl9A3vBcKFnfncaoC1Je9sGch4dieIJTVZBsgAHykxDH94jaFk84XRLb3ObR7_uEsIhonk3po52pOscugmLFRyiBeuB5GxKXKeA-JglVAE1Kg96G-9bAco0-rbIs2xsqoYax-YEXAV460EMgAZim1AFBR"/>
<div>
<p className="font-body-lg text-on-surface">Zari Duo</p>
<p className="font-label-sm text-gray-light">Streak: 365 Days</p>
</div>
</div>
</aside>

<header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 border-b-2 border-border-color bg-surface dark:bg-surface-dim flex justify-end items-center px-xl gap-xl z-10">
<div className="flex items-center gap-lg">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-orange" data-icon="local_fire_department" style={{"fontVariationSettings": "FILL 1"}}>local_fire_department</span>
<span className="font-label-caps text-label-caps text-orange">365</span>
</div>
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-red" data-icon="payments" style={{"fontVariationSettings": "FILL 1"}}>payments</span>
<span className="font-label-caps text-label-caps text-red">1,240</span>
</div>
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary-container" data-icon="military_tech" style={{"fontVariationSettings": "FILL 1"}}>military_tech</span>
<span className="font-label-caps text-label-caps text-secondary">DIAMOND</span>
</div>
</div>
</header>

<main className="ml-64 pt-24 pb-12 px-xl">
<header className="mb-xl">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-xs">Card Component Showcase</h2>
<p className="font-body-lg text-gray-text">Explore our tactical, high-energy UI patterns for consistent learning experiences.</p>
</header>

<div className="grid grid-cols-12 gap-gutter">

<div className="col-span-12">
<h3 className="font-headline-lg text-headline-lg text-primary mb-md flex items-center gap-sm">
<span className="material-symbols-outlined" data-icon="school">school</span>
                    Course Library
                </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

<div className="duo-card bg-surface-container-lowest border-2 border-border-color rounded-xl p-md flex flex-col gap-md">
<div className="relative h-40 w-full rounded-lg overflow-hidden bg-secondary-container/20">
<img className="w-full h-full object-cover" data-alt="A stylized 3D vector illustration of the Eiffel Tower with playful, rounded geometry. The scene is set under a bright blue sky with fluffy white clouds, using a vibrant color palette of blues and yellows. The art style is minimalist and high-contrast, perfectly matching a modern educational mobile app interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwA0aUUuhw8mDjSuPpJXDsTX4kDbdFqCWcS4qY1tedB_44q2vLmTelB9keiqJ5_G3h5-yfKFSoB0zjeiNnTUFceOBkYEIXEIjyodnL3tWrokD4m-zbkpn9dejjkTeCvs8xjI3suW0sMHin6tyu1IBRBHsIWzZ9tgrQIWjpb8dBGMYidleKcPL7pL0jXEk3yk2zmBHQv5gtSe28uECybe5SQ3Ggk45uFK3_Po_SMS-DXyFvmaRqFdpUKY0Jz_wGxq-3P7gNq15oLHwF"/>
<span className="absolute top-sm right-sm bg-orange text-white font-label-caps text-[10px] px-sm py-xs rounded-full uppercase">Popular</span>
</div>
<div>
<h4 className="font-headline-md text-headline-md text-on-surface">French Course</h4>
<p className="font-body-md text-gray-text">Master the language of love with 120+ interactive modules.</p>
</div>
<button className="duo-button-primary bg-primary-container text-on-primary-container font-headline-md py-sm rounded-xl uppercase tracking-wider">Start Learning</button>
</div>

<div className="duo-card bg-surface-container-lowest border-2 border-border-color rounded-xl p-md flex flex-col gap-md">
<div className="relative h-40 w-full rounded-lg overflow-hidden bg-primary-container/20">
<img className="w-full h-full object-cover" data-alt="A cheerful 3D rendered cartoon landscape featuring a traditional Japanese Torii gate in a bright red finish. The background shows a stylized Mount Fuji under a warm sunrise with soft orange and pink tones. The design uses bold, thick lines and clean flat surfaces consistent with a friendly learning platform aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSIGVxV47LUQAZ3C2i9JXNvPKHJYfsIMHneIMQERlAKewSJ3FoXlF59GQs7Z7Ar1R9L1JoIc6fA4qU0c-HZ6Fx98GP_hZJ-vQ30YKKsFFI42JqdKCJsyd-vlnNE3P7fusCCuLlLUlfRdzjxRV5GgS_GEQKBz_gNJcpoHXiEudcqI4eiMdx7FSbQX1DeR-cHboCJn5BLZQd58yfKseoIdEFJpoOIykcUetobJHSM8rdwWIsg6-fAfZpshbWvj4AlYc-80-X3QZrwJPJ"/>
<span className="absolute top-sm right-sm bg-secondary-container text-white font-label-caps text-[10px] px-sm py-xs rounded-full uppercase">New</span>
</div>
<div>
<h4 className="font-headline-md text-headline-md text-on-surface">Japanese Basics</h4>
<p className="font-body-md text-gray-text">Learn Hiragana and essential phrases for your next trip.</p>
</div>
<button className="duo-button-primary bg-primary-container text-on-primary-container font-headline-md py-sm rounded-xl uppercase tracking-wider">Join Course</button>
</div>

<div className="duo-card bg-surface-container-lowest border-2 border-border-color rounded-xl p-md flex flex-col gap-md">
<div className="relative h-40 w-full rounded-lg overflow-hidden bg-golden/20">
<img className="w-full h-full object-cover" data-alt="Minimalist 3D scene of a Spanish villa with terracotta tiles and white walls, surrounded by vibrant green palm trees. The lighting is bright and sunny, creating sharp, clean shadows. The visual style follows a tactile, modern aesthetic with saturated greens and warm earthy tones, suitable for a professional UI design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyj2OavkSBqQxwr0R_7VT8PzQ3c9pT2SaqkMI3-oV6JGRFLFb_un2jpA7u-FIK3x8exMiDcJnEHKy4unuhff2NehEQJLdltcArjQistTGurFKP4vdYjSOP1wPIphCyo4my-uUpryjyHHbAi5WkFYN1IwAo8v9yk3qwjVK1WJ7Neqx-ycpVqtrO6DtJGcoxbiYXJFbnLQovrwJAbU-WFNxtsZC5ea0R0MgM9CmYEk5amYSGsHUp5STo_LZWjmYkJvVQSvM_Xg_HCgq5"/>
</div>
<div>
<h4 className="font-headline-md text-headline-md text-on-surface">Conversational Spanish</h4>
<p className="font-body-md text-gray-text">Go beyond the basics and start speaking fluently in weeks.</p>
</div>
<button className="duo-button-primary bg-primary-container text-on-primary-container font-headline-md py-sm rounded-xl uppercase tracking-wider">Continue</button>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-7 mt-xl">
<h3 className="font-headline-lg text-headline-lg text-secondary mb-md flex items-center gap-sm">
<span className="material-symbols-outlined" data-icon="stars">stars</span>
                    Achievements &amp; Milestones
                </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">

<div className="duo-card bg-surface-container-lowest border-2 border-border-color rounded-xl p-md flex items-center gap-md">
<div className="w-16 h-16 flex-shrink-0 bg-golden/20 rounded-full flex items-center justify-center border-2 border-golden">
<span className="material-symbols-outlined text-golden text-4xl" data-icon="emoji_events" style={{"fontVariationSettings": "FILL 1"}}>emoji_events</span>
</div>
<div className="flex-grow">
<h4 className="font-headline-md text-headline-md text-on-surface">Sage Level 5</h4>
<div className="w-full h-3 bg-border-color rounded-full mt-xs overflow-hidden">
<div className="progress-inner h-full bg-golden w-3/4 rounded-full"></div>
</div>
<p className="font-label-sm text-gray-light mt-xs">1,500 / 2,000 XP</p>
</div>
</div>

<div className="duo-card bg-surface-container-lowest border-2 border-border-color rounded-xl p-md flex items-center gap-md">
<div className="w-16 h-16 flex-shrink-0 bg-red/20 rounded-full flex items-center justify-center border-2 border-red">
<span className="material-symbols-outlined text-red text-4xl" data-icon="local_fire_department" style={{"fontVariationSettings": "FILL 1"}}>local_fire_department</span>
</div>
<div className="flex-grow">
<h4 className="font-headline-md text-headline-md text-on-surface">Wildfire</h4>
<div className="w-full h-3 bg-border-color rounded-full mt-xs overflow-hidden">
<div className="progress-inner h-full bg-red w-full rounded-full"></div>
</div>
<p className="font-label-sm text-gray-light mt-xs">Completed! 365 Days</p>
</div>
</div>

<div className="col-span-full duo-card bg-primary-container/10 border-2 border-primary-container rounded-xl p-lg flex flex-col md:flex-row items-center gap-lg">
<div className="w-32 h-32 flex-shrink-0">
<img className="w-full h-full object-contain" data-alt="A highly detailed 3D render of a friendly green owl mascot holding a small blue trophy. The character has large expressive eyes and soft feather textures. The scene is illuminated by warm, cinematic studio lighting with a soft gradient background in light green, conveying a sense of accomplishment and joyful celebration." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKRFIvBY8_v_gGJ7c6viNojdDuzbOT9nvJnVvIyvqtVY3KqvhRtmxdU_PX8PdL57pdA9Gq2bLpMrlJIj0SJ2wbYTjX8LLSFS4pcsO6hR_9psPrltVk-EPuen9bP4Zez3UpuA18Ko-L04XaDYc9RE-zo2ypAC0_CblPVGBZnRpejobFiU-GEnDNBanLqQ_sGlV5PUnELPzk96EL8jSQzU1KpSV3B5X62t_pncmnsdZHqrbC5gC0OW7M3bMtsptALMkwRSu4qJ6AG9OP"/>
</div>
<div>
<h4 className="font-headline-lg text-headline-lg text-primary">Fun, Free, and Effective</h4>
<p className="font-body-lg text-on-surface-variant">Learning with us is like playing a game. Our research-backed methods are proven to help you learn languages faster than traditional methods.</p>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 mt-xl">
<h3 className="font-headline-lg text-headline-lg text-on-tertiary-container mb-md flex items-center gap-sm">
<span className="material-symbols-outlined" data-icon="workspace_premium">workspace_premium</span>
                    Super Duolingo
                </h3>
<div className="premium-glow bg-dark-blue rounded-2xl p-xl flex flex-col gap-lg border-2 border-secondary-container">
<div className="flex flex-col items-center text-center gap-sm">
<div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center shadow-xl shadow-secondary-container/30">
<span className="material-symbols-outlined text-white text-5xl" data-icon="bolt" style={{"fontVariationSettings": "FILL 1"}}>bolt</span>
</div>
<h4 className="font-headline-xl text-headline-xl text-white">Upgrade to Super</h4>
<p className="font-body-md text-secondary-fixed opacity-80">Remove ads, get unlimited hearts, and accelerate your progress with personalized practice.</p>
</div>
<div className="flex flex-col gap-md">
<div className="flex items-center gap-md text-white">
<span className="material-symbols-outlined text-secondary-container" data-icon="check_circle" style={{"fontVariationSettings": "FILL 1"}}>check_circle</span>
<span className="font-body-lg">Unlimited Hearts</span>
</div>
<div className="flex items-center gap-md text-white">
<span className="material-symbols-outlined text-secondary-container" data-icon="check_circle" style={{"fontVariationSettings": "FILL 1"}}>check_circle</span>
<span className="font-body-lg">No third-party ads</span>
</div>
<div className="flex items-center gap-md text-white">
<span className="material-symbols-outlined text-secondary-container" data-icon="check_circle" style={{"fontVariationSettings": "FILL 1"}}>check_circle</span>
<span className="font-body-lg">Personalized Practice Hub</span>
</div>
</div>
<button className="w-full bg-white text-dark-blue font-headline-md py-md rounded-xl shadow-[0_4px_0_#AFAFAF] active:translate-y-1 active:shadow-none transition-all uppercase">Try 2 Weeks Free</button>
<p className="text-center font-label-sm text-secondary-fixed/50">Then $12.99 / month. Cancel anytime.</p>
</div>
</div>

<div className="col-span-12 mt-xl">
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-md">Why Students Love Us</h3>
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">

<div className="duo-card bg-surface-container-lowest border-2 border-border-color rounded-xl p-md text-center">
<span className="material-symbols-outlined text-primary text-4xl mb-sm block" data-icon="timer">timer</span>
<h5 className="font-headline-md text-headline-md text-on-surface">Bite-sized lessons</h5>
<p className="font-body-md text-gray-text">Just 15 minutes a day is all you need.</p>
</div>

<div className="duo-card bg-surface-container-lowest border-2 border-border-color rounded-xl p-md text-center">
<span className="material-symbols-outlined text-secondary text-4xl mb-sm block" data-icon="groups">groups</span>
<h5 className="font-headline-md text-headline-md text-on-surface">Global Community</h5>
<p className="font-body-md text-gray-text">Learn alongside 500M+ people.</p>
</div>

<div className="duo-card bg-surface-container-lowest border-2 border-border-color rounded-xl p-md text-center">
<span className="material-symbols-outlined text-orange text-4xl mb-sm block" data-icon="psychology">psychology</span>
<h5 className="font-headline-md text-headline-md text-on-surface">Science-based</h5>
<p className="font-body-md text-gray-text">Optimized spaced repetition.</p>
</div>

<div className="duo-card bg-surface-container-lowest border-2 border-border-color rounded-xl p-md text-center">
<span className="material-symbols-outlined text-red text-4xl mb-sm block" data-icon="verified">verified</span>
<h5 className="font-headline-md text-headline-md text-on-surface">Official Certs</h5>
<p className="font-body-md text-gray-text">Earn badges for your resume.</p>
</div>
</div>
</div>
</div>
</main>



    </div>
  );
}
