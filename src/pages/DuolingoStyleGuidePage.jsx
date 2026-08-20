import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DuolingoStyleGuidePage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="nav">
<div className="nav-inner">
<div className="nav-left">
<img alt="Duolingo" className="nav-logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaL20lh38drA9uY21-dXUi0vJKBlfrPnTNdwlh_nsVWez6iqfFlh6UAx6s6MlUNZYOq7cNRx9wjAvau0kWdO4r2yXSvw_TGnlCvoe6lap5J09LyoICRc6H7VtWTKobh7vf4LoG2kq3URfUr5rEZhUGwe-Iku5QFuJ1LXyfSt37zqVgpw-3pTOXLOSaIX_8ktncvsL9oRKLmKdh5FaGPFiR6WtacIvjsIOiM6zSHQLAwgmTyPKDNhIboQ"/>
<div className="nav-divider"></div>
<span className="nav-label">Style Guide</span>
</div>
<div className="nav-links">
<a href="#colors">Colors</a>
<a href="#type">Type</a>
<a className="active" href="#buttons">Buttons</a>
<a href="#cards">Cards</a>
<a href="#components">Components</a>
</div>
</div>
</nav>


<header className="hero">
<h1>duolingo design</h1>
<p>A comprehensive visual reference for the Duolingo design system covering colors, typography, button variants, cards, and UI components.</p>
<div className="hero-btns">
<button className="btn btn-primary">Get started</button>
<button className="btn btn-secondary">I already have an account</button>
</div>
</header>


<main className="grid">

<section className="panel" id="colors">
<div className="label">Color Palette</div>
<div className="swatches">
<div className="sw"><div className="sw-box" style={{"background": "#58CC02"}}></div><div className="sw-name">Green</div><div className="sw-hex">#58CC02</div></div>
<div className="sw"><div className="sw-box" style={{"background": "#4BB200"}}></div><div className="sw-name">Green Hover</div><div className="sw-hex">#4BB200</div></div>
<div className="sw"><div className="sw-box" style={{"background": "#1CB0F6"}}></div><div className="sw-name">Blue</div><div className="sw-hex">#1CB0F6</div></div>
<div className="sw"><div className="sw-box" style={{"background": "#100F3E"}}></div><div className="sw-name">Dark Blue</div><div className="sw-hex">#100F3E</div></div>
<div className="sw"><div className="sw-box" style={{"background": "#FF4B4B"}}></div><div className="sw-name">Red</div><div className="sw-hex">#FF4B4B</div></div>
<div className="sw"><div className="sw-box" style={{"background": "#FF9600"}}></div><div className="sw-name">Orange</div><div className="sw-hex">#FF9600</div></div>
<div className="sw"><div className="sw-box" style={{"background": "#FFC800"}}></div><div className="sw-name">Golden</div><div className="sw-hex">#FFC800</div></div>
<div className="sw"><div className="sw-box" style={{"background": "#4EC604"}}></div><div className="sw-name">Footer Green</div><div className="sw-hex">#4EC604</div></div>
<div className="sw"><div className="sw-box" style={{"background": "#4B4B4B"}}></div><div className="sw-name">Gray Text</div><div className="sw-hex">#4B4B4B</div></div>
<div className="sw"><div className="sw-box" style={{"background": "#777777"}}></div><div className="sw-name">Gray Light</div><div className="sw-hex">#777777</div></div>
<div className="sw"><div className="sw-box" style={{"background": "#AFAFAF"}}></div><div className="sw-name">Nav Text</div><div className="sw-hex">#AFAFAF</div></div>
<div className="sw"><div className="sw-box" style={{"background": "#E5E5E5"}}></div><div className="sw-name">Border</div><div className="sw-hex">#E5E5E5</div></div>
</div>
</section>


