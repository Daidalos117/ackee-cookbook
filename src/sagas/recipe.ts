import { put, call } from "redux-saga/effects";
import { RecipeActionTypes } from "../actions/recipe";
import api from "api/";

import {
    FETCH_RECIPE_ERROR,
    FETCH_RECIPE_SUCCESS,
    RATE_RECIPE_ERROR,
    RATE_RECIPE_SUCCESS,
    RATE_LOAD_SUCCESS
} from "../actions/recipe";
import { RECIPE, RATE_RECIPE } from "../api/routes";
import { addRating, getRating } from "general/helpers";

export function* fetchRecipe(action: RecipeActionTypes) {
    if (!("id" in action)) {
        return put({ type: FETCH_RECIPE_ERROR, error: "ID not provided" });
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
        yield put({ type: FETCH_RECIPE_ERROR, error: e.message });
    }
}

export function* rateRecipe(action: RecipeActionTypes) {
    if (!("id" in action)) {
        return put({ type: RATE_RECIPE_ERROR, error: "ID not provided" });
    }

    if (!("score" in action)) {
        return put({ type: RATE_RECIPE_ERROR, error: "Score not provided" });
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
        const { score: serverScore } = data;

        addRating({
            id,
            score: serverScore
        });

        yield put({ type: RATE_RECIPE_SUCCESS, score: serverScore });
    } catch (e) {
        yield put({ type: RATE_RECIPE_ERROR, error: e.message });
    }
}

export function* loadRecipeRate(action: RecipeActionTypes) {
    if (!("id" in action)) {
        return put({ type: RATE_LOAD_SUCCESS, score: null });
    }

    const rating = getRating(action.id);
    yield put({ type: RATE_LOAD_SUCCESS, score: rating?.score });
}
