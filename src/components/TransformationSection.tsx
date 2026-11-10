'use client';

import React, { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
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
  Sliders,
  MoveHorizontal,
} from 'lucide-react';

interface TransformationSectionProps {
  onOpenTrial: () => void;
  onSelectProduct?: (productId: 'atende' | 'hub' | 'agenda' | 'cobranca' | 'reputacao' | 'ged') => void;
}

export default function TransformationSection({ onOpenTrial, onSelectProduct }: TransformationSectionProps) {
  // Slider interativo Antes vs Depois (GED)
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section
      id="transformacao"
      style={{
        position: 'relative',
        padding: '120px 0',
        // Fundo com Parallax fixo nítido e visível (gradiente reduzido para permitir visão clara dos prédios e luzes)
        backgroundImage: `linear-gradient(180deg, rgba(6, 11, 24, 0.70) 0%, rgba(6, 11, 24, 0.52) 50%, rgba(6, 11, 24, 0.78) 100%), url('/images/parallax-bg.jpg')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderTop: '1px solid rgba(0, 245, 212, 0.3)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.3)',
        overflow: 'hidden',
      }}
    >
      {/* Luz ambiente neon sutil */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(0, 245, 212, 0.12) 0%, rgba(31, 111, 255, 0.08) 50%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 60px' }}>
          <div
            className="pulse-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '999px',
              backgroundColor: 'rgba(0, 245, 212, 0.15)',
              border: '1px solid rgba(0, 245, 212, 0.4)',
              color: '#00F5D4',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              boxShadow: '0 0 20px rgba(0, 245, 212, 0.25)',
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
              textShadow: '0 4px 20px rgba(0,0,0,0.8)',
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

          <p style={{ fontSize: '1.12rem', color: '#CBD5E1', lineHeight: 1.7, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
            Veja o impacto da automação no dia a dia: de mesas caóticas e celulares apitando sem parar à tranquilidade de uma engenharia digital trabalhando por você.
          </p>
        </div>

        {/* =========================================================================
            HISTÓRIA 1: GESTÃO DE DOCUMENTOS & PAPÉIS (COM SLIDER INTERATIVO DE ARRASTE)
        ========================================================================= */}
        <div
          style={{
            backgroundColor: 'rgba(10, 17, 40, 0.82)',
            borderRadius: '24px',
            border: '1px solid rgba(0, 245, 212, 0.3)',
            backdropFilter: 'blur(20px)',
            overflow: 'hidden',
            marginBottom: '60px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 245, 212, 0.1)',
          }}
        >
          {/* Top Header do Caso 1 */}
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
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 245, 212, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 245, 212, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Conhecer Agillex GED
              <ArrowRight size={16} />
            </button>
          </div>

          {/* SLIDER INTERATIVO ANTES vs DEPOIS */}
          <div style={{ padding: '32px' }}>
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#38BDF8',
                  background: 'rgba(56, 189, 248, 0.12)',
                  padding: '4px 14px',
                  borderRadius: '20px',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                }}
              >
                <MoveHorizontal size={14} />
                Arraste o divisor no meio da foto para ver a transformação:
              </span>
            </div>

            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              style={{
                position: 'relative',
                width: '100%',
                height: '420px',
                borderRadius: '20px',
                overflow: 'hidden',
                userSelect: 'none',
                cursor: 'ew-resize',
                border: '2px solid rgba(0, 245, 212, 0.35)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(0, 245, 212, 0.15)',
              }}
            >
              {/* IMAGEM DE FUNDO: O ALÍVIO (DEPOIS) */}
              <img
                src="/images/alivio-digital-ged.jpg"
                alt="Depois: Gestor tranquilo com mesa limpa e organizada"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                draggable={false}
              />
              {/* Tag Superior Direita (Depois) */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(6, 11, 24, 0.88)',
                  backdropFilter: 'blur(10px)',
                  color: '#00F5D4',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  border: '1px solid rgba(0, 245, 212, 0.5)',
                  boxShadow: '0 4px 15px rgba(0, 245, 212, 0.3)',
                  zIndex: 2,
                }}
              >
                ✨ DEPOIS: Gestão com Agillex GED
              </div>

              {/* IMAGEM SOBREPOSTA: A DOR (ANTES) - CORTADA PELO SLIDER */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: `${sliderPos}%`,
                  height: '100%',
                  overflow: 'hidden',
                  borderRight: '3px solid #00F5D4',
                  boxShadow: '5px 0 25px rgba(0, 245, 212, 0.6)',
                  zIndex: 3,
                }}
              >
                <img
                  src="/images/dor-papelada-ged.jpg"
                  alt="Antes: Mesa de escritório atolada de papéis"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    maxWidth: 'none',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  draggable={false}
                />
                {/* Tag Superior Esquerda (Antes) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '8px 16px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(6, 11, 24, 0.88)',
                    backdropFilter: 'blur(10px)',
                    color: '#EF4444',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    border: '1px solid rgba(239, 68, 68, 0.5)',
                    boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  ⚠️ ANTES: Caos de Papéis & Estresse
                </div>
              </div>

              {/* BARRA & BOTÃO CENTRAL DO SLIDER */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: `${sliderPos}%`,
                  transform: 'translateX(-50%)',
                  width: '4px',
                  zIndex: 10,
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: '#060B18',
                    border: '2px solid #00F5D4',
                    boxShadow: '0 0 20px rgba(0, 245, 212, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00F5D4',
                    cursor: 'ew-resize',
                  }}
                >
                  <MoveHorizontal size={20} />
                </div>
              </div>

              {/* BADGE FLUTUANTE INFERIOR */}
              <div
                className="floating-card"
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(6, 11, 24, 0.92)',
                  backdropFilter: 'blur(12px)',
                  color: '#fff',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  border: '1px solid rgba(0, 245, 212, 0.4)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
                  zIndex: 5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Zap size={16} color="#00F5D4" />
                <span>Busca com IA OCR: <strong>Contrato localizado em 1.4s</strong></span>
              </div>
            </div>

            {/* Comparativo de Pontos do GED */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
                marginTop: '32px',
              }}
            >
              <div
                style={{
                  padding: '20px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(239, 68, 68, 0.05)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#EF4444', fontWeight: 800, fontSize: '0.88rem', marginBottom: '10px' }}>
                  <XCircle size={18} />
                  Sem o Agillex GED:
                </div>
                <p style={{ fontSize: '0.86rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                  Pastas pesadas acumulando poeira, até 40 minutos para achar um contrato urgente e o risco constante de multas por certidões vencidas.
                </p>
              </div>

              <div
                style={{
                  padding: '20px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(0, 245, 212, 0.06)',
                  border: '1px solid rgba(0, 245, 212, 0.3)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00F5D4', fontWeight: 800, fontSize: '0.88rem', marginBottom: '10px' }}>
                  <CheckCircle2 size={18} />
                  Com o Agillex GED:
                </div>
                <p style={{ fontSize: '0.86rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                  Mesa 100% limpa, busca por palavras no celular como no Google, assinatura digital em 1 clique e alertas preventivos no WhatsApp antes que qualquer prazo expire.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            HISTÓRIA 2: ATENDIMENTO & CONSULTAS (LADO A LADO COM BALÕES DE WHATSAPP)
        ========================================================================= */}
        <div
          style={{
            backgroundColor: 'rgba(10, 17, 40, 0.82)',
            borderRadius: '24px',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            backdropFilter: 'blur(20px)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(56, 189, 248, 0.1)',
          }}
        >
          {/* Top Header do Caso 2 */}
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
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Conhecer Agilex Atende & Agenda
              <ArrowRight size={16} />
            </button>
          </div>

          {/* GRID COM AS DUAS IMAGENS LADO A LADO + BALÕES DE WHATSAPP ANIMADOS */}
          <div
            style={{
              padding: '36px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {/* CARD 1: A DOR (A RECEPCIONISTA ATOLADA DE CELULARES) */}
            <div
              style={{
                borderRadius: '18px',
                backgroundColor: 'rgba(239, 68, 68, 0.04)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
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
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#EF4444', textTransform: 'uppercase' }}>
                    O Esgotamento do Atendimento Manual
                  </span>
                </div>

                {/* Foto da dor */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    marginBottom: '20px',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                  }}
                >
                  <img
                    src="/images/dor-atendimento-whatsapp.jpg"
                    alt="Recepcionista estressada com múltiplos celulares e anotações"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'contrast(105%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '10px',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(6, 11, 24, 0.88)',
                      backdropFilter: 'blur(8px)',
                      color: '#F87171',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      border: '1px solid rgba(239, 68, 68, 0.35)',
                    }}
                  >
                    ⚠️ 2 celulares tocando + áudios sem ouvir
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: '#CBD5E1' }}>
                    <span style={{ color: '#EF4444' }}>✕</span>
                    <span>Mensagens de clientes perdidas ou respondidas com horas de atraso.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: '#CBD5E1' }}>
                    <span style={{ color: '#EF4444' }}>✕</span>
                    <span>No-shows de até 35% por falta de confirmação antecipada.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '0.86rem', color: '#CBD5E1' }}>
                    <span style={{ color: '#EF4444' }}>✕</span>
                    <span>Noites e fins de semana interrompidos por dúvidas de agendamento.</span>
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
                <span>Recepcionistas gastam mais de <strong>60% do dia</strong> apenas respondendo mensagens repetitivas.</span>
              </div>
            </div>

            {/* CARD 2: O ALÍVIO (A MÉDICA COM TABLET + BALÕES DE WHATSAPP FLUTUANTES) */}
            <div
              style={{
                borderRadius: '18px',
                backgroundColor: 'rgba(0, 245, 212, 0.04)',
                border: '1px solid rgba(0, 245, 212, 0.35)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
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
                    A Serenidade da IA Oficial no WhatsApp
                  </span>
                </div>

                {/* Foto do Alívio com Balões Flutuantes Animados */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    marginBottom: '20px',
                    border: '1px solid rgba(0, 245, 212, 0.4)',
                    boxShadow: '0 10px 30px rgba(0, 245, 212, 0.2)',
                  }}
                >
                  <img
                    src="/images/agenda-atendimento-saude.jpg"
                    alt="Médica serena em consultório moderno com agenda organizada no tablet"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />

                  {/* Balão 1 Flutuante: Notificação de Áudio Recebido */}
                  <div
                    className="floating-card-1"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(6, 11, 24, 0.92)',
                      backdropFilter: 'blur(10px)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      border: '1px solid rgba(0, 245, 212, 0.4)',
                      fontSize: '0.72rem',
                      color: '#E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                    }}
                  >
                    <MessageSquare size={13} color="#00F5D4" />
                    <span>Áudio do cliente: <i>"Tem horário pra quinta?"</i></span>
                  </div>

                  {/* Balão 2 Flutuante: Resposta da IA Agillex */}
                  <div
                    className="floating-card-2"
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(6, 11, 24, 0.94)',
                      backdropFilter: 'blur(12px)',
                      padding: '8px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(0, 245, 212, 0.5)',
                      fontSize: '0.74rem',
                      color: '#00F5D4',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 6px 20px rgba(0, 245, 212, 0.25)',
                    }}
                  >
                    <Bot size={15} color="#00F5D4" />
                    <span>IA Agillex: <strong>Consulta marcada às 15h ✅</strong></span>
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
                <span>Economia de até <strong>R$ 1.800/mês</strong> em custos de recepção adicional e zero pacientes perdidos.</span>
              </div>
            </div>
          </div>

          {/* RODAPÉ DO CARD COM CTA DE CONVERSÃO */}
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
        </div>

      </div>

      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(0, 245, 212, 0.2);
          }
          50% {
            box-shadow: 0 0 25px rgba(0, 245, 212, 0.5);
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
      `}</style>
    </section>
  );
}
