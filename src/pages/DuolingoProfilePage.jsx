import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DuolingoProfilePage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="h-16 bg-white border-b border-[rgb(229,229,229)] flex items-center sticky top-0 z-50">
<div className="max-w-[920px] mx-auto w-full px-6 flex justify-between items-center">
<img alt="Duolingo" className="w-[140px] h-[33px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLUcimJWX3w3Bxk5PRqpBM0vmOzXSdQiYkyODnrzRxd9Re8Bh3OFC0jrA0HhPL7Q1mzSnTo82AZpXvOTVC3Yo8APf_RLnVpnjEwokqNxaXB-F41MqmHWCapCNDY3MdGXZp7vqq3016v4Ojn3xQbNyLryOiuJsJhmdqxCcsFIDYlnNkX_hOBx1cEqzXhtv2hx0S4PTfChx1oGGLYsXPfMBW-dIh8kx0mvj-kRTs0L6NvnYLOqPzA28iuA"/>
<div className="flex gap-1.5" data-purpose="nav-links">
<a className="text-[13px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] px-3 py-2 rounded-lg" href="#">Belajar</a>
<a className="text-[13px] font-bold uppercase tracking-wider text-[rgb(88,204,2)] bg-[rgba(88,204,2,0.08)] px-3 py-2 rounded-lg" href="#">Profil</a>
<a className="text-[13px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] px-3 py-2 rounded-lg" href="#">Lainnya</a>
</div>
</div>
</nav>


<div className="banner"></div>
<div className="max-w-[920px] mx-auto px-6">
<div className="flex flex-col md:flex-row gap-6 items-center md:items-end -mt-11 px-2" data-purpose="user-info-header">
<img alt="Profile Picture" className="pfp-custom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0H4wFMbo2OZoufdfjjxbIllGBq3SNKP-242TpF7oDvWadVf_1rTiBMT3bRDpLIpirMKifyGni0cf_Rg-VIke8y5darFYkmlYfu4xQrG5fjkFjmFTm90ot6Eron2eI8Pa3Q2WXNjoUewKHazoy14MNSyWwEk0pPU8qPh33k9BnvV5xjCpD6ZAomkgOZwQbbXHTtb3uO60Q6BZo5TnnMTogAfum694vpON0wsGF27HzA8b8tAeHxWXymg"/>
<div className="flex-1 pb-1.5 text-center md:text-left">
<h1 className="feather-font text-[26px] text-[rgb(75,75,75)] leading-tight">Dalfin Andra</h1>
<div className="text-sm font-bold text-[rgb(119,119,119)] mt-0.5">@dalfin · Bergabung Maret 2024</div>
<div className="flex flex-wrap justify-center md:justify-start gap-4.5 mt-2 text-sm font-semibold text-[rgb(119,119,119)]">
<span className="mr-4"><b className="text-[rgb(75,75,75)]">128</b> mengikuti</span>
<span className="mr-4"><b className="text-[rgb(75,75,75)]">96</b> pengikut</span>
<span>🇪🇸 Belajar Spanyol</span>
</div>
</div>
<div className="flex gap-2.5 pb-2">
<button className="btn btn-ghost">Bagikan</button>
<button className="btn btn-primary">Tambah teman</button>
</div>
</div>


<h2 className="section-title">Statistik</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">

<div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-4 flex items-center gap-3">
<span className="text-[26px] w-8 text-center">🔥</span>
<div>
<div className="text-xl font-extrabold text-[rgb(75,75,75)] leading-tight">42</div>
<div className="text-[12px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] mt-0.5">Hari streak</div>
</div>
</div>

<div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-4 flex items-center gap-3">
<span className="text-[26px] w-8 text-center">⚡</span>
<div>
<div className="text-xl font-extrabold text-[rgb(75,75,75)] leading-tight">12.480</div>
<div className="text-[12px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] mt-0.5">Total XP</div>
</div>
</div>

<div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-4 flex items-center gap-3">
<span className="text-[26px] w-8 text-center">🏆</span>
<div>
<div className="text-xl font-extrabold text-[rgb(75,75,75)] leading-tight">Emerald</div>
<div className="text-[12px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] mt-0.5">Liga saat ini</div>
</div>
</div>

<div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-4 flex items-center gap-3">
<span className="text-[26px] w-8 text-center">🥇</span>
<div>
<div className="text-xl font-extrabold text-[rgb(75,75,75)] leading-tight">7</div>
<div className="text-[12px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] mt-0.5">Finis teratas</div>
</div>
</div>
</div>


<h2 className="section-title">Pencapaian</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">

