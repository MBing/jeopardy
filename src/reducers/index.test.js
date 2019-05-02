import {
    categories as categoriesReducer,
    category as categoryReducer,
    rootReducer,
} from './index';
import { PICK_CATEGORY, SET_CATEGORIES } from '../actions';
import { category, categories } from '../data/fixtures';

describe('Reducers', () => {
    it('should return the initial state', () => {
        expect(rootReducer({}, {})).toEqual({ category: {}, categories: [] });
    });

    it('should set categories', () => {
        expect(
            rootReducer(
                {},
                {
                    type: SET_CATEGORIES,
                    categories,
                }
            )
        ).toEqual({
            categories,
            category: {},
        });
    });

    it('should set category', () => {
        expect(
            rootReducer(
                {},
                {
                    type: PICK_CATEGORY,
                    category,
                }
            )
        ).toEqual({
            categories: [],
            category,
        });
    });

    describe('Category', () => {
        it('should return an empty Object when no action type matches', () => {
            expect(
                categoryReducer(undefined, {
                    type: 'Not Matching',
                    category,
                })
            ).toEqual({});
        });
        it('should return a given category when given the action Pick Category', () => {
            expect(
                categoryReducer(undefined, {
                    type: PICK_CATEGORY,
                    category,
                })
            ).toEqual(category);
        });
    });

    describe('Categories', () => {
        it('should return an empty array when no action type matches', () => {
            expect(
                categoriesReducer(undefined, {
                    type: 'Someting',
                })
            ).toEqual([]);
        });

        it('should return the categories when given the action SET Categories', () => {
            expect(
                categoriesReducer(undefined, {
                    type: SET_CATEGORIES,
                    categories,
                })
            ).toEqual(categories);
        });
    });
});
