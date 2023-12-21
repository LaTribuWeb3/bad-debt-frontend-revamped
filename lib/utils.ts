import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import BigNumber from 'bignumber.js'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function roundTo(num: number, dec: number): number {
  const pow = Math.pow(10, dec);
  return Math.round((num + Number.EPSILON) * pow) / pow;
}

export function FriendlyFormatNumber(num: number): string {
  if (num == 0) {
    return '0';
  }

  if (num > 1e9) {
    return `${roundTo(num / 1e9, 2)}B`;
  } else if (num > 1e6) {
    return `${roundTo(num / 1e6, 2)}M`;
  } else if (num > 1e3) {
    return `${roundTo(num / 1e3, 2)}K`;
  } else if (num < 1 / 1e3) {
    return num.toExponential();
  } else {
    return `${roundTo(num, 4).toString()}`;
  }
}

export function PercentageFormatter(num: number): string {
  return `${roundTo(num * 100, 2)}%`;
}

export function getToday() {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  return {
    day,
    month,
    year
  };
}

export function normalize(bnString: string, decimal: number) {
  if(bnString === undefined){
    return 37707
  }
  const base = new BigNumber(bnString);
  const factor = new BigNumber(10).pow(decimal);

  return base.div(factor).toNumber();
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}