<section className="panel" id="type">
<div className="label">Typography</div>
<div className="type-stack">
<div className="type-row"><div className="type-meta"><div className="type-size">48px</div><div className="type-weight">Feather Bold</div></div><div className="t-display">Display</div></div>
<div className="type-row"><div className="type-meta"><div className="type-size">32px</div><div className="type-weight">Bold 700</div></div><div className="t-h1">Heading One</div></div>
<div className="type-row"><div className="type-meta"><div className="type-size">28px</div><div className="type-weight">Feather Bold</div></div><div className="t-h2">heading two</div></div>
<div className="type-row"><div className="type-meta"><div className="type-size">18px</div><div className="type-weight">Medium 500</div></div><div className="t-body">Body text for paragraphs and descriptions with comfortable reading line-height.</div></div>
<div className="type-row"><div className="type-meta"><div className="type-size">14px</div><div className="type-weight">Bold 700</div></div><div className="t-caption">Caption Label</div></div>
<div className="type-row"><div className="type-meta"><div className="type-size">12px</div><div className="type-weight">Semi 600</div></div><div className="t-small">Small utility text for metadata and hints</div></div>
</div>
</section>


<section className="panel" id="buttons">
<div className="label">Button Variants</div>
<div className="btn-stack">
<div className="btn-row"><span className="btn-row-label">Primary</span><button className="btn btn-primary">Get started</button><button className="btn btn-primary btn-sm">Small</button><button className="btn btn-primary btn-disabled">Disabled</button></div>
<div className="btn-row"><span className="btn-row-label">Secondary</span><button className="btn btn-secondary">Learn more</button><button className="btn btn-secondary btn-sm">Small</button><button className="btn btn-secondary btn-disabled">Disabled</button></div>
<div className="btn-row"><span className="btn-row-label">Danger</span><button className="btn btn-danger">Delete</button><button className="btn btn-danger btn-sm">Remove</button></div>
<div className="btn-row"><span className="btn-row-label">Ghost</span><button className="btn btn-ghost">View all</button></div>
</div>
</section>


<section className="panel panel-dark">
<div className="label">Dark Theme Buttons</div>
<div className="btn-stack">
<div className="btn-row"><button className="btn btn-primary">Get started</button><button className="btn btn-white">Try 1 week free</button></div>
<div className="btn-row"><button className="btn btn-primary btn-sm">Get started</button><button className="btn btn-white btn-sm">Try 1 week free</button></div>
</div>
</section>


<section className="panel" id="cards">
<div className="label">Cards</div>
<div className="cards">
<div className="card">
<img alt="" className="card-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaNWoN7UbMH5vMWfrRJyh_fAWPLmGubJRhslUkKVgPIEHk3N4CQXTa_oKG6GpxaDYYz0rd5PnmqqS-s_hOp6gfGoGSZvo9-Q0tH-Hylmz1L27oqkkDQD-IA158PJ1SUmuZDpJ2IOwXdo2j88t6lXjZcCIQ1-v-aMmulxBEOJ9mXkV5YfvUc6q69fbPQFLISADFVZMxXQLeb9Hfieu09HVqJoZut3Dv9phjQQFd7bfUwi64Rc1Zk5CGZA"/>
<div className="card-body"><span className="tag tag-green">New</span><div className="card-title">Spanish for Beginners</div><div className="card-desc">Start your language journey with interactive lessons designed to build fluency.</div></div>
<div className="card-foot"><span className="foot-left">12 Units</span><span className="foot-right">Start</span></div>
</div>
<div className="card">
<img alt="" className="card-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH_Lzps6ZgIE6GsXwmHRXCTG5wDle_Qbz-exulamToZSPbyWoHGbRwuynYL9F6NkzTU1oWDv021v__xBFPmZFdz0O2ze9g7W9d5uoEoXvsR0nLZvLmZFHzpWXchhH6agCfze3xSCtisgqAyc4mBiUoIP3wyw0l9Q_VHtvh1eUSMPxAkE1hskWuB-NU0xTWm9OW4fXg3c4sK2E6RfFVjBsFA-x9AcXDoajVbCjue-3u0E3fhmySmA9C4Q"/>
<div className="card-body"><span className="tag tag-blue">Popular</span><div className="card-title">French Conversations</div><div className="card-desc">Practice real-world dialogue and improve pronunciation with native speakers.</div></div>
<div className="card-foot"><span className="foot-left">8 Units</span><span className="foot-right">Continue</span></div>
</div>
</div>
</section>


