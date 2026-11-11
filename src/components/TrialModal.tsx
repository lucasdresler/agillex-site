'use client';

import React, { useEffect, useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { TRIAL_PRODUCTS, TrialProductId } from '@/content/trialPlans';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: TrialProductId;
  initialPlan?: string;
}

const HUB_URL = 'https://hub.agillex.com.br';

const fieldStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  color: '#fff',
  fontSize: '0.88rem',
};

const selectStyle: React.CSSProperties = { ...fieldStyle, backgroundColor: '#0F172A' };

const labelStyle: React.CSSProperties = {
  fontSize: '0.78rem',
  color: '#CBD5E1',
  display: 'block',
  marginBottom: '4px',
};

export default function TrialModal({ isOpen, onClose, initialProduct, initialPlan }: TrialModalProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [productId, setProductId] = useState<TrialProductId>('hub');
  const [planId, setPlanId] = useState('combo');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [accountExists, setAccountExists] = useState(false);
  const [success, setSuccess] = useState(false);

  // Ao abrir, pré-seleciona o produto/variante do CTA que foi clicado
  useEffect(() => {
    if (!isOpen) return;
    const product = TRIAL_PRODUCTS.find((p) => p.id === initialProduct) || TRIAL_PRODUCTS[0];
    const plan = product.plans.find((p) => p.id === initialPlan) || product.plans[0];
    setProductId(product.id);
    setPlanId(plan.id);
    setErrorMsg('');
    setAccountExists(false);
    setSuccess(false);
  }, [isOpen, initialProduct, initialPlan]);

  if (!isOpen) return null;

  const currentProduct = TRIAL_PRODUCTS.find((p) => p.id === productId) || TRIAL_PRODUCTS[0];
  const currentPlan = currentProduct.plans.find((p) => p.id === planId) || currentProduct.plans[0];

  const handleProductChange = (id: TrialProductId) => {
    const product = TRIAL_PRODUCTS.find((p) => p.id === id) || TRIAL_PRODUCTS[0];
    setProductId(product.id);
    setPlanId(product.plans[0].id);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setAccountExists(false);

    try {
      // Cadastro do teste grátis direto no Hub: sem cartão e sem etapa de pagamento
      const res = await fetch(`${HUB_URL}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: whatsapp,
          companyName: company,
          planId: currentPlan.id,
          isTrial: true,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (res.status === 409) {
          setAccountExists(true);
          setErrorMsg('Este e-mail já possui uma conta no Agillex Hub. Acesse sua conta ou fale com o suporte se precisar recuperar o acesso.');
          return;
        }
        throw new Error(data.error || 'Não foi possível concluir o cadastro. Tente novamente.');
      }
      setSuccess(true);
    } catch (err) {
      setErrorMsg(
        err instanceof Error && err.message && err.message !== 'Failed to fetch'
          ? err.message
          : 'Falha na conexão com o servidor. Tente novamente em instantes.'
      );
    } finally {
      setLoading(false);
    }
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
              Cadastre-se e teste 14 dias grátis
            </h3>
            <p style={{ fontSize: '0.86rem', color: '#94A3B8', marginBottom: '24px' }}>
              Escolha o produto, preencha seus dados e receba o acesso pelo WhatsApp. Não pedimos cartão de crédito.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label htmlFor="trial-product" style={labelStyle}>Produto que deseja testar *</label>
                <select
                  id="trial-product"
                  value={productId}
                  onChange={(e) => handleProductChange(e.target.value as TrialProductId)}
                  style={selectStyle}
                >
                  {TRIAL_PRODUCTS.map((product) => (
                    <option key={product.id} value={product.id}>{product.label}</option>
                  ))}
                </select>
              </div>

              {currentProduct.plans.length > 1 && (
                <div>
                  <label htmlFor="trial-plan" style={labelStyle}>Plano *</label>
                  <select
                    id="trial-plan"
                    value={currentPlan.id}
                    onChange={(e) => setPlanId(e.target.value)}
                    style={selectStyle}
                  >
                    {currentProduct.plans.map((plan) => (
                      <option key={plan.id} value={plan.id}>{plan.name}</option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="trial-name" style={labelStyle}>Seu nome completo *</label>
                <input
                  id="trial-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Camila Castro"
                  style={fieldStyle}
                />
              </div>

              <div>
                <label htmlFor="trial-company" style={labelStyle}>Nome da empresa *</label>
                <input
                  id="trial-company"
                  type="text"
                  required
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Ex: Castro Serviços"
                  style={fieldStyle}
                />
              </div>

              <div>
                <label htmlFor="trial-email" style={labelStyle}>E-mail *</label>
                <input
                  id="trial-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  aria-invalid={accountExists}
                  aria-describedby={accountExists ? 'trial-email-error' : undefined}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (accountExists) {
                      setAccountExists(false);
                      setErrorMsg('');
                    }
                  }}
                  placeholder="voce@empresa.com.br"
                  style={{
                    ...fieldStyle,
                    border: accountExists ? '1px solid #F87171' : fieldStyle.border,
                  }}
                />
                {accountExists && (
                  <div
                    id="trial-email-error"
                    role="alert"
                    style={{
                      fontSize: '0.78rem',
                      color: '#FCA5A5',
                      backgroundColor: 'rgba(239, 68, 68, 0.12)',
                      border: '1px solid rgba(239, 68, 68, 0.4)',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      marginTop: '8px',
                    }}
                  >
                    <p style={{ margin: 0 }}>{errorMsg}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px' }}>
                      <a
                        href={`${HUB_URL}/login?email=${encodeURIComponent(email.trim())}`}
                        style={{ color: '#67E8F9', fontWeight: 700 }}
                      >
                        Acessar minha conta
                      </a>
                      <a
                        href="https://wa.me/5511966381915?text=Ol%C3%A1%2C%20j%C3%A1%20possuo%20cadastro%20no%20Agillex%20e%20preciso%20de%20ajuda%20para%20acessar."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#67E8F9', fontWeight: 700 }}
                      >
                        Falar com suporte
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="trial-whatsapp" style={labelStyle}>WhatsApp com DDD *</label>
                <input
                  id="trial-whatsapp"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="(11) 99999-9999"
                  style={fieldStyle}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#94A3B8', marginTop: '6px' }}>
                <ShieldCheck size={16} color="#00F5D4" />
                <span>14 dias grátis de {currentPlan.name}, sem cartão de crédito. A senha de acesso chega no seu WhatsApp.</span>
              </div>

              {errorMsg && !accountExists && (
                <div role="alert" style={{ fontSize: '0.82rem', color: '#FCA5A5', backgroundColor: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.4)', borderRadius: '8px', padding: '10px 12px' }}>
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary-neon"
                style={{ width: '100%', justifyContent: 'center', marginTop: '8px', padding: '14px' }}
              >
                {loading ? <Loader2 size={18} className="spin-slow" /> : <Sparkles size={18} />}
                {loading ? 'Criando seu acesso...' : 'Ativar Meus 14 Dias Grátis'}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(0, 245, 212, 0.15)', color: '#00F5D4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Check size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              Teste grátis ativado!
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '20px' }}>
              Seus 14 dias de <strong style={{ color: '#fff' }}>{currentPlan.name}</strong> já estão valendo. Enviamos a senha provisória para o WhatsApp informado.
            </p>
            <a
              href={`${HUB_URL}/login?email=${encodeURIComponent(email)}`}
              className="btn-primary-neon"
              style={{ display: 'inline-flex', justifyContent: 'center', padding: '14px 24px', textDecoration: 'none' }}
            >
              Fazer login no Agillex Hub
              <ArrowRight size={18} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
