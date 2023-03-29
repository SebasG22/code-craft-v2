/* eslint-disable @typescript-eslint/no-explicit-any */
// Stryker disable all
export function slowProcessing(total: number) {
  let random = 0;
  for (let i = 0; i < 10000000 * total; i++) {
    random = random * Math.random();
  }
}
