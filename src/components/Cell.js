import React, { Component } from 'react';
import './Cell.css';

export default class Cell extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleOnFocus = this.handleOnFocus.bind(this)
    }

    handleChange(event) {
        this.props.setValue(event.target.value);
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
                className={this.props.selected ? 'cell-selected' : 'cell'} 
                value={this.props.value} />            
        )
    }
}
