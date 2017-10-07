import React from 'react';
import CellContainer from '../CellContainer';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import store from '../../store/store'

describe('<CellContainer />', () => {
    it('it shallow renders type=input', () => {
        let component = shallow(
          <CellContainer store={store} x={0} y={1} type="input"/>
        )

        expect(component.props().disabled).toBe(false)
        expect(component.props().highlighted).toBe(false)
    })

    it('it shallow renders type=output', () => {
        let component = shallow(
          <CellContainer store={store} x={0} y={0} type="output"/>
        )

        expect(component.props().highlighted).toBe(false)
        expect(component.props().value).toBe('')
        expect(component.props().disabled).toBe(true)
    })

    it('it shallow renders highlights', () => {
        store.dispatch({
            type: 'SELECT_CELL',
            payload: {
                x: 0,
                y: 0,
            }
        })
        let component = shallow(
          <CellContainer store={store} x={0} y={0} type="input"/>
        )

        expect(component.props().highlighted).toBe(true)
    })
})