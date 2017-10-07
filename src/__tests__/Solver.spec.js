import React from 'react';
import ReactDOM from 'react-dom';
import Solver from '../Solver';
import { shallow } from 'enzyme';

describe('<Solver />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Solver />, div)
  })

  it('solve button is clickable', () => {
    let solver = shallow(
      <Solver />
    );
  
    solver.find('#solve').simulate('click')
  })

  it('clear button is clickable', () => {
    let solver = shallow(
      <Solver />
    );
  
    solver.find('#clear').simulate('click')
  })
})
