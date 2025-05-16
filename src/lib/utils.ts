import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/* TYPES */
import type { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
