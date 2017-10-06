import React, { Component } from 'react';
import CellContainer from '../containers/CellContainer';
import './Grid.css';

/**
 * Represents one 3x3 grid of a sudoku board.
 */
export default class Grid extends Component {
    render() {
        return (
            <div className="grid">
                <div className="grid-row">
                    <CellContainer x={this.props.x} y={this.props.y} type={this.props.type}/>
                    <CellContainer x={this.props.x} y={1 + this.props.y} type={this.props.type}/>
                    <CellContainer x={this.props.x} y={2 + this.props.y} type={this.props.type}/>
                </div>
                <div className="grid-row">
                    <CellContainer x={1 + this.props.x} y={this.props.y} type={this.props.type}/>
                    <CellContainer x={1 + this.props.x} y={1 + this.props.y} type={this.props.type}/>
                    <CellContainer x={1 + this.props.x} y={2 + this.props.y} type={this.props.type}/>
                </div>
                <div className="grid-row">
                    <CellContainer x={2 + this.props.x} y={this.props.y} type={this.props.type}/>
                    <CellContainer x={2 + this.props.x} y={1 + this.props.y} type={this.props.type}/>
                    <CellContainer x={2 + this.props.x} y={2 + this.props.y} type={this.props.type}/>
                </div>
            </div>
        )
    }
}