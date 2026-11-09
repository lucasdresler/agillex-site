'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductNavigator from '@/components/ProductNavigator';
import RoiCalculator from '@/components/RoiCalculator';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import TrialModal from '@/components/TrialModal';

export default function Home() {
  const [trialOpen, setTrialOpen] = useState(false);

  const handleOpenTrial = () => {
    setTrialOpen(true);
  };

  const handleCloseTrial = () => {
    setTrialOpen(false);
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('produtos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#060B18', color: '#fff', position: 'relative' }}>
      <Navbar onOpenTrial={handleOpenTrial} />
      <Hero onOpenTrial={handleOpenTrial} onExploreProducts={handleExploreProducts} />
      <ProductNavigator onOpenTrial={handleOpenTrial} />
      <RoiCalculator onOpenTrial={handleOpenTrial} />
      <PricingSection onOpenTrial={handleOpenTrial} />
      <FaqSection />
      <Footer />
      <TrialModal isOpen={trialOpen} onClose={handleCloseTrial} />
    </main>
  );
}
