import React from 'react';
import { shallow } from 'enzyme';
import { Clue } from './Clue';
import { clue } from '../data/fixtures';

const props = {
    clue,
};

describe('Clue', () => {
    const clue = shallow(<Clue {...props} />);
    it('should render a title from the value given', () => {
        expect(clue.find('h4').text()).toBe(props.clue.value);
    });

    it('should render the question', () => {
        expect(
            clue
                .find('h5')
                .at(0)
                .text()
        ).toBe(props.clue.question);
    });

    it('should render the answer', () => {
        expect(
            clue
                .find('h5')
                .at(1)
                .text()
        ).toBe(props.clue.answer);
    });

    it('should have a default state of isHidden & class set to true', () => {
        expect(clue.state().isHidden).toBe(true);
        expect(
            clue
                .find('h5')
                .at(1)
                .hasClass('isHidden')
        ).toBe(true);
    });

    describe('Different Props', () => {
        beforeEach(() => {
            props.clue.value = undefined;
        });

        it('should render `unknown` if no value was given', () => {
            const clueNoVal = shallow(<Clue {...props} />);
            expect(clueNoVal.find('h4').text()).toBe('unknown');
        });
    });

    describe('On Click of Clue Card', () => {
        it('should have a state of isHidden & class set to false', () => {
            clue.simulate('click');
            expect(clue.state().isHidden).toBe(false);
            expect(
                clue
                    .find('h5')
                    .at(1)
                    .hasClass('isHidden')
            ).toBe(false);
        });
    });
});
