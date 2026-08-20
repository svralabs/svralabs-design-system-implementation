import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DuolingoLandingPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="fixed top-0 left-0 right-0 h-[64px] bg-white border-b border-[rgb(229,229,229)] z-50">
<div className="max-w-[1100px] mx-auto h-full px-6 flex items-center justify-between">
<img alt="Duolingo logo" className="w-[140px] h-[33px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvG78PeAXkRWat7usOlzKnVSGBQ9vXNhjxtq8CmCV2F8VShEmZ1ESAPW8pxzyb1DO3lZUJNwnp2pi3-zW5fEqHcGMit1YhRRLdDfq8Ny-wX07RQbw-mntB34YgB0p8atzyDS5QfatF8GSLfVByHx7hlACGTqBhEPB4jO6hahEgMkosMzj62pmD6NM5Tji0JL4FdWlUFC-V1NGEGoR3LIt2GUX6nG0qC-g4_F-YpKYNIMqOksKW-7_OLA"/>
<div className="flex items-center gap-[18px]">
<a className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)]" href="#">Situs untuk sekolah</a>
<a className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)]" href="#">Masuk</a>
</div>
</div>
</nav>


<header className="mt-[64px] bg-[linear-gradient(180deg,rgba(88,204,2,0.1),#fff_80%)] py-[72px] px-6">
<div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="hero-text order-2 md:order-1 text-center md:text-left">
<h1 className="text-[30px] md:text-[38px] text-[rgb(75,75,75)] leading-[1.15]">Cara <span className="text-[rgb(88,204,2)]">gratis, seru, dan efektif</span> untuk belajar bahasa!</h1>
<p className="text-[18px] font-medium text-[rgb(119,119,119)] my-[18px] md:my-[28px] leading-[1.5]">Belajar lewat pelajaran singkat yang terasa seperti main game. Terbukti membuat kebiasaan belajar yang bertahan lama.</p>
<div className="flex flex-col gap-[14px] max-w-[320px] mx-auto md:mx-0">
<button className="btn btn-primary">Mulai sekarang</button>
<button className="btn btn-secondary">Saya sudah punya akun</button>
</div>
</div>
<div className="flex items-center justify-center order-1 md:order-2">
<div className="owl">
<span className="eye l"></span><span className="eye r"></span><span className="beak"></span>
</div>
</div>
</div>
</header>


<div className="border-y-2 border-[rgb(229,229,229)] py-[18px] px-6 bg-white">
<div className="max-w-[1000px] mx-auto flex items-center gap-6 overflow-x-auto no-scrollbar">
<span className="text-[12px] font-extrabold uppercase tracking-[1px] text-[rgb(175,175,175)] whitespace-nowrap">Pilih bahasa</span>
<a className="lang-pill inline-flex items-center gap-2 text-[14px] font-bold text-[rgb(75,75,75)] whitespace-nowrap cursor-pointer py-[6px] px-1">
<img className="w-[28px] h-[21px] object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOuSwa8pSGdS9pwZqaF_vcCEY80r_4PERcc2QN2ZD6uScMIzSJOnRCQAvWx9lhz1YHfwlxmfOGp61V4iNkj0U66mkU0LQcn7jKhm5RHWhYKyCliI6YeE3B-oJ7_gFtf22TJrK_msENfDZGCRoI_5zzqqO4-ClPBf5tiXYEMgcfNZGONN4oDdcH3GIdSrzDNuPtnK0qAaSkPo0-7TVI-XY1NubbUw1mhPvG9xbp2p9vFiR_HVl0GxXQ3g"/>Spanyol
      </a>
<a className="lang-pill inline-flex items-center gap-2 text-[14px] font-bold text-[rgb(75,75,75)] whitespace-nowrap cursor-pointer py-[6px] px-1">
<img className="w-[28px] h-[21px] object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeyStPD9_3q9hz5TQCixfzodz8NufVhlHB5_gz0eOnlu4-IDQxuZ_91-yRiyFFyZQAw8GyZa6p2V4JVh4kXDxefJnzNrraUJ1k5aI4JssYLi5BHfFqDoMcPb51t2lPy0HhZ_RXdDzxL0tebeFmjEpYRpXF0Oo97dn_klOjIfvCvtRIHNuTP9y0QpVMgJhiQ2o0qoRNZ1MgMUs7-QKRw8gWgwSyzSmagagEjagealjtD-GH3PUkXNBIrQ"/>Prancis
      </a>
