import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DuolingoLandingFeatureFirstNarrativeV2() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="fixed top-0 left-0 right-0 h-[64px] bg-white border-b border-[rgb(229,229,229)] z-50">
<div className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="Duolingo" className="w-[140px] h-[33px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaL20lh38drA9uY21-dXUi0vJKBlfrPnTNdwlh_nsVWez6iqfFlh6UAx6s6MlUNZYOq7cNRx9wjAvau0kWdO4r2yXSvw_TGnlCvoe6lap5J09LyoICRc6H7VtWTKobh7vf4LoG2kq3URfUr5rEZhUGwe-Iku5QFuJ1LXyfSt37zqVgpw-3pTOXLOSaIX_8ktncvsL9oRKLmKdh5FaGPFiR6WtacIvjsIOiM6zSHQLAwgmTyPKDNhIboQ"/>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)]" href="#">Bahasa</a>
<a className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)]" href="#">Sekolah</a>
<a className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)]" href="#">Masuk</a>
<button className="btn btn-primary h-[38px] px-5 text-[13px]">Mulai</button>
</div>
</div>
</nav>


<header className="mt-[64px] bg-[linear-gradient(180deg,rgba(88,204,2,0.1),#fff_80%)] py-20 px-6 overflow-hidden">
<div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<h1 className="t-display mb-6">Belajar bahasa dengan cara paling seru.</h1>
<p className="t-body mb-8">Gabung dengan jutaan orang yang belajar bahasa baru setiap hari dengan Duolingo. Gratis, efektif, dan berbasis sains.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="btn btn-primary w-full sm:w-auto">Mulai Sekarang</button>
<button className="btn btn-secondary w-full sm:w-auto">Saya Sudah Punya Akun</button>
</div>
</div>
<div className="order-1 md:order-2 flex justify-center">
<div className="relative">
<div className="w-[300px] h-[300px] bg-[rgb(88,204,2)] rounded-full floating-mascot flex items-center justify-center relative shadow-[0_20px_50px_rgba(88,204,2,0.3)]">

<div className="absolute w-[180px] h-[160px] bg-white rounded-[50%_50%_45%_45%] top-[50px] shadow-inner">
<div className="absolute left-[30px] top-[40px] w-[50px] h-[50px] bg-white border-[6px] border-[rgb(88,204,2)] rounded-full flex items-center justify-center">
<div className="w-4 h-4 bg-[rgb(16,15,62)] rounded-full"></div>
</div>
<div className="absolute right-[30px] top-[40px] w-[50px] h-[50px] bg-white border-[6px] border-[rgb(88,204,2)] rounded-full flex items-center justify-center">
<div className="w-4 h-4 bg-[rgb(16,15,62)] rounded-full"></div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 top-[85px] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-[rgb(255,150,0)]"></div>
</div>
</div>

<div className="absolute -top-4 -right-4 w-12 h-12 bg-[rgb(28,176,246)] rounded-xl rotate-12 opacity-50"></div>
<div className="absolute -bottom-8 left-0 w-16 h-16 bg-[rgb(255,200,0)] rounded-full opacity-30"></div>
</div>
</div>
</div>
</header>


<section className="max-w-[1100px] mx-auto py-24 px-6">
<div className="text-center mb-16">
<span className="t-caption text-[rgb(88,204,2)] mb-4 block">Kenapa Duolingo</span>
<h2 className="t-h1">Didesain untuk hasil nyata</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="text-center">
<div className="w-20 h-20 bg-[rgba(88,204,2,0.1)] rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6">🎮</div>
<h3 className="t-h2 mb-4">Sangat Seru</h3>
<p className="text-[16px] font-medium text-[rgb(119,119,119)] leading-relaxed">Belajar tidak harus membosankan. Kami membuat pelajaran seperti game agar kamu tetap termotivasi setiap hari.</p>
</div>

<div className="text-center">
<div className="w-20 h-20 bg-[rgba(28,176,246,0.1)] rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6">🔬</div>
<h3 className="t-h2 mb-4">Berbasis Sains</h3>
<p className="text-[16px] font-medium text-[rgb(119,119,119)] leading-relaxed">Metode pengajaran kami terbukti secara ilmiah membantu ingatan jangka panjang melalui sistem repetisi berjarak.</p>
</div>

