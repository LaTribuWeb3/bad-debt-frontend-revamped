'use client';
import { DataTable } from '@/components/ui/data-table';
import { columns } from '../badDebtTable/columns';
import { ProtocolResult } from '../badDebtTable/ProtocolResult.type';
import { dummyData } from '@/lib/dummyData';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function SubResultsTable() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform');
  const allData = dummyData;
  const platformData = allData.find((_) => _.name === platform);
  const data: ProtocolResult[] | undefined = platformData?.subResults;
  if (data === undefined) {
    return;
  }

  return <div className='flex flex-col items-center justify-center'>
    <Image
      className="pb-32"
      src={'/images/white-wordmark.png'}
      alt={'Risk DAO logo'}
      width={637}
      height={134}
    />
    <DataTable columns={columns} data={data} />;
  </div>
}
