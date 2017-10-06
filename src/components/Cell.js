import React, { Component } from 'react';
import './Cell.css';

/**
 * Renders a single cell on a sudoku board.
 */
export default class Cell extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleOnFocus = this.handleOnFocus.bind(this)
    }

    handleChange(event) {
        const { value } = event.target
        // only numbers are valid input
        if (!isNaN(value)) {
            this.props.setValue(Number(value));
        }
    }

    handleOnFocus(event) {
        this.props.selectCell();
    }

    render() {
        return (
            <input
                disabled={this.props.disabled}
                onFocus={this.handleOnFocus} 
                onChange={this.handleChange} 
                className={this.props.highlighted ? 'cell-highlighted' : 'cell'} 
                value={this.props.value} />            
        )
    }
}
