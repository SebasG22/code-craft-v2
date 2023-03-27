/* eslint-disable @typescript-eslint/no-explicit-any */

export function currency(value: number) {
  const nf = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
  return nf.format(value);
}

export function slowProcessing(total: number) {
  let random = 0;
  for (let i = 0; i < 10000000 * total; i++) {
    random = random * Math.random();
  }
}
