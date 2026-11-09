'use client';

import React from 'react';
import {
  Calendar,
  Bot,
  LayoutDashboard,
  CreditCard,
  Star,
  FileText,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Zap,
} from 'lucide-react';

interface ProductsOverviewTableProps {
  onSelectProduct: (productId: 'atende' | 'hub' | 'agenda' | 'cobranca' | 'reputacao' | 'ged') => void;
  onOpenTrial: () => void;
}

export const AGILLEX_PRODUCTS = [
  {
    id: 'agenda' as const,
    name: 'Agillex Agenda',
    category: 'Agendamento Online 24/7',
    badge: 'AUTÔNOMOS & EQUIPES',
    color: '#38BDF8',
    bgColor: 'rgba(56, 189, 248, 0.12)',
    borderColor: 'rgba(56, 189, 248, 0.3)',
    icon: Calendar,
    tagline: 'Página pública exclusiva aberta 24/7 sincronizada com Google Calendar.',
    solves: 'Elimina trocas infinitas de mensagens, evita horários duplicados e reduz faltas em até 85%.',
    keyFeatures: [
      'Página pública exclusiva (agenda.agillex.com.br/seu-nome)',
      'Sincronização bidirecional em tempo real com Google Calendar',
      'Lembretes e confirmações automáticas no WhatsApp',
      '1 ou múltiplos profissionais com escalas individuais',
    ],
    audience: 'Manicures, barbeiros, terapeutas, psicólogos, clínicas, consultórios e salões',
    pricing: 'A partir de R$ 49,90/mês (ou R$ 39,90 no anual)',
    availability: 'Módulo Avulso Independente OU incluso no Combo Hub Pro',
    trialDays: '14 dias grátis',
  },
  {
    id: 'atende' as const,
    name: 'Agilex Atende',
    category: 'Atendente com IA no WhatsApp',
    badge: 'IA OFICIAL META',
    color: '#8B5CF6',
    bgColor: 'rgba(139, 92, 246, 0.12)',
    borderColor: 'rgba(139, 92, 246, 0.3)',
    icon: Bot,
    tagline: 'Inteligência Artificial que conversa por texto e áudio de voz dia e noite.',
    solves: 'Acaba com a demora de resposta que faz o cliente fechar com o concorrente.',
    keyFeatures: [
      'Compreende mensagens de texto e áudios de voz com precisão',
      'Base de conhecimento RAG com tabela de preços e regras do seu negócio',
      'Transbordo humano em 1 clique preservando todo o histórico',
      'Sem consumo extra de tokens de IA e sem taxa de setup',
    ],
    audience: 'Empresas e autônomos que recebem alto volume de dúvidas no WhatsApp',
    pricing: 'A partir de R$ 99,90/mês (ou R$ 79,90 no anual)',
    availability: 'Módulo Avulso Independente OU incluso no Combo Hub Pro',
    trialDays: '14 dias grátis',
  },
  {
    id: 'hub' as const,
    name: 'Agillex Hub',
    category: 'Plataforma & Motor Unificado',
    badge: 'SUITE COMPLETA',
    color: '#00F5D4',
    bgColor: 'rgba(0, 245, 212, 0.12)',
    borderColor: 'rgba(0, 245, 212, 0.3)',
    icon: LayoutDashboard,
    tagline: 'O centro operacional unificado com CRM Kanban, Agenda, IA e Checkout.',
    solves: 'Substitui 4 sistemas caros e desconectados por uma plataforma integrada.',
    keyFeatures: [
      'Agrupa Agilex Atende + Agillex Agenda + CRM Kanban + Checkout',
      'Funil de vendas visual com estágios e movimentação em tempo real',
      'Painel gerencial multiempresa e multiusuário',
      'Taxa fixa de apenas R$ 1,99 por Pix via Asaas integrado',
    ],
    audience: 'Negócios com equipe que querem centralizar vendas, agenda e atendimento',
    pricing: 'Combo Pro por R$ 249,90/mês (ou R$ 199,90 no anual)',
    availability: 'Plataforma Completa com todos os módulos integrados',
    trialDays: '14 dias grátis',
  },
  {
    id: 'cobranca' as const,
    name: 'Agillex Cobrança',
    category: 'Régua Ativa & Pix R$ 1,99',
    badge: 'TAXA FIXA ASAAS',
    color: '#10B981',
    bgColor: 'rgba(16, 185, 129, 0.12)',
    borderColor: 'rgba(16, 185, 129, 0.3)',
    icon: CreditCard,
    tagline: 'Notificações inteligentes no WhatsApp com Pix Copia e Cola instantâneo.',
    solves: 'Recupera inadimplência e automatiza a cobrança sem constrangimento manual.',
    keyFeatures: [
      'Régua ativa com 3 disparos: antes, no dia e após o vencimento',
      'Pix Copia e Cola imediato com taxa fixa de apenas R$ 1,99',
      'Sem porcentagem sobre o faturamento (zero comissão abusiva)',
      'Painel em tempo real de liquidações e extrato financeiro',
    ],
    audience: 'Prestadores de serviço, escolas, academias, clínicas e assinaturas recorrentes',
    pricing: 'A partir de R$ 49,00/mês (ou R$ 39,00 no anual)',
    availability: 'Módulo Avulso Independente (integração via Asaas)',
    trialDays: '14 dias grátis',
  },
  {
    id: 'reputacao' as const,
    name: 'Agillex Reputação',
    category: 'Acelerador Google 5 Estrelas',
    badge: 'FILTRO PROTETOR',
    color: '#F59E0B',
    bgColor: 'rgba(245, 158, 11, 0.12)',
    borderColor: 'rgba(245, 158, 11, 0.3)',
    icon: Star,
    tagline: 'Transforma atendimentos em avaliações 5 estrelas no Google Maps.',
    solves: 'Impulsiona o SEO local no Google Maps e protege a marca filtrando insatisfações.',
    keyFeatures: [
      'Filtro inteligente de NPS: notas 4 e 5 vão direto para o Google Maps',
      'Notas 1 a 3 são canalizadas em sigilo para o gerente resolver',
      'Geração de respostas inteligentes com IA para o Google Meu Negócio',
      'Disparo automático no WhatsApp após a conclusão do serviço',
    ],
    audience: 'Clínicas, consultórios, salões, restaurantes e comércio local',
    pricing: 'A partir de R$ 49,00/mês (ou R$ 39,00 no anual)',
    availability: 'Módulo Avulso Independente',
    trialDays: '14 dias grátis',
  },
  {
    id: 'ged' as const,
    name: 'Agillex GED',
    category: 'Gestão de Documentos com OCR & IA',
    badge: 'OCR & ALERTAS',
    color: '#EC4899',
    bgColor: 'rgba(236, 72, 153, 0.12)',
    borderColor: 'rgba(236, 72, 153, 0.3)',
    icon: FileText,
    tagline: 'Cofre digital seguro que lê contratos e avisa vencimentos no WhatsApp.',
    solves: 'Acaba com multas por alvarás e certidões vencidas e perda de documentos.',
    keyFeatures: [
      'Leitura de fotos e PDFs com OCR e IA (extração automática de dados)',
      'Alertas preventivos de vencimento diretamente no WhatsApp',
      'Assinatura digital e compartilhamento seguro em 1 clique',
      'Armazenamento em nuvem isolada e criptografia de ponta a ponta',
    ],
    audience: 'Contabilidades, imobiliárias, advocacias, clínicas e empresas com alto volume documental',
    pricing: 'A partir de R$ 49,00/mês (ou R$ 39,00 no anual)',
    availability: 'Módulo Avulso Independente',
    trialDays: '14 dias grátis',
  },
];

