import { connect } from 'react-redux'
import Cell from './Cell'

const mapStateToProps = (state, ownProps) => {
    var value = ''
    if (state[ownProps.type]) {
        value = state[ownProps.type][ownProps.y][ownProps.x]
    }
    console.log(`Rendering ${ownProps.x}:${ownProps.y} as ${value}`)
    console.log(state)
    return {
        value,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const CellContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cell)

export default CellContainer