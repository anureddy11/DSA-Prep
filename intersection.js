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

function intersection(arrayA, arrayB) {
    let objB =new Set()
    let output =[]
    for(let i=0;i<arrayB.length;i++) {
        if(!objB.has(arrayB[i])){
            objB.add(arrayB[i])

        }
    }
    console.log(objB)

    for(let j=0;j<arrayA.length;j++) {
        if(objB.has(arrayA[j])){
            output.push(arrayA[j])
        }
    }

    return output

}

const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
  a.push(i);
  b.push(i);
}
console.log(intersection(a, b)) // -> [0,1,2,3,..., 49999]
