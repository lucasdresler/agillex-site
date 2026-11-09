'use client';

import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Calendar, Bot, LayoutDashboard } from 'lucide-react';

interface PricingSectionProps {
  onOpenTrial: () => void;
}

export default function PricingSection({ onOpenTrial }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeCategory, setActiveCategory] = useState<'combo' | 'agenda' | 'atende'>('combo');

  // Planos oficiais 100% alinhados com o site da AllLogic Online
  const comboPlans = [
    {
      name: 'Combo Agillex Hub Pro',
      target: 'Solução Completa Unificada',
      badge: 'MAIS ESCOLHIDO',
      badgeColor: '#00F5D4',
      popular: true,
      tagline: 'Tudo o que sua empresa precisa para atender com IA, agendar horários e gerenciar vendas.',
      priceMonthly: '249,90',
      priceYearly: '199,90',
      periodMonthly: '/mês no plano mensal',
      periodYearly: '/mês no plano anual (R$ 2.398,80/ano)',
      yearlySavings: 'Economize R$ 600 no plano anual',
      checkoutUrl: 'https://hub.alllogiconline.com.br/checkout?modulo=combo&plano=combo&trial=true',
      features: [
        'Atendimento Inteligente com IA no WhatsApp (até 2.000 conversas/mês)',
        'Agillex Agenda Pro para equipe de até 5 profissionais',
        'Página pública exclusiva aberta 24/7 com link personalizado',
        'Sincronização bidirecional em tempo real com Google Calendar',
        'Confirmações e lembretes automáticos no WhatsApp',
        'Agillex CRM Kanban com leads e estágios ilimitados',
        'Agillex Pay com taxa fixa de apenas R$ 1,99 por transação Pix',
        'Transbordo humano em 1 clique com histórico preservado',
        'Base de conhecimento RAG personalizada para o seu negócio',
        'Suporte prioritário e onboarding guiado pela AllLogic Online',
      ],
      cta: 'Iniciar 14 Dias Grátis do Combo',
    },
    {
      name: 'Agillex Hub Corporativo / Redes',
      target: 'Grandes Clínicas, Franquias e Redes',
      badge: 'GRANDES OPERAÇÕES',
      badgeColor: '#8B5CF6',
      popular: false,
      tagline: 'Para empresas com mais de 10 profissionais, múltiplas filiais ou altíssimo volume.',
      priceMonthly: 'Sob Consulta',
      priceYearly: 'Sob Consulta',
      periodMonthly: 'projeto sob medida',
      periodYearly: 'projeto sob medida',
      yearlySavings: 'Condições personalizadas para redes',
      checkoutUrl: 'https://wa.me/5511978253163?text=Olá,%20gostaria%20de%20um%20plano%20corporativo%20do%20Agillex',
      features: [
        'Múltiplas filiais e profissionais ilimitados',
        'Mais de 10.000 conversas com IA no WhatsApp',
        'Painel corporativo com relatórios consolidados de matriz e filiais',
        'Integração direta com ERPs, prontuários eletrônicos e sistemas legados',
        'SLA de atendimento de até 2 horas',
        'Gerente de contas dedicado da AllLogic Online',
      ],
      cta: 'Falar com Consultor Corporativo',
    },
  ];

  const agendaPlans = [
    {
      name: 'Agenda 1 Profissional',
      target: 'Manicures, Barbeiros, Terapeutas e Autônomos',
      badge: 'AUTÔNOMOS',
      badgeColor: '#38BDF8',
      popular: false,
      tagline: 'Ideal para profissionais autônomos e estúdios individuais com foco em simplicidade.',
      priceMonthly: '49,90',
      priceYearly: '39,90',
      periodMonthly: '/mês no plano mensal',
      periodYearly: '/mês no plano anual (R$ 478,80/ano)',
      yearlySavings: 'Economize 20% no plano anual',
      checkoutUrl: 'https://hub.alllogiconline.com.br/checkout?modulo=agenda&plano=agenda_inicial&trial=true',
      features: [
        '1 Profissional com agenda própria exclusiva',
        'Clientes, serviços e agendamentos ILIMITADOS',
        'Página pública exclusiva aberta 24/7 (agenda.agillex.com.br/seu-nome)',
        'Sincronização em tempo real com Google Calendar',
        'Notificações e confirmações automáticas no WhatsApp',
        'Painel administrativo com visão diária, semanal e mensal',
        'Gestão de horários e intervalos de trabalho',
        '14 dias de teste grátis — sem cartão de crédito',
      ],
      cta: 'Começar 14 Dias Grátis',
    },
    {
      name: 'Agenda Até 5 Profissionais',
      target: 'Barbearias, Clínicas e Salões com Equipe',
      badge: 'MAIS ESCOLHIDO',
      badgeColor: '#00F5D4',
      popular: true,
      tagline: 'Para barbearias, clínicas, salões e estúdios com equipe em crescimento.',
      priceMonthly: '99,90',
      priceYearly: '79,90',
      periodMonthly: '/mês no plano mensal',
      periodYearly: '/mês no plano anual (R$ 958,80/ano)',
      yearlySavings: 'Economize 20% no plano anual',
      checkoutUrl: 'https://hub.alllogiconline.com.br/checkout?modulo=agenda&plano=agenda_intermediario&trial=true',
      features: [
        'Até 5 Profissionais com agendas independentes',
        'Clientes, serviços e agendamentos ILIMITADOS',
        'Página pública exclusiva com seleção de profissional',
        'Sincronização em tempo real com Google Calendar de toda a equipe',
        'Notificações e confirmações automáticas via WhatsApp',
        'Gestão de escalas, jornadas individuais e intervalos',
        'Painel administrativo com relatórios operacionais',
        '14 dias de teste grátis — sem fidelidade',
      ],
      cta: 'Começar 14 Dias Grátis',
    },
    {
      name: 'Agenda Até 10 Profissionais',
      target: 'Clínicas Médicas e Odontológicas Maiores',
      badge: 'GRANDES EQUIPES',
      badgeColor: '#8B5CF6',
      popular: false,
      tagline: 'Para clínicas e estabelecimentos com equipe ampla e múltiplos atendimentos.',
      priceMonthly: '169,90',
      priceYearly: '139,90',
      periodMonthly: '/mês no plano mensal',
      periodYearly: '/mês no plano anual (R$ 1.678,80/ano)',
      yearlySavings: 'Economize 18% no plano anual',
      checkoutUrl: 'https://hub.alllogiconline.com.br/checkout?modulo=agenda&plano=agenda_avancado&trial=true',
      features: [
        'Até 10 Profissionais com agendas independentes',
        'Clientes, serviços e agendamentos ILIMITADOS',
        'Página pública com distribuição inteligente de horários',
        'Sincronização de todas as agendas no Google Calendar',
        'Disparo prioritário de confirmações no WhatsApp',
        'Relatórios gerenciais e controle avançado de ocupação',
        'Suporte técnico prioritário',
        '14 dias de teste grátis — sem fidelidade',
      ],
      cta: 'Começar 14 Dias Grátis',
    },
  ];

  const atendePlans = [
    {
      name: 'Atende Starter',
      target: 'Autônomos e Pequenos Negócios',
      badge: 'ATÉ 500 CONVERSAS',
      badgeColor: '#38BDF8',
      popular: false,
      tagline: 'Ideal para profissionais autônomos, estúdios e consultórios com fluxo moderado.',
      priceMonthly: '99,90',
      priceYearly: '79,90',
      periodMonthly: '/mês no plano mensal',
      periodYearly: '/mês no plano anual (R$ 958,80/ano)',
      yearlySavings: 'Economize 20% no plano anual',
      checkoutUrl: 'https://hub.alllogiconline.com.br/checkout?modulo=atendimento&plano=starter&trial=true',
      features: [
        'Até 500 conversas/mês no WhatsApp Oficial',
        'Atendimento inteligente com IA 24 horas por dia',
        'Compreensão de áudios de voz e mensagens de texto',
        'Transbordo automático para atendente humano',
        'Memória contextual e tom de voz personalizado',
        'Sem cobrança oculta de tokens de IA',
        'Sem taxa de setup ou custos de implantação',
      ],
      cta: 'Assinar Starter Online',
    },
    {
      name: 'Atende Pro',
      target: 'Clínicas, Escritórios e Empresas',
      badge: 'MAIS ESCOLHIDO',
      badgeColor: '#00F5D4',
      popular: true,
      tagline: 'Para clínicas, escritórios e empresas com equipe e maior fluxo diário no WhatsApp.',
      priceMonthly: '179,90',
      priceYearly: '149,90',
      periodMonthly: '/mês no plano mensal',
      periodYearly: '/mês no plano anual (R$ 1.798,80/ano)',
      yearlySavings: 'Economize R$ 360 no plano anual',
      checkoutUrl: 'https://hub.alllogiconline.com.br/checkout?modulo=atendimento&plano=pro&trial=true',
      features: [
        'Até 2.000 conversas/mês no WhatsApp Oficial',
        'Atendimento inteligente com IA 24 horas por dia',
        'Compreensão avançada de áudios de voz e texto',
        'Transbordo inteligente para equipe humana',
        'Integração direta com o Agillex Agenda',
        'Prioridade de suporte e configuração guiada',
        '14 dias de teste grátis — sem fidelidade',
      ],
      cta: 'Assinar Pro Online',
    },
  ];

  const currentPlans =
    activeCategory === 'combo'
      ? comboPlans
      : activeCategory === 'agenda'
      ? agendaPlans
      : atendePlans;

  return (
    <section id="planos" style={{ padding: '80px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="cyber-badge" style={{ marginBottom: '14px' }}>
            <span>Tabela Oficial de Preços AllLogic Online</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Planos Oficiais.{' '}
            <span className="gradient-text-glow">Sem pegadinhas ou custos ocultos.</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto 28px' }}>
            Acesso a 100% dos recursos em todos os planos. Escolha contratar o módulo avulso ou a solução completa no Combo Agillex Hub.
          </p>

          {/* SELETOR DE CATEGORIA DE PRODUTO */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '20px',
            }}
          >
            <button
              onClick={() => setActiveCategory('combo')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '12px',
                backgroundColor: activeCategory === 'combo' ? 'rgba(0, 245, 212, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border: activeCategory === 'combo' ? '1px solid #00F5D4' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeCategory === 'combo' ? '#fff' : '#94A3B8',
                fontWeight: activeCategory === 'combo' ? 700 : 500,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <LayoutDashboard size={18} color={activeCategory === 'combo' ? '#00F5D4' : '#64748B'} />
              Combo Agillex Hub (Completo)
            </button>

            <button
              onClick={() => setActiveCategory('agenda')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '12px',
                backgroundColor: activeCategory === 'agenda' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border: activeCategory === 'agenda' ? '1px solid #38BDF8' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeCategory === 'agenda' ? '#fff' : '#94A3B8',
                fontWeight: activeCategory === 'agenda' ? 700 : 500,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Calendar size={18} color={activeCategory === 'agenda' ? '#38BDF8' : '#64748B'} />
              Agillex Agenda (A partir de R$ 49,90)
            </button>

            <button
              onClick={() => setActiveCategory('atende')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '12px',
                backgroundColor: activeCategory === 'atende' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border: activeCategory === 'atende' ? '1px solid #8B5CF6' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeCategory === 'atende' ? '#fff' : '#94A3B8',
                fontWeight: activeCategory === 'atende' ? 700 : 500,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Bot size={18} color={activeCategory === 'atende' ? '#8B5CF6' : '#64748B'} />
              Agilex Atende (WhatsApp IA)
            </button>
          </div>

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

        {/* GRID DE CARDS DOS PLANOS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: currentPlans.length === 2 ? 'repeat(auto-fit, minmax(340px, 1fr))' : 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '28px',
            alignItems: 'stretch',
          }}
        >
          {currentPlans.map((plan, idx) => {
            const isCustom = plan.priceMonthly === 'Sob Consulta';
            const price = isCustom ? 'Sob Consulta' : billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
            const period = isCustom ? '' : billingCycle === 'yearly' ? plan.periodYearly : plan.periodMonthly;

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
                    {plan.badge}
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
                    {plan.tagline}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '6px' }}>
                    {!isCustom && <span style={{ fontSize: '1.1rem', color: '#94A3B8' }}>R$</span>}
                    <span style={{ fontSize: isCustom ? '2rem' : '3rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
                      {price}
                    </span>
                    {!isCustom && <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>/mês</span>}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#10B981', fontWeight: 600, marginBottom: '20px' }}>
                    {plan.yearlySavings}
                  </div>

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

                <a
                  href={plan.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={plan.popular ? 'btn-primary-neon' : 'btn-secondary-cyber'}
                  style={{ width: '100%', justifyContent: 'center', padding: '14px', textDecoration: 'none' }}
                >
                  <Sparkles size={16} />
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* NOTA DE GARANTIA & NICHOS */}
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
                Atende do Profissional Autônomo às Redes de Franquias
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                Manicures, barbeiros, psicólogos e consultórios individuais iniciam no Agillex Agenda a partir de R$ 49,90/mês. 14 dias de teste grátis sem cartão de crédito.
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
