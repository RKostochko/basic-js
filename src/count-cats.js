import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  // remove line with error and write your code here

  let number = 0;
  for (let i = 0; i < matrix.length; i++) {
	  for (let j = 0; j < matrix[i].length; j++) {
		  if (matrix[i][j] === '^^') {
			  number += 1;
		  }
	  }
  }
  if (number === 0) {
	  return 0;
  }
  return number;
}
