const permutations = (items) => {
    // todo

    if(items.length===0) return [[]]


    const firstElement = items[0]

    console.log(firstElement)

    const remaningElements = items.slice(1)

    console.log(remaningElements)

    const permsWithout = permutations(remaningElements)

    let output =[]

    for (let sub of permsWithout){

        for(let i =0; i<sub.length+1;i++) {

             output.push([...sub.slice(0,i), firstElement, sub.slice(i)])

    }
  }

  return output

};
