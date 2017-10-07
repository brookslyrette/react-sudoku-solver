import React from 'react';
import Cell from '../Cell';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<Cell />', () => {
    it('renders empty', () => {
        const component = renderer.create(
            <Cell />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('renders highlighted', () => {
        const component = renderer.create(
            <Cell highlighted={true}/>
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('calls action after click', () => {
        let selectCellWasCalled = false
        let component = shallow(
          <Cell selectCell={() => {
              selectCellWasCalled = true
              }}/>
        );
      
        component.find('input').simulate('focus');
        expect(selectCellWasCalled).toBe(true);
    });

    it('calls action after value change with number', () => {
        let setValueWasCalled = false
        let component = shallow(
          <Cell setValue={
              () => {
                setValueWasCalled = true
              }
          }/>
        );
      
        component.find('input').simulate('change', {
            target: {
                value: '9'
            }
        });
        expect(setValueWasCalled).toBe(true);
    });
    it('does not call action after value change with non number', () => {
        let setValueWasCalled = false
        let component = shallow(
          <Cell setValue={
              () => {
                setValueWasCalled = true
              }
          }/>
        );
      
        component.find('input').simulate('change', {
            target: {
                value: 'p'
            }
        });
        expect(setValueWasCalled).toBe(false);
    });
})