<div className="text-center">
<div className="w-20 h-20 bg-[rgba(255,150,0,0.12)] rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6">🔥</div>
<h3 className="t-h2 mb-4">Membangun Kebiasaan</h3>
<p className="text-[16px] font-medium text-[rgb(119,119,119)] leading-relaxed">Dengan sistem streak dan pengingat yang ramah, kami membantumu menjadikan belajar bahasa sebagai rutinitas harian.</p>
</div>
</div>
</section>


<section className="bg-[rgb(16,15,62)] py-24 px-6 overflow-hidden relative">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
<div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
<div>
<span className="tag tag-gold !bg-[rgb(255,200,0)] !text-[rgb(16,15,62)] mb-4">Premium</span>
<h2 className="t-display !text-white mb-6">Tingkatkan ke Super Duolingo</h2>
<p className="t-body !text-white/70 mb-8 text-[20px]">Hilangkan gangguan dan percepat kemajuanmu dengan fitur-fitur eksklusif yang dirancang untuk pelajar serius.</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-white font-bold">
<span className="text-[rgb(88,204,2)]">✓</span> Tanpa iklan yang mengganggu
          </li>
<li className="flex items-center gap-3 text-white font-bold">
<span className="text-[rgb(88,204,2)]">✓</span> Nyawa tak terbatas
          </li>
<li className="flex items-center gap-3 text-white font-bold">
<span className="text-[rgb(88,204,2)]">✓</span> Tes penguasaan materi khusus
          </li>
</ul>
<button className="btn btn-white w-full sm:w-auto">Coba Gratis 1 Minggu</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="card card-dark p-6 border-white/10">
<span className="tag tag-gold">Super</span>
<h4 className="text-white font-extrabold text-lg mb-2">Nyawa Tak Terbatas</h4>
<p className="text-white/50 text-sm">Belajar sepuasnya tanpa khawatir salah dan harus menunggu nyawa terisi kembali.</p>
</div>

<div className="card card-dark p-6 border-white/10">
<span className="tag tag-blue">Pro</span>
<h4 className="text-white font-extrabold text-lg mb-2">Latihan Kesalahan</h4>
<p className="text-white/50 text-sm">Tinjau kembali soal-soal yang sulit bagimu dengan sesi latihan yang dipersonalisasi.</p>
</div>

<div className="card card-dark p-6 border-white/10 sm:col-span-2">
<div className="flex justify-between items-start">
<div>
<span className="tag tag-gold">Eksklusif</span>
<h4 className="text-white font-extrabold text-lg mb-2">Laporan Progres Bulanan</h4>
<p className="text-white/50 text-sm">Lihat sejauh mana kamu telah berkembang dengan statistik mendalam setiap bulannya.</p>
</div>
<div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-2xl">📈</div>
</div>
</div>
</div>
</div>
</section>


<section className="max-w-[1100px] mx-auto py-24 px-6">
<div className="bg-[rgba(28,176,246,0.05)] rounded-[32px] p-12 md:p-20 text-center">
<h2 className="t-h1 mb-10">Dipercaya oleh jutaan pelajar di seluruh dunia</h2>
<div className="max-w-[700px] mx-auto">
<p className="text-[24px] font-bold text-[rgb(75,75,75)] italic mb-8 leading-relaxed">
          "Duolingo mengubah perjalanan belajar bahasa saya. Pelajaran singkatnya sangat pas untuk jadwal saya yang sibuk, dan saya benar-benar merasa ada kemajuan setiap harinya!"
        </p>
<div className="flex flex-col items-center gap-4">
<div className="avatars">
<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt13EPE8pHRv6BjqzCVlce0scOgsL_fEoAB19NFZkEuymiqjvU1AsK1CUpSxw9Upfq41gs0QA_MziNJx0Oaigtgak2Hz_tHFiqwr_PHjq7hUkxHKigGdEr37gypaQwnaj9DDvdiKbvmZ8syFMlxeCT996mZ5OW-ahgimLUe_JTEBGIUJLZiOC8OF1PuV7j66mMgfamTWsqmbHas9JqV0bO4nV7UWmouOKkq8JaoEdEaq_6ftNaw_GH8g"/>
<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwo_1BM5DSePO1vVvqpwwVTuO0jQyO8GPXS4ms2ufr-NmUJ3vN2OVmCgWLUTs1OPBLsDQ6vMfuCUXJjHVMQdK6fNcsVbvaAr-iCyU8nBQbXLgsv36T20WvkC6J1is2DLUkxnAybUVr6X6Lajmnffc8P-IaWRB3chmNuPWKwoQtKOA-EjaE_fgdJZSHY9dGK6eMJgOMD5ABCe9yW0qnv1xmBclMWV4vm9tAClIfU-ftQchRLd6VTGPaNA"/>
<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-54Iq6Edss8kDOr8A5fO94UWOCvPAPTJ2sCMXMMLaCVAKCUYEHkGzolRLnI1sRl8rZyA9bo8ruNAApN_nbnmWx7Elz7pF7c0lYygdSM8ooR_t-h3nmwualXIpcIwBPnhGqxDNVT5KawFRuuVGxFANGwMyE2o_QwwRzHn-IphjO3gBZvahss4JEywtz3fB2-wk93NQeE4N5qMoQkpoS2h4WMUtEhBs-eibxiieZIKcIuNNvJSwxP9Fag"/>
<span className="av-count">+100jt</span>
</div>
<span className="text-[14px] font-bold text-[rgb(119,119,119)] uppercase tracking-wider">Bergabunglah dengan komunitas global kami</span>
</div>
</div>
</div>
</section>


