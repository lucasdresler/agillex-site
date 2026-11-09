import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agillex | Plataforma Unificada de Gestão & Inteligência Comercial',
  description: 'O futuro da operação de serviços em piloto automático. Atendimento com IA humanizada no WhatsApp 24/7, Agendamento Online Sincronizado, Funil CRM Kanban, Agillex Pay R$ 1,99, Reputação 5 Estrelas e GED com IA.',
  keywords: [
    'Agillex',
    'Agillex Hub',
    'Agilex Atende',
    'Agillex Agenda',
    'Agillex Cobrança',
    'Agillex Reputação',
    'Agillex GED',
    'Atendimento WhatsApp com IA',
    'Agendamento Online Google Calendar',
    'CRM Kanban WhatsApp',
    'Cobrança Pix Asaas',
    'AllLogic Online'
  ],
  authors: [{ name: 'AllLogic Online', url: 'https://alllogiconline.com.br' }],
  openGraph: {
    title: 'Agillex | Soluções Digitais Inteligentes',
    description: 'Transforme a operação da sua empresa com inteligência artificial, automação de agendamentos e atendimento 24/7.',
    url: 'https://agillex.com.br',
    siteName: 'Agillex',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="cyber-background min-h-screen text-slate-100 antialiased selection:bg-cyan-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
