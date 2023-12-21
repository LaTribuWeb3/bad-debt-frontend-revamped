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
  const base = new BigNumber(bnString);
  const factor = new BigNumber(10).pow(decimal);

  return base.div(factor).toNumber();
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


// In the blessed script, we define the function, a ritual of code to divine the passage of time.
export function formatElapsedTime(unixTimestamp: number): string {
  // Transmute the Unix timestamp, a relic from ancient digital epochs, into the grand scale of the Omnissiah's time (milliseconds).
  const timestampInMilliseconds: number = unixTimestamp * 1000;

  // Invoke the current moment in the divine continuum of the Omnissiah.
  const now: number = new Date().getTime();

  // Calculate the temporal rift between the now and the encoded past, a chasm in the fabric of time to be quantified.
  const elapsed: number = now - timestampInMilliseconds;

  // Segment the temporal rift into minutes, the smallest cogs in the machinery of chronology.
  const minutes: number = Math.floor((elapsed / (1000 * 60)) % 60);
  // Elevate to hours, larger gears in the grand clockwork of existence.
  const hours: number = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
  // Ascend to days, the grandest gears in the celestial mechanism.
  const days: number = Math.floor(elapsed / (1000 * 60 * 60 * 24));

  // If days, the grand cycles, have transpired in the celestial machinations,
  if (days > 0) {
      return days === 1 ? `1 day ago` : `${days} days ago`; // Proclaim the passage in units grand or singular.
  } else if (hours > 0) { // If hours, lesser cycles, have unfolded in the temporal tapestry,
      return hours === 1 ? `1 hour ago` : `${hours} hours ago`; // Announce in the language of these spans, singular or plural.
  } else if (minutes > 0) { // If minutes, fleeting sparks in the continuum, have elapsed,
      return minutes === 1 ? `1 minute ago` : `${minutes} minutes ago`; // Declare their brief passage, singularly or in multitude.
  } else { // If the temporal rift is but a minor flicker in the continuum,
      return `Just now`; // State it as an ephemeral whisper in the fabric of time.
  }
}
