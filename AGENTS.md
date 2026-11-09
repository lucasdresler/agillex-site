# AGENTS.md — Agillex Site Oficial (agillex.com.br)

## Contexto do Projeto

Este documento orienta os Agentes de IA que atuam no repositório **Agillex Site**, subordinado às diretrizes gerais do `~/AllLogic/AGENTS.md` e aos fundamentos de `~/AllLogic/SGA/FOUNDATION.md`.

O **Agillex Site** é o portal comercial oficial da **Família Agillex de Soluções Digitais** (`agillex.com.br`).
Seu objetivo é apresentar de forma futurista, imersiva e altamente visual todos os recursos, produtos e integrações do ecossistema Agillex:
1. **Agillex Hub:** Plataforma Unificada SaaS (CRM Kanban, Atendimento, Agenda e Pagamentos Asaas).
2. **Agillex Agenda:** Sistema de Agendamento Online 24/7 com sincronização Google Calendar e redução de faltas.
3. **Agilex Atende:** Atendente Inteligente com IA humanizada no WhatsApp Oficial 24/7.
4. **Agillex Cobrança:** Régua Ativa no WhatsApp com Pix Asaas e taxa fixa de R$ 1,99.
5. **Agillex Reputação:** Acelerador de Avaliações 5 estrelas no Google Maps pós-atendimento com filtro protetor.
6. **Agillex GED:** Gerenciamento Eletrônico de Documentos com OCR, IA e alertas de vencimento no WhatsApp.

---

## 1. Arquitetura e Tecnologias

- **Domínio Principal:** `https://agillex.com.br/` (e `https://www.agillex.com.br/`)
- **Plataforma Base:** Next.js 16 (App Router), React 19, TypeScript.
- **Estilo & Design:** Dark Cyberpunk / Deep Tech (Tokens em Azul Royal `#1F6FFF`, Ciano Neon `#00F5D4`, Violeta `#8B5CF6`).
- **Ícones:** Lucide React.
- **Hospedagem & CDN:** Cloudflare Pages (Edge Global, SSL automático, proteção anti-DDoS e latência < 30ms).
- **Repositório Git:** `lucasdresler/agillex-site.git` (ou subordinado à organização).

---

## 2. Princípios de Experiência e Design

- **Alto Impacto Visual:** Estética moderna, translúcida (Glassmorphism), gradientes dinâmicos e microinterações fluidas.
- **Simulações Interativas Reais:** O usuário deve experimentar interações simuladas dos produtos (ex.: testar a IA no WhatsApp, interagir com o Kanban, calcular ROI e economia).
- **Conversão Direta:** Links e modais direcionando para o início de Trial de 14 dias no Agillex Hub (`https://hub.agillex.com.br`).
