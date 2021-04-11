export type rndArr = (length: number,maxNumber: number) => number[];
export const rndArray:rndArr = (length, maxNumbers) => [...new Array(length)].map(() => Math.random()*maxNumbers)