import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ButtonShowcaseWebViewFinal from './pages/ButtonShowcaseWebViewFinal';
import OnboardingStepsWebViewFixedTokens from './pages/OnboardingStepsWebViewFixedTokens';
import OnboardingStepsWidget from './pages/OnboardingStepsWidget';
import ButtonShowcaseMobile from './pages/ButtonShowcaseMobile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ButtonShowcaseWebViewFinal />} />
<Route path='/button-showcase-web-view-final' element={<ButtonShowcaseWebViewFinal />} />
<Route path='/onboarding-steps-web-view-fixed-tokens' element={<OnboardingStepsWebViewFixedTokens />} />
<Route path='/onboarding-steps-widget' element={<OnboardingStepsWidget />} />
<Route path='/button-showcase-mobile' element={<ButtonShowcaseMobile />} />
        <Route path="*" element={<ButtonShowcaseWebViewFinal />} />
      </Routes>
    </BrowserRouter>
  );
}
