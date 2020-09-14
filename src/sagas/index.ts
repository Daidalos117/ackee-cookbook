import { all, takeEvery } from 'redux-saga/effects';
import { fetchRecipes } from './recipes';
import {  FETCH_RECIPES_REQUESTED } from '../actions/recipes';

function* rootSaga() {
    yield all([takeEvery(FETCH_RECIPES_REQUESTED, fetchRecipes)]);
}

export default rootSaga;
