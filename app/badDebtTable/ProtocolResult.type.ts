export interface ProtocolResult {
  name: string;
  chains: string[];
  totalBadDebt: number;
  updated: number;
  decimals: number;
  tvl: number;
  deposits: number;
  borrows: number;
  badDebtRatio: number;
  averageRiskLevel?: number;
  usersWithBadDebtCount: number;
  dataFileLink: string;
  subResults?: ProtocolResult[];
}
