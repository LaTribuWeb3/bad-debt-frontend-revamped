import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import DataService from "@/lib/dataService";
import { dummyData } from "@/lib/dummyData";

export default async function MarketDataTable(){
    const data = dummyData;

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )

}