export default function ProductsOverviewTable({
  onSelectProduct,
  onOpenTrial,
}: ProductsOverviewTableProps) {
  return (
    <section
      id="tabela-produtos"
      style={{
        padding: '90px 24px',
        position: 'relative',
        backgroundColor: 'rgba(6, 11, 24, 0.8)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* CABEÇALHO DA SEÇÃO */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="cyber-badge" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} color="#00F5D4" />
            <span>Ecossistema Modular • 6 Soluções Independentes ou 100% Integradas</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Conheça os 6 Produtos da{' '}
            <span className="gradient-text-glow">Família Agillex.</span>
          </h2>

          <p
            style={{
              color: '#94A3B8',
              fontSize: '1.08rem',
              maxWidth: '820px',
              margin: '0 auto 24px',
              lineHeight: 1.6,
            }}
          >
            Não force sua empresa a pagar por ferramentas que você não vai usar. Na Agillex,{' '}
            <strong style={{ color: '#00F5D4' }}>cada produto funciona de forma independente</strong>{' '}
            com contratação avulsa (a partir de R$ 49,90/mês) — ou você pode unificar tudo com economia máxima no{' '}
            <strong style={{ color: '#38BDF8' }}>Combo Agillex Hub</strong>.
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'rgba(0, 245, 212, 0.08)',
              border: '1px solid rgba(0, 245, 212, 0.25)',
              borderRadius: '999px',
              padding: '8px 20px',
              fontSize: '0.85rem',
              color: '#00F5D4',
              fontWeight: 600,
            }}
          >
            <Zap size={16} />
            <span>Escolha um produto abaixo para testar o simulador interativo em tempo real</span>
          </div>
        </div>

        {/* TABELA COMPARATIVA DESKTOP (Exibida em telas grandes) */}
        <div
          className="desktop-table-container"
          style={{
            overflowX: 'auto',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backgroundColor: 'rgba(15, 23, 42, 0.55)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              fontSize: '0.9rem',
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                }}
              >
                <th style={{ padding: '20px 24px', color: '#E2E8F0', fontWeight: 700, width: '240px' }}>
                  Produto & Categoria
                </th>
                <th style={{ padding: '20px 20px', color: '#E2E8F0', fontWeight: 700, minWidth: '220px' }}>
                  O Que Resolve
                </th>
                <th style={{ padding: '20px 20px', color: '#E2E8F0', fontWeight: 700, minWidth: '250px' }}>
                  Recursos em Destaque
                </th>
                <th style={{ padding: '20px 20px', color: '#E2E8F0', fontWeight: 700, minWidth: '180px' }}>
                  Para Quem É
                </th>
                <th style={{ padding: '20px 20px', color: '#E2E8F0', fontWeight: 700, width: '180px' }}>
                  Contratação
                </th>
                <th style={{ padding: '20px 24px', color: '#E2E8F0', fontWeight: 700, width: '160px', textAlign: 'center' }}>
                  Simulador
                </th>
              </tr>
            </thead>
            <tbody>
              {AGILLEX_PRODUCTS.map((prod, index) => {
                const Icon = prod.icon;
                return (
                  <tr
                    key={prod.id}
                    style={{
                      borderBottom:
                        index < AGILLEX_PRODUCTS.length - 1
                          ? '1px solid rgba(255, 255, 255, 0.05)'
                          : 'none',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    {/* COLUNA 1: PRODUTO */}
                    <td style={{ padding: '24px', verticalAlign: 'top' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            backgroundColor: prod.bgColor,
                            border: `1px solid ${prod.borderColor}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: prod.color,
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={22} />
                        </div>
                        <div>
                          <div
                            style={{
                              fontWeight: 800,
                              fontSize: '1.05rem',
                              color: '#fff',
                              marginBottom: '2px',
                            }}
                          >
                            {prod.name}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: prod.color, fontWeight: 600 }}>
                            {prod.category}
                          </div>
                          <div
                            style={{
                              marginTop: '8px',
                              display: 'inline-block',
                              fontSize: '0.68rem',
                              fontWeight: 700,
                              letterSpacing: '0.04em',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              backgroundColor: prod.bgColor,
                              color: prod.color,
                              border: `1px solid ${prod.borderColor}`,
                            }}
                          >
                            {prod.badge}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* COLUNA 2: O QUE RESOLVE */}
                    <td style={{ padding: '24px 20px', verticalAlign: 'top', color: '#CBD5E1', lineHeight: 1.5 }}>
                      <div style={{ fontWeight: 600, color: '#fff', marginBottom: '6px' }}>
                        {prod.solves}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                        {prod.tagline}
                      </div>
                    </td>

                    {/* COLUNA 3: RECURSOS CHAVE */}
                    <td style={{ padding: '24px 20px', verticalAlign: 'top' }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {prod.keyFeatures.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '8px',
                              fontSize: '0.82rem',
                              color: '#94A3B8',
                              lineHeight: 1.4,
                            }}
                          >
                            <CheckCircle2
                              size={14}
                              color={prod.color}
                              style={{ flexShrink: 0, marginTop: '2px' }}
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </td>

                    {/* COLUNA 4: PÚBLICO */}
                    <td style={{ padding: '24px 20px', verticalAlign: 'top', color: '#94A3B8', fontSize: '0.82rem', lineHeight: 1.5 }}>
                      <span style={{ color: '#E2E8F0', fontWeight: 500 }}>{prod.audience}</span>
                    </td>

                    {/* COLUNA 5: CONTRATAÇÃO & PREÇO */}
                    <td style={{ padding: '24px 20px', verticalAlign: 'top' }}>
                      <div style={{ fontWeight: 700, color: '#00F5D4', fontSize: '0.92rem', marginBottom: '4px' }}>
                        {prod.pricing}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', lineHeight: 1.4 }}>
                        {prod.availability}
                      </div>
                      <div
                        style={{
                          marginTop: '6px',
                          fontSize: '0.72rem',
                          color: '#38BDF8',
                          fontWeight: 600,
                        }}
                      >
                        ✓ {prod.trialDays}
                      </div>
                    </td>

                    {/* COLUNA 6: AÇÃO INTERATIVA */}
                    <td style={{ padding: '24px', verticalAlign: 'middle', textAlign: 'center' }}>
                      <button
                        onClick={() => onSelectProduct(prod.id)}
                        className="cyber-button-secondary"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '10px 16px',
                          borderRadius: '10px',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                          width: '100%',
                          justifyContent: 'center',
                        }}
                      >
                        <span>Testar ao Vivo</span>
                        <ArrowRight size={14} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* VERSÃO MOBILE: CARDS RESPONSIVOS (Exibidos em telas pequenas) */}
        <div className="mobile-cards-container" style={{ display: 'none', flexDirection: 'column', gap: '16px' }}>
          {AGILLEX_PRODUCTS.map((prod) => {
            const Icon = prod.icon;
            return (
              <div
                key={prod.id}
                className="cyber-card"
                style={{
                  padding: '24px',
                  borderRadius: '20px',
                  border: `1px solid ${prod.borderColor}`,
                  backgroundColor: 'rgba(15, 23, 42, 0.7)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: prod.bgColor,
                      border: `1px solid ${prod.borderColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: prod.color,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>
                      {prod.name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: prod.color, fontWeight: 600 }}>
                      {prod.category}
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: '0.9rem', color: '#E2E8F0', fontWeight: 600, marginBottom: '12px' }}>
                  {prod.solves}
                </div>

                <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginBottom: '16px' }}>
                  <strong>Indicado para:</strong> {prod.audience}
                </div>

                <div
                  style={{
                    padding: '12px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    marginBottom: '16px',
                  }}
                >
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#00F5D4' }}>
                    {prod.pricing}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                    {prod.availability}
                  </div>
                </div>

                <button
                  onClick={() => onSelectProduct(prod.id)}
                  className="cyber-button-primary"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                  }}
                >
                  <span>Ver Simulador Interativo</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* BANNER INFORMATIVO FINAL */}
        <div
          style={{
            marginTop: '36px',
            padding: '24px 30px',
            borderRadius: '18px',
            backgroundColor: 'rgba(31, 111, 255, 0.06)',
            border: '1px solid rgba(31, 111, 255, 0.2)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div>
            <div style={{ fontWeight: 800, color: '#fff', fontSize: '1.05rem', marginBottom: '4px' }}>
              Dúvida sobre qual combinação faz mais sentido para o seu negócio?
            </div>
            <div style={{ color: '#94A3B8', fontSize: '0.88rem' }}>
              Comece agora com 14 dias gratuitos no módulo de sua escolha. Não pedimos cartão de crédito e você pode alterar ou migrar a qualquer momento.
            </div>
          </div>
          <button
            onClick={onOpenTrial}
            className="btn-primary-neon"
            style={{ padding: '12px 28px', fontSize: '0.9rem', whiteSpace: 'nowrap' }}
          >
            Iniciar Demonstração Gratuita
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-table-container {
            display: none !important;
          }
          .mobile-cards-container {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
