'use client';

import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface PricingSectionProps {
  onOpenTrial: () => void;
}

export default function PricingSection({ onOpenTrial }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Agenda Individual',
      target: 'Manicures, Barbeiros, Terapeutas e Autônomos',
      desc: 'Ideal para profissionais autônomos que atendem sozinhos e querem eliminar faltas.',
      priceMonthly: '49,90',
      priceYearly: '39,90',
      badge: 'AUTÔNOMOS',
      badgeColor: '#38BDF8',
      features: [
        '1 Profissional com agenda própria exclusiva',
        'Clientes, serviços e agendamentos ILIMITADOS',
        'Página pública aberta 24/7 (agenda.agillex.com.br/seu-nome)',
        'Sincronização instantânea com Google Calendar',
        'Confirmações e lembretes automáticos no WhatsApp',
        'Redução comprovada de até 85% nas faltas',
        'Sem taxa de setup ou custos ocultos',
      ],
      popular: false,
      cta: 'Começar com Agenda Individual',
    },
    {
      name: 'Combo Agillex Hub Pro',
      target: 'Clínicas, Consultórios, Salões e Escritórios',
      desc: 'O ecossistema unificado completo: Atendimento IA 24/7, Agenda para equipe, CRM e Cobrança.',
      priceMonthly: '249,90',
      priceYearly: '199,90',
      badge: 'MAIS ESCOLHIDO',
      badgeColor: '#00F5D4',
      features: [
        'Atendimento com IA Humanizada no WhatsApp 24/7 (até 2.000 conversas/mês)',
        'Agillex Agenda Pro para equipe de até 5 profissionais',
        'Agendamento automático via WhatsApp e página pública',
        'Sincronização bidirecional em tempo real com Google Calendar',
        'Agillex CRM Kanban com funil de vendas ilimitado',
        'Agillex Pay com Taxa Fixa de R$ 1,99 por Pix concluído',
        'Transbordo humano em 1 clique com histórico preservado',
        'Base de conhecimento RAG treinada nas regras do seu negócio',
        'Suporte prioritário e onboarding guiado pela AllLogic',
      ],
      popular: true,
      cta: 'Iniciar 14 Dias Grátis do Combo',
    },
    {
      name: 'Equipe & Clínicas',
      target: 'Empresas com Equipe Média de até 5 Profissionais',
      desc: 'Para estabelecimentos com múltiplos profissionais que precisam de agenda e controle.',
      priceMonthly: '99,90',
      priceYearly: '79,90',
      badge: 'ATÉ 5 PROFISSIONAIS',
      badgeColor: '#8B5CF6',
      features: [
        'Até 5 Profissionais com agendas e escalas independentes',
        'Clientes, serviços e agendamentos ILIMITADOS',
        'Página pública unificada com escolha de profissional',
        'Sincronização de todos os calendários no Google Calendar',
        'Lembretes e confirmações automáticas no WhatsApp',
        'Relatórios operacionais e controle de horários',
        'Módulo financeiro com Pix Taxa R$ 1,99 disponível',
      ],
      popular: false,
      cta: 'Assinar Plano Equipe',
    },
  ];

  return (
    <section id="planos" style={{ padding: '80px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="cyber-badge" style={{ marginBottom: '14px' }}>
            <span>Tabela Oficial de Preços Agillex</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Planos Transparentes.{' '}
            <span className="gradient-text-glow">Do Autônomo à Grande Clínica.</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto 28px' }}>
            Preços justos e acessíveis desde o profissional individual até redes de clínicas. Todos os planos incluem <strong>14 dias de teste grátis</strong>, sem fidelidade.
          </p>

          {/* ALTERNADOR MENSAL / ANUAL */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '999px',
              padding: '4px',
              gap: '4px',
            }}
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                backgroundColor: billingCycle === 'monthly' ? '#1F6FFF' : 'transparent',
                color: '#fff',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              Faturamento Mensal
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                backgroundColor: billingCycle === 'yearly' ? '#00F5D4' : 'transparent',
                color: billingCycle === 'yearly' ? '#060B18' : '#fff',
                fontSize: '0.85rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              Plano Anual <span style={{ fontSize: '0.68rem', backgroundColor: billingCycle === 'yearly' ? '#060B18' : '#10B981', color: billingCycle === 'yearly' ? '#00F5D4' : '#fff', padding: '1px 6px', borderRadius: '4px' }}>20% OFF</span>
            </button>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'stretch',
          }}
        >
          {plans.map((plan, idx) => {
            const currentPrice = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
            return (
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
                    SOLUÇÃO COMPLETA
                  </div>
                )}

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, color: plan.badgeColor, letterSpacing: '0.05em' }}>
                      {plan.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
                    {plan.name}
                  </h3>
                  <div style={{ fontSize: '0.76rem', color: '#38BDF8', fontWeight: 600, marginBottom: '8px' }}>
                    {plan.target}
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#94A3B8', minHeight: '38px', lineHeight: 1.4, marginBottom: '24px' }}>
                    {plan.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '1.1rem', color: '#94A3B8' }}>R$</span>
                    <span style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
                      {currentPrice}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>/mês</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 600, marginBottom: '20px' }}>
                      Cobrado anualmente com 20% de economia
                    </div>
                  )}
                  {billingCycle === 'monthly' && (
                    <div style={{ fontSize: '0.72rem', color: '#64748B', marginBottom: '20px' }}>
                      Sem fidelidade, cancele quando quiser
                    </div>
                  )}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '32px' }}>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{ padding: '2px', borderRadius: '50%', backgroundColor: 'rgba(0, 245, 212, 0.15)', color: '#00F5D4', marginTop: '2px' }}>
                          <Check size={14} />
                        </div>
                        <span style={{ fontSize: '0.84rem', color: '#E2E8F0', lineHeight: 1.4 }}>{feat}</span>
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
            );
          })}
        </div>

        {/* NOTA DE COBERTURA DE NICHOS */}
        <div
          style={{
            marginTop: '44px',
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
                Atende perfeitamente do Autônomo às Redes de Franquias
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                Manicures, barbeiros, psicólogos e fisioterapeutas contam com a plataforma completa a partir de R$ 49,90/mês. 14 dias de teste grátis sem cartão.
              </div>
            </div>
          </div>
          <button onClick={onOpenTrial} className="btn-primary-neon" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
            Testar Grátis 14 Dias
          </button>
        </div>
      </div>
    </section>
  );
}
