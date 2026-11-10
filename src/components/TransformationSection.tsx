'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Zap,
  ShieldCheck,
  FileSearch,
  CalendarCheck,
  MessageSquare,
  Bot,
} from 'lucide-react';

interface TransformationSectionProps {
  onOpenTrial: () => void;
  onSelectProduct?: (productId: 'atende' | 'hub' | 'agenda' | 'cobranca' | 'reputacao' | 'ged') => void;
}

// Componente utilitário para animação direcional de entrada na rolagem da página
function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  distance = 90,
  style = {},
  className = '',
}: {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  distance?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (inView) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'left':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(${distance}px, 0, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'up':
      default:
        return `translate3d(0, ${distance}px, 0)`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

export default function TransformationSection({ onOpenTrial, onSelectProduct }: TransformationSectionProps) {
  return (
    <section
      id="transformacao"
      style={{
        position: 'relative',
        padding: '120px 0',
        // Fundo Parallax fixo nítido e iluminado (gradiente transparente para destacar o skyline e as partículas)
        backgroundImage: `linear-gradient(180deg, rgba(6, 11, 24, 0.62) 0%, rgba(6, 11, 24, 0.38) 50%, rgba(6, 11, 24, 0.72) 100%), url('/images/parallax-bg.jpg')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderTop: '1px solid rgba(0, 245, 212, 0.35)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.35)',
        overflow: 'hidden',
      }}
    >
      {/* Luz ambiente de fundo neon */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '950px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(0, 245, 212, 0.14) 0%, rgba(31, 111, 255, 0.08) 50%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        
        {/* CABEÇALHO DA SEÇÃO (ANIMAÇÃO DESCENDO DO TOPO) */}
        <RevealOnScroll direction="down" distance={60}>
          <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 60px' }}>
            <div
              className="pulse-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '999px',
                backgroundColor: 'rgba(0, 245, 212, 0.18)',
                border: '1px solid rgba(0, 245, 212, 0.5)',
                color: '#00F5D4',
                fontSize: '0.82rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Sparkles size={16} />
              A Transformação na Vida Real
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '20px',
                color: '#fff',
                textShadow: '0 4px 25px rgba(0,0,0,0.9)',
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

            <p style={{ fontSize: '1.14rem', color: '#E2E8F0', lineHeight: 1.7, textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>
              Veja o impacto direto: de mesas caóticas e celulares apitando sem parar à tranquilidade de uma engenharia digital trabalhando por você 24 horas por dia.
            </p>
          </div>
        </RevealOnScroll>

        {/* =========================================================================
            HISTÓRIA 1: GESTÃO DE DOCUMENTOS & PAPÉIS (LADO A LADO COM ENTRADA LATERAL)
        ========================================================================= */}
        <div
          style={{
            backgroundColor: 'rgba(10, 17, 40, 0.84)',
            borderRadius: '24px',
            border: '1px solid rgba(0, 245, 212, 0.35)',
            backdropFilter: 'blur(20px)',
            overflow: 'hidden',
            marginBottom: '60px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75), 0 0 35px rgba(0, 245, 212, 0.1)',
          }}
        >
          {/* Header do Caso 1 */}
          <div
            style={{
              padding: '24px 32px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              background: 'linear-gradient(90deg, rgba(0, 245, 212, 0.08) 0%, rgba(31, 111, 255, 0.06) 100%)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #00F5D4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(0, 245, 212, 0.3)',
                }}
              >
                <FileSearch size={22} color="#060B18" strokeWidth={2.4} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#00F5D4', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  CASO 01 • AGILLEX GED
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                  Da Mesa Lotada de Papelada à Busca Inteligente em 2 Segundos
                </h3>
              </div>
            </div>

            <button
              onClick={() => onSelectProduct ? onSelectProduct('ged') : onOpenTrial()}
              className="action-btn-hover"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                background: 'rgba(0, 245, 212, 0.15)',
                border: '1px solid rgba(0, 245, 212, 0.4)',
                color: '#00F5D4',
                fontSize: '0.84rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Conhecer Agillex GED
              <ArrowRight size={16} />
            </button>
          </div>

          {/* GRID COM AS DUAS FOTOS LADO A LADO - ANIMAÇÕES LATERAIS CRUZADAS */}
          <div
            style={{
              padding: '36px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              overflow: 'hidden',
            }}
          >
            {/* LADO ESQUERDO: O ANTES (DESLIZA DA ESQUERDA PARA A DIREITA) */}
            <RevealOnScroll direction="left" distance={110}>
              <div
                className="hover-card-pain"
                style={{
                  borderRadius: '18px',
                  backgroundColor: 'rgba(239, 68, 68, 0.05)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'all 0.35s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(239, 68, 68, 0.18)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#EF4444',
                      }}
                    >
                      <XCircle size={18} />
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#EF4444', textTransform: 'uppercase' }}>
                      Antes: Caos de Papéis & Sobrecarga
                    </span>
                  </div>

                  {/* Foto com Zoom no Hover */}
                  <div
                    className="photo-frame"
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '240px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      marginBottom: '20px',
                      border: '1px solid rgba(239, 68, 68, 0.35)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                    }}
                  >
                    <img
                      src="/images/dor-papelada-ged.jpg"
                      alt="Gestor sobrecarregado com pilhas de papel e pastas"
                      className="photo-zoom"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'contrast(105%)',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        padding: '5px 12px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(6, 11, 24, 0.88)',
                        backdropFilter: 'blur(8px)',
                        color: '#F87171',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        border: '1px solid rgba(239, 68, 68, 0.35)',
                      }}
                    >
                      ⚠️ Pastas A-Z acumulando poeira
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: '#CBD5E1' }}>
                      <span style={{ color: '#EF4444', fontWeight: 800 }}>✕</span>
                      <span>Mesa tomada por documentos físicos, pastas de arquivo e comprovantes.</span>
                    </li>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: '#CBD5E1' }}>
                      <span style={{ color: '#EF4444', fontWeight: 800 }}>✕</span>
                      <span>Até 40 minutos perdidos procurando uma única certidão ou procuração.</span>
                    </li>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: '#CBD5E1' }}>
                      <span style={{ color: '#EF4444', fontWeight: 800 }}>✕</span>
                      <span>Risco de multas e contratos perdidos por falta de alerta de vencimento.</span>
                    </li>
                  </ul>
                </div>

                <div
                  style={{
                    marginTop: '20px',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(239, 68, 68, 0.08)',
                    fontSize: '0.78rem',
                    color: '#FCA5A5',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Clock size={16} />
                  <span>Média de <strong>18 a 25 horas semanais</strong> perdidas em arquivos manuais.</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* LADO DIREITO: O DEPOIS (DESLIZA DA DIREITA PARA A ESQUERDA) */}
            <RevealOnScroll direction="right" distance={110} delay={120}>
              <div
                className="hover-card-relief"
                style={{
                  borderRadius: '18px',
                  backgroundColor: 'rgba(0, 245, 212, 0.05)',
                  border: '1px solid rgba(0, 245, 212, 0.38)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'all 0.35s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
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
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#00F5D4', textTransform: 'uppercase' }}>
                      Depois: Organização Inteligente com IA
                    </span>
                  </div>

                  {/* Foto com Zoom no Hover */}
                  <div
                    className="photo-frame"
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '240px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      marginBottom: '20px',
                      border: '1px solid rgba(0, 245, 212, 0.45)',
                      boxShadow: '0 10px 30px rgba(0, 245, 212, 0.2)',
                    }}
                  >
                    <img
                      src="/images/alivio-digital-ged.jpg"
                      alt="Gestor tranquilo em mesa limpa com celular"
                      className="photo-zoom"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <div
                      className="floating-card-1"
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        padding: '6px 14px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(6, 11, 24, 0.92)',
                        backdropFilter: 'blur(10px)',
                        color: '#00F5D4',
                        fontSize: '0.76rem',
                        fontWeight: 800,
                        border: '1px solid rgba(0, 245, 212, 0.5)',
                        boxShadow: '0 4px 15px rgba(0, 245, 212, 0.3)',
                      }}
                    >
                      ⚡ Contrato localizado em 1.4s no celular
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: '#E2E8F0' }}>
                      <span style={{ color: '#00F5D4', fontWeight: 800 }}>✓</span>
                      <span>Mesa 100% limpa com digitalização OCR e leitura de cláusulas por IA.</span>
                    </li>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: '#E2E8F0' }}>
                      <span style={{ color: '#00F5D4', fontWeight: 800 }}>✓</span>
                      <span>Pesquisa instantânea por palavras-chave em qualquer dispositivo móvel.</span>
                    </li>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: '#E2E8F0' }}>
                      <span style={{ color: '#00F5D4', fontWeight: 800 }}>✓</span>
                      <span>Alertas automáticos no WhatsApp antes que certidões ou contratos expirem.</span>
                    </li>
                  </ul>
                </div>

                <div
                  style={{
                    marginTop: '20px',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(0, 245, 212, 0.08)',
                    fontSize: '0.78rem',
                    color: '#A7F3D0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Zap size={16} color="#00F5D4" />
                  <span>Mais de <strong>90% de economia de espaço físico</strong> e tranquilidade jurídica total.</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* =========================================================================
            HISTÓRIA 2: ATENDIMENTO & CONSULTAS (LADO A LADO COM ENTRADA LATERAL)
        ========================================================================= */}
        <div
          style={{
            backgroundColor: 'rgba(10, 17, 40, 0.84)',
            borderRadius: '24px',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            backdropFilter: 'blur(20px)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75), 0 0 35px rgba(56, 189, 248, 0.1)',
          }}
        >
          {/* Header do Caso 2 */}
          <div
            style={{
              padding: '24px 32px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.08) 0%, rgba(0, 245, 212, 0.06) 100%)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #1F6FFF 0%, #00F5D4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(0, 245, 212, 0.3)',
                }}
              >
                <CalendarCheck size={22} color="#060B18" strokeWidth={2.4} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#00F5D4', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  CASO 02 • AGILEX ATENDE + AGILLEX AGENDA
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                  Do WhatsApp Apitando Fora de Hora à Agenda Cheia e Sincronizada 24/7
                </h3>
              </div>
            </div>

            <button
              onClick={() => onSelectProduct ? onSelectProduct('agenda') : onOpenTrial()}
              className="action-btn-hover"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                background: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                color: '#38BDF8',
                fontSize: '0.84rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Conhecer Agilex Atende & Agenda
              <ArrowRight size={16} />
            </button>
          </div>

          {/* GRID COM AS DUAS IMAGENS LADO A LADO - ANIMAÇÕES LATERAIS CRUZADAS */}
          <div
            style={{
              padding: '36px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              overflow: 'hidden',
            }}
          >
            {/* CARD 1: A DOR (DESLIZA DA ESQUERDA PARA A DIREITA) */}
            <RevealOnScroll direction="left" distance={110}>
              <div
                className="hover-card-pain"
                style={{
                  borderRadius: '18px',
                  backgroundColor: 'rgba(239, 68, 68, 0.05)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'all 0.35s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(239, 68, 68, 0.18)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#EF4444',
                      }}
                    >
                      <XCircle size={18} />
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#EF4444', textTransform: 'uppercase' }}>
                      Antes: O Esgotamento do Atendimento Manual
                    </span>
                  </div>

                  {/* Foto com Zoom no Hover */}
                  <div
                    className="photo-frame"
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '240px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      marginBottom: '20px',
                      border: '1px solid rgba(239, 68, 68, 0.35)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                    }}
                  >
                    <img
                      src="/images/dor-atendimento-whatsapp.jpg"
                      alt="Recepcionista estressada com múltiplos celulares e anotações"
                      className="photo-zoom"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'contrast(105%)',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        padding: '5px 12px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(6, 11, 24, 0.88)',
                        backdropFilter: 'blur(8px)',
                        color: '#F87171',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        border: '1px solid rgba(239, 68, 68, 0.35)',
                      }}
                    >
                      ⚠️ 2 celulares tocando + áudios acumulados
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: '#CBD5E1' }}>
                      <span style={{ color: '#EF4444', fontWeight: 800 }}>✕</span>
                      <span>Mensagens de clientes perdidas ou respondidas com horas de atraso.</span>
                    </li>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: '#CBD5E1' }}>
                      <span style={{ color: '#EF4444', fontWeight: 800 }}>✕</span>
                      <span>No-shows de até 35% por falta de confirmação antecipada.</span>
                    </li>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: '#CBD5E1' }}>
                      <span style={{ color: '#EF4444', fontWeight: 800 }}>✕</span>
                      <span>Noites e fins de semana interrompidos por dúvidas repetitivas.</span>
                    </li>
                  </ul>
                </div>

                <div
                  style={{
                    marginTop: '20px',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(239, 68, 68, 0.08)',
                    fontSize: '0.78rem',
                    color: '#FCA5A5',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Clock size={16} />
                  <span>Recepcionistas gastam mais de <strong>60% do expediente</strong> respondendo o WhatsApp.</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* CARD 2: O ALÍVIO (DESLIZA DA DIREITA PARA A ESQUERDA) */}
            <RevealOnScroll direction="right" distance={110} delay={120}>
              <div
                className="hover-card-relief"
                style={{
                  borderRadius: '18px',
                  backgroundColor: 'rgba(0, 245, 212, 0.05)',
                  border: '1px solid rgba(0, 245, 212, 0.38)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  position: 'relative',
                  transition: 'all 0.35s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
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
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#00F5D4', textTransform: 'uppercase' }}>
                      Depois: A Serenidade da IA Oficial no WhatsApp
                    </span>
                  </div>

                  {/* Foto com Postura Natural e Balões Flutuantes Animados */}
                  <div
                    className="photo-frame"
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '240px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      marginBottom: '20px',
                      border: '1px solid rgba(0, 245, 212, 0.45)',
                      boxShadow: '0 10px 30px rgba(0, 245, 212, 0.25)',
                    }}
                  >
                    <img
                      src="/images/agenda-atendimento-saude.jpg?v=2"
                      alt="Médica serena em consultório moderno com agenda organizada no notebook"
                      className="photo-zoom"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />

                    {/* Balão 1 Flutuante: Notificação de Áudio Recebido */}
                    <div
                      className="floating-card-1"
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'rgba(6, 11, 24, 0.94)',
                        backdropFilter: 'blur(10px)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        border: '1px solid rgba(0, 245, 212, 0.45)',
                        fontSize: '0.72rem',
                        color: '#E2E8F0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.7)',
                      }}
                    >
                      <MessageSquare size={13} color="#00F5D4" />
                      <span>Áudio recebido: <i>"Tem horário para quinta às 15h?"</i></span>
                    </div>

                    {/* Balão 2 Flutuante: Resposta da IA Agillex */}
                    <div
                      className="floating-card-2"
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        backgroundColor: 'rgba(6, 11, 24, 0.95)',
                        backdropFilter: 'blur(12px)',
                        padding: '8px 14px',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 245, 212, 0.55)',
                        fontSize: '0.74rem',
                        color: '#00F5D4',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 6px 20px rgba(0, 245, 212, 0.35)',
                      }}
                    >
                      <Bot size={15} color="#00F5D4" />
                      <span>IA Agillex: <strong>Consulta confirmada na agenda ✅</strong></span>
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: '#E2E8F0' }}>
                      <span style={{ color: '#00F5D4', fontWeight: 800 }}>✓</span>
                      <span>Atendimento oficial 24/7 que compreende mensagens de áudio perfeitamente.</span>
                    </li>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: '#E2E8F0' }}>
                      <span style={{ color: '#00F5D4', fontWeight: 800 }}>✓</span>
                      <span>Sincronização imediata no Google Calendar com bloqueio de conflitos.</span>
                    </li>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: '#E2E8F0' }}>
                      <span style={{ color: '#00F5D4', fontWeight: 800 }}>✓</span>
                      <span>Lembretes anti-falta automáticos reduzem o no-show em até 85%.</span>
                    </li>
                  </ul>
                </div>

                <div
                  style={{
                    marginTop: '20px',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(0, 245, 212, 0.08)',
                    fontSize: '0.78rem',
                    color: '#A7F3D0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Zap size={16} color="#00F5D4" />
                  <span>Economia média de <strong>R$ 1.800/mês</strong> em recepcionistas adicionais e zero perda de clientes.</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* RODAPÉ DO CARD COM CTA DE CONVERSÃO (DESLIZA SUBINDO) */}
          <RevealOnScroll direction="up" distance={50} delay={150}>
            <div
              style={{
                padding: '24px 32px',
                backgroundColor: 'rgba(6, 11, 24, 0.96)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <ShieldCheck size={20} color="#00F5D4" />
                <span style={{ fontSize: '0.85rem', color: '#E2E8F0' }}>
                  Experimente sem riscos por <strong>14 dias grátis</strong>. Implantação rápida e sem fidelidade.
                </span>
              </div>

              <button
                onClick={onOpenTrial}
                className="btn-primary-neon"
                style={{
                  padding: '12px 28px',
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Sparkles size={16} />
                Quero Esta Tranquilidade no Meu Negócio
              </button>
            </div>
          </RevealOnScroll>
        </div>

      </div>

      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(0, 245, 212, 0.25);
            border-color: rgba(0, 245, 212, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 245, 212, 0.6);
            border-color: rgba(0, 245, 212, 0.9);
          }
        }
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes floatSlowReverse {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(6px);
          }
        }
        .pulse-badge {
          animation: pulseGlow 3s infinite ease-in-out;
        }
        .floating-card-1 {
          animation: floatSlow 4s infinite ease-in-out;
        }
        .floating-card-2 {
          animation: floatSlowReverse 4.5s infinite ease-in-out;
        }

        /* EFEITOS DE MOUSE OVER (HOVER) */
        :global(.hover-card-pain:hover) {
          transform: translateY(-8px) !important;
          border-color: rgba(239, 68, 68, 0.7) !important;
          box-shadow: 0 18px 45px rgba(239, 68, 68, 0.25) !important;
        }
        :global(.hover-card-relief:hover) {
          transform: translateY(-8px) !important;
          border-color: rgba(0, 245, 212, 0.8) !important;
          box-shadow: 0 18px 50px rgba(0, 245, 212, 0.35) !important;
        }
        :global(.photo-frame:hover .photo-zoom) {
          transform: scale(1.08) !important;
        }
        :global(.action-btn-hover) {
          transition: all 0.25s ease;
        }
        :global(.action-btn-hover:hover) {
          background-color: rgba(0, 245, 212, 0.3) !important;
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(0, 245, 212, 0.5);
        }
      `}</style>
    </section>
  );
}
