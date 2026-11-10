'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, CheckCircle2, XCircle, Clock, Zap, ShieldCheck, HeartHandshake, FileSearch, CalendarCheck, MessageSquare } from 'lucide-react';

interface TransformationSectionProps {
  onOpenTrial: () => void;
  onSelectProduct?: (productId: 'atende' | 'hub' | 'agenda' | 'cobranca' | 'reputacao' | 'ged') => void;
}

export default function TransformationSection({ onOpenTrial, onSelectProduct }: TransformationSectionProps) {
  const [activeStory, setActiveStory] = useState<'ged' | 'atende' | 'cobranca'>('ged');

  const stories = [
    {
      id: 'ged' as const,
      tabTitle: 'Gestão de Papéis & Documentos',
      badge: 'AGILLEX GED + HUB',
      title: 'Do caos de arquivos físicos à busca inteligente em 2 segundos',
      painTitle: 'A Rotina Tradicional Sem Automação',
      painImage: '/images/dor-papelada-ged.jpg',
      painImageAlt: 'Gestor sobrecarregado com pilhas de papel e pastas no escritório',
      painPoints: [
        'Mesa tomada por pastas suspensas, caixas arquivo e contratos impressos acumulando poeira.',
        'Até 40 minutos perdidos procurando uma única certidão, comprovante ou procuração.',
        'Risco constante de perder prazos de renovação e multas por documentos vencidos.',
        'Frustração de não ter acesso aos arquivos urgentes quando está fora da empresa.',
      ],
      reliefTitle: 'A Paz de Gestão com o Agillex GED',
      reliefImage: '/images/alivio-digital-ged.jpg',
      reliefImageAlt: 'Gestor tranquilo com mesa organizada e celular na mão',
      reliefBadgeText: '⚡ Documento localizado em 1.4s',
      reliefPoints: [
        'Mesa 100% limpa: digitalização com OCR e inteligência artificial que lê o conteúdo.',
        'Pesquisa por palavra-chave: encontre qualquer contrato no celular como no Google.',
        'Alertas preventivos no WhatsApp antes que certidões e contratos expirem.',
        'Assinatura eletrônica em 1 clique e controle com rastreabilidade jurídica.',
      ],
      ctaText: 'Ver Agillex GED na prática',
      productId: 'ged' as const,
    },
    {
      id: 'atende' as const,
      tabTitle: 'Atendimento & Consultas',
      badge: 'AGILEX ATENDE + AGILLEX AGENDA',
      title: 'De noites respondendo WhatsApp a uma agenda cheia e organizada 24/7',
      painTitle: 'O Esgotamento das Mensagens Manuais',
      painImage: '/images/dor-papelada-ged.jpg', // can share or use with overlay
      painImageAlt: 'Profissional estressado com mensagens e agendamentos manuais',
      painPoints: [
        'WhatsApp corporativo apitando na hora do almoço, à noite e aos finais de semana.',
        'Áudios longos de 2 a 3 minutos que ninguém tem tempo de ouvir durante os atendimentos.',
        'No-shows de até 35% por esquecimento de pacientes ou clientes que não confirmaram.',
        'Conflito de horários marcados em duplicidade por controle em cadernos ou planilhas.',
      ],
      reliefTitle: 'A Serenidade da IA Oficial no WhatsApp',
      reliefImage: '/images/agenda-atendimento-saude.jpg',
      reliefImageAlt: 'Profissional de saúde serena com tablet e agenda organizada',
      reliefBadgeText: '✅ 94% menos faltas na agenda',
      reliefPoints: [
        'Atendente IA humanizada respondendo 24 horas por dia em menos de 3 segundos.',
        'Compreende mensagens de áudio perfeitamente, responde em texto claro e empático.',
        'Sincronização imediata com o Google Calendar em página pública exclusiva.',
        'Lembretes ativos anti-falta via WhatsApp 24h e 2h antes com botão de confirmação.',
      ],
      ctaText: 'Ver Agilex Atende & Agenda',
      productId: 'agenda' as const,
    },
  ];

  const current = stories.find((s) => s.id === activeStory) || stories[0];

  return (
    <section
      id="transformacao"
      style={{
        position: 'relative',
        padding: '110px 0',
        backgroundImage: `linear-gradient(180deg, rgba(6, 11, 24, 0.94) 0%, rgba(6, 11, 24, 0.88) 50%, rgba(6, 11, 24, 0.96) 100%), url('/images/parallax-bg.jpg')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderTop: '1px solid rgba(0, 245, 212, 0.15)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.15)',
        overflow: 'hidden',
      }}
    >
      {/* Luz ambiente neon sutil */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 245, 212, 0.08) 0%, rgba(31, 111, 255, 0.04) 50%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              backgroundColor: 'rgba(0, 245, 212, 0.1)',
              border: '1px solid rgba(0, 245, 212, 0.3)',
              color: '#00F5D4',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            <Sparkles size={14} />
            A Transformação na Vida Real
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.9rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '18px',
              color: '#fff',
            }}
          >
            Você não abriu um negócio para passar o dia atolado em{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FF6B6B 0%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              tarefas manuais
            </span>
            .
          </h2>

          <p style={{ fontSize: '1.08rem', color: '#94A3B8', lineHeight: 1.65 }}>
            Veja a diferença entre a rotina desgastante do modelo manual e a tranquilidade de ter uma engenharia digital trabalhando por você 24 horas por dia.
          </p>
        </div>

        {/* NAVEGAÇÃO DE CENÁRIOS (TABS) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '45px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setActiveStory('ged')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              borderRadius: '12px',
              border: activeStory === 'ged' ? '1px solid #00F5D4' : '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: activeStory === 'ged' ? 'rgba(0, 245, 212, 0.15)' : 'rgba(10, 17, 40, 0.6)',
              color: activeStory === 'ged' ? '#00F5D4' : '#94A3B8',
              fontSize: '0.92rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              backdropFilter: 'blur(10px)',
            }}
          >
            <FileSearch size={18} />
            Mesa de Escritório & Documentos (GED)
          </button>

          <button
            onClick={() => setActiveStory('atende')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              borderRadius: '12px',
              border: activeStory === 'atende' ? '1px solid #00F5D4' : '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: activeStory === 'atende' ? 'rgba(0, 245, 212, 0.15)' : 'rgba(10, 17, 40, 0.6)',
              color: activeStory === 'atende' ? '#00F5D4' : '#94A3B8',
              fontSize: '0.92rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              backdropFilter: 'blur(10px)',
            }}
          >
            <CalendarCheck size={18} />
            Atendimento & Agendamentos (WhatsApp IA)
          </button>
        </div>

        {/* CARD PRINCIPAL DE COMPARAÇÃO VISUAL: ANTES vs. DEPOIS */}
        <div
          style={{
            backgroundColor: 'rgba(10, 17, 40, 0.75)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(20px)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 245, 212, 0.08)',
          }}
        >
          {/* Header do Card */}
          <div
            style={{
              padding: '24px 32px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0%, rgba(0, 245, 212, 0.04) 100%)',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: '#00F5D4',
                  textTransform: 'uppercase',
                }}
              >
                {current.badge}
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginTop: '4px' }}>
                {current.title}
              </h3>
            </div>

            <button
              onClick={() => {
                if (onSelectProduct) {
                  onSelectProduct(current.productId);
                } else {
                  onOpenTrial();
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                background: 'rgba(0, 245, 212, 0.12)',
                border: '1px solid rgba(0, 245, 212, 0.35)',
                color: '#00F5D4',
                fontSize: '0.84rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 245, 212, 0.25)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 245, 212, 0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {current.ctaText}
              <ArrowRight size={16} />
            </button>
          </div>

          {/* GRID COMPARATIVO LADO A LADO */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            }}
          >
            {/* LADO ESQUERDO: A DOR (ANTES) */}
            <div
              style={{
                padding: '36px',
                borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: 'rgba(239, 68, 68, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(239, 68, 68, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#EF4444',
                    }}
                  >
                    <XCircle size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#EF4444', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      Antes da Agillex
                    </span>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                      {current.painTitle}
                    </h4>
                  </div>
                </div>

                {/* IMAGEM DA DOR */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    marginBottom: '24px',
                    border: '1px solid rgba(239, 68, 68, 0.25)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <img
                    src={current.painImage}
                    alt={current.painImageAlt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(25%) contrast(105%)',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(6, 11, 24, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#F87171',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                    }}
                  >
                    ⚠️ Sobrecarga & Desperdício de Tempo
                  </div>
                </div>

                {/* LISTA DE DORES */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {current.painPoints.map((point, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.55 }}>
                      <span style={{ color: '#EF4444', flexShrink: 0, marginTop: '2px' }}>✕</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  marginTop: '30px',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  fontSize: '0.8rem',
                  color: '#FCA5A5',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Clock size={16} style={{ flexShrink: 0 }} />
                <span>Média de <strong>18 a 25 horas semanais</strong> perdidas em retrabalho operacional.</span>
              </div>
            </div>

            {/* LADO DIREITO: O ALÍVIO (DEPOIS) */}
            <div
              style={{
                padding: '36px',
                backgroundColor: 'rgba(0, 245, 212, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #1F6FFF 0%, #00F5D4 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#060B18',
                    }}
                  >
                    <CheckCircle2 size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#00F5D4', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      Com a Engenharia Agillex
                    </span>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                      {current.reliefTitle}
                    </h4>
                  </div>
                </div>

                {/* IMAGEM DO ALÍVIO */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    marginBottom: '24px',
                    border: '1px solid rgba(0, 245, 212, 0.35)',
                    boxShadow: '0 10px 30px rgba(0, 245, 212, 0.15)',
                  }}
                >
                  <img
                    src={current.reliefImage}
                    alt={current.reliefImageAlt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(6, 11, 24, 0.9)',
                      backdropFilter: 'blur(10px)',
                      color: '#00F5D4',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      border: '1px solid rgba(0, 245, 212, 0.4)',
                      boxShadow: '0 4px 15px rgba(0, 245, 212, 0.25)',
                    }}
                  >
                    {current.reliefBadgeText}
                  </div>
                </div>

                {/* LISTA DE BENEFÍCIOS */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {current.reliefPoints.map((point, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.88rem', color: '#E2E8F0', lineHeight: 1.55 }}>
                      <span style={{ color: '#00F5D4', flexShrink: 0, marginTop: '2px', fontWeight: 700 }}>✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  marginTop: '30px',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(0, 245, 212, 0.08)',
                  border: '1px solid rgba(0, 245, 212, 0.25)',
                  fontSize: '0.8rem',
                  color: '#A7F3D0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Zap size={16} color="#00F5D4" style={{ flexShrink: 0 }} />
                <span>Recuperação de <strong>até 85% do tempo útil</strong> da sua equipe para focar em vendas e clientes.</span>
              </div>
            </div>
          </div>

          {/* RODAPÉ DO CARD COM CTA DE ALTA CONVERSÃO */}
          <div
            style={{
              padding: '24px 32px',
              backgroundColor: 'rgba(6, 11, 24, 0.95)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ShieldCheck size={20} color="#00F5D4" />
              <span style={{ fontSize: '0.84rem', color: '#CBD5E1' }}>
                Teste sem compromisso por <strong>14 dias grátis</strong>. Sem taxa de setup e cancele quando quiser.
              </span>
            </div>

            <button
              onClick={onOpenTrial}
              className="btn-primary-neon"
              style={{
                padding: '12px 28px',
                fontSize: '0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Sparkles size={16} />
              Quero Esta Tranquilidade no Meu Negócio
            </button>
          </div>
        </div>

        {/* 3 STATS DE IMPACTO RÁPIDO */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginTop: '45px',
          }}
        >
          <div
            style={{
              padding: '22px',
              borderRadius: '16px',
              backgroundColor: 'rgba(10, 17, 40, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#00F5D4', marginBottom: '4px' }}>
              -85%
            </div>
            <div style={{ fontSize: '0.85rem', color: '#E2E8F0', fontWeight: 700, marginBottom: '4px' }}>
              Redução em No-Shows
            </div>
            <div style={{ fontSize: '0.76rem', color: '#94A3B8' }}>
              Lembretes inteligentes no WhatsApp garantem presença e pontualidade.
            </div>
          </div>

          <div
            style={{
              padding: '22px',
              borderRadius: '16px',
              backgroundColor: 'rgba(10, 17, 40, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#38BDF8', marginBottom: '4px' }}>
              2 Segundos
            </div>
            <div style={{ fontSize: '0.85rem', color: '#E2E8F0', fontWeight: 700, marginBottom: '4px' }}>
              Para Achar Qualquer Contrato
            </div>
            <div style={{ fontSize: '0.76rem', color: '#94A3B8' }}>
              OCR com IA categoriza e indexa cada página e cláusula automaticamente.
            </div>
          </div>

          <div
            style={{
              padding: '22px',
              borderRadius: '16px',
              backgroundColor: 'rgba(10, 17, 40, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#10B981', marginBottom: '4px' }}>
              R$ 1,99
            </div>
            <div style={{ fontSize: '0.85rem', color: '#E2E8F0', fontWeight: 700, marginBottom: '4px' }}>
              Taxa Fixa no Pix Asaas
            </div>
            <div style={{ fontSize: '0.76rem', color: '#94A3B8' }}>
              Economize centenas ou milhares de reais por mês em taxas percentuais abusivas.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
