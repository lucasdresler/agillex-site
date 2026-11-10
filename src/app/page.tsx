'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductsOverviewTable from '@/components/ProductsOverviewTable';
import TransformationSection from '@/components/TransformationSection';
import ProductNavigator from '@/components/ProductNavigator';
import RoiCalculator from '@/components/RoiCalculator';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import TrialModal from '@/components/TrialModal';
import BackToTop from '@/components/BackToTop';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CookieConsent from '@/components/CookieConsent';

export default function Home() {
  const [trialOpen, setTrialOpen] = useState(false);
  const [activeProductTab, setActiveProductTab] = useState<
    'atende' | 'hub' | 'agenda' | 'cobranca' | 'reputacao' | 'ged'
  >('agenda');

  const handleOpenTrial = () => {
    setTrialOpen(true);
  };

  const handleCloseTrial = () => {
    setTrialOpen(false);
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('tabela-produtos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProduct = (
    productId: 'atende' | 'hub' | 'agenda' | 'cobranca' | 'reputacao' | 'ged'
  ) => {
    setActiveProductTab(productId);
    const el = document.getElementById('produtos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#060B18', color: '#fff', position: 'relative' }}>
      <Navbar onOpenTrial={handleOpenTrial} />
      <Hero onOpenTrial={handleOpenTrial} onExploreProducts={handleExploreProducts} />
      <ProductsOverviewTable
        onSelectProduct={handleSelectProduct}
        onOpenTrial={handleOpenTrial}
      />
      <TransformationSection
        onOpenTrial={handleOpenTrial}
        onSelectProduct={handleSelectProduct}
      />
      <ProductNavigator
        activeTab={activeProductTab}
        onTabChange={setActiveProductTab}
        onOpenTrial={handleOpenTrial}
      />
      <RoiCalculator onOpenTrial={handleOpenTrial} />
      <PricingSection onOpenTrial={handleOpenTrial} />
      <FaqSection />
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
      <CookieConsent />
      <TrialModal isOpen={trialOpen} onClose={handleCloseTrial} />
    </main>
  );
}
