import { RecipesActionTypes } from "actions/recipes";
import { put, call, select } from "redux-saga/effects";
import api from "api/";

import { FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR } from "actions/recipes";
import { RECIPES } from "api/routes";
import { State } from "reducers";

export const RECIPES_PAGE_LENGTH = 10;

export function* fetchRecipes(action: RecipesActionTypes) {
    let page = yield select((state: State) => state.recipes.page);
    const length = ("length" in action && action.length) || RECIPES_PAGE_LENGTH;

    try {
        const response = yield call(
            (url) =>
                api.get(url, {
                    params: {
                        limit: length,
                        offset: page * length,
                    },
                }),
            RECIPES
        );
        const { data } = response;
        const hasMore = data.length === RECIPES_PAGE_LENGTH;
        yield put({ type: FETCH_RECIPES_SUCCESS, data: data, hasMore });
    } catch (e) {
        yield put({ type: FETCH_RECIPES_ERROR, message: e.message });
    }
}
