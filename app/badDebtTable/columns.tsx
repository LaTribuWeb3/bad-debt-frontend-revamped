'use client'
import { ColumnDef } from "@tanstack/react-table";


export const columns: ColumnDef<market>[] = [
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "blockchain",
        header: 'Blockchain(s)'
    },
    {
        accessorKey: "tvl",
        header: 'TVL'
    },
    {
        accessorKey: "badDebt",
        header: 'Bad Debt'
    },
    {
        accessorKey: "badDebtRatio",
        header: 'Bad Debt Ratio'
    },
    {
        accessorKey: "lastUpdate",
        header: 'Last Update'
    },
    {
        accessorKey: "averageRiskLevel",
        header: 'Avg. Risk Level'
    },
    {
        accessorKey: "details",
        header: 'Details'
    },
]