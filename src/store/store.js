import { createStore } from 'redux';
import { SET_VALUE, SELECT_CELL, SOLVE_PUZZLE, CLEAR_PUZZLES } from '../actions/sudokuActions';
import { isValidBoard, getPeers, solve } from './solverUtils'

let initalState = {
    // state of the input board
    input: [
        [8, 5, 6, '', 1, 4, 7, 3, ''],
        ['', 9, '', '', '', '', '', '', ''],
        [2, 4, '', '', '', '', 1, 6, ''],
        ['', 6, 2, '', 5, 9, 3, '', ''],
        ['', 3, 1, 8, '', 2, 4, 5, ''],
        ['', '', 5, 3, 4, '', 9, 2, ''],
        ['', 2, 4, '', '', '', '', 7, 3],
        ['', '', '', '', '', '', '', 1, ''],
        ['', 1, 8, 6, 3, '', 2, 9, 4],
    ],
    // selection state for all suqares. This is used to provide peer highlighting
    selection: [
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
    ],
    // the solution board
    output: [
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
    ],
}

function solver(state = initalState, action) {
    switch (action.type) {
        case SET_VALUE: {
            // using '' to denote blank cells
            var newValue = action.payload.value ? action.payload.value : ''
            // copy state to avoid mutations
            var nextState = {
                input: [
                    [...state.input[0]],
                    [...state.input[1]],
                    [...state.input[2]],
                    [...state.input[3]],
                    [...state.input[4]],
                    [...state.input[5]],
                    [...state.input[6]],
                    [...state.input[7]],
                    [...state.input[8]],
                ],
                output: [...state.output],
                selection: [...state.selection],
            }
            // add users value
            nextState.input[action.payload.x][action.payload.y] = newValue
            // only update board if it is valid
            if (isValidBoard(nextState.input)) {
                return {
                    ...nextState
                }
            } else {
                return {
                    ...state
                }
            }
        }
        case SELECT_CELL: {
            var nextSelectedState = {
                input: [...state.input],
                output: [...state.output],
                selection: [
                    [...initalState.selection[0]],
                    [...initalState.selection[1]],
                    [...initalState.selection[2]],
                    [...initalState.selection[3]],
                    [...initalState.selection[4]],
                    [...initalState.selection[5]],
                    [...initalState.selection[6]],
                    [...initalState.selection[7]],
                    [...initalState.selection[8]],
                ],
            }
            // add selected cell to highlight
            nextSelectedState.selection[action.payload.x][action.payload.y] = true
            // highlight all the peers of this cell
            var peers = getPeers(action.payload.x, action.payload.y)
            for (var peer of peers) {
                nextSelectedState.selection[peer.x][peer.y] = true
            }
            return nextSelectedState
        }
        case SOLVE_PUZZLE: {
            var output = solve(state.input)
            var solvedState = {
                input: [...state.input],
                output,
                selection: [...state.selection]
            }
            return solvedState
        }
        case CLEAR_PUZZLES: {
            var solvedState = {
                input: [
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                ],
                output: [
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                ],
                selection: [...initalState.selection]
            }
            return solvedState
        }
        default:
            return state
    }
}  

export default createStore(solver)
