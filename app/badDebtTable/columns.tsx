'use client'
import { ColumnDef } from "@tanstack/react-table";
import { ProtocolResult } from "./ProtocolResult.type";
import { FriendlyFormatNumber, formatCurrency, formatElapsedTime } from "@/lib/utils";
import Image from 'next/image'
import { CustomTooltip } from "@/components/ui/tooltipAbstraction";
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<ProtocolResult>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const name: string = row.getValue("name");
            return <div className="flex flex-wrap items-center mx-auto max-w-[200px]"><div className="rounded-full overflow-hidden"><Image src={`/images/platforms/${name.toLowerCase()}.webp`} width={28} height={28} alt={"platform logo"} /></div><div className="ml-1">{name}</div></div>
        }
    },
    {
        accessorKey: "chains",
        header: 'Blockchain(s)',
        cell: ({ row }) => {
            const chains: string[] = row.getValue("chains");
            return <div className="flex flex-wrap items-center mx-auto max-w-[200px]">{chains.map((_, i) => <div key={i} className="rounded-full overflow-hidden m-1"><Image src={`/images/chains/${_.toLowerCase()}.webp`} width={28} height={28} alt={"blockchain logo"} /></div>)}</div>
        }
    },
    {
        accessorKey: "tvl",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    TVL
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = Number(parseFloat(row.getValue("tvl")).toFixed(2))
            const formatted = FriendlyFormatNumber(amount);
            return <CustomTooltip content={formatCurrency(amount)}><div className="text-right font-medium">${formatted}</div></CustomTooltip>
        }
    },
    {
        accessorKey: "totalBadDebt",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Bad Debt
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = Number(parseFloat(row.getValue("totalBadDebt")).toFixed(2))
            const formatted = FriendlyFormatNumber(-amount);
            return <CustomTooltip content={formatCurrency(-amount)}><div className="text-center font-medium">${formatted}</div></CustomTooltip>
        }
    },
    {
        accessorKey: "badDebtRatio",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Bad Debt Ratio
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("badDebtRatio")).toFixed(0);
            const formatted = FriendlyFormatNumber(-amount * 100);
            return <div className="text-center font-medium">{formatted}%</div>
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
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Avg. Risk Level
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "subResults",
        header: 'Details',
        cell: ({ row }) => {
            const usersWithBadDebtCount = Number(row.original.usersWithBadDebtCount);
            const url = row.original.dataFileLink;
            const subResults = row.getValue("subResults");

            return <div className="text-right font-medium">{subResults ? `Full dashboard for ${Object.keys(subResults).length} markets` : <a href={url} target="_blank" rel="noopener noreferrer">
                {`${usersWithBadDebtCount} insolvent accounts`}
            </a>}</div>
        }
    },
]