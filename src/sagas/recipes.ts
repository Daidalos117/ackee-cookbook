import { Action } from 'redux';
import { put, call } from 'redux-saga/effects';
import api from 'api/';

import {  FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR } from '../actions/recipes';
import { RECIPES } from '../api/routes';

export function* fetchRecipes(action: Action) {
    try {
        const recipes = yield call(url => api.get(url), RECIPES);
        yield put({ type: FETCH_RECIPES_SUCCESS, data: recipes.data });
    } catch (e) {
        yield put({ type: FETCH_RECIPES_ERROR, message: e.message });
    }
}
