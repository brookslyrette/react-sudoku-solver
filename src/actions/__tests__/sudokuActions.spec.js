import { setValue, selectCell, solvePuzzle, clearPuzzles } from '../sudokuActions';

describe('sudokuActions', () => {
    it('issues expected setValue action', () => {
        expect(setValue(0, 0, 0)).toEqual({
            type: 'SET_VALUE',
            payload: {
                x: 0,
                y: 0,
                value: 0,
            }
        })
        
        expect(setValue(4, 8, 2)).toEqual({
            type: 'SET_VALUE',
            payload: {
                x: 4,
                y: 8,
                value: 2,
            }
        })
    })

    it('issues expected selectCell action', () => {
        expect(selectCell(0, 0)).toEqual({
            type: 'SELECT_CELL',
            payload: {
                x: 0,
                y: 0,
            }
        })
        
        expect(selectCell(4, 8)).toEqual({
            type: 'SELECT_CELL',
            payload: {
                x: 4,
                y: 8,
            }
        })
    })

    it('issues expected solve action', () => {
        expect(solvePuzzle()).toEqual({
            type: 'SOLVE_PUZZLE',
        })
    })

    it('issues expected clear action', () => {
        expect(clearPuzzles()).toEqual({
            type: 'CLEAR_PUZZLES',
        })
    })
})