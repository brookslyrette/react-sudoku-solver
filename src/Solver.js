import React, { Component } from 'react';
import Sudoku from './components/Sudoku';
import './Solver.css';

class Solver extends Component {
  render() {
    return (
      <div className="solver">
        <header className="solver-header">
          <h1 className="solver-title">Sudoku Solver</h1>
        </header>
        <div className="solver-board-container">
          <div className="solver-board">
            <Sudoku title="Input"/>
          </div>
          <div className="solver-board">
            <Sudoku title="Solution" />
          </div>
        </div>
      </div>
    );
  }
}

export default Solver;
