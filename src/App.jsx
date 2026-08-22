import React from 'react'

const TEAM_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDZy9F_9PoGwVmPWdAEF5rMQoDhkOKqqdyglFWRllpiTNnSHITr9GAh8DvwUpo90ZEURFn7GoL-X3WrakZr5eS1SHoqqlcL6wqHDX4OFu86ADL76FCbpiNee-Ve4OXSAUvu6qheHncw3B7HPPSOQCElylntnYY-Muuf8BFaHXhYPPxCfCl3xTlhfGovd9yanIGq6KgCUjNvX5PHNnKs6aFUgEWzBszSa1jOKDqCpJy_wbvRytnpbiX5uMY4D-3pUyh3Nrn3x4UjEdI'

const STEPS = [
  {
    n: 1, active: true, title: 'Lengkapi Profil',
    desc: 'Tambahkan foto dan informasi dasar untuk membantu kami mengenal Anda lebih baik.',
    btn: 'Mulai',
  },
  {
    n: 2, active: false, title: 'Verifikasi Identitas',
    desc: 'Keamanan adalah prioritas kami. Unggah dokumen resmi untuk verifikasi cepat.',
    btn: 'Menunggu',
  },
  {
    n: 3, active: false, title: 'Pilih Paket',
    desc: 'Temukan paket yang sesuai dengan kebutuhan Anda dan mulai berlangganan.',
    btn: 'Menunggu',
  },
]

const NAV = [
  { icon: 'home', label: 'Home' },
  { icon: 'explore', label: 'Explore' },
  { icon: 'notifications', label: 'Alerts' },
]

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="w-full sticky top-0 z-50 flex justify-between items-center px-margin py-4 bg-background border-b-2 border-on-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-primary active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">arrow_back</button>
          <h1 className="font-headline-lg text-headline-lg font-black text-on-background">WELCOME</h1>
        </div>
        <button className="font-label text-label uppercase text-on-surface-variant hover:bg-primary-hover hover:text-on-primary transition-colors px-4 py-2 border-2 border-transparent rounded-full">SKIP</button>
      </header>

      <main className="flex-grow flex items-center justify-center p-margin">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-12">
            <h2 className="font-display text-display mb-4">Mari Mulai Perjalanan Anda</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Selesaikan langkah-langkah di bawah ini untuk mengaktifkan akun Anda dan mulai menjelajahi fitur kami.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className={`${
                  s.active ? 'bg-primary-container' : 'bg-surface opacity-80 hover:opacity-100'
                } border-2 border-on-background neubrutal-shadow p-8 rounded-lg flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
              >
                <div
                  className={`w-16 h-16 rounded-full ${
                    s.active ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-background'
                  } flex items-center justify-center font-headline-md text-headline-md border-2 border-on-background mb-6 neubrutal-shadow-active`}
                >
                  {s.n}
                </div>
                <h3 className={`font-headline-md text-headline-md mb-4 uppercase ${s.active ? '' : 'text-on-surface-variant'}`}>{s.title}</h3>
                <p className={`font-body-md text-body-md mb-8 ${s.active ? 'text-on-primary-container' : 'text-on-surface-variant'}`}>{s.desc}</p>
                <button
                  className={`mt-auto w-full py-3 font-label text-label uppercase border-2 border-on-background rounded-full transition-transform ${
                    s.active
                      ? 'bg-on-background text-background active:scale-95'
                      : 'bg-surface-container text-on-surface-variant cursor-not-allowed'
                  }`}
                  disabled={!s.active}
                >
                  {s.btn}
                </button>
              </div>
            ))}
          </div>

          {/* Help card */}
          <div className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-surface-2 border-2 border-on-background p-8 rounded-lg neubrutal-shadow">
            <div className="w-full md:w-1/3 h-48 overflow-hidden border-2 border-on-background rounded-lg neubrutal-shadow-active">
              <img alt="Team working together" className="w-full h-full object-cover" src={TEAM_IMG} />
            </div>
            <div className="flex-1">
              <h4 className="font-headline-sm text-headline-sm mb-2 uppercase">Butuh Bantuan?</h4>
              <p className="font-body-md text-body-md mb-6">
                Tim dukungan kami tersedia 24/7 untuk memandu Anda melalui proses penyiapan ini.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-primary-container text-on-primary-container border-2 border-on-background rounded-full font-label text-label uppercase neubrutal-shadow-active active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
                  Chat Sekarang
                </button>
                <button className="px-6 py-2 bg-background border-2 border-on-background rounded-full font-label text-label uppercase hover:bg-secondary-container transition-all">
                  Pusat Bantuan
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer nav */}
      <footer className="mt-auto border-t-2 border-on-background bg-background shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex justify-around items-center px-4 py-3 w-full">
          {NAV.map((n) => (
            <button key={n.label} className="flex flex-col items-center gap-1 group">
              <div className="text-on-background p-2 group-hover:bg-secondary-container transition-all">
                <span className="material-symbols-outlined">{n.icon}</span>
              </div>
              <span className="font-label text-[10px] uppercase text-on-surface-variant">{n.label}</span>
            </button>
          ))}
          <button className="flex flex-col items-center gap-1 group">
            <div className="bg-primary-fixed text-on-primary-fixed border-2 border-on-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-full p-2">
              <span className="material-symbols-outlined">person</span>
            </div>
            <span className="font-label text-[10px] uppercase text-primary font-bold">Profile</span>
          </button>
        </div>
      </footer>
    </div>
  )
}
