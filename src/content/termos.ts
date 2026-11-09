// Conteúdo oficial dos Termos de Uso e Condições Gerais das Plataformas SaaS da Família Agillex.
// Operado com Engenharia Digital por AllLogic Online (WELLINGTON LUCAS LIMA DRESLER - ME - CNPJ 08.784.339/0001-38).

export interface TermsSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export const termosContent = {
  eyebrow: "Termos e Condições Gerais",
  title: "Termos de Uso e Contrato de Licenciamento",
  description:
    "Estes Termos de Uso e Condições Gerais de Contratação regem o acesso, a navegação e o licenciamento das soluções de software em nuvem (SaaS) da Família Agillex e os serviços de engenharia digital fornecidos pela AllLogic Online.",
  updatedAt: "Novembro de 2026",

  sections: [
    {
      title: "1. Identificação da Contratada",
      paragraphs: [
        "A Família Agillex de Soluções Digitais é concebida e operada pela AllLogic Online — Engenharia de Soluções Digitais, marca comercial de titularidade de WELLINGTON LUCAS LIMA DRESLER - ME, pessoa jurídica de direito privado inscrita no CNPJ/MF sob o nº 08.784.339/0001-38, com sede em São Paulo/SP.",
        "Para comunicações formais, suporte técnico ou dúvidas contratuais, os canais oficiais de atendimento são o e-mail contato@alllogiconline.com.br e o WhatsApp oficial (11) 96638-1915.",
      ],
    },
    {
      title: "2. Objeto e Soluções Licenciadas da Família Agillex",
      paragraphs: [
        "O presente instrumento regula o licenciamento não exclusivo e temporário de uso das ferramentas em nuvem (SaaS) da Família Agillex, permitindo a contratação de módulos de forma 100% independente ou integrada:",
      ],
      items: [
        "Agillex Hub: plataforma operacional central unificada com CRM Kanban em tempo real, pipeline de vendas, atendimento com IA e motor de checkout integrado;",
        "Agillex Agenda: sistema de agendamento online 24/7 com link público exclusivo, sincronização bidirecional em tempo real com Google Calendar e lembretes automáticos no WhatsApp;",
        "Agilex Atende: atendente com Inteligência Artificial humanizada no WhatsApp Oficial (Meta Cloud API), compreensão de texto e áudio de voz, base de conhecimento RAG e transbordo humano em 1 clique;",
        "Agillex Cobrança: régua inteligente de notificações ativas no WhatsApp integrada ao Asaas, emissão de Pix Copia e Cola instantâneo com taxa fixa de apenas R$ 1,99 e recuperação de inadimplência;",
        "Agillex Reputação: acelerador de avaliações 5 estrelas no Google Maps pós-atendimento com filtro protetor de satisfação (NPS) e respostas automáticas geradas por IA;",
        "Agillex GED: gerenciamento eletrônico de documentos com leitura OCR e IA de contratos/certidões, alertas de vencimento no WhatsApp e assinatura digital em 1 clique.",
      ],
    },
    {
      title: "3. Período de Teste Gratuito (Trial de 14 Dias)",
      paragraphs: [
        "Para que o contratante comprove na prática a eficácia das soluções, disponibilizamos um período de teste gratuito de 14 (quatorze) dias corridos em planos elegíveis.",
        "O período de teste é concedido sem necessidade de inserção prévia de cartão de crédito e sem fidelidade. Ao término do período de teste, o cliente poderá optar livremente pela contratação definitiva do plano mensal ou anual para manter os recursos ativos.",
      ],
    },
    {
      title: "4. Nível de Serviço e Disponibilidade (SLA)",
      paragraphs: [
        "A AllLogic Online adota as melhores práticas de engenharia em nuvem, conteinerização e segurança cibernética, estabelecendo uma meta de disponibilidade mensal de 99,5% para as aplicações da Família Agillex.",
        "Não são computadas no SLA as janelas de manutenção técnica preventiva (comunicadas previamente com pelo menos 24 horas de antecedência) ou instabilidades generalizadas de redes globais externas (como indisponibilidade mundial da Meta/WhatsApp Cloud API, da Cloudflare, de provedores de telecomunicações ou do sistema Pix do Banco Central).",
      ],
    },
    {
      title: "5. Uso Adequado das Mensagens e Políticas do WhatsApp",
      paragraphs: [
        "Ao utilizar o Agilex Atende, Agillex Agenda ou Agillex Cobrança integrados ao WhatsApp, o contratante obriga-se a respeitar as Políticas Comerciais da Meta e a legislação vigente.",
        "É terminantemente proibido o envio de mensagens em massa não solicitadas (SPAM), conteúdos fraudulentos, difamatórios ou ilícitos. A AllLogic Online não se responsabiliza por sanções ou bloqueios de números decorrentes de práticas operacionais abusivas realizadas pelo cliente.",
      ],
    },
    {
      title: "6. Ausência de Fidelidade Compulsória e Cancelamento Livre",
      paragraphs: [
        "Em consonância com nossos princípios de honestidade técnica e transparência comercial, não praticamos fidelidade compulsória ou multas rescisórias abusivas nas assinaturas mensais da Família Agillex.",
        "O cliente pode solicitar o cancelamento da assinatura a qualquer momento através do painel do cliente ou canal de suporte, operando a rescisão sem multas ao término do ciclo vigente contratado.",
      ],
    },
    {
      title: "7. Propriedade Intelectual e Propriedade Absoluta dos Dados",
      paragraphs: [
        "Propriedade da Plataforma: todos os softwares, marcas, códigos, designs, logotipos e algoritmos da Família Agillex e AllLogic Online são de propriedade intelectual exclusiva da Contratada.",
        "Propriedade dos Dados do Cliente: todos os dados cadastrais, listas de clientes, agendamentos, históricos de mensagens, avaliações e relatórios financeiros inseridos na plataforma pertencem exclusivamente ao Contratante.",
        "Garantia de Portabilidade: a qualquer tempo ou em caso de cancelamento, o cliente tem o direito de exportar a integralidade de seus dados cadastrais em formatos estruturados abertos (como CSV ou JSON), sem qualquer taxa de resgate ou retenção.",
      ],
    },
    {
      title: "8. Proteção de Dados (LGPD) e Confidencialidade",
      paragraphs: [
        "O tratamento de dados pessoais é regido pela Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).",
        "O contratante atua na qualidade de Controlador dos dados pessoais dos seus clientes finais, e a AllLogic Online atua como Operadora técnica, aplicando criptografia moderna TLS/HTTPS, bancos de dados isolados e sigilo contratual rigoroso, conforme detalhado em nossa Política de Privacidade.",
      ],
    },
    {
      title: "9. Preços, Taxas e Formas de Faturamento",
      paragraphs: [
        "Os valores dos planos são estabelecidos com base na tabela pública vigente no momento da contratação.",
        "Para o módulo de pagamentos integrados (Agillex Pay / Asaas), incide exclusivamente a Taxa Fixa de apenas R$ 1,99 por liquidação concluída de Pix, não sendo cobrada nenhuma taxa percentual ou comissão oculta sobre o faturamento do cliente.",
      ],
    },
    {
      title: "10. Legislação Aplicável e Foro",
      paragraphs: [
        "O presente contrato é regido e interpretado segundo as leis da República Federativa do Brasil, em especial o Código Civil Brasileiro e a Lei nº 12.965/2014 (Marco Civil da Internet).",
        "Para dirimir quaisquer controvérsias oriundas destes Termos que não puderem ser solucionadas amigavelmente entre as partes, fica eleito o Foro da Comarca da Capital do Estado de São Paulo, com renúncia a qualquer outro por mais privilegiado que seja.",
      ],
    },
  ] satisfies TermsSection[],
};