<div className="flex gap-3.5 border-2 border-[rgb(229,229,229)] rounded-2xl p-4 items-center">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[28px] shrink-0 bg-[rgba(255,150,0,0.14)]">🔥</div>
<div className="flex-1">
<div className="flex justify-between items-baseline">
<span className="text-[15px] font-extrabold text-[rgb(75,75,75)]">Bara Api</span>
<span className="text-[11px] font-extrabold uppercase text-[rgb(175,175,175)]">Lvl 4</span>
</div>
<div className="text-[12px] font-semibold text-[rgb(119,119,119)] mt-0.5 mb-2">Pertahankan streak 42 hari berturut-turut.</div>
<div className="abar"><div className="afill w-[70%] bg-[#FF9600]"></div></div>
</div>
</div>

<div className="flex gap-3.5 border-2 border-[rgb(229,229,229)] rounded-2xl p-4 items-center">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[28px] shrink-0 bg-[rgba(255,200,0,0.18)]">👑</div>
<div className="flex-1">
<div className="flex justify-between items-baseline">
<span className="text-[15px] font-extrabold text-[rgb(75,75,75)]">Sang Juara</span>
<span className="text-[11px] font-extrabold uppercase text-[rgb(175,175,175)]">Lvl 3</span>
</div>
<div className="text-[12px] font-semibold text-[rgb(119,119,119)] mt-0.5 mb-2">Selesaikan 30 pelajaran tanpa kesalahan.</div>
<div className="abar"><div className="afill w-[55%] bg-[#FFC800]"></div></div>
</div>
</div>

<div className="flex gap-3.5 border-2 border-[rgb(229,229,229)] rounded-2xl p-4 items-center">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[28px] shrink-0 bg-[rgba(88,204,2,0.14)]">📚</div>
<div className="flex-1">
<div className="flex justify-between items-baseline">
<span className="text-[15px] font-extrabold text-[rgb(75,75,75)]">Kutu Buku</span>
<span className="text-[11px] font-extrabold uppercase text-[rgb(175,175,175)]">Lvl 5</span>
</div>
<div className="text-[12px] font-semibold text-[rgb(119,119,119)] mt-0.5 mb-2">Pelajari 1.000 kata baru.</div>
<div className="abar"><div className="afill w-[88%] bg-[#58CC02]"></div></div>
</div>
</div>

<div className="flex gap-3.5 border-2 border-[rgb(229,229,229)] rounded-2xl p-4 items-center">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[28px] shrink-0 bg-[rgba(28,176,246,0.14)]">⚡</div>
<div className="flex-1">
<div className="flex justify-between items-baseline">
<span className="text-[15px] font-extrabold text-[rgb(75,75,75)]">Kilat</span>
<span className="text-[11px] font-extrabold uppercase text-[rgb(175,175,175)]">Lvl 2</span>
</div>
<div className="text-[12px] font-semibold text-[rgb(119,119,119)] mt-0.5 mb-2">Raih 500 XP dalam satu minggu.</div>
<div className="abar"><div className="afill w-[40%] bg-[#1CB0F6]"></div></div>
</div>
</div>
</div>


<h2 className="section-title">Komunitas</h2>
<div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 mt-2">

<div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-4.5">
<h3 className="text-sm font-extrabold uppercase tracking-wider text-[rgb(75,75,75)] mb-3.5">Aktivitas terkini</h3>
<div className="flex gap-3 py-2.5 border-t border-[rgb(229,229,229)] border-t-0 first:border-t-0">
<span className="w-[34px] h-[34px] rounded-lg flex items-center justify-center text-lg shrink-0 bg-[rgba(88,204,2,0.12)]">✅</span>
<div>
<div className="text-[13px] font-semibold text-[rgb(75,75,75)] leading-relaxed">Menyelesaikan <b className="font-extrabold">Unit 3 · Keluarga</b> dengan skor sempurna.</div>
<div className="text-[11px] font-bold text-[rgb(175,175,175)] mt-0.5">2 jam lalu</div>
</div>
</div>
<div className="flex gap-3 py-2.5 border-t border-[rgb(229,229,229)]">
<span className="w-[34px] h-[34px] rounded-lg flex items-center justify-center text-lg shrink-0 bg-[rgba(255,150,0,0.12)]">🔥</span>
<div>
<div className="text-[13px] font-semibold text-[rgb(75,75,75)] leading-relaxed">Mencapai <b className="font-extrabold">streak 42 hari</b>. Pertahankan!</div>
<div className="text-[11px] font-bold text-[rgb(175,175,175)] mt-0.5">Hari ini</div>
</div>
</div>
<div className="flex gap-3 py-2.5 border-t border-[rgb(229,229,229)]">
<span className="w-[34px] h-[34px] rounded-lg flex items-center justify-center text-lg shrink-0 bg-[rgba(255,200,0,0.16)]">🥇</span>
<div>
<div className="text-[13px] font-semibold text-[rgb(75,75,75)] leading-relaxed">Finis <b className="font-extrabold">peringkat 1</b> di Liga Emerald minggu lalu.</div>
<div className="text-[11px] font-bold text-[rgb(175,175,175)] mt-0.5">3 hari lalu</div>
</div>
</div>
<div className="flex gap-3 py-2.5 border-t border-[rgb(229,229,229)]">
<span className="w-[34px] h-[34px] rounded-lg flex items-center justify-center text-lg shrink-0 bg-[rgba(28,176,246,0.12)]">🤝</span>
<div>
<div className="text-[13px] font-semibold text-[rgb(75,75,75)] leading-relaxed">Berteman dengan <b className="font-extrabold">Maya</b> dan <b className="font-extrabold">Daniel</b>.</div>
<div className="text-[11px] font-bold text-[rgb(175,175,175)] mt-0.5">5 hari lalu</div>
</div>
</div>
</div>

