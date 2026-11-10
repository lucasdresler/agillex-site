'use client';

import React, { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { DollarSign, TrendingUp, Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenTrial: () => void;
}

export default function RoiCalculator({ onOpenTrial }: RoiCalculatorProps) {
  const [monthlyClients, setMonthlyClients] = useState<number>(200);
  const [averageTicket, setAverageTicket] = useState<number>(250);

  // 1. Faturamento Total
  const totalRevenue = monthlyClients * averageTicket;

  // 2. Economia de Taxas com Pix Agillex R$ 1,99 (comparado a 3,49% das maquininhas tradicionais)
  const traditionalFees = totalRevenue * 0.0349;
  const agillexFees = monthlyClients * 1.99;
  const monthlyFeeSavings = Math.max(0, traditionalFees - agillexFees);

  // 3. Faturamento Recuperado com Redução de Faltas (15% de no-show do mercado, Agillex reduz 85% disso)
  const expectedNoShows = Math.round(monthlyClients * 0.15);
  const recoveredClients = Math.round(expectedNoShows * 0.85);
  const monthlyRevenueRecovered = recoveredClients * averageTicket;

  // 4. Horas de Atendimento Economizadas da Secretária (3 min por atendimento)
  const hoursSaved = Math.round((monthlyClients * 4 * 3) / 60);

  // 5. Retorno Anual Total
  const annualTotalGain = (monthlyFeeSavings + monthlyRevenueRecovered) * 12;

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  };

  return (
    <section id="calculadora" style={{ padding: 'clamp(40px, 6vw, 70px) 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <ScrollReveal direction="down" distance={40}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(24px, 4vw, 40px)' }}>
            <div className="cyber-badge" style={{ marginBottom: '14px' }}>
              <span>Calculadora de Retorno sobre Investimento (ROI)</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Quanto sua Empresa vai Ganhar com o{' '}
              <span className="gradient-text-cyan">Ecossistema Agillex?</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', maxWidth: '720px', margin: '0 auto' }}>
              Ajuste os valores reais da sua operação e veja a economia direta em taxas de pagamento, faturamento recuperado de cadeiras vazias e horas salvas.
            </p>
          </div>
        </ScrollReveal>

        <div
          className="glass-card"
          style={{
            padding: '36px',
            borderRadius: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {/* CONTROLES / SLIDERS (DESLIZA DA ESQUERDA) */}
          <ScrollReveal direction="left" distance={70}>
            <div>
              {/* Slider 1: Clientes por Mês */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>
                    Atendimentos / Consultas por Mês:
                  </label>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#00F5D4' }}>
                    {monthlyClients}
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1000"
                  step="10"
                  value={monthlyClients}
                  onChange={(e) => setMonthlyClients(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: '#00F5D4',
                    cursor: 'pointer',
                    height: '6px',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748B', marginTop: '6px' }}>
                  <span>30/mês</span>
                  <span>500/mês</span>
                  <span>1.000+/mês</span>
                </div>
              </div>

              {/* Slider 2: Ticket Médio */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>
                    Ticket Médio por Cliente:
                  </label>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#38BDF8' }}>
                    {formatCurrency(averageTicket)}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2500"
                  step="50"
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: '#38BDF8',
                    cursor: 'pointer',
                    height: '6px',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748B', marginTop: '6px' }}>
                  <span>R$ 50</span>
                  <span>R$ 1.250</span>
                  <span>R$ 2.500+</span>
                </div>
              </div>

              {/* Faturamento Mensal Estimado */}
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px', padding: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Faturamento Mensal Operado:</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                  {formatCurrency(totalRevenue)}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RESULTADOS / RETORNO ANUAL (DESLIZA DA DIREITA COM HOVER KINETIC) */}
          <ScrollReveal direction="right" distance={70} delay={120}>
            <div
              className="shine-hover card-hover-kinetic"
              style={{
                backgroundColor: 'rgba(6, 11, 24, 0.85)',
                border: '1px solid rgba(0, 245, 212, 0.35)',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
              }}
            >
              <div style={{ fontSize: '0.78rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '8px' }}>
                Impacto Financeiro Estimado
              </div>

              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#00F5D4', letterSpacing: '-0.02em', marginBottom: '6px' }}>
                + {formatCurrency(annualTotalGain)}{' '}
                <span style={{ fontSize: '1rem', color: '#fff', fontWeight: 600 }}>/ ano</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '24px' }}>
                Ganhos somados em economia de taxas e resgate de consultas que seriam perdidas.
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>Economia com Pix R$ 1,99:</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#10B981' }}>
                    + {formatCurrency(monthlyFeeSavings)}/mês
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>Faturamento Salvo (-85% faltas):</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#38BDF8' }}>
                    + {formatCurrency(monthlyRevenueRecovered)}/mês
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>Tempo Economizado da Equipe:</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F59E0B' }}>
                    {hoursSaved} horas/mês
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenTrial}
                className="btn-primary-neon shine-hover"
                style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
              >
                <Sparkles size={18} />
                Garantir Esses Resultados (14 Dias Grátis)
                <ArrowRight size={16} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
