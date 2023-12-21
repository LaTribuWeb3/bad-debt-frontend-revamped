import { DataTable } from "@/components/ui/data-table";
import { market } from "./marketTypes";
import { columns } from "./columns";

export default function MarketDataTable(marketsArray: market[]){

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )

}