'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrialModal from '@/components/TrialModal';
import BackToTop from '@/components/BackToTop';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CookieConsent from '@/components/CookieConsent';
import { privacidadeContent } from '@/content/privacidade';
import { ShieldCheck, ChevronRight, ArrowLeft, Mail, Phone, Lock, Calendar } from 'lucide-react';

export default function PrivacidadePage() {
  const [trialOpen, setTrialOpen] = useState(false);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#060B18', color: '#fff', position: 'relative' }}>
      <Navbar onOpenTrial={() => setTrialOpen(true)} />

      {/* HERO DA POLÍTICA DE PRIVACIDADE */}
      <section
        style={{
          paddingTop: '150px',
          paddingBottom: '60px',
          position: 'relative',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          backgroundColor: 'rgba(10, 17, 40, 0.4)',
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
          {/* BREADCRUMB */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.82rem',
              color: '#64748B',
              marginBottom: '20px',
            }}
          >
            <Link href="/" style={{ color: '#00F5D4', textDecoration: 'none' }}>
              Início
            </Link>
            <ChevronRight size={14} />
            <span style={{ color: '#94A3B8' }}>Política de Privacidade</span>
          </div>

          <div className="cyber-badge" style={{ marginBottom: '16px' }}>
            <ShieldCheck size={14} color="#00F5D4" />
            <span>{privacidadeContent.eyebrow}</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            {privacidadeContent.title}
          </h1>

          <p
            style={{
              color: '#94A3B8',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              marginBottom: '20px',
            }}
          >
            {privacidadeContent.description}
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8rem',
              color: '#64748B',
              padding: '6px 14px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <Calendar size={14} color="#00F5D4" />
            <span>Última atualização: {privacidadeContent.updatedAt}</span>
          </div>
        </div>
      </section>

      {/* CONTEÚDO DAS SEÇÕES */}
      <section style={{ padding: '60px 24px 100px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 48px)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
            }}
          >
            {privacidadeContent.sections.map((section, idx) => (
              <div
                key={idx}
                style={{
                  borderBottom:
                    idx < privacidadeContent.sections.length - 1
                      ? '1px solid rgba(255, 255, 255, 0.06)'
                      : 'none',
                  paddingBottom: idx < privacidadeContent.sections.length - 1 ? '36px' : '0',
                }}
              >
                <h2
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '20px',
                      borderRadius: '3px',
                      backgroundColor: '#00F5D4',
                    }}
                  />
                  {section.title}
                </h2>

                {section.paragraphs && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {section.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        style={{
                          color: '#CBD5E1',
                          fontSize: '0.92rem',
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                )}

                {section.items && (
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '16px 0 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    {section.items.map((item, iIdx) => (
                      <li
                        key={iIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          color: '#94A3B8',
                          fontSize: '0.88rem',
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#38BDF8',
                            flexShrink: 0,
                            marginTop: '9px',
                          }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* BOX DE CONTATO DIRETO COM O ENCARREGADO (DPO) */}
            <div
              style={{
                marginTop: '20px',
                padding: '24px',
                borderRadius: '16px',
                backgroundColor: 'rgba(0, 245, 212, 0.05)',
                border: '1px solid rgba(0, 245, 212, 0.25)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
              }}
            >
              <div>
                <div style={{ fontWeight: 800, color: '#fff', fontSize: '1rem', marginBottom: '4px' }}>
                  Dúvidas ou Requisições de Titulares LGPD?
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.85rem' }}>
                  Fale com nosso encarregado pelo e-mail <strong>contato@alllogiconline.com.br</strong> ou via WhatsApp oficial.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href="mailto:contato@alllogiconline.com.br"
                  className="cyber-button-secondary"
                  style={{
                    padding: '10px 18px',
                    borderRadius: '10px',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Mail size={16} />
                  <span>Enviar E-mail</span>
                </a>

                <a
                  href="https://wa.me/5511966381915?text=Olá!%20Gostaria%20de%20falar%20com%20o%20DPO%20sobre%20privacidade."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button-primary"
                  style={{
                    padding: '10px 18px',
                    borderRadius: '10px',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Phone size={16} />
                  <span>WhatsApp DPO</span>
                </a>
              </div>
            </div>

            {/* BOTÃO VOLTAR PARA A PÁGINA PRINCIPAL */}
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#00F5D4',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <ArrowLeft size={16} />
                <span>Voltar para a Página Inicial do Agillex</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
      <CookieConsent />
      <TrialModal isOpen={trialOpen} onClose={() => setTrialOpen(false)} />
    </main>
  );
}