<footer className="bg-[rgb(78,198,4)] text-white py-16 px-6">
<div className="max-w-[1100px] mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div>
<h5 className="text-[13px] font-extrabold uppercase tracking-widest mb-6 text-white/60">Belajar</h5>
<ul className="space-y-3">
<li><a className="text-[14px] font-bold hover:underline" href="#">Spanyol</a></li>
<li><a className="text-[14px] font-bold hover:underline" href="#">Prancis</a></li>
<li><a className="text-[14px] font-bold hover:underline" href="#">Jepang</a></li>
<li><a className="text-[14px] font-bold hover:underline" href="#">Semua Bahasa</a></li>
</ul>
</div>
<div>
<h5 className="text-[13px] font-extrabold uppercase tracking-widest mb-6 text-white/60">Produk</h5>
<ul className="space-y-3">
<li><a className="text-[14px] font-bold hover:underline" href="#">Aplikasi Seluler</a></li>
<li><a className="text-[14px] font-bold hover:underline" href="#">Super Duolingo</a></li>
<li><a className="text-[14px] font-bold hover:underline" href="#">Sekolah</a></li>
<li><a className="text-[14px] font-bold hover:underline" href="#">Tes Bahasa Inggris</a></li>
</ul>
</div>
<div>
<h5 className="text-[13px] font-extrabold uppercase tracking-widest mb-6 text-white/60">Tentang Kami</h5>
<ul className="space-y-3">
<li><a className="text-[14px] font-bold hover:underline" href="#">Pendekatan Kami</a></li>
<li><a className="text-[14px] font-bold hover:underline" href="#">Karier</a></li>
<li><a className="text-[14px] font-bold hover:underline" href="#">Investor</a></li>
<li><a className="text-[14px] font-bold hover:underline" href="#">Pers</a></li>
</ul>
</div>
<div>
<h5 className="text-[13px] font-extrabold uppercase tracking-widest mb-6 text-white/60">Bantuan</h5>
<ul className="space-y-3">
<li><a className="text-[14px] font-bold hover:underline" href="#">Pusat Bantuan</a></li>
<li><a className="text-[14px] font-bold hover:underline" href="#">Panduan Komunitas</a></li>
<li><a className="text-[14px] font-bold hover:underline" href="#">Privasi</a></li>
<li><a className="text-[14px] font-bold hover:underline" href="#">Ketentuan</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-4">
<img alt="Duolingo" className="w-[100px] brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaL20lh38drA9uY21-dXUi0vJKBlfrPnTNdwlh_nsVWez6iqfFlh6UAx6s6MlUNZYOq7cNRx9wjAvau0kWdO4r2yXSvw_TGnlCvoe6lap5J09LyoICRc6H7VtWTKobh7vf4LoG2kq3URfUr5rEZhUGwe-Iku5QFuJ1LXyfSt37zqVgpw-3pTOXLOSaIX_8ktncvsL9oRKLmKdh5FaGPFiR6WtacIvjsIOiM6zSHQLAwgmTyPKDNhIboQ"/>
<span className="text-[12px] font-bold text-white/60">© 2026 Duolingo</span>
</div>
<div className="flex gap-6">
<a className="text-white/60 hover:text-white" href="#"><span className="sr-only">Facebook</span>FB</a>
<a className="text-white/60 hover:text-white" href="#"><span className="sr-only">Twitter</span>TW</a>
<a className="text-white/60 hover:text-white" href="#"><span className="sr-only">Instagram</span>IG</a>
</div>
</div>
</div>
</footer>


    </div>
  );
}
