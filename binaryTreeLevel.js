class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const levelAverages = (root) => {
    // todo
    if(!root) return []


    let level = 0
    let queue = [{
        node : root,
        level: level
    }]

    let output = []

    while(queue.length > 0) {

      let {node,level} = queue.shift()

      if(node.left) queue.push({node: node.left, level:level+1})
      if(node.right) queue.push({node: node.right,level:level+1})


      if(output[level]) output[level].push(node.val)
      else output[level] = [node.val]

    }

    let averages = output.map((arr) => {
        // Calculate sum of elements in the array
        let sum = arr.reduce((acc, val) => acc + val, 0);

        // Calculate average
        return sum / arr.length;
    });

    return averages

  };



const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

levelAverages(a)