<section className="panel panel-dark">
<div className="label">Dark Theme Cards</div>
<div className="cards cards-dark">
<div className="card">
<div className="card-body"><span className="tag tag-gold">Super</span><div className="card-title">Unlimited Hearts</div><div className="card-desc">Keep learning without interruption with Super Duolingo benefits.</div></div>
<div className="card-foot"><span className="foot-left">Premium</span><span className="foot-right">Upgrade</span></div>
</div>
<div className="card">
<div className="card-body"><span className="tag tag-orange">Pro</span><div className="card-title">Mastery Quizzes</div><div className="card-desc">Challenge yourself with advanced assessments to test your skill level.</div></div>
<div className="card-foot"><span className="foot-left">Advanced</span><span className="foot-right">Try now</span></div>
</div>
</div>
</section>


<section className="panel" id="components">
<div className="label">Components</div>
<div className="comp-stack">
<div>
<div className="comp-label">Badges</div>
<div className="badges">
<span className="badge b-green">Completed</span>
<span className="badge b-blue">In Progress</span>
<span className="badge b-red">Failed</span>
<span className="badge b-orange">Streak</span>
<span className="badge b-premium">Premium</span>
</div>
</div>
<div>
<div className="comp-label">Input + Button</div>
<div className="input-row"><input className="input" placeholder="Enter your email"/><button className="btn btn-primary">Subscribe</button></div>
</div>
<div>
<div className="comp-label">Toggle</div>
<div className="toggles">
<label className="toggle"><input checked="" type="checkbox"/><span className="track"></span>Sound effects</label>
<label className="toggle"><input type="checkbox"/><span className="track"></span>Animations</label>
</div>
</div>
<div>
<div className="comp-label">Progress</div>
<div className="progress-list">
<div className="prog-row"><div className="prog-bar"><div className="prog-fill" style={{"width": "85%", "background": "var(--green)"}}></div></div><span className="prog-val">85%</span></div>
<div className="prog-row"><div className="prog-bar"><div className="prog-fill" style={{"width": "60%", "background": "var(--blue)"}}></div></div><span className="prog-val">60%</span></div>
<div className="prog-row"><div className="prog-bar"><div className="prog-fill" style={{"width": "35%", "background": "var(--orange)"}}></div></div><span className="prog-val">35%</span></div>
</div>
</div>
<div>
<div className="comp-label">Tooltips &amp; Streak</div>
<div className="tip-row">
<span className="tooltip">Hover me</span>
<span className="streak"><span className="fire">🔥</span><span className="num">42</span></span>
</div>
</div>
</div>
</section>


