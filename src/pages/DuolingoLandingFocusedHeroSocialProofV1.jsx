import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DuolingoLandingFocusedHeroSocialProofV1() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="fixed top-0 left-0 right-0 h-[64px] bg-white border-b border-[rgb(229,229,229)] z-50">
<div className="max-w-[1100px] mx-auto h-full px-6 flex items-center justify-between">
<img alt="Duolingo logo" className="w-[140px] h-[33px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaL20lh38drA9uY21-dXUi0vJKBlfrPnTNdwlh_nsVWez6iqfFlh6UAx6s6MlUNZYOq7cNRx9wjAvau0kWdO4r2yXSvw_TGnlCvoe6lap5J09LyoICRc6H7VtWTKobh7vf4LoG2kq3URfUr5rEZhUGwe-Iku5QFuJ1LXyfSt37zqVgpw-3pTOXLOSaIX_8ktncvsL9oRKLmKdh5FaGPFiR6WtacIvjsIOiM6zSHQLAwgmTyPKDNhIboQ"/>
<div className="flex items-center gap-[18px]">
<a className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)] hidden md:block" href="#">Situs untuk sekolah</a>
<a className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)]" href="#">Masuk</a>
</div>
</div>
</nav>


<header className="mt-[64px] bg-[linear-gradient(180deg,rgba(88,204,2,0.1),#fff_80%)] py-[60px] md:py-[100px] px-6">
<div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 text-center md:text-left">
<h1 className="font-feather text-[36px] md:text-[52px] text-[rgb(75,75,75)] leading-[1.1] mb-6">
          Cara <span className="text-[rgb(88,204,2)]">gratis, seru, dan efektif</span> untuk belajar bahasa!
        </h1>
<p className="text-[18px] font-medium text-[rgb(119,119,119)] mb-8 leading-[1.5] max-w-[500px] mx-auto md:mx-0">
          Belajar lewat pelajaran singkat yang terasa seperti main game. Terbukti membuat kebiasaan belajar yang bertahan lama.
        </p>
<div className="flex flex-col gap-4 max-w-[320px] mx-auto md:mx-0">
<button className="btn btn-primary">Mulai sekarang</button>
<button className="btn btn-secondary">Saya sudah punya akun</button>
</div>
</div>
<div className="flex items-center justify-center order-1 md:order-2">
<div className="owl-container">
<div className="owl">
<span className="eye l"></span><span className="eye r"></span><span className="beak"></span>
</div>
</div>
</div>
</div>
</header>


<div className="border-y border-[rgb(229,229,229)] py-6 px-6 bg-white overflow-hidden">
<div className="max-w-[1000px] mx-auto flex items-center gap-4 overflow-x-auto no-scrollbar justify-center">
<span className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-[rgb(175,175,175)] mr-2 whitespace-nowrap">Pilih bahasa:</span>
<div className="pill">
<img className="w-[24px] h-[18px] object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzYzx43JAUhRrKJAU4LCejjm2a-DXINw9LvJWow_wt7_Vw97nZ7Xok3VzF9AWzTmE8KCvKZQtafroBsxY4IVyUauzMipHMFnYpvtI228l2DwJNm_GrTz2DW828jCpUDm2jBs1E35crG0X5lsqscTcFOnr95rPcWtXZDV-vXDZlrEGg9mwyKymogY7gEIGuME2nsexbJXy_qvJGjtNKVmbulyZoEsG_iPB6vX7hEo8J4XBiD1Fv1QCk9A"/>
        Spanyol
      </div>
<div className="pill">
<img className="w-[24px] h-[18px] object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3ktH_aOEauLiqJjwzZjyeWmspyGQLmy4Up6pIG9Q7nAI6jUYrz6RBqo_uXdPpCr8MiZzjdkRxnUgu-Exh-0cVt_i_DHntrPfRD_1mkPY5BelSJ1occJQXV2qw75hZT9L5yhQ3E81J4r2SqoNl_0_1aZmAqsQdr0iP3P_9JhuHlU-UkGg2FnXRjfuu17OnZvFVvoBLX7taRZhq284CK5QqPnLE4mbrMPKrO-kXV7lVdV7ssN3tE60_HA"/>
        Prancis
      </div>
<div className="pill">
<img className="w-[24px] h-[18px] object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA0o6irV_eWeaWj-qiTMqNA9MfNivclHwR-noFJmio02b1sPJGaIAtb0w-0iEFsyTJb-1mdTrBZZZGPWpXN5lfHvyXRRFmFia8RWHfXr2hj-KtWq1ad3JSw00VOutfsSTAK_bBGJsLl4IpQzpAhnmM0UoS6ucPlCDcjMLxqY2xhWial9eDUcDNHZXu2o9MNu02Od-Aje0WEvtQlunTGZZQhk8WOIlaBzcq-vb0cB1uay1c2LLx2-_gJg"/>
        Jerman
      </div>
