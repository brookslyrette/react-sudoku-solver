import React, { Component } from 'react';
import Cell from './Cell';
import './Grid.css';

export default class Grid extends Component {
    render() {
        return (
            <div className="grid">
                <div className="grid-row">
                    <Cell x={this.props.x} y={this.props.y}/>
                    <Cell x={this.props.x} y={1 +this.props.y}/>
                    <Cell x={this.props.x} y={2 + this.props.y}/>
                </div>
                <div className="grid-row">
                    <Cell x={1 + this.props.x} y={this.props.y}/>
                    <Cell x={1 + this.props.x} y={1 + this.props.y}/>
                    <Cell x={1 + this.props.x} y={2 + this.props.y}/>
                </div>
                <div className="grid-row">
                    <Cell x={2 + this.props.x} y={this.props.y}/>
                    <Cell x={2 + this.props.x} y={1 + this.props.y}/>
                    <Cell x={2 + this.props.x} y={2 + this.props.y}/>
                </div>
            </div>
        )
    }
}