<a className="lang-pill inline-flex items-center gap-2 text-[14px] font-bold text-[rgb(75,75,75)] whitespace-nowrap cursor-pointer py-[6px] px-1">
<img className="w-[28px] h-[21px] object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ8G_8DJQjkmIiaPYSDD6CMi-k76lNdfjNThcPon5DHJZpHgwjuliihcEeuQnpk7mJgQK1hfKHtH9U5B27z6jrVK2hPSvgZu7sJsD8nvTUdZi8U2w34vpH7UOkZIvd4lCOqq4zGkGiQNxeJbkYWFX3BAgRFfiBZwgocTf3gOuQXwjrEyc_-tBvKAd_EP0JmvWcIByvu0S-gI76DM1w_BymDEKKsZFB0VAMjltUAxwCJfcqapr4CkZ5wQ"/>Jerman
      </a>
<a className="lang-pill inline-flex items-center gap-2 text-[14px] font-bold text-[rgb(75,75,75)] whitespace-nowrap cursor-pointer py-[6px] px-1">
<img className="w-[28px] h-[21px] object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQfgShxrWEPRYn4sFSTTHVEvKfpbmKzyaNxwnSIsbpDhBQaKAP7juk11v9Fnaf1E4inooQzFIHrZDIPP64FFZ8CdPKFFSwFJPCcqFNr9tvpuP0nl_oATFsyOhUqDSjUuz4znkx_RIBGFAI7vm8ith_EcWxQ5Bd1xWROPfG-5Cx-_wRp7KM9nzV0BmNsvFGmiYC9QB4wvSYvLReNqW9s3GO9xAsvDzWrtduYDXrx7OAH8ccv_CWEsTgAQ"/>Jepang
      </a>
</div>
</div>


<section className="max-w-[1000px] mx-auto py-[72px] px-6">
<div className="text-[12px] font-extrabold uppercase tracking-[2px] text-[rgb(88,204,2)] text-center mb-[10px]">Kenapa Duolingo</div>
<h2 className="sec-title text-[32px] text-[rgb(75,75,75)] text-center mb-[48px]">Dirancang biar kamu nagih belajar</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="text-center p-3">
<div className="w-[88px] h-[88px] mx-auto mb-[18px] rounded-[24px] flex items-center justify-center text-[42px]" style={{"background": "rgba(88,204,2,.1)"}}>🎮</div>
<h3 className="text-[19px] font-extrabold text-[rgb(75,75,75)] mb-[10px]">Seru dan bebas biaya</h3>
<p className="text-[15px] font-medium text-[rgb(119,119,119)] leading-[1.55]">Belajar terasa seperti main game. Raih poin, buka level baru, dan kuasai keterampilan praktis tanpa bayar sepeser pun.</p>
</div>

<div className="text-center p-3">
<div className="w-[88px] h-[88px] mx-auto mb-[18px] rounded-[24px] flex items-center justify-center text-[42px]" style={{"background": "rgba(28,176,246,.1)"}}>🔬</div>
<h3 className="text-[19px] font-extrabold text-[rgb(75,75,75)] mb-[10px]">Didukung sains</h3>
<p className="text-[15px] font-medium text-[rgb(119,119,119)] leading-[1.55]">Metode kami memadukan riset bahasa dan data dari jutaan pelajar untuk membuat materi yang benar-benar melekat.</p>
</div>

<div className="text-center p-3">
<div className="w-[88px] h-[88px] mx-auto mb-[18px] rounded-[24px] flex items-center justify-center text-[42px]" style={{"background": "rgba(255,150,0,.12)"}}>🔥</div>
<h3 className="text-[19px] font-extrabold text-[rgb(75,75,75)] mb-[10px]">Bangun kebiasaan</h3>
<p className="text-[15px] font-medium text-[rgb(119,119,119)] leading-[1.55]">Pengingat ramah, tantangan menarik, dan sistem streak menjaga semangatmu agar belajar jadi rutinitas harian.</p>
</div>
</div>
</section>


