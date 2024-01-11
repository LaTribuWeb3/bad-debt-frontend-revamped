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
      await fetch(`${API_URL}/clf/getcurrentclfgraphdata?latest=true&platform=${platform}`)
        .then((res) => res.json())
        .then((data) => {
          setGraphData(data);
        });
      await fetch(`${API_URL}/clf/getcurrentaverageclfs?latest=true&platform=${platform}`)
        .then((res) => res.json())
        .then((data) => {
          setAverageData(data);
        });
    }
    if (platform) {
      getGraphData(removeSpaces(platform.toLowerCase()));
    }
  }, [platform]);

  return <div>
    <div id='platformPresentation'>
    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>

    </div>
    </div>
  </div>;
}
