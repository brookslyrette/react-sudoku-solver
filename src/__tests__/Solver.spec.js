import React from 'react';
import ReactDOM from 'react-dom';
import Solver from '../Solver';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Solver />, div)
})
