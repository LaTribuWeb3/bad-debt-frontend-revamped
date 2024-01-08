import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import DataService from "@/lib/dataService";
import { dummyData } from "@/lib/dummyData";

// Define the props for MarketDataTable
interface MarketDataTableProps {
    date: Date;  // 'data' is an array of ProtocolResult
}

export default function MarketDataTable({date} : MarketDataTableProps){
    const data = dummyData;

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )

}