<div className="pill">
<img className="w-[24px] h-[18px] object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBucSuZu_GjzP55FInnUNfdHJGVWQDBjtJEmsHG9wcTmoqcPk_L7fPo0sGZqQVQodLvA7kWmUxFxbg9FWr3aKwyhEacBLKuAxbxFYK7yX_jjMw3xfC2IXhZekH24XA0lxQ7uHOmSJ9d2ZLWtrXFMxSHX1NKHYqiF4LtIWxhjkgJFPqq4VnqziceXa0kEbIF8SajsaXeyTccVMAvsP1BTlBgGdhTrrFsXvtpB6O6INv3mKCAdrvOtkZqMQ"/>
        Jepang
      </div>
</div>
</div>


<section className="max-w-[1000px] mx-auto py-[80px] px-6">
<div className="text-center mb-12">
<span className="text-[12px] font-extrabold uppercase tracking-[2px] text-[rgb(88,204,2)] block mb-2">Kenapa Duolingo</span>
<h2 className="font-feather text-[32px] md:text-[40px] text-[rgb(75,75,75)]">Dirancang biar kamu nagih belajar</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="text-center group">
<div className="w-[100px] h-[100px] bg-[rgba(88,204,2,0.1)] rounded-[24px] flex items-center justify-center mx-auto mb-6 text-[44px]">🎮</div>
<h3 className="text-[19px] font-extrabold text-[rgb(75,75,75)] mb-3">Seru dan bebas biaya</h3>
<p className="text-[15px] font-medium text-[rgb(119,119,119)] leading-[1.6]">Belajar terasa seperti main game. Raih poin, buka level baru, dan kuasai keterampilan praktis.</p>
</div>
<div className="text-center group">
<div className="w-[100px] h-[100px] bg-[rgba(28,176,246,0.1)] rounded-[24px] flex items-center justify-center mx-auto mb-6 text-[44px]">🔬</div>
<h3 className="text-[19px] font-extrabold text-[rgb(75,75,75)] mb-3">Didukung sains</h3>
<p className="text-[15px] font-medium text-[rgb(119,119,119)] leading-[1.6]">Metode kami memadukan riset bahasa dan data dari jutaan pelajar untuk materi yang efektif.</p>
</div>
<div className="text-center group">
<div className="w-[100px] h-[100px] bg-[rgba(255,150,0,0.12)] rounded-[24px] flex items-center justify-center mx-auto mb-6 text-[44px]">🔥</div>
<h3 className="text-[19px] font-extrabold text-[rgb(75,75,75)] mb-3">Bangun kebiasaan</h3>
<p className="text-[15px] font-medium text-[rgb(119,119,119)] leading-[1.6]">Sistem streak dan tantangan menarik menjaga semangatmu agar belajar jadi rutinitas harian.</p>
</div>
</div>
</section>


<section className="bg-[rgb(16,15,62)] py-[64px] px-6">
<div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div>
<div className="font-feather text-[48px] text-[rgb(255,200,0)] leading-none">100Jt+</div>
<div className="text-[12px] font-extrabold uppercase tracking-[1.5px] text-[rgba(255,255,255,0.4)] mt-3">Pelajar aktif</div>
</div>
<div>
<div className="font-feather text-[48px] text-[rgb(255,200,0)] leading-none">40+</div>
<div className="text-[12px] font-extrabold uppercase tracking-[1.5px] text-[rgba(255,255,255,0.4)] mt-3">Bahasa tersedia</div>
</div>
<div>
<div className="font-feather text-[48px] text-[rgb(255,200,0)] leading-none">5 mnt</div>
<div className="text-[12px] font-extrabold uppercase tracking-[1.5px] text-[rgba(255,255,255,0.4)] mt-3">Per pelajaran</div>
</div>
</div>
</section>


<section className="max-w-[1000px] mx-auto py-[80px] px-6">
<div className="text-center mb-12">
<span className="text-[12px] font-extrabold uppercase tracking-[2px] text-[rgb(88,204,2)] block mb-2">Mulai hari ini</span>
<h2 className="font-feather text-[32px] text-[rgb(75,75,75)]">Kursus populer minggu ini</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="card">
<img alt="Spanish" className="h-[140px] w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaNWoN7UbMH5vMWfrRJyh_fAWPLmGubJRhslUkKVgPIEHk3N4CQXTa_oKG6GpxaDYYz0rd5PnmqqS-s_hOp6gfGoGSZvo9-Q0tH-Hylmz1L27oqkkDQD-IA158PJ1SUmuZDpJ2IOwXdo2j88t6lXjZcCIQ1-v-aMmulxBEOJ9mXkV5YfvUc6q69fbPQFLISADFVZMxXQLeb9Hfieu09HVqJoZut3Dv9phjQQFd7bfUwi64Rc1Zk5CGZA"/>
<div className="p-4">
<span className="tag tag-green">Baru</span>
<h4 className="text-[17px] font-extrabold text-[rgb(75,75,75)] mb-2">Spanyol untuk Pemula</h4>
<p className="text-[13px] text-[rgb(119,119,119)] leading-[1.5]">Awali perjalananmu dengan pelajaran interaktif yang membangun kelancaran.</p>
</div>
<div className="flex justify-between items-center p-4 border-t border-[rgb(229,229,229)]">
<span className="text-[12px] font-bold uppercase text-[rgb(175,175,175)]">12 Unit</span>
<span className="text-[12px] font-extrabold uppercase text-[rgb(28,176,246)] cursor-pointer hover:opacity-70">Mulai</span>
</div>
</div>

