import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import DataService from "@/lib/dataService";

export default async function MarketDataTable(){
    const data = await DataService.GetProtocolResults('latest');

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )

}