<section className="bg-[rgb(16,15,62)] py-[56px] px-6">
<div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
<div className="stat">
<div className="num text-[44px] text-[rgb(255,200,0)] leading-none">100Jt+</div>
<div className="cap text-[14px] font-bold uppercase tracking-[1px] text-[rgba(255,255,255,0.5)] mt-2">Pelajar aktif</div>
</div>
<div className="stat">
<div className="num text-[44px] text-[rgb(255,200,0)] leading-none">40+</div>
<div className="cap text-[14px] font-bold uppercase tracking-[1px] text-[rgba(255,255,255,0.5)] mt-2">Bahasa tersedia</div>
</div>
<div className="stat">
<div className="num text-[44px] text-[rgb(255,200,0)] leading-none">5 mnt</div>
<div className="cap text-[14px] font-bold uppercase tracking-[1px] text-[rgba(255,255,255,0.5)] mt-2">Per pelajaran</div>
</div>
</div>
</section>


<section className="max-w-[1000px] mx-auto py-[72px] px-6">
<div className="text-[12px] font-extrabold uppercase tracking-[2px] text-[rgb(88,204,2)] text-center mb-[10px]">Mulai hari ini</div>
<h2 className="sec-title text-[32px] text-[rgb(75,75,75)] text-center mb-[48px]">Kursus populer minggu ini</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="course border-2 border-[rgb(229,229,229)] rounded-[16px] overflow-hidden bg-white">
<img className="h-[140px] w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPVQtVK9CbzrVN-xstQ8pjCYS82o9pwi08KQfU0NAgxmHMVYhInRCJ2zMKcEdUqp09HWgyj7CeVJGlZYFIfIxQQSC2iX6ptXbM87zqdphLlgr3w4k40Zo1dV3opOJsGqbRuqFoiKST4xfesisc1SO-SavcojJjyK_GQ0kIINZFS1-KIz3q3A9fAHsVtbjs15g754mrz9KuYutyo8ci_dMArYXCFzn8TR3TYYqMK8HencJF2uQOoPwu-g"/>
<div className="p-4">
<span className="tag tag-green inline-block text-[11px] font-extrabold uppercase rounded-[6px] px-2 py-[3px] mb-[10px]">Baru</span>
<h4 className="text-[17px] font-extrabold text-[rgb(75,75,75)] mb-[6px]">Spanyol untuk Pemula</h4>
<p className="text-[13px] text-[rgb(119,119,119)] leading-[1.5]">Awali perjalananmu dengan pelajaran interaktif yang membangun kelancaran sejak hari pertama.</p>
</div>
<div className="flex justify-between items-center p-4 border-t border-[rgb(229,229,229)]">
<span className="text-[12px] font-bold uppercase text-[rgb(175,175,175)]">12 Unit</span>
<span className="text-[12px] font-extrabold uppercase text-[rgb(28,176,246)]">Mulai</span>
</div>
</div>

<div className="course border-2 border-[rgb(229,229,229)] rounded-[16px] overflow-hidden bg-white">
<img className="h-[140px] w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiww-jnEpbvwjMigsBBh5cxi-Rup9XR2wV18TXcfxnMEGErOQrcjcXE62QoDsdqSxdBDsDorfonB1pYToM19UUVv3a1BKhq4EEaX8lUewacRNknmeTkJmQTGHAXPkyV9W-r_A1Yqs3SoUIZpjQdmGh6jj8NJZuN0QJnyKh_PFLWNGWAHARUPNuMnseZH2NxrpN5XyHzdsfZWSmuGJQ2BesxfWClT4EVSl5ApSWBfK503Z2CBmBsAl1ng"/>
<div className="p-4">
<span className="tag tag-blue inline-block text-[11px] font-extrabold uppercase rounded-[6px] px-2 py-[3px] mb-[10px]">Populer</span>
<h4 className="text-[17px] font-extrabold text-[rgb(75,75,75)] mb-[6px]">Percakapan Prancis</h4>
<p className="text-[13px] text-[rgb(119,119,119)] leading-[1.5]">Latih dialog sehari-hari dan perbaiki pelafalan bersama penutur asli.</p>
</div>
<div className="flex justify-between items-center p-4 border-t border-[rgb(229,229,229)]">
<span className="text-[12px] font-bold uppercase text-[rgb(175,175,175)]">8 Unit</span>
<span className="text-[12px] font-extrabold uppercase text-[rgb(28,176,246)]">Lanjut</span>
</div>
</div>

