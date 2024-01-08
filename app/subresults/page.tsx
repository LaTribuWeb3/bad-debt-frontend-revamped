"use client"
import { DataTable } from "@/components/ui/data-table";
import { columns } from "../badDebtTable/columns";
import { ProtocolResult } from "../badDebtTable/ProtocolResult.type";
import { dummyData } from "@/lib/dummyData";
import { useSearchParams } from 'next/navigation'

export default function SubResultsTable(){
    const searchParams = useSearchParams()
    const platform = searchParams.get('platform')
    const allData = dummyData;
    const platformData = allData.find(_ => _.name === platform);
    const data:ProtocolResult[] | undefined =  platformData?.subResults;
    if(data === undefined){
        return
    }

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )

}