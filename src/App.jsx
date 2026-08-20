import { StoreProvider } from './context/StoreContext';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CancellationOutOfStockResolution from './pages/CancellationOutOfStockResolution';
import AdminTeamLoginJastipControlCenter from './pages/AdminTeamLoginJastipControlCenter';
import AdminDashboardOverview from './pages/AdminDashboardOverview';
import PaymentReceiptUploadScreen from './pages/PaymentReceiptUploadScreen';
import OrderHistoryTracking from './pages/OrderHistoryTracking';
import AdminEventManagementScreen from './pages/AdminEventManagementScreen';
import KalenderEventJastip from './pages/KalenderEventJastip';
import CustomerHomeJastiphub from './pages/CustomerHomeJastiphub';
import AdminCustomerManagement from './pages/AdminCustomerManagement';
import RingkasanOrderCheckout from './pages/RingkasanOrderCheckout';
import AuthenticationScreen from './pages/AuthenticationScreen';
import ProductDetailOrderForm from './pages/ProductDetailOrderForm';
import AtlasSpacesDesignedToOutlastTrend from './pages/AtlasSpacesDesignedToOutlastTrend';
import DuolingoStyleGuidePage from './pages/DuolingoStyleGuidePage';
import DuolingoLandingFeatureFirstNarrativeV2 from './pages/DuolingoLandingFeatureFirstNarrativeV2';
import DuolingoLearningTable from './pages/DuolingoLearningTable';
import DuolingoProfilePage from './pages/DuolingoProfilePage';
import DuolingoLearningDashboard from './pages/DuolingoLearningDashboard';
import DuolingoLandingPage from './pages/DuolingoLandingPage';
import DuolingoLandingFocusedHeroSocialProofV1 from './pages/DuolingoLandingFocusedHeroSocialProofV1';
import DuolingoLandingCommunitySocialLearningV3 from './pages/DuolingoLandingCommunitySocialLearningV3';
import DuolingoCardComponentsShowcase from './pages/DuolingoCardComponentsShowcase';
import DuolingoPricingPage from './pages/DuolingoPricingPage';
import StitchPixelsStudioPricingSystem2 from './pages/StitchPixelsStudioPricingSystem2';
import InvoiceActionValidationManager from './pages/InvoiceActionValidationManager';
import EventDetailKatalogProduk from './pages/EventDetailKatalogProduk';
import CalendarExamsSchedule from './pages/CalendarExamsSchedule';
import DashboardHome from './pages/DashboardHome';
import HomeworkSearch from './pages/HomeworkSearch';
import SplashScreenNamaBrand from './pages/SplashScreenNamaBrand';
import DetailEventKatalogProduk1 from './pages/DetailEventKatalogProduk1';
import DetailEventKatalogProduk2 from './pages/DetailEventKatalogProduk2';
import PesananSayaOpsiPenerima from './pages/PesananSayaOpsiPenerima';
import DetailProdukProductDetail from './pages/DetailProdukProductDetail';
import DaftarAkunRegistration from './pages/DaftarAkunRegistration';
import BerandaJasaTitip from './pages/BerandaJasaTitip';
import PesananSayaOrderReview from './pages/PesananSayaOrderReview';
import ButtonShowcaseWebViewFinal from './pages/ButtonShowcaseWebViewFinal';
import OnboardingStepsWebViewFixedTokens from './pages/OnboardingStepsWebViewFixedTokens';
import OnboardingStepsWidget from './pages/OnboardingStepsWidget';
import ButtonShowcaseMobile from './pages/ButtonShowcaseMobile';
import ToastAlertDesignSystemShowcase from './pages/ToastAlertDesignSystemShowcase';
import BadgeDesignSystemShowcase from './pages/BadgeDesignSystemShowcase';
import TableDesignSystemShowcase from './pages/TableDesignSystemShowcase';
import InputDesignSystemShowcase from './pages/InputDesignSystemShowcase';
import CardDesignSystemShowcase from './pages/CardDesignSystemShowcase';
import TabDesignSystemShowcase from './pages/TabDesignSystemShowcase';
import LoaderSkeletonDesignSystemShowcase from './pages/LoaderSkeletonDesignSystemShowcase';
import ButtonDesignSystemShowcase from './pages/ButtonDesignSystemShowcase';

