import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store/store.js';
import Sudoku from './components/Sudoku';
import './Solver.css';

class Solver extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="solver">
          <header className="solver-header">
            <h1 className="solver-title">Sudoku Solver</h1>
          </header>
          <div className="solver-board-container">
            <div className="solver-board">
              <Sudoku title="Input" type="input" />
            </div>
            <div className="solver-board">
              <Sudoku title="Solution" type="output" />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default Solver;
