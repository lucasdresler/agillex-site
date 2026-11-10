'use client';

import React, { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Preciso trocar o número do WhatsApp atual da minha empresa?',
      a: 'Não! O Agillex conecta diretamente ao seu número atual de WhatsApp (seja ele WhatsApp Business ou convencional) via QR Code em menos de 30 segundos, preservando todos os seus contatos e conversas existentes.',
    },
    {
      q: 'Como funciona a sincronização com o Google Calendar?',
      a: 'A sincronização é bidirecional e em tempo real. Quando um cliente agenda pelo site ou pela IA no WhatsApp, o horário é reservado instantaneamente na agenda do profissional no Google Calendar. Se o profissional marcar um compromisso pessoal diretamente no Google Calendar, esse horário é bloqueado na hora para novos agendamentos.',
    },
    {
      q: 'Como funciona a taxa fixa de R$ 1,99 por Pix recebido?',
      a: 'Nossa integração oficial com o gateway bancário Asaas (autorizado pelo Banco Central) elimina as taxas percentuais abusivas (que costumam variar de 3% a 5% em maquininhas e gateways tradicionais). Você paga apenas R$ 1,99 por transação concluída, independentemente do valor da consulta ou serviço.',
    },
    {
      q: 'O que acontece quando o cliente pede para falar com uma pessoa humana?',
      a: 'A IA possui detector de intenção de transbordo humano. Ao detectar a solicitação ou dúvidas fora do escopo, ela pausa imediatamente e notifica sua equipe pelo painel do Agillex Hub, preservando todo o histórico da conversa para um atendimento contínuo.',
    },
    {
      q: 'Como a IA aprende os detalhes e preços dos meus serviços?',
      a: 'O sistema utiliza arquitetura RAG (Retrieval-Augmented Generation). Você cadastra seus serviços, valores, horários e orientações diretamente no painel do Agillex Hub, e a IA passa a responder baseada rigorosamente nessas informações oficiais, sem alucinações.',
    },
    {
      q: 'Existe contrato de fidelidade ou multa rescisória?',
      a: 'Nenhum contrato de fidelidade. Você tem 14 dias de teste grátis para validar tudo na prática e pode pausar ou cancelar sua assinatura a qualquer momento com apenas 1 clique no painel.',
    },
  ];

  return (
    <section id="faq" style={{ padding: 'clamp(40px, 6vw, 70px) 24px', position: 'relative' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <ScrollReveal direction="down" distance={40}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(24px, 4vw, 40px)' }}>
            <div className="cyber-badge" style={{ marginBottom: '14px' }}>
              <span>Perguntas Frequentes</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Dúvidas Frequentes sobre a{' '}
              <span className="gradient-text-cyan">Família Agillex</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1rem' }}>
              Tudo o que você precisa saber sobre funcionamento, conexões e segurança.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal
                key={idx}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                distance={60}
                delay={idx * 60}
              >
                <div
                  className="card-hover-kinetic"
                  style={{
                    backgroundColor: 'rgba(10, 17, 40, 0.7)',
                    border: isOpen ? '1px solid #00F5D4' : '1px solid rgba(56, 189, 248, 0.15)',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#fff',
                      textAlign: 'left',
                      fontSize: '1rem',
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ paddingRight: '16px' }}>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      color={isOpen ? '#00F5D4' : '#64748B'}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s',
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 20px', color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
