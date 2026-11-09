'use client';

import React, { useState } from 'react';
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Bot,
  LayoutDashboard,
  CreditCard,
  Star,
  FileText,
} from 'lucide-react';

interface PricingSectionProps {
  onOpenTrial: () => void;
}

export default function PricingSection({ onOpenTrial }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeCategory, setActiveCategory] = useState<
    'combo' | 'agenda' | 'atende' | 'cobranca' | 'reputacao' | 'ged'
  >('combo');

  // ==========================================
  // Planos oficiais 100% alinhados com o site da AllLogic Online
  // ==========================================

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
    {
      name: 'Atende Enterprise',
      target: 'Operações de Grande Escala',
      badge: 'ALTO VOLUME',
      badgeColor: '#8B5CF6',
      popular: false,
      tagline: 'Para redes, franquias e empresas que demandam mais de 5.000 conversas/mês.',
      priceMonthly: 'Sob Consulta',
      priceYearly: 'Sob Consulta',
      periodMonthly: 'projeto sob medida',
      periodYearly: 'projeto sob medida',
      yearlySavings: 'Volume flexível e SLA dedicado',
      checkoutUrl: 'https://wa.me/5511978253163?text=Olá,%20gostaria%20de%20um%20plano%20Enterprise%20do%20Agilex%20Atende',
      features: [
        'Franquia ilimitada ou escalonada de conversas',
        'Múltiplos números de WhatsApp conectados',
        'Integração via API com sistemas legados e CRMs',
        'Treinamento e fine-tuning de IA exclusivo',
        'Gerente de sucesso dedicado e SLA de 2h',
      ],
      cta: 'Falar com Especialista',
    },
  ];

  const cobrancaPlans = [
    {
      name: 'Cobrança Start',
      target: 'Autônomos e Pequenos Negócios',
      badge: 'ATÉ 50 COBRANÇAS',
      badgeColor: '#38BDF8',
      popular: false,
      tagline: 'Ideal para autônomos e pequenos negócios em início de automação financeira.',
      priceMonthly: '49,00',
      priceYearly: '39,00',
      periodMonthly: '/mês no plano mensal',
      periodYearly: '/mês no plano anual (R$ 468,00/ano)',
      yearlySavings: 'Economize R$ 120 no plano anual',
      checkoutUrl: 'https://hub.alllogiconline.com.br/checkout?modulo=cobranca&plano=cobranca-start&trial=true',
      features: [
        'Até 50 cobranças ativas por mês',
        'Régua inteligente no WhatsApp (antes, no dia e após vencimento)',
        'Pix Copia e Cola instantâneo integrado ao Asaas',
        'Taxa fixa imbatível de R$ 1,99 por Pix recebido',
        'Painel em tempo real de status de pagamentos',
        '14 dias de teste grátis — sem fidelidade',
      ],
      cta: 'Começar Teste Grátis',
    },
    {
      name: 'Cobrança Pro',
      target: 'Empresas com Cobrança Recorrente',
      badge: 'MAIS ESCOLHIDO',
      badgeColor: '#00F5D4',
      popular: true,
      tagline: 'Perfeito para empresas com volume consistente de recebimentos recorrentes.',
      priceMonthly: '89,00',
      priceYearly: '69,00',
      periodMonthly: '/mês no plano mensal',
      periodYearly: '/mês no plano anual (R$ 828,00/ano)',
      yearlySavings: 'Economize R$ 240 no plano anual',
      checkoutUrl: 'https://hub.alllogiconline.com.br/checkout?modulo=cobranca&plano=cobranca-pro&trial=true',
      features: [
        'Até 200 cobranças ativas por mês',
        'Régua ativa multicanal com inteligência preventiva',
        'Pix Copia e Cola + Boleto com taxa fixa de R$ 1,99',
        'Recuperação amigável de inadimplência no WhatsApp',
        'Relatórios financeiros e métricas de liquidação',
        '14 dias de teste grátis — sem fidelidade',
      ],
      cta: 'Começar Teste Grátis',
    },
    {
      name: 'Cobrança Escala',
      target: 'Alto Volume de Faturamento',
      badge: 'ALTA PERFORMANCE',
      badgeColor: '#8B5CF6',
      popular: false,
      tagline: 'Para clínicas, escolas e empresas com centenas de recebimentos mensais.',
      priceMonthly: '169,00',
      priceYearly: '139,00',
      periodMonthly: '/mês no plano mensal',
      periodYearly: '/mês no plano anual (R$ 1.668,00/ano)',
      yearlySavings: 'Economize R$ 360 no plano anual',
      checkoutUrl: 'https://hub.alllogiconline.com.br/checkout?modulo=cobranca&plano=cobranca-escala&trial=true',
      features: [
        'Até 600 cobranças ativas por mês',
        'Automação completa via Webhooks e API',
        'Taxa fixa de R$ 1,99 por Pix recebido',
        'Relatórios executivos e auditoria de fluxo de caixa',
        'Suporte técnico prioritário',
        '14 dias de teste grátis — sem fidelidade',
      ],
      cta: 'Começar Teste Grátis',
    },
  ];

  const reputacaoPlans = [
    {
      name: 'Reputação Start',
      target: 'Profissionais e Pequenos Comércios',
      badge: 'ATÉ 60 ENVIOS',
      badgeColor: '#38BDF8',
      popular: false,
      tagline: 'Ideal para pequenos comércios e profissionais individuais iniciarem no Google Maps.',
      priceMonthly: '49,00',
      priceYearly: '39,00',
      periodMonthly: '/mês no plano mensal',
      periodYearly: '/mês no plano anual (R$ 468,00/ano)',
      yearlySavings: 'Economize R$ 120 no plano anual',
      checkoutUrl: 'https://hub.alllogiconline.com.br/checkout?modulo=reputacao&plano=reputacao-start&trial=true',
      features: [
        'Até 60 solicitações de avaliação por mês',
        'Filtro protetor de satisfação (NPS 1 a 5 estrelas)',
        'Redirecionamento automático com 1 clique para Google Maps',
        'Canal sigiloso de tratamento interno para notas 1 a 3',
        'Disparo no WhatsApp pós-atendimento',
        '14 dias de teste grátis — sem fidelidade',
      ],
      cta: 'Começar Teste Grátis',
    },
    {
      name: 'Reputação Pro',
      target: 'Clínicas, Salões e Restaurantes',
      badge: 'MAIS ESCOLHIDO',
      badgeColor: '#00F5D4',
      popular: true,
      tagline: 'Perfeito para clínicas, salões e negócios com fluxo ativo diário de clientes.',
      priceMonthly: '89,00',
      priceYearly: '69,00',
      periodMonthly: '/mês no plano mensal',
      periodYearly: '/mês no plano anual (R$ 828,00/ano)',
      yearlySavings: 'Economize R$ 240 no plano anual',
      checkoutUrl: 'https://hub.alllogiconline.com.br/checkout?modulo=reputacao&plano=reputacao-pro&trial=true',
      features: [
        'Até 250 solicitações de avaliação por mês',
        'Filtro inteligente protetor de satisfação',
        'Respostas humanizadas geradas por IA no Google Meu Negócio',
        'Otimização do ranking de SEO Local no Google Maps',
        'Relatórios detalhados de satisfação do cliente',
        '14 dias de teste grátis — sem fidelidade',
      ],
      cta: 'Começar Teste Grátis',
    },
    {
      name: 'Reputação Escala',
      target: 'Redes e Franquias Multiunidades',
      badge: 'MÁXIMO ALCANCE',
      badgeColor: '#8B5CF6',
      popular: false,
      tagline: 'Para redes com múltiplas filiais e alto fluxo que buscam dominar o Google da região.',
      priceMonthly: '169,00',
      priceYearly: '139,00',
      periodMonthly: '/mês no plano mensal',
      periodYearly: '/mês no plano anual (R$ 1.668,00/ano)',
      yearlySavings: 'Economize R$ 360 no plano anual',
      checkoutUrl: 'https://hub.alllogiconline.com.br/checkout?modulo=reputacao&plano=reputacao-escala&trial=true',
      features: [
        'Até 750 solicitações de avaliação por mês',
        'Automação completa via Webhooks pós-atendimento',
        'Múltiplas fichas do Google Maps conectadas',
        'Respostas automáticas com IA para 100% dos reviews',
        'Suporte prioritário e onboarding com especialista',
        '14 dias de teste grátis — sem fidelidade',
      ],
      cta: 'Começar Teste Grátis',
    },
  ];

  const gedPlans = [
    {
      name: 'GED Start',
      target: 'Autônomos e Pequenos Escritórios',
      badge: '20 GB EM NUVEM',
      badgeColor: '#38BDF8',
      popular: false,
      tagline: 'Ideal para pequenas empresas que desejam eliminar papéis e controlar prazos.',
      priceMonthly: '49,00',
      priceYearly: '39,00',
      periodMonthly: '/mês no plano mensal',
      periodYearly: '/mês no plano anual (R$ 468,00/ano)',
      yearlySavings: 'Economize R$ 120 no plano anual',
      checkoutUrl: 'https://hub.alllogiconline.com.br/checkout?modulo=ged&plano=ged-start&trial=true',
      features: [
        'Até 20 GB de armazenamento seguro em nuvem isolada',
        'Organização inteligente de contratos e certidões',
        'Busca rápida por palavras-chave e metadados',
        'Acesso seguro via celular, tablet ou desktop',
        'Backup automático diário criptografado',
        '14 dias de teste grátis — sem fidelidade',
      ],
      cta: 'Começar Teste Grátis',
    },
    {
      name: 'GED Pro',
      target: 'Escritórios, Clínicas e Imobiliárias',
      badge: 'MAIS ESCOLHIDO',
      badgeColor: '#00F5D4',
      popular: true,
      tagline: 'Para escritórios e clínicas com fluxo diário de documentos, contratos e prazos.',
      priceMonthly: '89,00',
      priceYearly: '69,00',
      periodMonthly: '/mês no plano mensal',
      periodYearly: '/mês no plano anual (R$ 828,00/ano)',
      yearlySavings: 'Economize R$ 240 no plano anual',
      checkoutUrl: 'https://hub.alllogiconline.com.br/checkout?modulo=ged&plano=ged-pro&trial=true',
      features: [
        'Até 100 GB de armazenamento seguro criptografado',
        'Leitura OCR e extração inteligente de dados com IA',
        'Alertas automáticos de vencimento via WhatsApp',
        'Envio e assinatura digital de documentos em 1 clique',
        'Controle de permissões por usuário e equipe',
        '14 dias de teste grátis — sem fidelidade',
      ],
      cta: 'Começar Teste Grátis',
    },
    {
      name: 'GED Escala',
      target: 'Contabilidades e Grandes Empresas',
      badge: 'ALTO VOLUME',
      badgeColor: '#8B5CF6',
      popular: false,
      tagline: 'Para empresas de alto volume, contabilidades e redes que exigem máxima capacidade.',
      priceMonthly: '169,00',
      priceYearly: '139,00',
      periodMonthly: '/mês no plano mensal',
      periodYearly: '/mês no plano anual (R$ 1.668,00/ano)',
      yearlySavings: 'Economize R$ 360 no plano anual',
      checkoutUrl: 'https://hub.alllogiconline.com.br/checkout?modulo=ged&plano=ged-escala&trial=true',
      features: [
        'Até 300 GB de armazenamento seguro criptografado',
        'Processamento em lote de centenas de PDFs com IA',
        'Alertas corporativos multicanal (WhatsApp e E-mail)',
        'Integração via API com sistemas de gestão e ERPs',
        'Suporte prioritário e migração assistida de arquivos',
        '14 dias de teste grátis — sem fidelidade',
      ],
      cta: 'Começar Teste Grátis',
    },
  ];

  const currentPlans =
    activeCategory === 'combo'
      ? comboPlans
      : activeCategory === 'agenda'
      ? agendaPlans
      : activeCategory === 'atende'
      ? atendePlans
      : activeCategory === 'cobranca'
      ? cobrancaPlans
      : activeCategory === 'reputacao'
      ? reputacaoPlans
      : gedPlans;

  return (
    <section id="planos" style={{ padding: '80px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="cyber-badge" style={{ marginBottom: '14px' }}>
            <span>Tabela Oficial de Preços AllLogic Online</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Planos Oficiais.{' '}
            <span className="gradient-text-glow">Sem pegadinhas ou custos ocultos.</span>
          </h2>
          <p
            style={{
              color: '#94A3B8',
              fontSize: '1.05rem',
              maxWidth: '750px',
              margin: '0 auto 28px',
            }}
          >
            Acesso a 100% dos recursos em todos os planos. Escolha contratar o módulo avulso ou a
            solução completa no Combo Agillex Hub.
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
                padding: '10px 18px',
                borderRadius: '12px',
                backgroundColor:
                  activeCategory === 'combo' ? 'rgba(0, 245, 212, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border:
                  activeCategory === 'combo' ? '1px solid #00F5D4' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeCategory === 'combo' ? '#fff' : '#94A3B8',
                fontWeight: activeCategory === 'combo' ? 700 : 500,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <LayoutDashboard size={16} color={activeCategory === 'combo' ? '#00F5D4' : '#64748B'} />
              Combo Agillex Hub
            </button>

            <button
              onClick={() => setActiveCategory('agenda')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '12px',
                backgroundColor:
                  activeCategory === 'agenda' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border:
                  activeCategory === 'agenda' ? '1px solid #38BDF8' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeCategory === 'agenda' ? '#fff' : '#94A3B8',
                fontWeight: activeCategory === 'agenda' ? 700 : 500,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Calendar size={16} color={activeCategory === 'agenda' ? '#38BDF8' : '#64748B'} />
              Agillex Agenda
            </button>

            <button
              onClick={() => setActiveCategory('atende')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '12px',
                backgroundColor:
                  activeCategory === 'atende' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border:
                  activeCategory === 'atende' ? '1px solid #8B5CF6' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeCategory === 'atende' ? '#fff' : '#94A3B8',
                fontWeight: activeCategory === 'atende' ? 700 : 500,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Bot size={16} color={activeCategory === 'atende' ? '#8B5CF6' : '#64748B'} />
              Agilex Atende
            </button>

            <button
              onClick={() => setActiveCategory('cobranca')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '12px',
                backgroundColor:
                  activeCategory === 'cobranca' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border:
                  activeCategory === 'cobranca' ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeCategory === 'cobranca' ? '#fff' : '#94A3B8',
                fontWeight: activeCategory === 'cobranca' ? 700 : 500,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <CreditCard size={16} color={activeCategory === 'cobranca' ? '#10B981' : '#64748B'} />
              Agillex Cobrança
            </button>

            <button
              onClick={() => setActiveCategory('reputacao')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '12px',
                backgroundColor:
                  activeCategory === 'reputacao' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border:
                  activeCategory === 'reputacao' ? '1px solid #F59E0B' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeCategory === 'reputacao' ? '#fff' : '#94A3B8',
                fontWeight: activeCategory === 'reputacao' ? 700 : 500,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Star size={16} color={activeCategory === 'reputacao' ? '#F59E0B' : '#64748B'} />
              Agillex Reputação
            </button>

            <button
              onClick={() => setActiveCategory('ged')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '12px',
                backgroundColor:
                  activeCategory === 'ged' ? 'rgba(236, 72, 153, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border:
                  activeCategory === 'ged' ? '1px solid #EC4899' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeCategory === 'ged' ? '#fff' : '#94A3B8',
                fontWeight: activeCategory === 'ged' ? 700 : 500,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <FileText size={16} color={activeCategory === 'ged' ? '#EC4899' : '#64748B'} />
              Agillex GED
            </button>
          </div>

          {/* TOGGLE MENSAL / ANUAL */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '999px',
            }}
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                backgroundColor: billingCycle === 'monthly' ? '#00F5D4' : 'transparent',
                color: billingCycle === 'monthly' ? '#060B18' : '#94A3B8',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                backgroundColor: billingCycle === 'yearly' ? '#00F5D4' : 'transparent',
                color: billingCycle === 'yearly' ? '#060B18' : '#94A3B8',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s',
              }}
            >
              <span>Anual</span>
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '2px 8px',
                  borderRadius: '999px',
                  backgroundColor: billingCycle === 'yearly' ? '#060B18' : 'rgba(0, 245, 212, 0.15)',
                  color: billingCycle === 'yearly' ? '#00F5D4' : '#00F5D4',
                  fontWeight: 700,
                }}
              >
                20% OFF
              </span>
            </button>
          </div>
        </div>

        {/* GRID DE PLANOS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              currentPlans.length === 2
                ? 'repeat(auto-fit, minmax(320px, 1fr))'
                : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {currentPlans.map((plan, idx) => {
            const isCustom = plan.priceMonthly === 'Sob Consulta';
            const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly;
            const period =
              billingCycle === 'monthly' ? plan.periodMonthly : plan.periodYearly;

            return (
              <div
                key={idx}
                className="cyber-card"
                style={{
                  padding: '36px 30px',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  border: plan.popular
                    ? '1.5px solid rgba(0, 245, 212, 0.5)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  background: plan.popular
                    ? 'linear-gradient(180deg, rgba(0, 245, 212, 0.05) 0%, rgba(15, 23, 42, 0.6) 100%)'
                    : 'rgba(15, 23, 42, 0.5)',
                  boxShadow: plan.popular
                    ? '0 0 40px rgba(0, 245, 212, 0.12)'
                    : 'none',
                }}
              >
                {plan.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-13px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: plan.popular
                        ? 'linear-gradient(135deg, #00F5D4, #1F6FFF)'
                        : 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                      color: plan.popular ? '#060B18' : '#fff',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '4px 14px',
                      borderRadius: '999px',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
                    {plan.name}
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: '#00F5D4', fontWeight: 600, marginBottom: '10px' }}>
                    {plan.target}
                  </div>
                  <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.5, minHeight: '42px' }}>
                    {plan.tagline}
                  </p>
                </div>

                {/* ÁREA DE PREÇO */}
                <div
                  style={{
                    padding: '20px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    marginBottom: '24px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    {!isCustom && (
                      <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#94A3B8' }}>
                        R$
                      </span>
                    )}
                    <span
                      style={{
                        fontSize: isCustom ? '2rem' : '2.75rem',
                        fontWeight: 900,
                        color: '#fff',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {price}
                    </span>
                    {!isCustom && (
                      <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>
                        {billingCycle === 'monthly' ? '/mês' : '/mês no anual'}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '6px' }}>
                    {billingCycle === 'yearly' ? plan.yearlySavings : plan.periodMonthly}
                  </div>
                </div>

                {/* BOTÃO CTA */}
                <a
                  href={plan.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={plan.popular ? 'cyber-button-primary' : 'cyber-button-secondary'}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '14px 20px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    marginBottom: '26px',
                    transition: 'all 0.2s',
                  }}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight size={16} />
                </a>

                {/* LISTA DE BENEFÍCIOS */}
                <div style={{ marginTop: 'auto' }}>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#64748B',
                      marginBottom: '14px',
                    }}
                  >
                    O que está incluso:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                    {plan.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '0.85rem',
                          color: '#CBD5E1',
                          lineHeight: 1.45,
                        }}
                      >
                        <Check
                          size={16}
                          color={plan.popular ? '#00F5D4' : '#38BDF8'}
                          style={{ flexShrink: 0, marginTop: '2px' }}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* NOTA DE CONFIANÇA */}
        <div
          style={{
            marginTop: '48px',
            padding: '24px',
            borderRadius: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ShieldCheck size={28} color="#00F5D4" />
            <div>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                Garantia de 14 Dias de Teste Grátis
              </div>
              <div style={{ color: '#94A3B8', fontSize: '0.82rem' }}>
                Sem necessidade de cadastrar cartão de crédito. Cancele quando quiser sem multas ou fidelidade.
              </div>
            </div>
          </div>
          <button
            onClick={onOpenTrial}
            className="cyber-button-secondary"
            style={{
              padding: '10px 22px',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
            }}
          >
            Ativar Demonstração Imediata
          </button>
        </div>
      </div>
    </section>
  );
}
