// Produtos e variantes disponíveis para o teste grátis de 14 dias.
// Os ids de plano correspondem aos planos cadastrados no Agillex Hub (SAAS_PLANS).

export type TrialProductId = 'hub' | 'agenda' | 'atende' | 'cobranca' | 'reputacao' | 'ged';

export interface TrialPlan {
  id: string;
  name: string;
}

export interface TrialProduct {
  id: TrialProductId;
  label: string;
  plans: TrialPlan[];
}

export const TRIAL_PRODUCTS: TrialProduct[] = [
  {
    id: 'hub',
    label: 'Agillex Hub (plataforma completa)',
    plans: [{ id: 'combo', name: 'Combo Agillex Hub Pro' }],
  },
  {
    id: 'agenda',
    label: 'Agillex Agenda',
    plans: [
      { id: 'agenda_inicial', name: 'Agenda 1 Profissional' },
      { id: 'agenda_intermediario', name: 'Agenda Até 5 Profissionais' },
      { id: 'agenda_avancado', name: 'Agenda Até 10 Profissionais' },
    ],
  },
  {
    id: 'atende',
    label: 'Agilex Atende',
    plans: [
      { id: 'starter', name: 'Atende Starter' },
      { id: 'pro', name: 'Atende Pro' },
    ],
  },
  {
    id: 'cobranca',
    label: 'Agillex Cobrança',
    plans: [
      { id: 'cobranca-start', name: 'Cobrança Start' },
      { id: 'cobranca-pro', name: 'Cobrança Pro' },
      { id: 'cobranca-escala', name: 'Cobrança Escala' },
    ],
  },
  {
    id: 'reputacao',
    label: 'Agillex Reputação',
    plans: [
      { id: 'reputacao-start', name: 'Reputação Start' },
      { id: 'reputacao-pro', name: 'Reputação Pro' },
      { id: 'reputacao-escala', name: 'Reputação Escala' },
    ],
  },
  {
    id: 'ged',
    label: 'Agillex GED',
    plans: [
      { id: 'ged-start', name: 'GED Start' },
      { id: 'ged-pro', name: 'GED Pro' },
      { id: 'ged-escala', name: 'GED Escala' },
    ],
  },
];

// Módulos usados nas URLs do Hub -> produto do site
const MODULE_TO_PRODUCT: Record<string, TrialProductId> = {
  combo: 'hub',
  atendimento: 'atende',
  agenda: 'agenda',
  cobranca: 'cobranca',
  reputacao: 'reputacao',
  ged: 'ged',
};

/** Extrai produto e plano de uma URL de trial do Hub; null se não for uma URL de trial. */
export function parseTrialUrl(url: string): { product: TrialProductId; plan?: string } | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname !== 'hub.agillex.com.br' || parsed.searchParams.get('trial') !== 'true') {
      return null;
    }
    const product = MODULE_TO_PRODUCT[parsed.searchParams.get('modulo') || ''];
    if (!product) return null;
    return { product, plan: parsed.searchParams.get('plano') || undefined };
  } catch {
    return null;
  }
}
