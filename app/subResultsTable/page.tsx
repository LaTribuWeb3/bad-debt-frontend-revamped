import { DataTable } from "@/components/ui/data-table";
import { columns } from "../badDebtTable/columns";
import { ProtocolResult } from "../badDebtTable/ProtocolResult.type";

interface SubResultsTableProps {
    data: ProtocolResult[]
}

export default function SubResultsTable({data}: SubResultsTableProps){
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )

}