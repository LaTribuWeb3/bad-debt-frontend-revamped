'use client';
import { API_URL } from '@/lib/config';
import { removeSpaces } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RiskDataPage() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform');
  const [graphData, setGraphData] = useState(undefined);
  const [averageData, setAverageData] = useState(undefined);

  useEffect(() => {
    async function getGraphData(platform: string) {
      await fetch(`${API_URL}/getcurrentclfgraphdata?platform=${platform}&latest=true`)
        .then((res) => res.json())
        .then((data) => {
          setGraphData(data);
        });
      await fetch(`${API_URL}/getcurrentaverageclfs?platform=${platform}&latest=true`)
        .then((res) => res.json())
        .then((data) => {
          setAverageData(data);
        });
    }
    if (platform) {
      getGraphData(removeSpaces(platform.toLowerCase()));
    }
  }, [platform]);

  return <div></div>;
}
