import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { RequestNetworkError } from './types/shared';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isRequestNetworkError(
  error: unknown
): error is RequestNetworkError {
  // Check for properties that are specific to RequestNetworkError
  return (
    error !== null &&
    typeof error === 'object' &&
    'code' in error &&
    typeof error.code === 'number'
  );
}
