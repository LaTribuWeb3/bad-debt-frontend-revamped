'use client'
import { ColumnDef } from "@tanstack/react-table";
import { ProtocolResult } from "./ProtocolResult.type";
import { FriendlyFormatNumber, formatElapsedTime } from "@/lib/utils";
import Image from 'next/image'
import { CustomTooltip } from "@/components/ui/tooltipAbstraction";

export const columns: ColumnDef<ProtocolResult>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "chains",
        header: 'Blockchain(s)',
        cell: ({ row }) => {
            const chains:string[] = row.getValue("chains");
            return <div className="flex flex-wrap items-center mx-auto max-w-[200px]">{chains.map((_, i) => <div key={i} className="rounded-full overflow-hidden"><Image src={`/images/chains/${_.toLowerCase()}.webp`} width={28} height={28} alt={"blockchain logo"} /></div>)}</div>
        }
    },
    {
        accessorKey: "tvl",
        header: 'TVL',
        cell: ({ row }) => {
            const amount = Number(parseFloat(row.getValue("tvl")).toFixed(2))
            const formatted = FriendlyFormatNumber(amount);
            return <CustomTooltip content={amount}><div className="text-right font-medium">${formatted}</div></CustomTooltip>
        }
    },
    {
        accessorKey: "totalBadDebt",
        header: 'Bad Debt',
        cell: ({ row }) => {
            const amount = Number(parseFloat(row.getValue("totalBadDebt")).toFixed(2))
            const formatted = FriendlyFormatNumber(-amount);
            return <CustomTooltip content={amount}><div className="text-right font-medium">${formatted}</div></CustomTooltip>
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
        header: 'Last Update',
        cell: ({ row }) => {
            const timestamp = Number(row.getValue("updated"));
            const formatted = formatElapsedTime(timestamp);
            return <div className="text-right font-medium">{formatted}</div>
        }
    },
    {
        accessorKey: "averageRiskLevel",
        header: 'Avg. Risk Level'
    },
    {
        accessorKey: "subResults",
        header: 'Details',
        cell: ({ row }) => {
            const usersWithBadDebtCount = Number(row.getValue("usersWithBadDebtCount"));
            const subResults = row.getValue("subResults");
            
            return <div className="text-right font-medium">{subResults ? `sous résultats` : `${usersWithBadDebtCount} insolvent accounts`}</div>
        }
    },
]