<div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-4.5">
<h3 className="flex justify-between text-sm font-extrabold uppercase tracking-wider text-[rgb(75,75,75)] mb-3.5">
          Teman <a className="text-[12px] normal-case text-[rgb(28,176,246)]" href="#">Lihat semua</a>
</h3>
<div className="flex items-center gap-3 py-2 border-t border-[rgb(229,229,229)] first:border-t-0">
<img alt="Maya" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTCaby_-01PGRnJ971FXv5mP6sin7KB_eYQQSapiVC-RMHD-BJJ-yZ_gb01kwGUIADXAMvxBXlmTtl7OO4hViy1X0AaYw19gyJM-nOOPcD-Lg8behes6CKPkLF-aT7Ie0EwEyNVhH9fiBGOLaIbhef0bz7k2T9ZdGIAXq5n2Vl3PFBXQqxGgt7vT1Nk97e_ZFmdp9UrYsERAMNqlY85F4BSyFHqRWLLW9qNqyZTqTmWBASB5B11QwxWA"/>
<span className="flex-1 text-sm font-bold text-[rgb(75,75,75)]">Maya</span>
<span className="text-[12px] font-bold text-[rgb(255,150,0)]">⚡ 9.820</span>
</div>
<div className="flex items-center gap-3 py-2 border-t border-[rgb(229,229,229)]">
<img alt="Daniel" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNYgtHJmtg3AFy97GO2iKVL_rE_CcDw1XxD38gw0xoz2wNY3vohZsyHAYV-dYL8au-iPNdZoJxJMzQvZinDZC8bLij58MhMdBWxZ6aDbBm9IktWzVoqc3p-tqRRHd0mHgpiSGul25Cq9ICwvYvedSmkIYVyCrNeD3cuMrwMFdQ_hWBamH_EO_vKG3uqNM4rxpxvTBV86d1JPAbfRegZDhMbFUpWxRW9vYCHOxXg--2wGO_v-p5DNB1pw"/>
<span className="flex-1 text-sm font-bold text-[rgb(75,75,75)]">Daniel</span>
<span className="text-[12px] font-bold text-[rgb(255,150,0)]">⚡ 7.410</span>
</div>
<div className="flex items-center gap-3 py-2 border-t border-[rgb(229,229,229)]">
<img alt="Rara" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4c-O4UmCK9PtBpVMpi00MgyOKnlTxFuAbeZz_oPkiUi5aBx_eVRLQulFSATC4v0aCsRVHPq7NhOaDualuz_VK3sTF-ARdNmK43T1di7MtqEVmTIUuPb8wHnDc-F2yhsyl-dITDTvLhEQzCNdtP_69U0HGh7fQ4d-VELDEBMQkVcx7m2JfK19awETmLjm0qlqcJsG-lhlF4RxYVr5JphDb3zI0uz6iST9VqBNVPZV84OSLwWTxj2BxMw"/>
<span className="flex-1 text-sm font-bold text-[rgb(75,75,75)]">Rara</span>
<span className="text-[12px] font-bold text-[rgb(255,150,0)]">⚡ 6.090</span>
</div>
<div className="flex items-center gap-3 py-2 border-t border-[rgb(229,229,229)]">
<img alt="Bima" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACIrEvvP_P1H5wIvxAUxn4y6ZO4HB5LwFqzGuQIsrlc1nVrkU5-WyufYIQwGS-5twTCVh0mZQ4OqXAlZz_Sbzlfj7JL5OI82d3R2-6XZLh7snb0Ot_Ab43H3WwIISPKoKfFmCNgSQHrtIwKT3icd6yOSE8-iEmaNaInmFJbs5h7-98XVn1263jv0TMyOSuWEP-XvBSpu4M9I8Ee9eUVMaHaUOu7QPB-_UOIo8BpkuTx6BOvxRLultaQg"/>
<span className="flex-1 text-sm font-bold text-[rgb(75,75,75)]">Bima</span>
<span className="text-[12px] font-bold text-[rgb(255,150,0)]">⚡ 4.530</span>
</div>
</div>
</div>

</div>

<div className="h-14"></div>

    </div>
  );
}
