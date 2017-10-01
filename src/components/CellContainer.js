import { connect } from 'react-redux'
import { setValue, selectCell } from '../actions/sudokuActions.js'
import Cell from './Cell'

const mapStateToProps = (state, ownProps) => {
    var highlighted = false
    // only highlight the input sudoku
    if (ownProps.type === 'input' && state['highlight'][ownProps.y][ownProps.x]) {
        highlighted = true
    }
     return {
        value: state[ownProps.type][ownProps.y][ownProps.x],
        highlighted,
        disabled: ownProps.type !== 'input'
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setValue: (value) => dispatch(setValue(ownProps.y, ownProps.x, value)),
        selectCell: () => dispatch(selectCell(ownProps.y, ownProps.x)),
    }
}

/**
 * Maps redux app state to cell.
 */
const CellContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cell)

export default CellContainer