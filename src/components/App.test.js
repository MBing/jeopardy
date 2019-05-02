import React from 'react';
import { shallow } from 'enzyme';
import { AppContainer } from './App';
import { categories } from '../data/fixtures';

const props = {
    categories,
};

describe('App', () => {
    const app = shallow(<AppContainer {...props} />);
    it('should render the title properly', () => {
        expect(app.find('h2').text()).toBe('Jeopardy!');
    });

    it('should create the same amount of links as there are categories', () => {
        expect(app.find('Link').length).toBe(categories.length);
    });

    it('should title the links correctly', () => {
        app.find('Link h4').forEach((linkTitle, index) => {
            expect(linkTitle.text()).toBe(categories[index].title);
        });
    });
});
