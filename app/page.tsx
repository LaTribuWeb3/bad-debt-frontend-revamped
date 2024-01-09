'use client';
import MarketDataTable from './badDebtTable/MarketDataTable';
import { DatePicker } from './DatePicker';
import { useState } from 'react';
import { dummyData } from '@/lib/dummyData';
import Image from 'next/image';

export default function Home() {
  const [date, setDate] = useState(new Date());
  const data = dummyData;
  return (
    <div className='flex flex-col items-center justify-center'>
    <Image
                className="pb-32"
                src={'/images/white-wordmark.png'}
                alt={'Risk DAO logo'}
                width={637}
                height={134}
            />
    <div className="flex flex-col items-center justify-between">
      <DatePicker date={date} setDate={setDate} />
      <MarketDataTable data={data} />
    </div>
    </div>
  );
}