<div className="course border-2 border-[rgb(229,229,229)] rounded-[16px] overflow-hidden bg-white">
<img className="h-[140px] w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwnd8nt_B-ApQUqvJhFc5diAv-EwGhuKtR6BrtC000ImNkoXnEAo1KqnVpeiEcgy34odSDZ9_hOI07OH_x0eQCO1vPJkG0Tekzo5_bjnCwIhR_EvaieT56yWh4-5UykDTwtDnmx0mM2AEgFKhZv5bPp3gUSYKuyLMQ1XUxaegYTrXFZYSbaaaYPXSKwnrcpODKnTLoA8UhHHsf1VflobFa_fjIZEXN_xn2EAwr4KZrdt4j_4spCLI5XA"/>
<div className="p-4">
<span className="tag tag-orange inline-block text-[11px] font-extrabold uppercase rounded-[6px] px-2 py-[3px] mb-[10px]">Trending</span>
<h4 className="text-[17px] font-extrabold text-[rgb(75,75,75)] mb-[6px]">Jepang Dasar</h4>
<p className="text-[13px] text-[rgb(119,119,119)] leading-[1.5]">Kenali Hiragana dan frasa harian lewat pelajaran singkat yang menyenangkan.</p>
</div>
<div className="flex justify-between items-center p-4 border-t border-[rgb(229,229,229)]">
<span className="text-[12px] font-bold uppercase text-[rgb(175,175,175)]">15 Unit</span>
<span className="text-[12px] font-extrabold uppercase text-[rgb(28,176,246)]">Mulai</span>
</div>
</div>
</div>
</section>


<section className="max-w-[1000px] mx-auto mb-[72px]">
<div className="bg-[rgba(88,204,2,0.08)] text-center py-[64px] px-6 mx-6 rounded-[24px]">
<h2 className="text-[30px] text-[rgb(75,75,75)] mb-3">Siap belajar bahasa baru?</h2>
<p className="text-[16px] font-medium text-[rgb(119,119,119)] mb-6">Gabung dengan jutaan pelajar dan capai targetmu—lima menit sehari sudah cukup.</p>
<button className="btn btn-primary">Mulai gratis</button>
</div>
</section>


<footer className="bg-[#4EC604] text-white py-12 px-6">
<div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="foot-col">
<h5 className="text-[13px] font-extrabold uppercase tracking-[1px] mb-4">Belajar</h5>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Bahasa Spanyol</a>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Bahasa Prancis</a>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Bahasa Jepang</a>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Semua kursus</a>
</div>
<div className="foot-col">
<h5 className="text-[13px] font-extrabold uppercase tracking-[1px] mb-4">Produk</h5>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Aplikasi seluler</a>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Super Duolingo</a>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Duolingo untuk Sekolah</a>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Tes Bahasa Inggris</a>
</div>
<div className="foot-col">
<h5 className="text-[13px] font-extrabold uppercase tracking-[1px] mb-4">Tentang</h5>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Pendekatan</a>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Karier</a>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Investor</a>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Pers</a>
</div>
<div className="foot-col">
<h5 className="text-[13px] font-extrabold uppercase tracking-[1px] mb-4">Bantuan</h5>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Pusat bantuan</a>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Privasi</a>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Ketentuan</a>
<a className="block text-[14px] font-semibold text-[rgba(255,255,255,0.85)] mb-[10px] hover:text-white hover:underline" href="#">Hubungi kami</a>
</div>
</div>
<div className="max-w-[1000px] mx-auto mt-8 pt-5 border-t border-[rgba(255,255,255,0.2)] text-[13px] font-semibold text-[rgba(255,255,255,0.8)]">
      © 2026 Duolingo — Style guide demo. Semua aset hanya untuk peragaan desain.
    </div>
</footer>


    </div>
  );
}
