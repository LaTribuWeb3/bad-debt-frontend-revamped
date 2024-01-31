import { DataTable } from '@/components/ui/data-table';
import { columns } from './columns';
import { dummyData } from '@/lib/dummyData';
import { ProtocolResult } from './ProtocolResult.type';

interface BadDebtTableProps {
  data: ProtocolResult[];
}

export default function BadDebtTable({ data }: BadDebtTableProps) {
  return (
    <div className="container mx-auto py-10">
      <div
  className="block w-full rounded-lg bg-darkHeader text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-darkHeader">
  <div className="p-6">
    <p className="text-center text-2xl md:text-3xl">
    Lending Markets Bad Debt
    </p>
  </div>
</div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
