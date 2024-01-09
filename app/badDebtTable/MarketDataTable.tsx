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
      <DataTable columns={columns} data={data} />
    </div>
  );
}
