/* eslint-disable no-unused-vars */
/**
 * Generate an array with length
 * @param length The number of elements in an array
 * @param mapfn Map function to call on every element's index (from 0) of the array
 * @returns New array
 */
export const generateArrayWithLength = (length: number, mapfn?: (index: number) => any) => {
  return mapfn ? Array.from(Array(length).keys(), mapfn) : Array.from(Array(length).keys())
}
