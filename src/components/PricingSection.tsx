'use client';

import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface PricingSectionProps {
  onOpenTrial: () => void;
}

export default function PricingSection({ onOpenTrial }: PricingSectionProps) {
  const plans = [
    {
      name: 'Módulo Avulso',
      desc: 'Ideal para empresas que querem iniciar com uma solução específica.',
      price: '97',
      period: '/mês',
      badge: 'ENTRADA',
      badgeColor: '#94A3B8',
      features: [
        'Escolha 1 módulo (Agenda, Atende ou Cobrança)',
        'Até 300 atendimentos ou agendamentos/mês',
        'Sincronização com Google Calendar',
        'Taxa Pix Fixa de R$ 1,99 por transação',
        'Suporte técnico via WhatsApp',
      ],
      popular: false,
      cta: 'Começar com 1 Módulo',
    },
    {
      name: 'Plano Pro (Mais Escolhido)',
      desc: 'A tríade essencial de atendimento, vendas e agendamento automatizado.',
      price: '297',
      period: '/mês',
      badge: 'MAIS POPULAR',
      badgeColor: '#00F5D4',
      features: [
        'Agillex Hub Completo (CRM Kanban Multi-Tenant)',
        'Agilex Atende (IA no WhatsApp Oficial 24/7)',
        'Agillex Agenda (Página pública + Google Calendar)',
        'Agillex Cobrança (Régua Ativa Asaas + Pix R$ 1,99)',
        'Atendimentos e agendamentos ILIMITADOS',
        'Treinamento da IA com documentos da sua empresa',
        'Suporte prioritário AllLogic Online',
      ],
      popular: true,
      cta: 'Iniciar Teste Grátis de 14 Dias',
    },
    {
      name: 'Combo Família Agillex Total',
      desc: 'O ecossistema completo com os 6 módulos para dominância total da operação.',
      price: '497',
      period: '/mês',
      badge: 'ALL-IN-ONE',
      badgeColor: '#8B5CF6',
      features: [
        'Todos os 6 Módulos Integrados da Família Agillex',
        'Agillex Hub + Atende + Agenda + Cobrança',
        'Agillex Reputação (Acelerador 5★ no Google Maps)',
        'Agillex GED (Gestão com OCR, IA e Alertas)',
        'Múltiplos profissionais e filiais ilimitadas',
        'Taxa Pix Fixa de R$ 1,99 em todas as transações',
        'Onboarding personalizado com nossos engenheiros',
        'Acesso antecipado a todos os novos recursos de IA',
      ],
      popular: false,
      cta: 'Experimentar Ecossistema Total',
    },
  ];

  return (
    <section id="planos" style={{ padding: '80px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="cyber-badge" style={{ marginBottom: '14px' }}>
            <span>Investimento Transparente & Sem Surpresas</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Planos Sob Medida para a sua{' '}
            <span className="gradient-text-glow">Escala de Negócio.</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', maxWidth: '720px', margin: '0 auto' }}>
            Todos os planos incluem <strong>14 dias de teste grátis</strong>, sem cartão de crédito prévio e sem contrato de fidelidade.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'stretch',
          }}
        >
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '36px 28px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: plan.popular ? '2px solid #00F5D4' : '1px solid rgba(56, 189, 248, 0.15)',
                boxShadow: plan.popular ? '0 0 40px rgba(0, 245, 212, 0.2)' : 'none',
                transform: plan.popular ? 'scale(1.02)' : 'none',
              }}
            >
              {plan.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#00F5D4',
                    color: '#060B18',
                    padding: '4px 16px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                  }}
                >
                  RECOMENDADO
                </div>
              )}

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, color: plan.badgeColor, letterSpacing: '0.05em' }}>
                    {plan.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: '0.84rem', color: '#94A3B8', minHeight: '40px', lineHeight: 1.4, marginBottom: '24px' }}>
                  {plan.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '28px' }}>
                  <span style={{ fontSize: '1.1rem', color: '#94A3B8' }}>R$</span>
                  <span style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>{plan.period}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ padding: '2px', borderRadius: '50%', backgroundColor: 'rgba(0, 245, 212, 0.15)', color: '#00F5D4', marginTop: '2px' }}>
                        <Check size={14} />
                      </div>
                      <span style={{ fontSize: '0.85rem', color: '#E2E8F0', lineHeight: 1.4 }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenTrial}
                className={plan.popular ? 'btn-primary-neon' : 'btn-secondary-cyber'}
                style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
              >
                <Sparkles size={16} />
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* GARANTIA DE 14 DIAS */}
        <div
          style={{
            marginTop: '48px',
            backgroundColor: 'rgba(31, 111, 255, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: 'rgba(0, 245, 212, 0.15)', color: '#00F5D4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>
                14 Dias de Teste Grátis Sem Risco
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                Configure sua empresa, conecte seu WhatsApp e comprove os resultados. Cancele com 1 clique a qualquer momento.
              </div>
            </div>
          </div>
          <button onClick={onOpenTrial} className="btn-primary-neon" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
            Iniciar Meu Teste
          </button>
        </div>
      </div>
    </section>
  );
}
