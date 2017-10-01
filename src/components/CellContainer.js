import { connect } from 'react-redux'
import { setValue, selectCell } from '../actions/sudokuActions.js'
import Cell from './Cell'

const mapStateToProps = (state, ownProps) => {
    var selected = false
    // only highlight the input sudoku
    if (ownProps.type === 'input' && state['selection'][ownProps.y][ownProps.x]) {
        selected = true
    }
     return {
        value: state[ownProps.type][ownProps.y][ownProps.x],
        selected: selected,
        disabled: ownProps.type !== 'input'
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setValue: (value) => dispatch(setValue(ownProps.y, ownProps.x, value)),
        selectCell: () => dispatch(selectCell(ownProps.y, ownProps.x)),
    }
}

const CellContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cell)

export default CellContainer