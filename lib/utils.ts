import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const intervalCount = Math.floor(seconds / interval.seconds);
    if (intervalCount >= 1) {
      const label = intervalCount === 1 ? interval.label : `${interval.label}s`;
      return `${intervalCount} ${label} ago`;
    }
  }

  return "just now";
};

export const formatNumber = (num: number): string => {
  const formatWithCommas = (n: number): string => {
    return n.toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  };

  if (num >= 1_000_000_000_000) {
    return formatWithCommas(num / 1_000_000_000_000) + "T";
  } else if (num >= 1_000_000_000) {
    return formatWithCommas(num / 1_000_000_000) + "B";
  } else if (num >= 1_000_000) {
    return formatWithCommas(num / 1_000_000) + "M";
  } else if (num >= 1_000) {
    return formatWithCommas(num / 1_000) + "K";
  } else {
    return num.toLocaleString();
  }
};
