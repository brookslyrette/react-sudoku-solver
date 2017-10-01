const VALID_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export function isValidValue(value) {
    // empty string denotes empty cells
    if (value === '') {
        return true
    }
    if (isNaN(value)) {
        return false;
    }
    return VALID_VALUES.indexOf(value) !== -1
}

/**
 * Validates that a cell contains a valid value that is not 
 * used in it's peers. 
 * 
 * @param x index of the cell being checked 
 * @param y index of the cell being checked
 * @param sudoku the board being checked
 */
export function isCellValid(x, y, sudoku) {
    var value = sudoku[x][y]
    // empty cells are always valid
    if (value === '') {
        return true
    }
    // check peer list for this value being used else where
    let peers = getPeers(x, y)
    for(var peer of peers) {
        if (sudoku[peer.x][peer.y] === value) {
            return false
        }
    }
    return true
}

/**
 * Returns the list of cells that are peers to this cell. 
 * This includes all cells in same row and column as well as 
 * the cells in the same grid. 
 * @param int x 
 * @param int y 
 */
export function getPeers(x, y) {
    var peers = []
    // add all y's and x's 
    for(var k = 0; k < 9; k++) {
        if (k !== x) {
            peers.push({
                x: k,
                y,
            })
        }
        if (k !== y) {
            peers.push({
                x,
                y: k, 
            })
        }
    }
    // add the items in the same grid
    var topLeftY = y - y % 3
    var topLeftX = x - x % 3
    for(var i = topLeftX; i < topLeftX + 3; i++) {
        for(var j = topLeftY; j < topLeftY + 3; j++) {
            if (j === y && i === x) {
                continue
            } 
            peers.push({
                x: i,
                y: j, 
            })
        }
    }
    return peers
}

/**
 * Solves a sudoku puzzle. 
 * @param sudoku the puzzle to be solved
 */
export function solve(sudoku) {
    // copy input
    var puzzle = [
        [...sudoku[0]],
        [...sudoku[1]],
        [...sudoku[2]],
        [...sudoku[3]],
        [...sudoku[4]],
        [...sudoku[5]],
        [...sudoku[6]],
        [...sudoku[7]],
        [...sudoku[8]],
    ]

    var cycleImprovedAnswer = true
    var remainingCells = []
    while (cycleImprovedAnswer) {
        cycleImprovedAnswer = false
        remainingCells = []
        // do a cycle and look for cells where their is only one possible value
        for (var x = 0; x < 9; x++) {
            for (var y = 0; y < 9; y++) {
                let value = puzzle[x][y]
                if (value) {
                    continue // this cell is populated, skip to the next
                }

                // get list of values in all peers
                let peers = getPeers(x, y)
                let usedValues = []
                for (var peer of peers) {
                    usedValues.push(puzzle[peer.x][peer.y])
                }

                // see what possibile values remain
                var possibleValues = VALID_VALUES.filter(value => usedValues.indexOf(value) === -1)
                if (possibleValues.length === 1) {
                    puzzle[x][y] = possibleValues[0]
                    cycleImprovedAnswer = true
                } else {
                    remainingCells.push({
                        x,
                        y,
                    })
                }
            }
        }
    }
    
    // now use brute force to solve the remaining ambiguous cells
    for (var i = 0; i < remainingCells.length; i++) {
        let { x, y } = remainingCells[i]
        let value = puzzle[x][y]
        if (!value) {
            puzzle[x][y] = 1
        } else {
            var newValue = puzzle[x][y] + 1
            if (newValue >= 10) {
                puzzle[x][y] = ''
                i = i - 2 // go back to previous square
                continue
            }
            puzzle[x][y] = newValue
        }

        if (!isCellValid(x, y, puzzle)) {
            i = i - 1 // this new square value is not valid
            continue
        }
    }
    return puzzle
}
