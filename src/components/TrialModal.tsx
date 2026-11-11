'use client';

import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [segment, setSegment] = useState('Odontologia / Saúde');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        // Redireciona diretamente para o checkout / ativação de trial do Hub
        const params = new URLSearchParams({
          modulo: 'combo',
          plano: 'combo',
          trial: 'true',
          nome: name,
          empresa: company,
          tel: whatsapp,
        });
        window.location.href = `https://hub.agillex.com.br/checkout?${params.toString()}`;
      }, 1500);
    }, 1000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(6, 11, 24, 0.85)',
        backdropFilter: 'blur(10px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          backgroundColor: '#0A1128',
          border: '1px solid #00F5D4',
          borderRadius: '24px',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.9), 0 0 50px rgba(0, 245, 212, 0.25)',
          padding: '32px',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: '#94A3B8',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          <X size={20} />
        </button>

        {!success ? (
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#00F5D4', fontSize: '0.78rem', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase' }}>
              <Sparkles size={16} /> Acesso Imediato sem Cartão
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              Iniciar 14 Dias Grátis do Agillex
            </h3>
            <p style={{ fontSize: '0.86rem', color: '#94A3B8', marginBottom: '24px' }}>
              Preencha para configurar seu espaço na nuvem e conectar sua empresa ao WhatsApp Oficial com Inteligência Artificial.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Dra. Camila Castro"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    fontSize: '0.88rem',
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>
                  Nome da Empresa / Clínica *
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Ex: Clínica Sorriso"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    fontSize: '0.88rem',
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="(11) 99999-9999"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    fontSize: '0.88rem',
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>
                  Segmento de Atuação
                </label>
                <select
                  value={segment}
                  onChange={(e) => setSegment(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    backgroundColor: '#0F172A',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    fontSize: '0.88rem',
                  }}
                >
                  <option value="Odontologia / Saúde">Clínica Odontológica / Saúde</option>
                  <option value="Estética e Beleza">Clínica de Estética / Salão</option>
                  <option value="Escritório Contábil / Jurídico">Escritório Contábil ou Jurídico</option>
                  <option value="Consultoria / Serviços">Empresa de Consultoria e Serviços</option>
                  <option value="Outro">Outro Ramo</option>
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#94A3B8', marginTop: '6px' }}>
                <ShieldCheck size={16} color="#00F5D4" />
                <span>14 dias grátis com acesso total aos 6 módulos da Família Agillex.</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary-neon"
                style={{ width: '100%', justifyContent: 'center', marginTop: '8px', padding: '14px' }}
              >
                {loading ? <Loader2 size={18} className="spin-slow" /> : <Sparkles size={18} />}
                {loading ? 'Configurando Espaço...' : 'Ativar Meus 14 Dias Grátis'}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(0, 245, 212, 0.15)', color: '#00F5D4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Check size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              Vamos concluir seu cadastro!
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '20px' }}>
              Redirecionando você para informar seu e-mail e finalizar a ativação do teste grátis, sem cartão.
            </p>
            <Loader2 size={24} className="spin-slow" style={{ color: '#00F5D4', margin: '0 auto' }} />
          </div>
        )}
      </div>
    </div>
  );
}
