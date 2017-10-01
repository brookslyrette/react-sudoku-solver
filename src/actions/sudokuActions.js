export const SET_VALUE = 'SET_VALUE'
export const SELECT_CELL = 'SELECT_CELL'
export const SOLVE_PUZZLE = 'SOLVE_PUZZLE'

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

export function selectCell(x, y) {
    return {
        type: SELECT_CELL,
        payload: {
            x,
            y,
        }
    }
}

export function solvePuzzle() {
    return {
        type: SOLVE_PUZZLE
    }   
}