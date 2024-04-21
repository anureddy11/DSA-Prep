const createCombinations = (items, k) => {
    // todo

    if (items.length===0)  return [[]]

    if (k>items.length) return []

    if(k===items.length)  return [items]

    let firstElement = items[0]

    const combsWithoutFirstEleLowerK = createCombinations(items.slice(1),k-1)
    const combsWithoutFirstEle       = createCombinations(items.slice(1),k)

    let output =[]

    for(let sub of combsWithoutFirstEleLowerK) {


      if(k>sub.length) output.push([firstElement,...sub])

    }
    output = [...output, ...combsWithoutFirstEle]

    console.log(output)
    return output
}

createCombinations(["q", "r", "s", "t"], 2); // ->
// [
//   [ 'q', 'r' ],
//   [ 'q', 's' ],
//   [ 'q', 't' ],
//   [ 'r', 's' ],
//   [ 'r', 't' ],
//   [ 's', 't' ]
// ]
