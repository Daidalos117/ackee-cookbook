import { Action } from 'redux';
import { put, call, select } from 'redux-saga/effects';
import api from 'api/';

import { FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR } from '../actions/recipes';
import { RECIPES } from '../api/routes';
import { State } from '../reducers';

export const RECIPES_PAGE_LENGTH = 5;

export function* fetchRecipes(action: Action) {
    let page = yield select((state: State) => state.recipes.page);

    try {
        const recipes = yield call(
            url =>
                api.get(url, {
                    params: {
                        limit: RECIPES_PAGE_LENGTH,
                        offset: page * RECIPES_PAGE_LENGTH
                    }
                }),
            RECIPES
        );
        const { data } = recipes;
        const hasMore = data.length === RECIPES_PAGE_LENGTH;
        yield put({ type: FETCH_RECIPES_SUCCESS, data: data, hasMore});
    } catch (e) {
        yield put({ type: FETCH_RECIPES_ERROR, message: e.message });
    }
}
