import { createStore } from 'redux';

let initalState = {
    'input': [
        [8, 5, 6, undefined, 1, 4, 7, 3, undefined],
        [undefined, 9, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [2, 4, undefined, undefined, undefined, undefined, 1, 6, undefined],
        [undefined, 6, 2, undefined, 5, 9, 3, undefined, undefined],
        [undefined, 3, 1, 8, undefined, 2, 4, 5, undefined],
        [undefined, undefined, 5, 3, 4, undefined, 9, 2, undefined],
        [undefined, 2, 4, undefined, undefined, undefined, undefined, 7, 3],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, 1, undefined],
        [undefined, 1, 8, 6, 3, undefined, 2, 9, 4],
    ],
    'output': [
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    ],
}

function solver(state = initalState, action) {
    switch (action.type) {
        default:
            return state
    }
}  

export default createStore(solver)