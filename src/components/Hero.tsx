'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Sparkles, ArrowRight, Play, ShieldCheck, Zap, Bot, Calendar, CreditCard, Star, FileText, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenTrial: () => void;
  onExploreProducts: () => void;
}

export default function Hero({ onOpenTrial, onExploreProducts }: HeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '150px',
        paddingBottom: '90px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* RADAR BADGE COM PULSO */}
        <ScrollReveal direction="down" distance={40}>
          <div className="cyber-badge neon-pulse" style={{ marginBottom: '24px' }}>
            <div className="radar-dot" />
            <span>Ecossistema Agillex 2026 • Inteligência Comercial & Operação Autônoma</span>
          </div>
        </ScrollReveal>

        {/* TÍTULO PRINCIPAL DE ALTO IMPACTO */}
        <ScrollReveal direction="zoom" distance={30} delay={100}>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
              maxWidth: '1050px',
            }}
          >
            A Operação da sua Empresa no{' '}
            <span className="gradient-text-glow">Piloto Automático.</span>
          </h1>
        </ScrollReveal>

        {/* SUBTÍTULO */}
        <ScrollReveal direction="up" distance={30} delay={200}>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              lineHeight: 1.6,
              color: '#CBD5E1',
              maxWidth: '860px',
              marginBottom: '40px',
            }}
          >
            A <strong style={{ color: '#00F5D4' }}>Família Agillex</strong> é formada por{' '}
            <strong style={{ color: '#38BDF8' }}>6 produtos modulares e independentes</strong>. 
            Contrate apenas o que sua empresa necessita (como o{' '}
            <strong style={{ color: '#38BDF8' }}>Agendamento Online</strong> por R$ 49,90/mês ou a{' '}
            <strong style={{ color: '#10B981' }}>Cobrança Pix R$ 1,99</strong>) — ou unifique toda a sua operação no{' '}
            <strong style={{ color: '#8B5CF6' }}>Combo Agillex Hub</strong>.
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal direction="up" distance={30} delay={300}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              marginBottom: '56px',
            }}
          >
            <button
              onClick={onOpenTrial}
              className="btn-primary-neon shine-hover"
              style={{ fontSize: '1.05rem', padding: '16px 36px' }}
            >
              <Sparkles size={20} />
              Iniciar Teste Grátis de 14 Dias
              <ArrowRight size={18} />
            </button>

            <button
              onClick={onExploreProducts}
              className="btn-secondary-cyber"
              style={{ fontSize: '1.05rem', padding: '16px 32px' }}
            >
              <Play size={18} fill="#38BDF8" color="#38BDF8" />
              Ver Tabela de Produtos & Recursos
            </button>
          </div>
        </ScrollReveal>

        {/* MÉTRICAS FLUTUANTES / HOLOGRAMA DO ECOSSISTEMA */}
        <ScrollReveal direction="up" distance={50} delay={380} style={{ width: '100%', maxWidth: '1120px' }}>
          <div
            style={{
              width: '100%',
              backgroundColor: 'rgba(10, 17, 40, 0.65)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0, 245, 212, 0.3)',
              borderRadius: '24px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 50px rgba(0, 245, 212, 0.15)',
              padding: '32px 24px',
              position: 'relative',
            }}
          >
            {/* Luz no topo */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '15%',
                right: '15%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #00F5D4, #1F6FFF, transparent)',
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
              }}
            >
              {/* KPI 1: WhatsApp IA */}
              <div
                className="shine-hover card-hover-kinetic"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '16px',
                  padding: '20px',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ padding: '8px', borderRadius: '10px', backgroundColor: 'rgba(0, 245, 212, 0.15)', color: '#00F5D4' }}>
                    <Bot size={20} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00F5D4', textTransform: 'uppercase' }}>Agilex Atende</span>
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                  &lt; 3 segundos
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '4px' }}>
                  Tempo de resposta no WhatsApp com compreensão de texto e voz.
                </div>
              </div>

              {/* KPI 2: Redução de Faltas */}
              <div
                className="shine-hover card-hover-kinetic"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '16px',
                  padding: '20px',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ padding: '8px', borderRadius: '10px', backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#38BDF8' }}>
                    <Calendar size={20} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38BDF8', textTransform: 'uppercase' }}>Agillex Agenda</span>
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                  -85% em Faltas
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '4px' }}>
                  Lembretes automáticos e confirmação em 1 toque no WhatsApp.
                </div>
              </div>

              {/* KPI 3: Taxa Fixa Pix */}
              <div
                className="shine-hover card-hover-kinetic"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '16px',
                  padding: '20px',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ padding: '8px', borderRadius: '10px', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10B981' }}>
                    <CreditCard size={20} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981', textTransform: 'uppercase' }}>Agillex Cobrança</span>
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                  R$ 1,99 <span style={{ fontSize: '0.9rem', color: '#10B981', fontWeight: 600 }}>fixo</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '4px' }}>
                  Taxa fixa imbatível por Pix concluído via gateway oficial Asaas.
                </div>
              </div>

              {/* KPI 4: Avaliações 5 Estrelas */}
              <div
                className="shine-hover card-hover-kinetic"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '16px',
                  padding: '20px',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ padding: '8px', borderRadius: '10px', backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B' }}>
                    <Star size={20} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase' }}>Agillex Reputação</span>
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                  5.0 ★ Google
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '4px' }}>
                  Filtro inteligente que direciona clientes felizes para o Google Maps.
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* TRUST STRIP COM INTEGRAÇÕES OFICIAIS */}
        <div
          style={{
            marginTop: '48px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            color: '#64748B',
            fontSize: '0.82rem',
            fontWeight: 600,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} color="#00F5D4" />
            <span>WhatsApp Oficial Meta Cloud API</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={18} color="#38BDF8" />
            <span>Google Calendar Sync Bidirecional</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CreditCard size={18} color="#10B981" />
            <span>Gateway Asaas Autorizado Banco Central</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={18} color="#8B5CF6" />
            <span>100% em Conformidade com a LGPD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
