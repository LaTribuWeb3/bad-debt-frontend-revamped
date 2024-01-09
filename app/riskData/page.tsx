'use client';
import { useSearchParams } from 'next/navigation';

export default function RiskDataPage() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform');

  return <div></div>;
}