<section className="panel panel-dark">
<div className="label">Dark Theme Components</div>
<div className="comp-stack">
<div>
<div className="comp-label">Language Pills</div>
<div className="pills">
<span className="pill active"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzYzx43JAUhRrKJAU4LCejjm2a-DXINw9LvJWow_wt7_Vw97nZ7Xok3VzF9AWzTmE8KCvKZQtafroBsxY4IVyUauzMipHMFnYpvtI228l2DwJNm_GrTz2DW828jCpUDm2jBs1E35crG0X5lsqscTcFOnr95rPcWtXZDV-vXDZlrEGg9mwyKymogY7gEIGuME2nsexbJXy_qvJGjtNKVmbulyZoEsG_iPB6vX7hEo8J4XBiD1Fv1QCk9A"/>Spanish</span>
<span className="pill"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3ktH_aOEauLiqJjwzZjyeWmspyGQLmy4Up6pIG9Q7nAI6jUYrz6RBqo_uXdPpCr8MiZzjdkRxnUgu-Exh-0cVt_i_DHntrPfRD_1mkPY5BelSJ1occJQXV2qw75hZT9L5yhQ3E81J4r2SqoNl_0_1aZmAqsQdr0iP3P_9JhuHlU-UkGg2FnXRjfuu17OnZvFVvoBLX7taRZhq284CK5QqPnLE4mbrMPKrO-kXV7lVdV7ssN3tE60_HA"/>French</span>
<span className="pill"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA0o6irV_eWeaWj-qiTMqNA9MfNivclHwR-noFJmio02b1sPJGaIAtb0w-0iEFsyTJb-1mdTrBZZZGPWpXN5lfHvyXRRFmFia8RWHfXr2hj-KtWq1ad3JSw00VOutfsSTAK_bBGJsLl4IpQzpAhnmM0UoS6ucPlCDcjMLxqY2xhWial9eDUcDNHZXu2o9MNu02Od-Aje0WEvtQlunTGZZQhk8WOIlaBzcq-vb0cB1uay1c2LLx2-_gJg"/>German</span>
<span className="pill"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBucSuZu_GjzP55FInnUNfdHJGVWQDBjtJEmsHG9wcTmoqcPk_L7fPo0sGZqQVQodLvA7kWmUxFxbg9FWr3aKwyhEacBLKuAxbxFYK7yX_jjMw3xfC2IXhZekH24XA0lxQ7uHOmSJ9d2ZLWtrXFMxSHX1NKHYqiF4LtIWxhjkgJFPqq4VnqziceXa0kEbIF8SajsaXeyTccVMAvsP1BTlBgGdhTrrFsXvtpB6O6INv3mKCAdrvOtkZqMQ"/>Japanese</span>
</div>
</div>
<div>
<div className="comp-label">Avatar Group</div>
<div style={{"display": "flex", "alignItems": "center"}}>
<div className="avatars">
<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt13EPE8pHRv6BjqzCVlce0scOgsL_fEoAB19NFZkEuymiqjvU1AsK1CUpSxw9Upfq41gs0QA_MziNJx0Oaigtgak2Hz_tHFiqwr_PHjq7hUkxHKigGdEr37gypaQwnaj9DDvdiKbvmZ8syFMlxeCT996mZ5OW-ahgimLUe_JTEBGIUJLZiOC8OF1PuV7j66mMgfamTWsqmbHas9JqV0bO4nV7UWmouOKkq8JaoEdEaq_6ftNaw_GH8g"/>
<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwo_1BM5DSePO1vVvqpwwVTuO0jQyO8GPXS4ms2ufr-NmUJ3vN2OVmCgWLUTs1OPBLsDQ6vMfuCUXJjHVMQdK6fNcsVbvaAr-iCyU8nBQbXLgsv36T20WvkC6J1is2DLUkxnAybUVr6X6Lajmnffc8P-IaWRB3chmNuPWKwoQtKOA-EjaE_fgdJZSHY9dGK6eMJgOMD5ABCe9yW0qnv1xmBclMWV4vm9tAClIfU-ftQchRLd6VTGPaNA"/>
<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-54Iq6Edss8kDOr8A5fO94UWOCvPAPTJ2sCMXMMLaCVAKCUYEHkGzolRLnI1sRl8rZyA9bo8ruNAApN_nbnmWx7Elz7pF7c0lYygdSM8ooR_t-h3nmwualXIpcIwBPnhGqxDNVT5KawFRuuVGxFANGwMyE2o_QwwRzHn-IphjO3gBZvahss4JEywtz3fB2-wk93NQeE4N5qMoQkpoS2h4WMUtEhBs-eibxiieZIKcIuNNvJSwxP9Fag"/>
<span className="av-count">+5</span>
</div>
<span className="av-text">8 learners active</span>
</div>
</div>
<div>
<div className="comp-label">Progress</div>
<div className="progress-list">
<div className="prog-row"><div className="prog-bar"><div className="prog-fill" style={{"width": "72%", "background": "var(--golden)"}}></div></div><span className="prog-val">72%</span></div>
<div className="prog-row"><div className="prog-bar"><div className="prog-fill" style={{"width": "45%", "background": "var(--green)"}}></div></div><span className="prog-val">45%</span></div>
</div>
</div>
<div>
<div className="comp-label">Badges</div>
<div className="badges">
<span className="badge" style={{"background": "rgba(88,204,2,.15)", "color": "#7ADB2E"}}>Mastered</span>
<span className="badge" style={{"background": "rgba(28,176,246,.15)", "color": "#4DC4F8"}}>Review</span>
<span className="badge" style={{"background": "rgba(255,200,0,.15)", "color": "#FFC800"}}>Crown</span>
</div>
</div>
</div>
</section>

</main>


    </div>
  );
}
