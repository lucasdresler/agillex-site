'use client';

import React, { useState } from 'react';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  const phone = '5511966381915';
  const text = encodeURIComponent(
    'Olá! Gostaria de saber mais sobre as soluções da Família Agillex e tirar dúvidas sobre os planos.'
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${text}`;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 95,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      {/* BOTÃO PRINCIPAL (LADO ESQUERDO) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a equipe no WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45), 0 0 20px rgba(37, 211, 102, 0.3)',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        {/* Ícone oficial WhatsApp em SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#ffffff"
        >
          <path d="M12.031 2c-5.516 0-9.999 4.477-9.999 9.992 0 1.764.462 3.486 1.34 5.006l-1.422 5.194 5.334-1.399c1.468.803 3.123 1.226 4.747 1.226 5.516 0 10-4.478 10-9.993 0-5.514-4.484-9.992-10-9.992zm5.834 14.167c-.244.688-1.42 1.317-1.956 1.4-.536.082-1.238.118-2.004-.127-.478-.152-1.094-.356-1.892-.702-3.353-1.455-5.541-4.869-5.708-5.092-.167-.223-1.359-1.808-1.359-3.449 0-1.641.859-2.45 1.164-2.784.305-.335.667-.419.89-.419.223 0 .445.002.64.012.207.01.482-.078.754.576.282.68.96 2.342 1.044 2.513.084.172.14.373.028.597-.112.223-.168.363-.334.558-.167.195-.352.436-.502.586-.168.167-.344.349-.148.685.195.336.868 1.43 1.862 2.316 1.282 1.141 2.362 1.495 2.697 1.662.335.167.53.14.726-.084.195-.223.836-.976 1.059-1.311.223-.335.446-.279.753-.167.307.112 1.95.92 2.285 1.087.335.167.558.251.641.391.084.14.084.81-.16 1.498z" />
        </svg>

        {/* Efeito radar sutil */}
        <span
          style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '50%',
            border: '2px solid rgba(37, 211, 102, 0.4)',
            animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
            pointerEvents: 'none',
          }}
        />
      </a>

      {/* TOOLTIP / BALÃO DE ATENDIMENTO (À DIREITA DO ÍCONE) */}
      <div
        style={{
          backgroundColor: 'rgba(6, 11, 24, 0.92)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(37, 211, 102, 0.4)',
          borderRadius: '12px',
          padding: '8px 14px',
          color: '#fff',
          fontSize: '0.82rem',
          fontWeight: 600,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 15px rgba(37, 211, 102, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          opacity: hovered ? 1 : 0.85,
          transform: hovered ? 'scale(1.02)' : 'scale(1)',
          transition: 'all 0.2s ease',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
        className="whatsapp-tooltip-text"
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            boxShadow: '0 0 8px #25D366',
          }}
        />
        <span>Atendimento WhatsApp</span>
      </div>

      <style jsx>{`
        @keyframes ping {
          75%,
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        @media (max-width: 640px) {
          .whatsapp-tooltip-text {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
