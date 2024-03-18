// five sort
// Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

// fiveSort([12, 5, 1, 5, 12, 7]);
// // -> [12, 7, 1, 12, 5, 5]
// fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
// // -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]
// fiveSort([5, 5, 5, 1, 1, 1, 4]);
// // -> [4, 1, 1, 1, 5, 5, 5]
// fiveSort([5, 5, 6, 5, 5, 5, 5]);
// // -> [6, 5, 5, 5, 5, 5, 5]
// fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]);
// // -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]
// const fives = new Array(20000).fill(5);
// const fours = new Array(20000).fill(4);
// const nums = [...fives, ...fours];
// fiveSort(nums);
// // twenty-thousand 4s followed by twenty-thousand 5s
// // -> [4, 4, 4, 4, ..., 5, 5, 5, 5]


// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

// mostFrequentChar('bookeeper'); // -> 'e'
// mostFrequentChar('david'); // -> 'd'
// mostFrequentChar('abby'); // -> 'b'
// mostFrequentChar('mississippi'); // -> 'i'
// mostFrequentChar('potato'); // -> 'o'
// mostFrequentChar('eleventennine'); // -> 'e'
// mostFrequentChar("riverbed"); // -> 'r'

// pair product
// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair whose product is the target.

// pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
// pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
// pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
// pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
// pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
// pairProduct([4, 6, 8, 2], 16); // -> [2, 3]

// pair sum
// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

// pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
// pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
// pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
// pairSum([1, 6, 7, 2], 13); // -> [1, 2]
// pairSum([9, 9], 18); // -> [0, 1]
// pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]

// intersection
// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

// intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
// intersection([2,4,6], [4,2]) // -> [2,4]
// intersection([4,2,1], [1,2,4,6]) // -> [1,2,4]
// intersection([0,1,2], [10,11]) // -> []
// const a = [];
// const b = [];
// for (let i = 0; i < 50000; i += 1) {
//   a.push(i);
//   b.push(i);
// }
// intersection(a, b) // -> [0,1,2,3,..., 49999]
