'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Cookie, X, Check, Lock } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já registrou uma escolha
    const consent = localStorage.getItem('agillex_cookie_consent');
    if (!consent) {
      // Exibe após 1.2 segundos para não sobrecarregar o primeiro frame
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }

    // Ouvinte para reabrir as preferências caso solicitado pelo rodapé
    const handleReopen = () => {
      setIsVisible(true);
    };

    window.addEventListener('open-cookie-banner', handleReopen);
    return () => window.removeEventListener('open-cookie-banner', handleReopen);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('agillex_cookie_consent', 'all');
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('agillex_cookie_consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimento de Cookies e Privacidade"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        maxWidth: '460px',
        width: 'calc(100% - 48px)',
        zIndex: 100,
        backgroundColor: 'rgba(6, 11, 24, 0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 245, 212, 0.35)',
        borderRadius: '20px',
        padding: '24px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 245, 212, 0.15)',
        animation: 'slideUp 0.3s ease-out',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '14px' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            backgroundColor: 'rgba(0, 245, 212, 0.12)',
            border: '1px solid rgba(0, 245, 212, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#00F5D4',
            flexShrink: 0,
          }}
        >
          <Cookie size={20} />
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: '0.98rem', color: '#fff', marginBottom: '4px' }}>
            Privacidade e Cookies (LGPD)
          </div>
          <p style={{ color: '#94A3B8', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
            Utilizamos cookies essenciais para garantir o funcionamento seguro do portal e, com o seu consentimento, métricas anônimas para aprimorar sua experiência, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
          </p>
        </div>
      </div>

      <div style={{ fontSize: '0.78rem', color: '#64748B', marginBottom: '18px' }}>
        Para detalhes completos sobre como tratamos seus dados, consulte nossa{' '}
        <Link
          href="/privacidade"
          style={{ color: '#00F5D4', textDecoration: 'underline', fontWeight: 600 }}
        >
          Política de Privacidade
        </Link>.
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          onClick={handleAcceptAll}
          className="cyber-button-primary"
          style={{
            flex: 1,
            minWidth: '130px',
            padding: '10px 16px',
            borderRadius: '10px',
            fontSize: '0.84rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          <Check size={16} />
          <span>Aceitar Todos</span>
        </button>

        <button
          onClick={handleAcceptEssential}
          className="cyber-button-secondary"
          style={{
            flex: 1,
            minWidth: '130px',
            padding: '10px 16px',
            borderRadius: '10px',
            fontSize: '0.84rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          <Lock size={14} />
          <span>Apenas Essenciais</span>
        </button>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
