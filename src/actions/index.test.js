import {
    PICK_CATEGORY,
    pickCategory,
    SET_CATEGORIES,
    setCategories,
} from './index';
import { categories, category } from '../data/fixtures';

describe('Actions', () => {
    it('should set Categories when given categories', () => {
        const expectedActions = {
            type: SET_CATEGORIES,
            categories,
        };
        expect(setCategories(categories)).toEqual(expectedActions);
    });

    it('should pick a category when given a category', () => {
        const expectedActions = {
            type: PICK_CATEGORY,
            category,
        };
        expect(pickCategory(category)).toEqual(expectedActions);
    });
});
