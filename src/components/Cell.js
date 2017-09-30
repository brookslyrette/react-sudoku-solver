import React, { Component } from 'react';
import './Cell.css';

export default class Cell extends Component {
    render() {
        return (
            <input className="cell" value={this.props.x + "," + this.props.y} />
        )
    }
}