import { solver, initalState } from '../store'

describe('solver', () => {
    it('returns a default state', () => {
        expect(solver(undefined, {})).toEqual(initalState)
    })

    it('handles SET_VALUE with valid value', () => {
        expect(solver(initalState, {
            type: 'SET_VALUE',
            payload: {
                x: 0, y: 8, value: 2,
            },
        })).toEqual(
            {
                'highlight': [
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
                'input': [
                    [8, 5, 6, '', 1, 4, 7, 3, 2],
                    ['', 9, '', '', '', '', '', '', ''], 
                    [2, 4, '', '', '', '', 1, 6, ''], 
                    ['', 6, 2, '', 5, 9, 3, '', ''], 
                    ['', 3, 1, 8, '', 2, 4, 5, ''], 
                    ['', '', 5, 3, 4, '', 9, 2, ''], 
                    ['', 2, 4, '', '', '', '', 7, 3], 
                    ['', '', '', '', '', '', '', 1, ''], 
                    ['', 1, 8, 6, 3, '', 2, 9, 4]
                ], 
                'output': [
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
        )
    })

    it('handles SET_VALUE with invalid value', () => {
        expect(solver(initalState, {
            type: 'SET_VALUE',
            payload: {
                x: 0, y: 8, value: 1
            },
        })).toEqual(
            {
                'highlight': [
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
                'input': [
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
                'output': [
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''],
                ]
            }
        )
    })

    it('handles SET_VALUE with \'\'', () => {
        expect(solver(initalState, {
            type: 'SET_VALUE',
            payload: {
                x: 0, y: 7, value: ''
            },
        })).toEqual(
            {
                'highlight': [
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
                'input': [
                    [8, 5, 6, '', 1, 4, 7, '', ''],
                    ['', 9, '', '', '', '', '', '', ''], 
                    [2, 4, '', '', '', '', 1, 6, ''], 
                    ['', 6, 2, '', 5, 9, 3, '', ''], 
                    ['', 3, 1, 8, '', 2, 4, 5, ''], 
                    ['', '', 5, 3, 4, '', 9, 2, ''], 
                    ['', 2, 4, '', '', '', '', 7, 3], 
                    ['', '', '', '', '', '', '', 1, ''], 
                    ['', 1, 8, 6, 3, '', 2, 9, 4],
                ], 
                'output': [
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''],
                ]
            }
        )
    })

    it('highlights using SELECT_CELL', () => {
        expect(solver(initalState, {
            type: 'SELECT_CELL',
            payload: {
                x: 7, y: 8
            },
        })).toEqual(
            {
                'highlight': [
                    [false, false, false, false, false, false, false, false, true], 
                    [false, false, false, false, false, false, false, false, true], 
                    [false, false, false, false, false, false, false, false, true], 
                    [false, false, false, false, false, false, false, false, true], 
                    [false, false, false, false, false, false, false, false, true], 
                    [false, false, false, false, false, false, false, false, true], 
                    [false, false, false, false, false, false, true, true, true], 
                    [true, true, true, true, true, true, true, true, true], 
                    [false, false, false, false, false, false, true, true, true],
                ], 
                'input': [
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
                'output': [
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''],
                ]
            }
        )
    })

    it('it handles SOLVE_PUZZLE', () => {
        expect(solver(initalState, {
            type: 'SOLVE_PUZZLE',
        })).toEqual(
            {
                'highlight': [
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
                'input': [
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
                'output': [
                    [8, 5, 6, 2, 1, 4, 7, 3, 9], 
                    [1, 9, 3, 5, 7, 6, 8, 4, 2], 
                    [2, 4, 7, 9, 8, 3, 1, 6, 5], 
                    [4, 6, 2, 7, 5, 9, 3, 8, 1], 
                    [9, 3, 1, 8, 6, 2, 4, 5, 7], 
                    [7, 8, 5, 3, 4, 1, 9, 2, 6], 
                    [6, 2, 4, 1, 9, 8, 5, 7, 3], 
                    [3, 7, 9, 4, 2, 5, 6, 1, 8], 
                    [5, 1, 8, 6, 3, 7, 2, 9, 4],
                ]
            }
        )
    })

    it('handles CLEAR_PUZZLES ', () => {
        expect(solver(initalState, {
            type: 'CLEAR_PUZZLES',
        })).toEqual(
            {
                'highlight': [
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
                'input': [
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
                'output': [
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''], 
                    ['', '', '', '', '', '', '', '', ''],
                ]
            }
        )
    })
})