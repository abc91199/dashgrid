import React from 'react';
import {shallow} from 'enzyme';
import GridComponent from '../GridComponent.react';

describe('GridComponent', () => {

    it('renders', () => {
        const component = shallow(<GridComponent label="Test label"/>);
        expect(component).to.be.ok;
    });
});
