const countPaths = (grid,r=0,c=0,memo={}) => {



//     // console.log(grid)

//     if (grid[0][0]==="O") return 1

//     if(grid.length===0) return 0

//     if(grid[0].length===0) return 0

//     if (grid[0][0]==='X') return 0

if (grid.length === 0 || grid[0].length === 0 || grid[0][0] === 'X') {
    return 0; // Empty grid or obstacle at starting point
}

if (grid.length === 1 && grid[0].length === 1) {
    return grid[0][0] === 'O' ? 1 : 0; // Reached bottom-right corner
}

    const gridRowDel = grid.slice(1)

    const gridColDel = grid.map(arr => arr.slice(1));

    // Recursive calls with reduced grids
    const pathsRight = countPaths(gridColDel);
    const pathsDown = countPaths(gridRowDel);


    // Return the sum of paths from both directions
    return pathsRight + pathsDown;


  }


//   const countPaths = (grid) => {
//     if (grid.length === 0 || grid[0].length === 0 || grid[0][0] === 'X') {
//         return 0; // Empty grid or obstacle at starting point
//     }

//     if (grid.length === 1 && grid[0].length === 1) {
//         return grid[0][0] === 'O' ? 1 : 0; // Reached bottom-right corner
//     }

//     // Reduce grid by removing first row
//     const gridRowDel = grid.slice(1);

//     // Reduce grid by removing first column
//     const gridColDel = grid.map(row => row.slice(1));

//     // Recursive calls with reduced grids
//     const pathsRight = countPaths(gridRowDel);
//     const pathsDown = countPaths(gridColDel);

//     // Return the sum of paths from both directions
//     return pathsRight + pathsDown;
// };

  const grid = [
    ['O', 'O', 'O'],
    ['O', 'X', 'O'],
    ['O', 'O', 'O']
];

  console.log(countPaths(grid))
