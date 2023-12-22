'use client'
import { ColumnDef } from "@tanstack/react-table";
import { ProtocolResult } from "./ProtocolResult.type";
import { FriendlyFormatNumber, formatElapsedTime } from "@/lib/utils";
import Image from 'next/image'

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
            return <div className="flex space-x-2 flex-wrap items-center mx-auto max-w-[200px]">{chains.map((_, i) => <div key={i} className="rounded-full overflow-hidden mb-2 mx-1"><Image src={`/images/chains/${_.toLowerCase()}.webp`} width={28} height={28} alt={"blockchain logo"} /></div>)}</div>
        }
    },
    {
        accessorKey: "tvl",
        header: 'TVL',
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("tvl"))
            const formatted = FriendlyFormatNumber(amount);
            return <div className="text-right font-medium">${formatted}</div>
        }
    },
    {
        accessorKey: "totalBadDebt",
        header: 'Bad Debt',
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("totalBadDebt")).toFixed(2)
            const formatted = FriendlyFormatNumber(-amount);
            return <div className="text-right font-medium">${formatted}</div>
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
        accessorKey: "layers",
        header: 'Details'
    },
]