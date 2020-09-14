import { Action } from 'redux';
import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import {  FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR } from '../actions/recipes';
import { RECIPES } from '../api/routes';

export function* fetchRecipes(action: Action) {
    try {
        const recipes = yield call(url => axios.get(url), RECIPES);
        console.log(recipes);
        yield put({ type: FETCH_RECIPES_SUCCESS, data: recipes.data });
    } catch (e) {
        yield put({ type: FETCH_RECIPES_ERROR, message: e.message });
    }
}