<div className="card">
<img alt="French" className="h-[140px] w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH_Lzps6ZgIE6GsXwmHRXCTG5wDle_Qbz-exulamToZSPbyWoHGbRwuynYL9F6NkzTU1oWDv021v__xBFPmZFdz0O2ze9g7W9d5uoEoXvsR0nLZvLmZFHzpWXchhH6agCfze3xSCtisgqAyc4mBiUoIP3wyw0l9Q_VHtvh1eUSMPxAkE1hskWuB-NU0xTWm9OW4fXg3c4sK2E6RfFVjBsFA-x9AcXDoajVbCjue-3u0E3fhmySmA9C4Q"/>
<div className="p-4">
<span className="tag tag-blue">Populer</span>
<h4 className="text-[17px] font-extrabold text-[rgb(75,75,75)] mb-2">Percakapan Prancis</h4>
<p className="text-[13px] text-[rgb(119,119,119)] leading-[1.5]">Latih dialog sehari-hari dan perbaiki pelafalan bersama penutur asli.</p>
</div>
<div className="flex justify-between items-center p-4 border-t border-[rgb(229,229,229)]">
<span className="text-[12px] font-bold uppercase text-[rgb(175,175,175)]">8 Unit</span>
<span className="text-[12px] font-extrabold uppercase text-[rgb(28,176,246)] cursor-pointer hover:opacity-70">Lanjut</span>
</div>
</div>

<div className="card">
<div className="h-[140px] w-full bg-gradient-to-br from-[#E1AD01] to-[#FFC800]"></div>
<div className="p-4">
<span className="tag tag-orange">Trending</span>
<h4 className="text-[17px] font-extrabold text-[rgb(75,75,75)] mb-2">Jepang Dasar</h4>
<p className="text-[13px] text-[rgb(119,119,119)] leading-[1.5]">Kenali Hiragana dan frasa harian lewat pelajaran singkat yang menyenangkan.</p>
</div>
<div className="flex justify-between items-center p-4 border-t border-[rgb(229,229,229)]">
<span className="text-[12px] font-bold uppercase text-[rgb(175,175,175)]">15 Unit</span>
<span className="text-[12px] font-extrabold uppercase text-[rgb(28,176,246)] cursor-pointer hover:opacity-70">Mulai</span>
</div>
</div>
</div>
</section>


<section className="max-w-[1000px] mx-auto pb-[80px] px-6">
<div className="bg-[rgba(88,204,2,0.08)] rounded-[24px] py-16 px-8 text-center border-2 border-[rgba(88,204,2,0.1)]">
<h2 className="font-feather text-[32px] text-[rgb(75,75,75)] mb-4">Siap belajar bahasa baru?</h2>
<p className="text-[17px] font-medium text-[rgb(119,119,119)] mb-8 max-w-[580px] mx-auto">Gabung dengan jutaan pelajar dan capai targetmu—lima menit sehari sudah cukup untuk memulai perubahan.</p>
<button className="btn btn-primary px-10">Mulai gratis</button>
</div>
</section>


<footer className="bg-[var(--footer-green)] text-white py-16 px-6">
<div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
<div>
<h5 className="text-[13px] font-extrabold uppercase tracking-[1px] mb-6">Belajar</h5>
<ul className="space-y-3">
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Bahasa Spanyol</a></li>
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Bahasa Prancis</a></li>
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Bahasa Jepang</a></li>
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Semua kursus</a></li>
</ul>
</div>
<div>
<h5 className="text-[13px] font-extrabold uppercase tracking-[1px] mb-6">Produk</h5>
<ul className="space-y-3">
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Aplikasi seluler</a></li>
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Super Duolingo</a></li>
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Duolingo untuk Sekolah</a></li>
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Tes Bahasa Inggris</a></li>
</ul>
</div>
<div>
<h5 className="text-[13px] font-extrabold uppercase tracking-[1px] mb-6">Tentang</h5>
<ul className="space-y-3">
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Pendekatan</a></li>
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Karier</a></li>
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Investor</a></li>
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Pers</a></li>
</ul>
</div>
<div>
<h5 className="text-[13px] font-extrabold uppercase tracking-[1px] mb-6">Bantuan</h5>
<ul className="space-y-3">
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Pusat bantuan</a></li>
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Privasi</a></li>
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Ketentuan</a></li>
<li><a className="text-[14px] font-semibold text-[rgba(255,255,255,0.85)] hover:text-white hover:underline" href="#">Hubungi kami</a></li>
</ul>
</div>
</div>
<div className="max-w-[1000px] mx-auto mt-12 pt-8 border-t border-[rgba(255,255,255,0.2)] text-[13px] font-semibold text-[rgba(255,255,255,0.7)] text-center md:text-left">
      © 2026 Duolingo — Style guide demo. Semua aset hanya untuk peragaan desain.
    </div>
</footer>


    </div>
  );
}
