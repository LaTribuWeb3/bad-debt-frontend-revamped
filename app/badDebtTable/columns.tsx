'use client'
import { ColumnDef } from "@tanstack/react-table";
import { ProtocolResult } from "./ProtocolResult.type";
import { FriendlyFormatNumber } from "@/lib/utils";


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
        header: 'TVL',
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("tvl"))
            const formatted = FriendlyFormatNumber(amount);
            return <div className="text-right font-medium">{formatted}</div>
        }
    },
    {
        accessorKey: "totalBadDebt",
        header: 'Bad Debt',
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("totalBadDebt")).toFixed(2)
            const formatted = FriendlyFormatNumber(-amount);
            return <div className="text-right font-medium">{formatted}</div>
        }
    },
    {
        accessorKey: "badDebtRatio",
        header: 'Bad Debt Ratio',
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("badDebtRatio")).toFixed(2);
            const formatted = FriendlyFormatNumber(-amount * 100);
            return <div className="text-right font-medium">{formatted}%</div>
        }
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