import {
    SUBMIT_RECIPE_REQUESTED,
    SUBMIT_RECIPE_ERROR,
    SUBMIT_RECIPE_SUCCESS,
    SubmitRecipeRequestedAction
} from "actions/form";
import api from "../api";
import { put, call } from "redux-saga/effects";
import { RECIPES } from "../api/routes";

export function* submitRecipe(action: SubmitRecipeRequestedAction) {
    if (!("payload" in action)) {
        return put({
            type: SUBMIT_RECIPE_ERROR,
            message: "Data not provided."
        });
    }

    const { payload } = action;

    try {
        const response = yield call(
            url =>
                api.post(url, payload,{
                    params: {}
                }),
            RECIPES
        );
        const { data } = response;
        if(data.id) {
          yield put({ type: SUBMIT_RECIPE_SUCCESS, data: data });
        } else {
          yield put({ type: SUBMIT_RECIPE_ERROR, error: data.message });
        }
    } catch (e) {
        yield put({ type: SUBMIT_RECIPE_ERROR, error: e.message });
    }
}
