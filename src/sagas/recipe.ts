import { put, call } from "redux-saga/effects";
import { RecipeActionTypes } from "../actions/recipe";
import api from "api/";

import {
    FETCH_RECIPE_ERROR,
    FETCH_RECIPE_SUCCESS,
    RATE_RECIPE_ERROR,
    RATE_RECIPE_SUCCESS
} from "../actions/recipe";
import { RECIPE, RATE_RECIPE } from "../api/routes";

export function* fetchRecipe(action: RecipeActionTypes) {
    if (!("id" in action)) {
        return put({ type: FETCH_RECIPE_ERROR, message: "ID not provided" });
    }

    const { id } = action;

    try {
        const response = yield call(
            url =>
                api.get(url, {
                    params: {}
                }),
            RECIPE(id)
        );
        const { data } = response;

        yield put({ type: FETCH_RECIPE_SUCCESS, data: data });
    } catch (e) {
        yield put({ type: FETCH_RECIPE_ERROR, message: e.message });
    }
}

export function* rateRecipe(action: RecipeActionTypes) {
    if (!("id" in action)) {
        return put({ type: RATE_RECIPE_ERROR, message: "ID not provided" });
    }

    if (!("score" in action)) {
        return put({ type: RATE_RECIPE_ERROR, message: "Score not provided" });
    }

    const { id, score } = action;

    try {
        const response = yield call(
            url =>
                api.post(
                    url,
                    { score },
                    {
                        params: {}
                    }
                ),
            RATE_RECIPE(id)
        );
        const { data } = response;

        yield put({ type: RATE_RECIPE_SUCCESS, score: data.score });
    } catch (e) {
        yield put({ type: RATE_RECIPE_ERROR, message: e.message });
    }
}
