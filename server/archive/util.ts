const util = {
    print2DArray(grid: number[][]) {
        for (let i = 0; i < grid.length; i += 1) {
            console.log(...grid[i]);
        }
        console.log();
    },
    copyGrid(from: number[][], to: number[][]) {
        for (let i = 0; i < from.length; i += 1) {
            to[i] = [...from[i]];
        }
    },
};

export { util };
