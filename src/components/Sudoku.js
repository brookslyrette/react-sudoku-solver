import React, { Component } from 'react';
import Grid from './Grid';
import './Sudoku.css';

export default class Sudoku extends Component {
    render() {
        return (
            <div>
                <div className="sudoku-title">
                    {this.props.title}
                </div>
                <div className="sudoku">
                    <div className="sudoku-row">
                        <div className="sudoku-box">
                            <Grid x={0} y={0}/>
                        </div>
                        <div className="sudoku-box">
                            <Grid x={0} y={3}/>
                        </div>
                        <div className="sudoku-box">
                            <Grid x={0} y={6}/>
                        </div>
                    </div>
                    <div className="sudoku-row">
                        <div className="sudoku-box">
                            <Grid x={3} y={0}/>
                        </div>
                        <div className="sudoku-box">
                            <Grid x={3} y={3}/>
                        </div>
                        <div className="sudoku-box">
                            <Grid x={3} y={6}/>
                        </div>
                    </div>
                    <div className="sudoku-row">
                        <div className="sudoku-box">
                            <Grid x={6} y={0}/>
                        </div>
                        <div className="sudoku-box">
                            <Grid x={6} y={3}/>
                        </div>
                        <div className="sudoku-box">
                            <Grid x={6} y={6}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}