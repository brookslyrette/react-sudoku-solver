export const SET_VALUE = 'SET_VALUE'
export const SELECT_CELL = 'SELECT_CELL'
export const SOLVE_PUZZLE = 'SOLVE_PUZZLE'
export const CLEAR_PUZZLES = 'CLEAR_PUZZLES'

/**
 * Creates action to set cell to a value.
 * @param x x index of value being set. 
 * @param y y index of value being set.
 * @param value value to set the cell to.
 */
export function setValue(x, y, value) {
    return {
        type: SET_VALUE,
        payload: {
            x,
            y,
            value,
        }
    }
}

/**
 * Creates action to denote a cell was selected.
 * @param x x index of value being selected. 
 * @param y y index of value being selected.
 */
export function selectCell(x, y) {
    return {
        type: SELECT_CELL,
        payload: {
            x,
            y,
        }
    }
}

/**
 * Creates action to sovle the input puzzle. 
 */
export function solvePuzzle() {
    return {
        type: SOLVE_PUZZLE
    }   
}

/**
 * Creates action to clear the input and output puzzles.
 */
export function clearPuzzles() {
    return {
        type: CLEAR_PUZZLES
    }   
}
