export interface market {
    name: string,
    blockchain: string[],
    tvl: number,
    badDebt: number,
    badDebtRatio: number,
    lastUpdate: number,
    averageRiskLevel?: number,
    details:string,
    layers: number,
}