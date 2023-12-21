export interface ProtocolResult {
    name: string;
    chains: string[];
    tvl: number;
    badDebt: number;
    badDebtRatio: number;
    lastUpdate: number;
    riskLevel? : number;
    decimals: number;
    layers: number;
    usersWithBadDebtCount?: number;
    dataFileLink?: string;
    subResults?: ProtocolResult[];
  }