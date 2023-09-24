export const numberToUSD = (number: number | bigint, options?: Intl.NumberFormatOptions) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // minimumFractionDigits: 0,
    // maximumFractionDigits: 0,
    ...options,
  }).format(number);
export const numberToPercent = (number: number | bigint, options?: Intl.NumberFormatOptions) =>
  new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
    ...options,
  }).format(number);

export const shortNumberFormat = (number: number | bigint, options?: Intl.NumberFormatOptions) =>
  new Intl.NumberFormat('en-GB', {
    notation: 'compact',
    compactDisplay: 'short',
    ...options,
  }).format(number);

export const numberFormat = (number: number | bigint, options?: Intl.NumberFormatOptions) =>
  new Intl.NumberFormat('en-IN', options).format(number);
