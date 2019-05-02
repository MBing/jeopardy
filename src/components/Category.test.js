import React from 'react';
import { mount, shallow } from 'enzyme';
import { CategoryContainer, LinkedCategory } from './Category';
import { category, clues } from '../data/fixtures';
import { fakeServer } from 'sinon';
import { BASE_URL } from '../api';

const props = {
    category,
};

describe('Category', () => {
    let server;

    beforeEach(() => {
        server = fakeServer.create();

        server.respondWith(
            'GET',
            `${BASE_URL}clues?category=${props.category.id}`,
            [
                200,
                {
                    'Content-Type': 'application/json',
                },
                JSON.stringify(clues),
            ]
        );
    });

    describe('Create a New Category', () => {
        let cat;

        beforeEach(done => {
            cat = mount(<CategoryContainer {...props} />);

            server.respond();

            setTimeout(done);
            cat.setState({ clues });
        });

        afterEach(() => {
            server.restore();
        });

        it('should initialize the clues in state', () => {
            expect(cat.state().clues).toEqual(clues);
        });

        it('should have a title', () => {
            expect(cat.find('h2').text()).toEqual(props.category.title);
        });

        it('should render the amount of clues', () => {
            expect(cat.find('Clue').length).toEqual(clues.length);
        });
    });
});

describe('Linked Category', () => {
    const linkedCat = shallow(<LinkedCategory />);

    it('should have a Link to home', () => {
        expect(linkedCat.find('Link h4').text()).toEqual('Home');
    });

    it('should have a Category Container component', () => {
        expect(linkedCat.find('CategoryContainer').exists()).toBe(true);
    });
});