export default function App() {
  return (
    <BrowserRouter>
    <StoreProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
        {/* Navigation Header for Multi-Screen Stitch Pages */}
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="font-bold text-sm tracking-wide text-white capitalize">design-system-implementation</span>
          </div>
          <nav className="flex items-center space-x-2 overflow-x-auto py-1">
            <Link to="/" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Cancellation Out Of Stock Resolution</Link>
            <Link to="/admin-team-login-jastip-control-center" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Team Login Jastip Control Center</Link>
            <Link to="/admin-dashboard-overview" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Dashboard Overview</Link>
            <Link to="/payment-receipt-upload-screen" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Payment Receipt Upload Screen</Link>
            <Link to="/order-history-tracking" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Order History Tracking</Link>
            <Link to="/admin-event-management-screen" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Event Management Screen</Link>
            <Link to="/kalender-event-jastip" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Kalender Event Jastip</Link>
            <Link to="/customer-home-jastiphub" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Customer Home Jastiphub</Link>
            <Link to="/admin-customer-management" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Customer Management</Link>
            <Link to="/ringkasan-order-checkout" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Ringkasan Order Checkout</Link>
            <Link to="/authentication-screen" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Authentication Screen</Link>
            <Link to="/product-detail-order-form" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Product Detail Order Form</Link>
            <Link to="/atlas-spaces-designed-to-outlast-trend" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Atlas Spaces Designed To Outlast Trend</Link>
            <Link to="/duolingo-style-guide-page" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Style Guide Page</Link>
            <Link to="/duolingo-landing-feature-first-narrative-v2" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Landing Feature First Narrative V2</Link>
            <Link to="/duolingo-learning-table" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Learning Table</Link>
            <Link to="/duolingo-profile-page" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Profile Page</Link>
            <Link to="/duolingo-learning-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Learning Dashboard</Link>
            <Link to="/duolingo-landing-page" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Landing Page</Link>
            <Link to="/duolingo-landing-focused-hero-social-proof-v1" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Landing Focused Hero Social Proof V1</Link>
            <Link to="/duolingo-landing-community-social-learning-v3" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Landing Community Social Learning V3</Link>
            <Link to="/duolingo-card-components-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Card Components Showcase</Link>
            <Link to="/duolingo-pricing-page" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Pricing Page</Link>
            <Link to="/stitch-pixels-studio-pricing-system 2" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Stitch Pixels Studio Pricing System 2</Link>
            <Link to="/invoice-action-validation-manager" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Invoice Action Validation Manager</Link>
            <Link to="/event-detail-katalog-produk" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Event Detail Katalog Produk</Link>
            <Link to="/calendar-exams-schedule" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Calendar Exams Schedule</Link>
            <Link to="/dashboard-home" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Dashboard Home</Link>
            <Link to="/homework-search" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Homework Search</Link>
            <Link to="/splash-screen-nama-brand" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Splash Screen Nama Brand</Link>
            <Link to="/detail-event-katalog-produk-1" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Detail Event Katalog Produk 1</Link>
            <Link to="/detail-event-katalog-produk-2" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Detail Event Katalog Produk 2</Link>
            <Link to="/pesanan-saya-opsi-penerima" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Pesanan Saya Opsi Penerima</Link>
            <Link to="/detail-produk-product-detail" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Detail Produk Product Detail</Link>
            <Link to="/daftar-akun-registration" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Daftar Akun Registration</Link>
            <Link to="/beranda-jasa-titip" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Beranda Jasa Titip</Link>
            <Link to="/pesanan-saya-order-review" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Pesanan Saya Order Review</Link>
            <Link to="/button-showcase-web-view-final" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Button Showcase Web View Final</Link>
            <Link to="/onboarding-steps-web-view-fixed-tokens" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Onboarding Steps Web View Fixed Tokens</Link>
            <Link to="/onboarding-steps-widget" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Onboarding Steps Widget</Link>
            <Link to="/button-showcase-mobile" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Button Showcase Mobile</Link>
            <Link to="/toast-alert-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Toast Alert Design System Showcase</Link>
            <Link to="/badge-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Badge Design System Showcase</Link>
            <Link to="/table-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Table Design System Showcase</Link>
            <Link to="/input-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Input Design System Showcase</Link>
            <Link to="/card-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Card Design System Showcase</Link>
            <Link to="/tab-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Tab Design System Showcase</Link>
            <Link to="/loader-skeleton-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Loader Skeleton Design System Showcase</Link>
            <Link to="/button-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Button Design System Showcase</Link>
          </nav>
        </header>

        {/* Dynamic Routed Pages */}
        <main className="flex-1 w-full">
          <Routes>
          <Route path="/" element={<CancellationOutOfStockResolution />} />
          <Route path="/admin-team-login-jastip-control-center" element={<AdminTeamLoginJastipControlCenter />} />
          <Route path="/admin-dashboard-overview" element={<AdminDashboardOverview />} />
          <Route path="/payment-receipt-upload-screen" element={<PaymentReceiptUploadScreen />} />
          <Route path="/order-history-tracking" element={<OrderHistoryTracking />} />
          <Route path="/admin-event-management-screen" element={<AdminEventManagementScreen />} />
          <Route path="/kalender-event-jastip" element={<KalenderEventJastip />} />
          <Route path="/customer-home-jastiphub" element={<CustomerHomeJastiphub />} />
          <Route path="/admin-customer-management" element={<AdminCustomerManagement />} />
          <Route path="/ringkasan-order-checkout" element={<RingkasanOrderCheckout />} />
          <Route path="/authentication-screen" element={<AuthenticationScreen />} />
          <Route path="/product-detail-order-form" element={<ProductDetailOrderForm />} />
          <Route path="/atlas-spaces-designed-to-outlast-trend" element={<AtlasSpacesDesignedToOutlastTrend />} />
          <Route path="/duolingo-style-guide-page" element={<DuolingoStyleGuidePage />} />
          <Route path="/duolingo-landing-feature-first-narrative-v2" element={<DuolingoLandingFeatureFirstNarrativeV2 />} />
          <Route path="/duolingo-learning-table" element={<DuolingoLearningTable />} />
          <Route path="/duolingo-profile-page" element={<DuolingoProfilePage />} />
          <Route path="/duolingo-learning-dashboard" element={<DuolingoLearningDashboard />} />
          <Route path="/duolingo-landing-page" element={<DuolingoLandingPage />} />
          <Route path="/duolingo-landing-focused-hero-social-proof-v1" element={<DuolingoLandingFocusedHeroSocialProofV1 />} />
          <Route path="/duolingo-landing-community-social-learning-v3" element={<DuolingoLandingCommunitySocialLearningV3 />} />
          <Route path="/duolingo-card-components-showcase" element={<DuolingoCardComponentsShowcase />} />
          <Route path="/duolingo-pricing-page" element={<DuolingoPricingPage />} />
          <Route path="/stitch-pixels-studio-pricing-system 2" element={<StitchPixelsStudioPricingSystem2 />} />
          <Route path="/invoice-action-validation-manager" element={<InvoiceActionValidationManager />} />
          <Route path="/event-detail-katalog-produk" element={<EventDetailKatalogProduk />} />
          <Route path="/calendar-exams-schedule" element={<CalendarExamsSchedule />} />
          <Route path="/dashboard-home" element={<DashboardHome />} />
          <Route path="/homework-search" element={<HomeworkSearch />} />
          <Route path="/splash-screen-nama-brand" element={<SplashScreenNamaBrand />} />
          <Route path="/detail-event-katalog-produk-1" element={<DetailEventKatalogProduk1 />} />
          <Route path="/detail-event-katalog-produk-2" element={<DetailEventKatalogProduk2 />} />
          <Route path="/pesanan-saya-opsi-penerima" element={<PesananSayaOpsiPenerima />} />
          <Route path="/detail-produk-product-detail" element={<DetailProdukProductDetail />} />
          <Route path="/daftar-akun-registration" element={<DaftarAkunRegistration />} />
          <Route path="/beranda-jasa-titip" element={<BerandaJasaTitip />} />
          <Route path="/pesanan-saya-order-review" element={<PesananSayaOrderReview />} />
          <Route path="/button-showcase-web-view-final" element={<ButtonShowcaseWebViewFinal />} />
          <Route path="/onboarding-steps-web-view-fixed-tokens" element={<OnboardingStepsWebViewFixedTokens />} />
          <Route path="/onboarding-steps-widget" element={<OnboardingStepsWidget />} />
          <Route path="/button-showcase-mobile" element={<ButtonShowcaseMobile />} />
          <Route path="/toast-alert-design-system-showcase" element={<ToastAlertDesignSystemShowcase />} />
          <Route path="/badge-design-system-showcase" element={<BadgeDesignSystemShowcase />} />
          <Route path="/table-design-system-showcase" element={<TableDesignSystemShowcase />} />
          <Route path="/input-design-system-showcase" element={<InputDesignSystemShowcase />} />
          <Route path="/card-design-system-showcase" element={<CardDesignSystemShowcase />} />
          <Route path="/tab-design-system-showcase" element={<TabDesignSystemShowcase />} />
          <Route path="/loader-skeleton-design-system-showcase" element={<LoaderSkeletonDesignSystemShowcase />} />
          <Route path="/button-design-system-showcase" element={<ButtonDesignSystemShowcase />} />
          <Route path="*" element={<CancellationOutOfStockResolution />} />
          </Routes>
        </main>
      </div>
        </StoreProvider>
</BrowserRouter>
  );
}
