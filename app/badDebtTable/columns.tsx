'use client'
import { ColumnDef } from "@tanstack/react-table";
import { ProtocolResult } from "./ProtocolResult.type";


export const columns: ColumnDef<ProtocolResult>[] = [
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "chains",
        header: 'Blockchain(s)'
    },
    {
        accessorKey: "tvl",
        header: 'TVL'
    },
    {
        accessorKey: "totalBadDebt",
        header: 'Bad Debt'
    },
    {
        accessorKey: "badDebtRatio",
        header: 'Bad Debt Ratio'
    },
    {
        accessorKey: "updated",
        header: 'Last Update'
    },
    {
        accessorKey: "averageRiskLevel",
        header: 'Avg. Risk Level'
    },
    {
        accessorKey: "layers",
        header: 'Details'
    },
]