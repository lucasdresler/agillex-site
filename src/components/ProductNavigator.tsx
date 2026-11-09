'use client';

import React, { useState } from 'react';
import {
  Bot,
  Calendar,
  CreditCard,
  Star,
  FileText,
  LayoutDashboard,
  Check,
  ArrowRight,
  Sparkles,
  Phone,
  Mic,
  Send,
  User,
  Clock,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Copy,
  ThumbsUp,
  AlertTriangle,
  FileCheck
} from 'lucide-react';

interface ProductNavigatorProps {
  onOpenTrial: () => void;
}

export default function ProductNavigator({ onOpenTrial }: ProductNavigatorProps) {
  const [activeTab, setActiveTab] = useState<'atende' | 'hub' | 'agenda' | 'cobranca' | 'reputacao' | 'ged'>('atende');

  // Estados do Simulador de WhatsApp (Agilex Atende)
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'lead' | 'bot' | 'human'; text: string; time: string; isAudio?: boolean }>>([
    {
      sender: 'bot',
      text: 'Olá! Sou a Fran, assistente virtual da Clínica Sorriso com Inteligência Artificial 🦷 Como posso te ajudar hoje?',
      time: '14:30',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const simulateChatAction = (type: 'preco' | 'audio' | 'agendamento' | 'humano') => {
    if (isTyping) return;

    if (type === 'preco') {
      const userMsg = 'Olá! Gostaria de saber quanto custa a consulta de avaliação e clareamento.';
      setChatMessages((prev) => [...prev, { sender: 'lead', text: userMsg, time: '14:31' }]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setChatMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: 'A avaliação inicial inclui diagnóstico completo e planejamento digital! O clareamento a laser sai a partir de R$ 450 com facilidade no Pix (com desconto) ou parcelado. Gostaria que eu verificasse os horários disponíveis com o Dr. Lucas?',
            time: '14:31',
          },
        ]);
      }, 1200);
    } else if (type === 'audio') {
      setChatMessages((prev) => [...prev, { sender: 'lead', text: 'Mensagem de áudio (0:14) 🎙️ "Oi Fran, tenho dor no dente do siso, tem como me atender hoje?"', time: '14:32', isAudio: true }]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setChatMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: 'Entendi perfeitamente o seu áudio! Dor no siso requer atenção prioritária. Consegui um encaixe de emergência hoje às 16:30 com o Dr. Lucas. Confirmo seu agendamento?',
            time: '14:32',
          },
        ]);
      }, 1400);
    } else if (type === 'agendamento') {
      setChatMessages((prev) => [...prev, { sender: 'lead', text: 'Sim, pode confirmar para hoje às 16:30!', time: '14:33' }]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setChatMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: 'Perfeito! ✅ Agendamento confirmado para hoje às 16:30. Já sincronizei com a agenda do consultório no Google Calendar e te enviei a localização. Te esperamos!',
            time: '14:33',
          },
        ]);
      }, 1200);
    } else if (type === 'humano') {
      setChatMessages((prev) => [...prev, { sender: 'lead', text: 'Gostaria de falar com uma pessoa da recepção.', time: '14:34' }]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setChatMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: 'Sem problemas! Transbordo humano ativado em 1 clique 🤝 Nossa secretária Maria já foi notificada no painel e continuará o atendimento por aqui.',
            time: '14:34',
          },
        ]);
      }, 1000);
    }
  };

  // Estados do Simulador de Avaliação (Agillex Reputação)
  const [repRating, setRepRating] = useState<number | null>(null);

  // Estados do Simulador de Agenda
  const [agendaSelectedSlot, setAgendaSelectedSlot] = useState<string>('14:00');

  const tabs = [
    { id: 'atende', name: 'Agilex Atende', tag: 'WhatsApp IA 24/7', icon: Bot, color: '#00F5D4' },
    { id: 'hub', name: 'Agillex Hub', tag: 'Plataforma Unificada & CRM', icon: LayoutDashboard, color: '#1F6FFF' },
    { id: 'agenda', name: 'Agillex Agenda', tag: 'Agendamento Online 24/7', icon: Calendar, color: '#38BDF8' },
    { id: 'cobranca', name: 'Agillex Cobrança', tag: 'Pix Asaas R$ 1,99', icon: CreditCard, color: '#10B981' },
    { id: 'reputacao', name: 'Agillex Reputação', tag: '5 Estrelas no Google', icon: Star, color: '#F59E0B' },
    { id: 'ged', name: 'Agillex GED', tag: 'OCR & Alertas IA', icon: FileText, color: '#8B5CF6' },
  ];

  return (
    <section id="produtos" style={{ padding: '80px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* CABEÇALHO DA SEÇÃO */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="cyber-badge" style={{ marginBottom: '14px' }}>
            <span>Ecossistema Modular Integrado</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Seis Motores Inteligentes.{' '}
            <span className="gradient-text-cyan">Uma Só Experiência.</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', maxWidth: '720px', margin: '0 auto' }}>
            Cada solução opera com perfeição de forma avulsa ou integrada ao ecossistema unificado da Família Agillex.
            Explore os recursos ao vivo abaixo:
          </p>
        </div>

        {/* BARRA DE NAVEGAÇÃO DOS PRODUTOS (ABAS FUTURISTAS) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  backgroundColor: isActive ? 'rgba(31, 111, 255, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: isActive ? `1px solid ${tab.color}` : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: isActive ? `0 0 20px ${tab.color}33` : 'none',
                  color: isActive ? '#fff' : '#94A3B8',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <Icon size={18} color={tab.color} />
                <span>{tab.name}</span>
                <span
                  style={{
                    fontSize: '0.62rem',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    backgroundColor: isActive ? `${tab.color}22` : 'rgba(255, 255, 255, 0.05)',
                    color: isActive ? tab.color : '#64748B',
                    fontWeight: 700,
                  }}
                >
                  {tab.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* CONTAINER DINÂMICO DO PRODUTO ATIVO */}
        <div
          className="glass-card"
          style={{
            padding: '36px',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* ============================================================== */}
          {/* 1. ABA: AGILEX ATENDE                                         */}
          {/* ============================================================== */}
          {activeTab === 'atende' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#00F5D4', fontSize: '0.82rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase' }}>
                  <Bot size={18} /> Atendente Virtual Humanizado com IA 24/7
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>
                  Seus clientes atendidos em segundos.{' '}
                  <span className="gradient-text-cyan">Sem filas, 24 horas por dia.</span>
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  O Agilex Atende atua no WhatsApp Oficial da sua empresa com inteligência artificial contextual (base RAG exclusiva do seu negócio). Ele entende perguntas em texto e mensagens de voz em áudio natural, qualifica demandas, agenda consultas e realiza transbordo humano em 1 clique quando necessário.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {[
                    'Compreensão avançada de mensagens de áudio (voz natural dos clientes)',
                    'Base de conhecimento RAG exclusiva com todas as regras e preços da sua clínica',
                    'Agendamento automático sincronizado com o Google Calendar em tempo real',
                    'Transbordo humano em 1 clique com preservação integral do histórico',
                    'Qualificação automática de leads no Funil CRM Kanban do Hub',
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ padding: '3px', borderRadius: '50%', backgroundColor: 'rgba(0, 245, 212, 0.2)', color: '#00F5D4', marginTop: '2px' }}>
                        <Check size={14} />
                      </div>
                      <span style={{ fontSize: '0.88rem', color: '#E2E8F0' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button onClick={onOpenTrial} className="btn-primary-neon" style={{ padding: '12px 24px' }}>
                    <Sparkles size={16} /> Testar Agilex Atende Grátis
                  </button>
                  <a href="https://wa.me/5511978253163?text=Olá,%20gostaria%20de%20testar%20a%20IA%20do%20Agilex%20Atende" target="_blank" rel="noopener noreferrer" className="btn-secondary-cyber" style={{ padding: '12px 20px' }}>
                    <Phone size={16} /> Testar no meu WhatsApp
                  </a>
                </div>
              </div>

              {/* SIMULADOR INTERATIVO DE SMARTPHONE WHATSAPP */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                  style={{
                    width: '100%',
                    maxWidth: '380px',
                    height: '560px',
                    borderRadius: '36px',
                    border: '8px solid #1E293B',
                    backgroundColor: '#0B141B',
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 245, 212, 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                  }}
                >
                  {/* Topo do WhatsApp */}
                  <div style={{ backgroundColor: '#1F2C34', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#00A884', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                      <Bot size={22} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#E9EDEF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        Clínica Sorriso <span style={{ fontSize: '0.62rem', backgroundColor: '#00A884', color: '#fff', padding: '1px 5px', borderRadius: '3px' }}>IA 24/7</span>
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#8696A0' }}>
                        {isTyping ? <span style={{ color: '#00A884', fontWeight: 600 }}>digitando...</span> : 'online'}
                      </div>
                    </div>
                  </div>

                  {/* Corpo do Chat */}
                  <div style={{ flex: 1, padding: '14px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {chatMessages.map((msg, index) => (
                      <div
                        key={index}
                        style={{
                          alignSelf: msg.sender === 'lead' ? 'flex-end' : 'flex-start',
                          maxWidth: '85%',
                          backgroundColor: msg.sender === 'lead' ? '#005C4B' : '#202C33',
                          color: '#E9EDEF',
                          borderRadius: '10px',
                          padding: '8px 12px',
                          fontSize: '0.82rem',
                          lineHeight: 1.4,
                          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                          position: 'relative',
                        }}
                      >
                        {msg.isAudio && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px', color: '#38BDF8', fontWeight: 600 }}>
                            <Mic size={14} /> Áudio Reconhecido:
                          </div>
                        )}
                        <div>{msg.text}</div>
                        <div style={{ fontSize: '0.62rem', color: '#8696A0', textAlign: 'right', marginTop: '3px' }}>{msg.time}</div>
                      </div>
                    ))}
                    {isTyping && (
                      <div style={{ alignSelf: 'flex-start', backgroundColor: '#202C33', borderRadius: '10px', padding: '8px 14px', color: '#00A884', fontSize: '0.78rem' }}>
                        Fran está digitando...
                      </div>
                    )}
                  </div>

                  {/* Botões de Ação para Simular Interação ao Vivo */}
                  <div style={{ backgroundColor: '#111B21', padding: '10px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '0.68rem', color: '#8696A0', marginBottom: '6px', textAlign: 'center' }}>
                      Clique para simular um cliente conversando com a IA:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                      <button
                        onClick={() => simulateChatAction('preco')}
                        style={{ padding: '6px 8px', borderRadius: '6px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.72rem', cursor: 'pointer', textAlign: 'left' }}
                      >
                        💬 Perguntar Preço
                      </button>
                      <button
                        onClick={() => simulateChatAction('audio')}
                        style={{ padding: '6px 8px', borderRadius: '6px', backgroundColor: 'rgba(0, 245, 212, 0.1)', border: '1px solid rgba(0, 245, 212, 0.3)', color: '#00F5D4', fontSize: '0.72rem', cursor: 'pointer', textAlign: 'left' }}
                      >
                        🎙️ Enviar Áudio (Dor)
                      </button>
                      <button
                        onClick={() => simulateChatAction('agendamento')}
                        style={{ padding: '6px 8px', borderRadius: '6px', backgroundColor: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38BDF8', fontSize: '0.72rem', cursor: 'pointer', textAlign: 'left' }}
                      >
                        📅 Confirmar Horário
                      </button>
                      <button
                        onClick={() => simulateChatAction('humano')}
                        style={{ padding: '6px 8px', borderRadius: '6px', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#F87171', fontSize: '0.72rem', cursor: 'pointer', textAlign: 'left' }}
                      >
                        🤝 Pedir Humano
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* 2. ABA: AGILLEX HUB (PLATAFORMA UNIFICADA & CRM KANBAN)         */}
          {/* ============================================================== */}
          {activeTab === 'hub' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#1F6FFF', fontSize: '0.82rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase' }}>
                  <LayoutDashboard size={18} /> O Centro de Controle da sua Empresa
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>
                  Agillex Hub: Toda a jornada do cliente{' '}
                  <span className="gradient-text-blue">em um só lugar.</span>
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  Elimine ferramentas desconectadas. O Agillex Hub centraliza as conversas do WhatsApp com a IA, o Funil de Vendas CRM Kanban, o módulo de Agendamento, Catálogo de Serviços e Cobranças Integradas.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {[
                    'Funil CRM Kanban automatizado: leads avançam conforme respondem à IA',
                    'Histórico completo de atendimentos, áudios transcritos e pedidos',
                    'Painel multi-tenant pronto para gerenciar matriz, filiais e múltiplos clientes',
                    'Módulo financeiro integrado com gateway Asaas (Taxa Fixa R$ 1,99)',
                    'Autenticação corporativa com permissões granulares por colaborador',
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ padding: '3px', borderRadius: '50%', backgroundColor: 'rgba(31, 111, 255, 0.2)', color: '#60A5FA', marginTop: '2px' }}>
                        <Check size={14} />
                      </div>
                      <span style={{ fontSize: '0.88rem', color: '#E2E8F0' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <button onClick={onOpenTrial} className="btn-primary-neon" style={{ padding: '12px 28px' }}>
                  <Sparkles size={16} /> Acessar Demonstração do Hub
                </button>
              </div>

              {/* DEMO VISUAL DO CRM KANBAN */}
              <div
                style={{
                  backgroundColor: '#0A1128',
                  border: '1px solid rgba(31, 111, 255, 0.3)',
                  borderRadius: '20px',
                  padding: '20px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                    Pipeline Ativo de Leads (Agillex CRM)
                  </div>
                  <span style={{ fontSize: '0.72rem', backgroundColor: 'rgba(31, 111, 255, 0.2)', color: '#60A5FA', padding: '3px 8px', borderRadius: '6px' }}>
                    14 Leads Ativos
                  </span>
                </div>

                {/* Colunas do Kanban */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                  {/* Coluna 1: Novos */}
                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', padding: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                      <span>Novos Leads</span>
                      <span style={{ color: '#60A5FA' }}>5</span>
                    </div>
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '8px', marginBottom: '6px', borderLeft: '3px solid #60A5FA' }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#fff' }}>Dra. Camila Castro</div>
                      <div style={{ fontSize: '0.68rem', color: '#94A3B8' }}>WhatsApp • Hoje às 14:10</div>
                    </div>
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '8px', borderLeft: '3px solid #60A5FA' }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#fff' }}>Sorriso Mais Embu</div>
                      <div style={{ fontSize: '0.68rem', color: '#94A3B8' }}>Prospecção Ativa</div>
                    </div>
                  </div>

                  {/* Coluna 2: Em Atendimento com IA */}
                  <div style={{ backgroundColor: 'rgba(0, 245, 212, 0.03)', borderRadius: '12px', padding: '10px', border: '1px solid rgba(0, 245, 212, 0.15)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00F5D4', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                      <span>IA em Atendimento</span>
                      <span>4</span>
                    </div>
                    <div style={{ backgroundColor: 'rgba(0, 245, 212, 0.08)', borderRadius: '8px', padding: '8px', marginBottom: '6px', borderLeft: '3px solid #00F5D4' }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#fff' }}>Dental Studio</div>
                      <div style={{ fontSize: '0.68rem', color: '#00F5D4' }}>IA calculando horário...</div>
                    </div>
                    <div style={{ backgroundColor: 'rgba(0, 245, 212, 0.08)', borderRadius: '8px', padding: '8px', borderLeft: '3px solid #00F5D4' }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#fff' }}>Clínica Dr. Paulo</div>
                      <div style={{ fontSize: '0.68rem', color: '#00F5D4' }}>Tirando dúvidas de valor</div>
                    </div>
                  </div>

                  {/* Coluna 3: Agendado & Ganho */}
                  <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.03)', borderRadius: '12px', padding: '10px', border: '1px solid rgba(16, 185, 129, 0.15)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                      <span>Confirmados</span>
                      <span>5</span>
                    </div>
                    <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', borderRadius: '8px', padding: '8px', borderLeft: '3px solid #10B981' }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#fff' }}>Odonto Vida</div>
                      <div style={{ fontSize: '0.68rem', color: '#10B981' }}>Agendado: Amanhã 15h</div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#fff', marginTop: '4px' }}>R$ 1.250,00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* 3. ABA: AGILLEX AGENDA                                         */}
          {/* ============================================================== */}
          {activeTab === 'agenda' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#38BDF8', fontSize: '0.82rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase' }}>
                  <Calendar size={18} /> Agendamento Online Sincronizado
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>
                  Reduza até 85% das faltas.{' '}
                  <span className="gradient-text-blue">Sua recepção sem sobrecarga.</span>
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  Sua empresa ganha uma página pública moderna (`agenda.agillex.com.br/sua-empresa`) aberta 24 horas por dia. O cliente escolhe o profissional e o serviço em 3 passos. O sistema sincroniza na hora com o Google Calendar e dispara lembretes automáticos com confirmação em 1 clique no WhatsApp.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {[
                    'Página pública exclusiva aberta 24h por dia para seus clientes agendarem',
                    'Sincronização bidirecional em tempo real com o Google Calendar da equipe',
                    'Disparos preventivos de lembretes no WhatsApp (24h e 2h antes da consulta)',
                    'Botão de confirmação em 1 toque que atualiza o status na sua recepção',
                    'Elimina cadeiras vazias e horas ociosas de profissionais caros',
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ padding: '3px', borderRadius: '50%', backgroundColor: 'rgba(56, 189, 248, 0.2)', color: '#38BDF8', marginTop: '2px' }}>
                        <Check size={14} />
                      </div>
                      <span style={{ fontSize: '0.88rem', color: '#E2E8F0' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <button onClick={onOpenTrial} className="btn-primary-neon" style={{ padding: '12px 28px' }}>
                  <Sparkles size={16} /> Criar Minha Agenda Online
                </button>
              </div>

              {/* SIMULADOR INTERATIVO DA AGENDA */}
              <div
                style={{
                  backgroundColor: '#0F172A',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: '20px',
                  padding: '24px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#38BDF8', fontWeight: 700 }}>PÁGINA PÚBLICA DE AGENDAMENTO</div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>agenda.agillex.com.br/clinica-sorriso</div>
                  </div>
                  <span style={{ fontSize: '0.68rem', backgroundColor: '#10B981', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                    AO VIVO
                  </span>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'block', marginBottom: '6px' }}>
                    Profissional Selecionado:
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>
                      D
                    </div>
                    <div>
                      <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#fff' }}>Dr. Lucas Dresler</div>
                      <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Ortodontia & Implantodontia</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'block', marginBottom: '6px' }}>
                    Horários Disponíveis (Sincronizados com Google Calendar):
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                    {['09:00', '10:30', '14:00', '16:30'].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setAgendaSelectedSlot(slot)}
                        style={{
                          padding: '8px 4px',
                          borderRadius: '8px',
                          backgroundColor: agendaSelectedSlot === slot ? '#2563EB' : 'rgba(255,255,255,0.06)',
                          border: agendaSelectedSlot === slot ? '1px solid #60A5FA' : '1px solid rgba(255,255,255,0.1)',
                          color: '#fff',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notificação Prévia de WhatsApp */}
                <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '12px', padding: '12px' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#60A5FA', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <CheckCircle2 size={14} /> Prévia do Lembrete Automático no WhatsApp:
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#E2E8F0', fontStyle: 'italic' }}>
                    "Olá, Maria! Lembramos da sua consulta amanhã às {agendaSelectedSlot} com o Dr. Lucas Dresler. Por favor, confirme no botão abaixo."
                  </div>
                  <div style={{ marginTop: '8px', textAlign: 'center', backgroundColor: '#10B981', color: '#fff', padding: '6px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700 }}>
                    SIM, CONFIRMO MINHA CONSULTA
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* 4. ABA: AGILLEX COBRANÇA                                       */}
          {/* ============================================================== */}
          {activeTab === 'cobranca' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#10B981', fontSize: '0.82rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase' }}>
                  <CreditCard size={18} /> Régua de Cobrança com Taxa Fixa de R$ 1,99
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>
                  Elimine a inadimplência.{' '}
                  <span style={{ color: '#10B981' }}>Sem constrangimento manual.</span>
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  Régua ativa no WhatsApp integrada diretamente ao gateway bancário Asaas. Envia Pix Copia e Cola preventivo antes do vencimento, no dia da fatura e mensagens amigáveis de recuperação pós-vencimento. Taxa fixa imbatível de apenas R$ 1,99 por Pix recebido (contra os 3% a 5% cobrados pelas maquininhas e bancos).
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {[
                    'Taxa fixa de R$ 1,99 por Pix recebido (economize milhares de reais em taxas)',
                    'Lembrete preventivo com Pix Copia e Cola 3 dias antes do vencimento',
                    'Alerta automático no dia do vencimento com link de pagamento direto',
                    'Mensagens humanizadas de pós-vencimento para recuperação sem atritos',
                    'Baixa instantânea via Webhook que libera o serviço ou consulta na hora',
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ padding: '3px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#10B981', marginTop: '2px' }}>
                        <Check size={14} />
                      </div>
                      <span style={{ fontSize: '0.88rem', color: '#E2E8F0' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <button onClick={onOpenTrial} className="btn-primary-neon" style={{ padding: '12px 28px' }}>
                  <Sparkles size={16} /> Ativar Régua de Cobrança
                </button>
              </div>

              {/* TIMELINE VISUAL DA RÉGUA */}
              <div
                style={{
                  backgroundColor: '#061715',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '20px',
                  padding: '24px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#10B981', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CreditCard size={18} /> Régua de Cobrança no WhatsApp (Passo a Passo)
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative' }}>
                  {/* Etapa 1: Preventivo */}
                  <div style={{ display: 'flex', gap: '12px', backgroundColor: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '12px', borderLeft: '4px solid #38BDF8' }}>
                    <div style={{ fontWeight: 700, color: '#38BDF8', fontSize: '0.82rem' }}>D-3</div>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff' }}>Aviso Preventivo</div>
                      <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>"Olá! Sua mensalidade vence em 3 dias. Segue o código Pix para adiantar com facilidade:"</div>
                      <div style={{ fontSize: '0.7rem', color: '#38BDF8', marginTop: '4px' }}>📋 Pix Copia e Cola gerado</div>
                    </div>
                  </div>

                  {/* Etapa 2: Dia do Vencimento */}
                  <div style={{ display: 'flex', gap: '12px', backgroundColor: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '12px', borderLeft: '4px solid #10B981' }}>
                    <div style={{ fontWeight: 700, color: '#10B981', fontSize: '0.82rem' }}>D-0</div>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff' }}>Dia do Vencimento</div>
                      <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>"Lembramos que hoje é a data de pagamento da sua fatura no valor de R$ 180,00."</div>
                      <div style={{ fontSize: '0.7rem', color: '#10B981', marginTop: '4px' }}>⚡ Confirmação instantânea em 2s</div>
                    </div>
                  </div>

                  {/* Etapa 3: Pós Vencimento */}
                  <div style={{ display: 'flex', gap: '12px', backgroundColor: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '12px', borderLeft: '4px solid #F59E0B' }}>
                    <div style={{ fontWeight: 700, color: '#F59E0B', fontSize: '0.82rem' }}>D+2</div>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff' }}>Recuperação Amigável</div>
                      <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>"Tudo bem? Notamos que o pagamento ainda não foi concluído. Houve algum imprevisto com o link?"</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '16px', padding: '10px', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', textAlign: 'center', fontSize: '0.76rem', color: '#10B981', fontWeight: 700 }}>
                  Economia média de R$ 1.840,00/mês comparado a gateways percentuais.
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* 5. ABA: AGILLEX REPUTAÇÃO                                      */}
          {/* ============================================================== */}
          {activeTab === 'reputacao' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F59E0B', fontSize: '0.82rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase' }}>
                  <Star size={18} /> Acelerador de Avaliações 5 Estrelas no Google
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>
                  Domine o Google Meu Negócio.{' '}
                  <span style={{ color: '#F59E0B' }}>Proteja sua reputação.</span>
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  Após a conclusão do serviço ou consulta, o Agillex Reputação dispara uma mensagem amigável no WhatsApp com um filtro inteligente de satisfação. Clientes satisfeitos (5 estrelas) são direcionados com 1 clique para o Google Maps; clientes insatisfeitos deixam feedback interno que permite resolver o problema antes de uma avaliação pública negativa.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {[
                    'Filtro protetor de satisfação: previne avaliações públicas negativas',
                    'Redirecionamento automático de clientes 5 estrelas para o Google Maps',
                    'Respostas automáticas humanizadas com IA para todas as avaliações recebidas',
                    'Melhora expressiva no SEO local e atração de novos clientes orgânicos no Maps',
                    'Métricas em tempo real de NPS e satisfação no painel do Agillex Hub',
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ padding: '3px', borderRadius: '50%', backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#F59E0B', marginTop: '2px' }}>
                        <Check size={14} />
                      </div>
                      <span style={{ fontSize: '0.88rem', color: '#E2E8F0' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <button onClick={onOpenTrial} className="btn-primary-neon" style={{ padding: '12px 28px' }}>
                  <Sparkles size={16} /> Alavancar Avaliações no Google
                </button>
              </div>

              {/* SIMULADOR INTERATIVO DE AVALIAÇÃO */}
              <div
                style={{
                  backgroundColor: '#1E1508',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: '20px',
                  padding: '24px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Simulador de Filtro Protetor de Reputação
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>
                  Como foi sua experiência no consultório hoje?
                </div>

                {/* Estrelas Clicáveis */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRepRating(star)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        transform: repRating && repRating >= star ? 'scale(1.2)' : 'none',
                        transition: 'transform 0.2s',
                      }}
                    >
                      <Star
                        size={32}
                        fill={repRating && repRating >= star ? '#F59E0B' : 'transparent'}
                        color={repRating && repRating >= star ? '#F59E0B' : '#64748B'}
                      />
                    </button>
                  ))}
                </div>

                {/* Resultado Dinâmico do Filtro */}
                {repRating === 5 && (
                  <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10B981', borderRadius: '12px', padding: '16px', textAlign: 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: 700, fontSize: '0.85rem', marginBottom: '4px' }}>
                      <ThumbsUp size={16} /> Cliente 5 Estrelas Detectado!
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#E2E8F0', marginBottom: '10px' }}>
                      O cliente é direcionado imediatamente para a página do Google Meu Negócio da sua empresa:
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', backgroundColor: '#10B981', color: '#fff', padding: '8px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700 }}>
                      <ExternalLink size={14} /> Abrir Google Maps & Publicar 5★
                    </div>
                  </div>
                )}

                {repRating && repRating < 5 && (
                  <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid #EF4444', borderRadius: '12px', padding: '16px', textAlign: 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#EF4444', fontWeight: 700, fontSize: '0.85rem', marginBottom: '4px' }}>
                      <AlertTriangle size={16} /> Filtro de Proteção Ativado!
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#E2E8F0', marginBottom: '10px' }}>
                      A crítica é capturada internamente para resolução direta pela gerência, <strong>sem ir para o Google público!</strong>
                    </div>
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '8px', borderRadius: '6px', fontSize: '0.74rem', color: '#94A3B8' }}>
                      "Lamentamos não ter atendido 100%. Nosso gestor entrará em contato em minutos para resolver."
                    </div>
                  </div>
                )}

                {!repRating && (
                  <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
                    Clique nas estrelas acima para simular a reação do filtro inteligente.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* 6. ABA: AGILLEX GED                                            */}
          {/* ============================================================== */}
          {activeTab === 'ged' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#8B5CF6', fontSize: '0.82rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase' }}>
                  <FileText size={18} /> Gestão Eletrônica de Documentos com OCR & IA
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>
                  Documentos organizados.{' '}
                  <span style={{ color: '#8B5CF6' }}>Nunca mais perca um prazo.</span>
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  O Agillex GED usa OCR e visão computacional com Inteligência Artificial para ler contratos, alvarás, certidões e exames enviados por foto no WhatsApp. Ele categoriza arquivos, extrai datas de vigência e dispara avisos automáticos de vencimento e renovação no WhatsApp dos clientes.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {[
                    'Leitura inteligente via OCR e extração automática de dados e partes envolvidas',
                    'Envio simplificado de documentos e comprovantes pelo WhatsApp',
                    'Alertas automáticos de vencimento no WhatsApp (30, 15 e 5 dias antes)',
                    'Assinatura eletrônica em 1 toque com validade jurídica',
                    'Armazenamento seguro em nuvem criptografada com controle de acesso por setor',
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ padding: '3px', borderRadius: '50%', backgroundColor: 'rgba(139, 92, 246, 0.2)', color: '#8B5CF6', marginTop: '2px' }}>
                        <Check size={14} />
                      </div>
                      <span style={{ fontSize: '0.88rem', color: '#E2E8F0' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <button onClick={onOpenTrial} className="btn-primary-neon" style={{ padding: '12px 28px' }}>
                  <Sparkles size={16} /> Conhecer Agillex GED
                </button>
              </div>

              {/* DEMO DO SCANNER OCR */}
              <div
                style={{
                  backgroundColor: '#130C22',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '20px',
                  padding: '24px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#8B5CF6', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FileCheck size={18} /> Reconhecimento Inteligente OCR em Execução
                </div>

                <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '14px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.78rem', color: '#8B5CF6', fontWeight: 700 }}>ARQUIVO: alvara-sanitario-2026.pdf</span>
                    <span style={{ fontSize: '0.65rem', backgroundColor: 'rgba(139, 92, 246, 0.2)', color: '#8B5CF6', padding: '2px 6px', borderRadius: '4px' }}>OCR 100%</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.75rem' }}>
                    <div>
                      <div style={{ color: '#94A3B8' }}>Tipo de Documento:</div>
                      <div style={{ fontWeight: 600, color: '#fff' }}>Alvará de Funcionamento</div>
                    </div>
                    <div>
                      <div style={{ color: '#94A3B8' }}>Data de Vencimento:</div>
                      <div style={{ fontWeight: 700, color: '#F87171' }}>28/11/2026 (em 19 dias)</div>
                    </div>
                  </div>
                </div>

                {/* Ação Automática da IA */}
                <div style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '12px', padding: '12px' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#C084FC', marginBottom: '4px' }}>
                    ⚡ AÇÃO AUTOMÁTICA DISPARADA NO WHATSAPP:
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#E2E8F0', fontStyle: 'italic' }}>
                    "Atenção, Dra. Camila! Seu Alvará Sanitário vence em 19 dias. Deseja que geremos a taxa de renovação e o checklist da vigilância sanitária agora?"
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
